import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import Main from './Main/Main'
import dummy from './dummy-store'
import './App.css';
import MainSidebar from './Sidebar/MainSidebar'
import Sidebar from './Sidebar/Sidebar'

export default class App extends Component {
  state = {
    dummy
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <Sidebar
          folders={this.state.dummy.folders}
        />
        <Main>
          <Route 
            exact 
            path='/' />
          {/*<Route path='/folder' component={NoteMain} />*/}
        </Main>
      </div>
    )
  }
}
