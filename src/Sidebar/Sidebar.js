import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'
import NoteContext from '../NoteContext'

export default class Sidebar extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = NoteContext

  renderList = folders => {
    return (
      <div className='FolderListNav'>
        <ul className="FolderListNav__list">
            {folders.map(folder => (
              <li key={folder.id}>
            <NavLink className="FolderListNav__item" to={`/folder/${folder.id}`}>
              {folder.name}
            </NavLink>
          </li>
        ))}
          <div className="FolderListNav__button-wrapper">
            <Link to={'/add-folder'}>
              Add Folder
            </Link>
          </div>
        </ul>
      </div>
    )
  }
  render() {
    function renderList(folders) {
      return (
        <div className='FolderListNav'>
          <ul className="FolderListNav__list">
              {folders.map(folder => (
                <li key={folder.id}>
              <NavLink className="FolderListNav__item" to={`/folder/${folder.id}`}>
                {folder.name}
              </NavLink>
            </li>
          ))}
            <div className="FolderListNav__button-wrapper">
              <Link to={'/add-folder'}>
                Add Folder
              </Link>
            </div>
          </ul>
        </div>
      )
    }
    return (
      <NoteContext.Consumer>
        {({ folders }) => (
        <nav className="App__nav">
          <div className="FolderListNav">
            {renderList(folders)}
          </div>
        </nav>
        )}
      </NoteContext.Consumer>
    )
  }
}
