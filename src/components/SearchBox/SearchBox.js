import React from 'react'
import './SearchBox.css'
import WithClass from "../../hoc/withClass";

const SearchBox = ({change}) => {
    return (

        <WithClass classes="search-bar">
            <input type="search" name="search" required onChange={change} placeholder="     Search Posts by User's name"/>
                <button className="search-btn">
                    <span>Search</span>
                </button>
        </WithClass>
    )
    };

export default SearchBox