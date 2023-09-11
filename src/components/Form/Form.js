export default function Form({ getSearch, search, updateSearch }) {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-bar"
        value={search}
        onChange={updateSearch}
      ></input>
      <button className="search-button" type="submit" onClick={getSearch}>
        Search
      </button>
    </form>
  );
}
