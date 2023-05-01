import React from "react";
import SearchBar from './SearchBar';


class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <ul className='navbar-left'>
                    <li><a href="home" className='logoNav'>TrailerZ</a></li>
                    <li><a href="movies">Films</a></li>
                    <li><a href="series">Séries</a></li>
                    <li><img className="avatar" src='../../img/profil.png' alt="profil" /></li>
                    <SearchBar />
                </ul>

            </nav>
        );
    }
}

export default Navbar;