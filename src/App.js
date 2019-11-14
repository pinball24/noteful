import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import Main from './Main/Main'
import dummy from './dummy-store'
import './App.css';
import Sidebar from './Sidebar/Sidebar'
import NotesPage from './NotesPage/NotesPage'
import FolderMain from './FolderMain/FolderMain'

export default class App extends Component {
  state = {
    dummy
  }

  render() {

    const { dummy } = this.state
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path='/'
          render={routeProps => (
            <Main
              notes={dummy.notes}
              {...routeProps}
            />
          )}
        />
        <Route
          path='/folder/:folderId'
          render={props => (
            <FolderMain
              {...props}
              folderContent={dummy}
            />
          )}
        />
        <Route
          path='/'
          render={props => (
            <Sidebar
              {...props}
              folders={dummy.folders}
            />
          )}
        />
        <Route
          path='/notes/:noteId'
          render={routeProps => (
            <NotesPage 
              notes={dummy.notes}
              {...routeProps} />
          )}
        />
      </div>
    )
  }
}
