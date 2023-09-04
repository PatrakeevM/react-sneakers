import React from "react";

const Search = () => {
  return (
    <div className="d-flex align-center justify-between mb-40">
      <h1>Все кроссовки</h1>
      <div className="search-wrapper d-flex">
        <img className="p-15" src="/img/search.svg" alt="Поиск" />
        <input className="opacity-5" placeholder="Поиск..." />
      </div>
    </div>
  );
};

export default Search;