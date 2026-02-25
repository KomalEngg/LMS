import React from 'react';
import SearchBar from './SearchBar'; // path depends on your structure

const Hero = () => {
  return (
    <div className="text-center py-10 bg-gradient-to-b from-cyan-100 to-white w-full px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Empower your future with the courses designed to{' '}
        <span className="text-blue-600 font-bold">fit your choice.</span>
      </h1>
      <p className="text-gray-600 text-base md:text-lg mt-4 max-w-2xl mx-auto">
        We bring together world-class instructions, interactive content, and a supportive community to help you achieve your personal and professional goals.
      </p>

      {/* ✅ Search Bar */}
      <SearchBar />
    </div>
  );
};

export default Hero;
