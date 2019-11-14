import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar(props) {
  function renderList() {
      console.log(props)
      if (!props.match.params.noteId)
      return (
        <ul className="FolderListNav__list">
            {props.folders.map(folder => (
          <li key={folder.id}>
            <NavLink className="FolderListNav__item" to={`/folder/${folder.id}`}>
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
          <h2>{props.folders.name}</h2>
        </div>
        </>
      )
    }
  }

    return (
      <nav className="App__nav">
        <div className="FolderListNav">
          {renderList()}
        </div>
      </nav>
    )
}