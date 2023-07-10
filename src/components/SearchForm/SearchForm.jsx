import { useEffect, useState } from 'react';

const SearchForm = ({ onSubmit, queryString }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(queryString);
  }, [queryString]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ query: query });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;
