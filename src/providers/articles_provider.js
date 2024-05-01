// src/providers/UserProvider.js
import React, { useState } from "react";
import ArticlesContext from "../contexts/articles_contexts";

const ArticlesProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterButtonValue, setFilterButtonValue] = useState("All");

  return (
    <ArticlesContext.Provider
      value={{
        searchValue,
        setSearchValue,
        filterButtonValue,
        setFilterButtonValue,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
