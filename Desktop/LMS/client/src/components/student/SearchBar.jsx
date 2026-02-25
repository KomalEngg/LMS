import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : '');

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      navigate('/course-list/' + input);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 mt-6">
      <form
        onSubmit={onSearchHandler}
        className="w-full max-w-xl flex items-center bg-white border md:h-14 h-12 border-gray-500/20  rounded"
      >
        {/* Search Icon */}
        {assets?.search_icon ? (
          <img
            src={assets.search_icon}
            alt="search_icon"
            className="w-10 px-3 md:w-auto "
          />
        ) : (
          <span className="text-xl mr-3">🔍</span> // fallback if image is missing
        )}

        {/* Search Input */}
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search for courses"
          className="w-full h-full outline-none text-gray-500/80"
        />

        {/* Search Button */}
        <button
          type="submit"
          className=" bg-blue-600 hover:bg-blue-700 text-white md:px-5 px-5 md:py-3 py-2 mx-1 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
