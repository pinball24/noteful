import { Link } from 'react-router-dom'
import './NotesPage.css'
import React from 'react'


export default function NotesPage(props) {
    const note = props.notes.find(n =>
        n.id === props.match.params.noteId
    )
    return (
        <div className="NotePage">
            <div className="Note">
                <h2 className="Note__title">
                    {note.name}
                </h2>
                <button className="Note__delete" type="button">
                    Delete Note
                </button>
                <div className="Note__modified">
                    Date modified on {note.modified}
                </div>
            </div>
            <div className="content">
                <p>{note.content}</p>
            </div>
        </div>
    )
}
