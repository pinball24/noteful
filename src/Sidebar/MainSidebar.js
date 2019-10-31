import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export default function MainSidebar(props) {
    const { folders } = this.props
    return (
        <div className="FolderListNav">
            <ul className="FolderListNav__list">
                {folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink to={'/folder/${folder.id}'}>
                            {folder.name}
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}