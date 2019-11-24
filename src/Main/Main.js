import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import NoteContext from '../NoteContext'
import Note from '../Note/Note'


export default class Main extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NoteContext
    render() {
        const { folderId } = this.props.match.params
        const { notes } = this.context
        return (
            <section className="Main__list">
                <ul>
                    {notes.map(note =>
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
                    <button className="Note__add">
                        Add note
                    </button>
                </div>
            </section>
        )}
}
