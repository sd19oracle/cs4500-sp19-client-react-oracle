import React from "react";

const SearchBar = ({handler, placeholder}) => (
  <input
    placeholder={placeholder}
    className={"form-control ml-1"}
    onChange={handler}
  />
);
export default SearchBar;
