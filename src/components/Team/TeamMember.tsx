// components/Team/TeamMember.tsx
import React from 'react';
import { TeamMember } from '../../types/team';

interface Props {
  member: TeamMember;
}

const TeamMember: React.FC<Props> = ({ member }) => {
  return (
    <div className="team-member">
      <img src={member.imageUrl} alt={member.name} className="team-member-image" />
      <h3 className="team-member-name">{member.name}</h3>
      <p className="team-member-designation">{member.designation}</p>
    </div>
  );
};

export default TeamMember;
