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
    const { dummy } = this.state
    console.log(dummy)
    return (
      <div className="App">
        <Header />
        <Sidebar>
          <Route
            exact
            path='/folder/:folderId'
            render={routeProps => (
              <MainSidebar
                folders={dummy.folders}
                {...routeProps}
              />
            )}
          />
        </Sidebar>
        <Main>
        </Main>
      </div>
    )
  }
}
