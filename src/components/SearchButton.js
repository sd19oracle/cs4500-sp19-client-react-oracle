import React from 'react'

function SearchButton(props) {
    return (
        <button onClick={props.toggleSearch}>
            {props.searchButtonOn ? 'Search' : 'Clear Search'}
        </button>
    );
}

export default SearchButton