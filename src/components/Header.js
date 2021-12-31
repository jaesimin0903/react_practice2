import React from 'react'

const Header = () => {
    return (
        <header className="header">
        <h1>JAESIMIN</h1>
        
        <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link "href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link " href="#introduction">Introduction</a></li>
                <li className="nav-item"><a className="nav-link " href="#projects">Projects</a></li>
            </ul>
        </div>
        </nav>
        </header>
    )
}

export default Header
