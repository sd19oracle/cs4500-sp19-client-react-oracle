import React from "react";

const SearchBar = ({handler, placeholder}) => (
  <input
    placeholder={placeholder}
    className={"form-control"}
    onChange={handler}
  />
);
export default SearchBar;
