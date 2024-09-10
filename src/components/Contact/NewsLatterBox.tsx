"use client";

import { useTheme } from "next-themes";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import icons

const ContactUsBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Contact Us
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        You have a business idea? Call us or send us a message!
      </p>
      <div>
        <div className="mb-5 flex items-center">
          <FaEnvelope size={24} className="mr-3 text-body-color dark:text-body-color-dark" />
          <a href="mailto:sales@agni-byte.com" className="text-base text-body-color dark:text-body-color-dark hover:underline">
            sales@agni-byte.com
          </a>
        </div>
        <div className="mb-5 flex items-center">
          <FaPhone size={24} className="mr-3 text-body-color dark:text-body-color-dark" />
          <a href="tel:+917039997894" className="text-base text-body-color dark:text-body-color-dark">
            (+91) 7039997894
          </a>
        </div>
      </div>

      <h3 className="mt-10 mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Visit Us
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Let&rsquo;s discuss your idea. Visit us at:
      </p>
      <div>
        <div className="mb-5 flex items-center">
          <FaMapMarkerAlt size={24} className="mr-3 text-body-color dark:text-body-color-dark" />
          <span className="text-base text-body-color dark:text-body-color-dark">
            Maharashtra Nagar, Mankhurd, Mumbai 400088
          </span>
        </div>
        <div className="mb-5 flex items-center">
          <FaClock size={24} className="mr-3 text-body-color dark:text-body-color-dark" />
          <span className="text-base text-body-color dark:text-body-color-dark">
            Mon-Sat: 9:00-18:00
          </span>
        </div>
      </div>

      <h3 className="mt-10 mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Follow Us
      </h3>
      <p className="mb-11 text-base leading-relaxed text-body-color dark:text-body-color-dark">
        We&rsquo;re available on social media. Connect with us!
      </p>
      <div className="flex space-x-4">
        <a href="https://facebook.com/AgniByte" target="_blank" rel="noreferrer" className="transition-transform transform hover:scale-110">
          <FaFacebookF size={24} className="text-blue-600 dark:text-blue-400" />
        </a>
        <a href="https://x.com/AgniByte" target="_blank" rel="noreferrer" className="transition-transform transform hover:scale-110">
          <FaTwitter size={24} className="text-blue-400 dark:text-blue-300" />
        </a>
        <a href="https://linkedin.com/AgniByte" target="_blank" rel="noreferrer" className="transition-transform transform hover:scale-110">
          <FaLinkedinIn size={24} className="text-blue-600 dark:text-blue-400" />
        </a>
        <a href="https://instagram.com/AgniByte" target="_blank" rel="noreferrer" className="transition-transform transform hover:scale-110">
          <FaInstagram size={24} className="text-pink-500 dark:text-pink-300" />
        </a>
      </div>
    </div>
  );
};

export default ContactUsBox;
