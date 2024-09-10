"use client";

import React from 'react';
import Image from 'next/image';
import { TeamType } from '@/types/team';
import { FaFacebookF, FaInstagram, FaGithub, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  member: TeamType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <motion.div
      className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center items-center w-32 h-32 mx-auto mt-4 relative">
        <motion.div
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative w-32 h-32"
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-full"
          />
        </motion.div>
      </div>
      <div className="p-6 text-center">
        <motion.h3
          className="text-lg font-semibold mb-1 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {member.name}
        </motion.h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {member.designation}
        </p>
        <div className="flex justify-center space-x-4">
          {member.facebookLink && (
            <motion.a
              href={member.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <FaFacebookF size={20} />
            </motion.a>
          )}
          {member.websiteLink && (
            <motion.a
              href={member.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <FaLink size={20} />
            </motion.a>
          )}
          {member.githubLink && (
            <motion.a
              href={member.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <FaGithub size={20} />
            </motion.a>
          )}
          {member.instagramLink && (
            <motion.a
              href={member.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 dark:text-pink-300 hover:text-pink-700 dark:hover:text-pink-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <FaInstagram size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
