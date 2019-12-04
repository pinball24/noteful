import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import Main from './Main/Main'
import './App.css';
import Sidebar from './Sidebar/Sidebar'
import NotesPage from './NotePage/NotePage'
import FolderMain from './FolderMain/FolderMain'
import config from './config'
import NoteContext from './NoteContext'
import AddFolder from './AddFolder/AddFolder'

export default class App extends Component {
  state = {
    folders: [],
    notes: [],
    error: null,
  }

  setFolders = folders => {
    this.setState({
      folders: folders
    })
  }

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder],
    })
  }

  setNotes = notes => {
    this.setState({
      notes: notes
    })
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId
    )
    this.setState({
      notes: newNotes
    })
  }

  componentDidMount() {
    fetch(config.FOLDERS_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setFolders)
      .catch(error => this.setState({ error }))
    fetch(config.NOTES_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setNotes)
      .catch(error => this.setState({ error }))
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
    }

    return (
      <div className="App">
        <Header />
        <NoteContext.Provider value={contextValue}>          
          <Route
            exact
            path='/'
            component={Main}
          />
          <Route
            path='/folder/:folderId'
            component={FolderMain}
          />
          <Route
            path='/'
            component={Sidebar}
          />
          <Route
            path='/note/:noteId'
            component={NotesPage}
          />
          <Route
            path='/add-folder'
            component={AddFolder}
          />
        </NoteContext.Provider>
      </div>
    )
  }
}
