import React from 'react';
import './Header.css';

function Header() {
    return(
        <header className="header">
            <h1 className= "titulo">RENOVAR GARDENIA</h1>
            <section>

                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>

                <form action="">
                    <input type="text" name="search" id="" placeholder="Search"/>
                        <button type="submit"><i className="fas fa-search"></i></button>
                </form>

        

            </section>
        </header>

    )
}

export default Header;