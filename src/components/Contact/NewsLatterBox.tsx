"use client";

import { useTheme } from "next-themes";
import Image from 'next/image';

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
          <Image src="/images/contactus/mail.svg" alt="Email Icon" width={24} height={24} className="mr-3" />
          <a href="mailto:sales@agni-byte.com" className="text-base text-body-color dark:text-body-color-dark hover:underline">
            sales@agni-byte.com
          </a>
        </div>
        <div className="mb-5 flex items-center">
          <Image src="/images/contactus/flagindia.svg" alt="Phone Icon" width={24} height={24} className="mr-3" />
          <a href="tel:+917039997894" className="text-base text-body-color dark:text-body-color-dark">
            (+91) 7039997894
          </a>
        </div>
      </div>

      <h3 className="mt-10 mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Visit Us
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Let’s discuss your idea. Visit us at:
      </p>
      <div>
        <div className="mb-5 flex items-center">
          <Image src="/images/contactus/flagindia.svg" alt="Location Icon" width={24} height={24} className="mr-3" />
          <span className="text-base text-body-color dark:text-body-color-dark">
            Maharashtra Nagar, Mankhurd, Mumbai 400088
          </span>
        </div>
        <div className="mb-5 flex items-center">
          <Image src="/images/contactus/clock.svg" alt="Clock Icon" width={24} height={24} className="mr-3" />
          <span className="text-base text-body-color dark:text-body-color-dark">
            Mon-Sat: 9:00-18:00
          </span>
        </div>
      </div>

      <h3 className="mt-10 mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Follow Us
      </h3>
      <p className="mb-11 text-base leading-relaxed text-body-color dark:text-body-color-dark">
        We're available on social media. Connect with us!
      </p>
      <div className="flex space-x-4">
        <a href="#" target="_blank" rel="noreferrer" className="transition-transform transform hover:scale-110">
          <Image src="/images/contactus/facebook.svg" alt="Facebook" width={24} height={24} />
        </a>
        <a href="#" target="_blank" rel="noreferrer" className="transition-transform transform hover:scale-110">
          <Image src="/images/contactus/twitter.svg" alt="Twitter" width={24} height={24} />
        </a>
        <a href="#" target="_blank" rel="noreferrer" className="transition-transform transform hover:scale-110">
          <Image src="/images/contactus/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </a>
        <a href="#" target="_blank" rel="noreferrer" className="transition-transform transform hover:scale-110">
          <Image src="/images/contactus/instagram.svg" alt="Instagram" width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactUsBox;
