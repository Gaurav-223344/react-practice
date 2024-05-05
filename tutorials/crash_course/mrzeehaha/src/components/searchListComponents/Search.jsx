import React, { useState } from "react"

function Search({searchTerm, onChangeHandlerForSearchBar}){

    return (
        <input type="text" id="searchBar" value={searchTerm} onChange={onChangeHandlerForSearchBar}/>
    )
}

export default Search