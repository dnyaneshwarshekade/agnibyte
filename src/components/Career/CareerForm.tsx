'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare form data to send
    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      resume: formData.resume,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formDataToSend,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      setSubmissionStatus('Success! Your application has been sent.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmissionStatus('Error! Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="career-form" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-8/12 lg:w-7/12">
            <div
              className="mb-12 rounded-sm bg-white px-6 py-8 shadow-lg dark:bg-gray-800 sm:px-8 sm:py-10 lg:mb-8 lg:px-8 xl:px-10 xl:py-12"
              data-wow-delay=".15s"
            >
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Apply for a Position
              </h2>
              <p className="mb-6 text-base font-medium text-gray-600 dark:text-gray-400">
                Share your details and let us know why you'd be a great fit for our team.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4 mb-6 md:w-1/2 md:mb-0">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-base text-gray-900 outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:border-primary"
                      required
                    />
                  </div>
                  <div className="w-full px-4 mb-6 md:w-1/2 md:mb-0">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-base text-gray-900 outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:border-primary"
                      required
                    />
                  </div>
                  <div className="w-full px-4 mb-6 md:w-1/2 md:mb-0">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-base text-gray-900 outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full px-4 mb-6 md:w-1/2 md:mb-0">
                    <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Position Applied For
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Enter the position"
                      className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-base text-gray-900 outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full px-4 mb-6">
                    <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Resume (URL or File)
                    </label>
                    <input
                      type="text"
                      name="resume"
                      value={formData.resume}
                      onChange={handleChange}
                      placeholder="Link to your resume or upload"
                      className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-base text-gray-900 outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full px-4 mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message*
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Why do you think you’re a good fit?"
                      className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-base text-gray-900 outline-none focus:border-primary dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:border-primary"
                      required
                    ></textarea>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary dark:bg-primary-dark dark:hover:bg-primary-light dark:focus:ring-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
              {submissionStatus && (
                <div className="mt-6 text-center text-base font-medium text-gray-700 dark:text-gray-400">
                  {submissionStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;
