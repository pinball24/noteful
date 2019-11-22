import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import NoteContext from '../NoteContext'


export default class Main extends Component {
    render() {
        return (
            <NoteContext.Consumer>
                {({ folders, notes }) => (
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
                )}
            </NoteContext.Consumer>
        )
    }
}
