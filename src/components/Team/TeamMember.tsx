// components/Team/TeamMember.tsx
import React from 'react';
import { TeamType } from '@/types/team';

interface TeamMemberProps {
  member: TeamType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="team-member px-4 py-6">
      <img src={member.image} alt={member.name} className="w-full h-auto rounded-full" />
      <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.designation}</p>
      <div className="social-links mt-2">
        <a href={member.facebookLink} className="mr-2">Facebook</a>
        <a href={member.twitterLink} className="mr-2">Twitter</a>
        <a href={member.instagramLink}>Instagram</a>
      </div>
    </div>
  );
};

export default TeamMember;
