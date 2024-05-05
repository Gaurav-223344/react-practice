import React, { useState } from "react";
import Search from "./searchListComponents/Search";
import List from "./searchListComponents/List";

function SearchList({list}) {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeHandlerForSearchBar = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredList = list.filter((ele) =>
    ele.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Search
        searchTerm={searchTerm}
        onChangeHandlerForSearchBar={onChangeHandlerForSearchBar}
      />
      <br />
      <List list={filteredList} />
    </>
  );
}

export default SearchList;
