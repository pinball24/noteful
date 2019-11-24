import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../NoteContext'
import './Note.css'
import config from '../config'

export default class Note extends Component {
    static defaultProps = {
        onDeleteNote: () => {}
    }
    static contextType = NoteContext

    handleDeleteClick = e => {
        e.preventDefault()
        const noteId = this.props.id

        fetch(`${config.NOTES_ENDPOINT}/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(() => {
                this.props.onDeleteNote(noteId)
                this.context.deleteNote(noteId)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        console.log(this.props)
        const { name, id, modified } = this.props
        return (
            <div className="Note">
            <h2 className="Note__title">
                <Link to={`/note/${id}`}>
                    {name}
                </Link>
            </h2>
            <button 
                className="Note__delete" 
                type="button"
                onClick={this.handleDeleteClick}
            >
                    Delete Note
            </button>
                <div className="Note__modified">
                    Date modified on {modified}
                </div>
            </div>
        )
    }
}
