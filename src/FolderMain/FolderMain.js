import React from 'react'
import { Link } from 'react-router-dom'
import './FolderMain.css'

export default function FolderMain(props) {
    const notes = props.folderContent.notes.filter(note =>
        note.folderId === props.match.params.folderId
    )
    console.log(notes)

    return (
        <section className="Main__list">
            <ul>
                {notes.map(note => 
                <li key={note.id}>
                    <div className="Note">
                        <h2 className="Note__title">
                            <Link to={`/notes/${note.id}`}>
                                {note.name}
                            </Link>
                        </h2>
                        <button className="Note__delete" type="button">
                            Delete Note
                        </button>
                        <div className="Note__modified">
                            Date modified on {note.modified}
                        </div>
                    </div>
                </li>
                )}
            </ul>
            <div className="NoteMain__add-button">
                <button className="Note__add">
                    Add note
                </button>
            </div>
        </section>
    )
}