import React from 'react'

const Header = () => {
    return (
        <header className="header">
        <h1>COVID-19</h1>
        <ul className="nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Introduction</a></li>
            <li><a href="#">Projects</a></li>
        </ul>
        <select>
            <option>국내</option>
            <option>세계</option>   
        </select>
        </header>
    )
}

export default Header
