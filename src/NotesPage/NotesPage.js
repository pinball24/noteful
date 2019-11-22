import './NotesPage.css'
import React, { Component } from 'react'
import NoteContext from '../NoteContext'


export default class NotesPage extends Component {
//    const note = props.notes.find(n =>
//        n.id === props.match.params.noteId
//    )
    render() {
        console.log('hey')
        return (
            <NoteContext.Consumer>
                {({  notes }) => (
                    <div className="NotePage">
                    <div className="Note">
                        <h2 className="Note__title">
                            {notes.name}
                        </h2>
                        <button 
                            className="Note__delete" 
                            type="button"
                            >
                                Delete Note
                        </button>
                        <div className="Note__modified">
                            Date modified on {notes.modified}
                        </div>
                    </div>
                    <div className="content">
                        <p>{notes.content}</p>
                    </div>
                    </div>
                )}
            </NoteContext.Consumer>
        )
    }
}
