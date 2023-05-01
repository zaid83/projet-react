import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-box">
                <button className="btn-search"><i className="fas fa-search"></i></button>
                <input type="text" className="input-search" placeholder="Recherche..." />
            </div>
        );
    }
}


export default SearchBar;