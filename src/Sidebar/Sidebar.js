import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'
import NoteContext from '../NoteContext'

export default function Sidebar(props) {
  function renderList(folders) {
      console.log(props.match.params)
      if (!props.match.params.noteId)
      return (
        <ul className="FolderListNav__list">
        
            {folders.map(folder => (
              <li key={folder.id}>
            <NavLink className="FolderListNav__item" to={`/folders/${folder.id}`}>
              {folder.name}
            </NavLink>
          </li>
        ))}
          <div className="FolderListNav__button-wrapper">
            <Link to={'/addFolder'}>
              Add Folder
            </Link>
          </div>
        </ul>
      )
    else {
      return (
        <>
        <div className="FolderListNav__button-wrapper">
        <Link to={'/'}>
        Go back
        </Link>
        </div>
        <div className="FolderName">
        <h2>{folders.name}</h2>
        </div>
        </>
        )
    }
  }

    return (
      <NoteContext.Consumer>
        {({ folders, notes }) => (
        <nav className="App__nav">
          <div className="FolderListNav">
            {renderList(folders)}
          </div>
        </nav>
        )}
      </NoteContext.Consumer>
    )
}