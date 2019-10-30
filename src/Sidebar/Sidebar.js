import React, { Component } from 'react'
import './Sidebar.css'
import MainSidebar from './MainSidebar'


export default class Sidebar extends Component {
    render() {
        return (
            <nav className="App__nav">
                <MainSidebar/>
            </nav>
        )
    }
}