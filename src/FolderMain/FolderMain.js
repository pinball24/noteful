import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './FolderMain.css'
import Note from '../Note/Note'
import NoteContext from '../NoteContext'

export default class FolderMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NoteContext

    deleteNote = noteId => {
        console.log(noteId)
        this.props.history.push('/')
    }

    render() {
        const folderNotes = this.context.notes.filter(note => 
            note.folderId === this.props.match.params.folderId)
        return (
            <section className="Main__list">
                <ul>
                    {folderNotes.map(note => 
                    <li key={note.id}>
                        <Note 
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />
                    </li>
                    )}
                </ul>
                <div className="NoteMain__add-button">
                    <Link to={'/add-note'}>
                        <button className="Note__add">
                            Add note
                        </button>
                    </Link>
                </div>
            </section>
        )
    }
}