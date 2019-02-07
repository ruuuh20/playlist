import React from 'react';

const ArtistSearch = (props) => (
  <div>
  <form className="artist-search" onSubmit={props.handleSearchSubmit}>
    <input
      type="text"
      placeholder="Artist Name..."
    />
    <button type="submit">Search</button>
  </form>
  </div>
);

export default ArtistSearch
