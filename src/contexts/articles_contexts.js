// src/contexts/ArticlesContext.js
import React from "react";

const ArticlesContext = React.createContext({
  searchValue: "",
  setSearchValue: () => {},
  filterButtonValue: "",
  setFilterButtonValue: () => {},
});

export default ArticlesContext;
