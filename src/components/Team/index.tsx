// components/Team/index.tsx
import React from 'react';
import TeamMember from './TeamMember';
import { teamData } from './teamData';

const Team: React.FC = () => {
  return (
    <section className="team">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-members">
        {teamData.map(member => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
