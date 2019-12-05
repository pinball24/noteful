import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './FolderMain.css'
import NoteContext from '../NoteContext'

export default class FolderMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NoteContext

    render() {
        const { folders=[], notes=[] } = this.context
        const folderNotes = this.context.notes.filter(note => 
            note.folderId === this.props.match.params.folderId)
        return (
            <section className="Main__list">
                <ul>
                    {folderNotes.map(note => 
                    <li key={note.id}>
                        <div className="Note">
                            <h2 className="Note__title">
                                <Link to={`/note/${note.id}`}>
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