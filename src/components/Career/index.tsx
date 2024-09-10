// src/components/CareerForm.tsx
import React from 'react';

const CareerForm = () => {
  return (
    <form className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Resume</label>
        <input
          type="file"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default CareerForm;
