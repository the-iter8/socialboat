import "./Navbar.css";
import React, { useEffect, useState } from "react";
import { getUniqueTags } from "../../utils/helpers";

export default function Navbar({ searchTerm, setSearchTerm, results, setSelectedTags, selectedTags }) {
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    setTags([]);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    if (results.data.length && !results.isError && !results.isLoading) {
      const utags = getUniqueTags(results.data);
      setTags(utags);
    }
  }, [results]);

  return (
    <div className='navbar'>
      <header className='header'>
        <div className='logo'>
          <img src='/assets/logo.png' alt='' />
        </div>

        <div className='search-container'>
          <input
            type='text'
            placeholder='Search videos...'
            value={searchTerm}
            onChange={handleInputChange}
            className='search-input'
          />

          <div className='tag-container'>
            {tags.length ? (
              tags.map((tag, index) => (
                <label key={index} className='tag-label'>
                  <input
                    type='checkbox'
                    value={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagClick(tag)}
                    className='tag-checkbox'
                  />
                  {tag}
                </label>
              ))
            ) : (
              <p>No tags</p>
            )}
          </div>
        </div>

        <div className='profile-image'>
          <img src='https://picsum.photos/48/48' alt='' />
        </div>
      </header>
    </div>
  );
}
