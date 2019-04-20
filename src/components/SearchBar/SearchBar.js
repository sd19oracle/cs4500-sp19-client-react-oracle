import React from 'react'

const SearchBar = ({updateName, updateZip, name, zip, pressSearch, numberCheck, characterCheck}) =>
    <div className="input-group input-group-lg">
        <input
            placeholder="Search for providers"
            type="text"
            className="form-control"
            onChange={e => updateName(e)}
            value={name}/>
        <input
            placeholder="Zip code"
            type="text"
            className="form-control"
            onChange={e => updateZip(e)}
            onKeyPress={(e) => numberCheck(e)}
            value={zip}/>
        <div className="input-group-append">
            <button
                onClick={pressSearch}
                className="btn btn-primary"
                type="button">
                Search
            </button>
        </div>
    </div>

export default SearchBar