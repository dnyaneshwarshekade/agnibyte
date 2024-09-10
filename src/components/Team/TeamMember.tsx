import React from 'react';
import Image from 'next/image';
import { TeamType } from '@/types/team';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import SVG icons

interface TeamMemberProps {
  member: TeamType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center items-center w-32 h-32 mx-auto mt-4 relative">
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ objectFit: 'cover' }} // Use style prop for object-fit
          className="rounded-full" // Apply rounded corners
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
          {member.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {member.designation}
        </p>
        <div className="flex justify-center space-x-4">
          {member.facebookLink && (
            <a
              href={member.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              <FaFacebookF size={20} />
            </a>
          )}
          {member.twitterLink && (
            <a
              href={member.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200"
            >
              <FaTwitter size={20} />
            </a>
          )}
          {member.instagramLink && (
            <a
              href={member.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 dark:text-pink-300 hover:text-pink-700 dark:hover:text-pink-200"
            >
              <FaInstagram size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
