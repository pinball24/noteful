import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
        return (
            <header className="App-header">
                <h1>
                    <Link to='/'>Noteful</Link>
                </h1>
        </header>
    )
}