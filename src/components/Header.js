import React from 'react'

const Header = () => {
    return (
        <header className="header">
        <h1>JAESIMIN</h1>
        <ul className="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
        <select>
            <option>국내</option>
            <option>세계</option>   
        </select>
        </header>
    )
}

export default Header
