import React from 'react';
import Image from 'next/image'; // Import Image from 'next/image'
import { TeamType } from '@/types/team';

interface TeamMemberProps {
  member: TeamType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="team-member px-4 py-6">
      <div className="image-container relative w-32 h-32">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill" // Use layout="fill" with a container
          objectFit="cover" // Apply object-fit through CSS
          className="rounded-lg" // Apply rounded corners through class
        />
      </div>
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
