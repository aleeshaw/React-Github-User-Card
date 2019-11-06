import React from 'react';

const SearchForm = props => {

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type='text' placeholder="Search for a user"/>
    <button type="submit">Search!</button>
    </form>
  )
}

export default SearchForm;