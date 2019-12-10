import React, { Component } from 'react'
import config from '../config'
import NoteContext from '../NoteContext'


export default class AddNote extends Component {
    static contextType = NoteContext

    state = {
        name: '',
        content: '',
        modified: new Date(),
        folderId: null,
    }

    handleChangeSelection(value) { 
        this.setState({
            folderId: value
        })
    }

    handleNameChange(value) {
        this.setState({
            name: value
        })
    }

    handleContentChange(value) {
        this.setState({
            content: value
        })
    }

    

    handleSubmit = e => {
        e.preventDefault()
        const note = this.state
        fetch(config.NOTES_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(data => {
                this.context.addNote(data)
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        return (
            <section className="AddNote">
                <h2>Add Note</h2>
                <form className="Note-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="note">note</label>
                        <input 
                            id="note" 
                            name="note"
                            type="text"
                            placeholder="Awesome note"
                            onChange={e => this.handleNameChange(e.target.value)}
                            required>
                        </input>
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea
                            type='text'
                            name='content'
                            id='content'
                            placeholer='Voluptatem laborum voluptatem eveniet deleniti voluptas id.'
                            onChange={e => this.handleContentChange(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="folder-select">Folders</label>
                        <select 
                            id="folder-select"
                            onChange={e => this.handleChangeSelection(e.target.value)}
                            required
                        >
                            <option value=''>Choose a folder</option>
                            <NoteContext.Consumer>
                                {({folders}) => (
                                    folders.map(folder => (
                                        <option 
                                            value={folder.id}
                                            name="folder"
                                        >
                                            {folder.name}
                                        </option>
                                    ))
                                )}
                            </NoteContext.Consumer>
                        </select>    
                    </div>
                    <div className="AddNote__buttons">
                        <button type="submit">
                            Add Note
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}
