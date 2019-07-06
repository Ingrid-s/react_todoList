import React from 'react';

import './styles/header.css'

function Header() {
    return (
        <div className="container-fluid nav-container">
            <div className="row pt-3 pb-3">
               <div className="col">
                   <header className="text-center header">
                       <h1 className="align-middle">To Do List</h1>
                   </header>
               </div>
            </div>
        </div>
    )
}

export default Header;