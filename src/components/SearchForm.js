import React, { useState } from 'react';

const SearchForm = ({runApi}) => {

const [location, setLocation] = useState("");

const onSubmit = (e) => {
  
    e.preventDefault();
    if(!location || location === "") return;
    runApi(location)
    setLocation('')
};

  return (
    <form className="search-form" onSubmit={onSubmit}>
        <input 
        className="location-input" 
        type="text" 
        placeholder="Enter your location" 
        value={location} 
        name="text"
        onChange={(e) => {setLocation(e.target.value)}}
        />
        <button className="search-button" onClick={onSubmit}>Search</button>
    </form>
  )
}

export default SearchForm;