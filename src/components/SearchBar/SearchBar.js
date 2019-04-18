import React from 'react'

const SearchBar = ({history}) =>
    <div className="input-group input-group-lg">
        <input
            placeholder="Search for providers"
            type="text"
            className="form-control"/>
        <input
            placeholder="Zip code"
            type="text"
            className="form-control"/>
        <div className="input-group-append">
            <button
                onClick={() => {
                    history.push('/providers')
                }}
                className="btn btn-primary"
                type="button">
                Search
            </button>
        </div>
    </div>

export default SearchBar