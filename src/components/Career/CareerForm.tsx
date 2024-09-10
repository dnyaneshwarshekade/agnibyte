//Auther - Dnyaneshwar Shekade www.dnyaneshwarshekade.github.io

'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const CareerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (resume) {
        // Upload the file and get the URL (pseudo-code)
        const uploadResult = await uploadFile(resume);
        setResumeUrl(uploadResult.url);
      }

      // Send the form data using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_CAREER!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CAREER!,
        {
          name,
          email,
          resume_url: resumeUrl, // Include file URL in email content
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID_CAREER!
      );
      
      alert('Your application has been sent successfully!');
      setName('');
      setEmail('');
      setResume(null);
      setResumeUrl(null);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send your application. If failed, use Agnibyte chatbot to send a file.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Apply Now</h2>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">Resume (PDF)</label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => e.target.files && setResume(e.target.files[0])}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>
      {error && <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>}
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded hover:bg-yellow-600 dark:hover:bg-yellow-500 shadow-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

// Example upload function
const uploadFile = async (file: File) => {
  // Implement file upload logic here (e.g., to AWS S3)
  // Return the file URL after upload
  return { url: 'https://example.com/path/to/file.pdf' };
};

export default CareerForm;
