import './NotesPage.css'
import React, { Component } from 'react'
import NoteContext from '../NoteContext'
import Note from '../Note/Note'


export default class NotesPage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = NoteContext

    deleteNote = noteId => {
        this.props.history.push('/')
    }
    render() {
        const { notes=[] } = this.context
        const note = this.context.notes.find(n =>
            n.id === this.props.match.params.noteId
        )
        return (
            <section className="NotePage">
                <Note 
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    onDeleteNote={this.deleteNote}
                />
                <div className="content">
                    <p>{note.content}</p>
                </div>
            </section>
        )
    }
}
