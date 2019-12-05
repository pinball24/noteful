import React, { Component } from 'react'
import NoteContext from '../NoteContext'


export default class AddNote extends Component {
    render() {
        return (
            <section className="AddNote">
                <h2>Add Folder</h2>
                <form className="Note-form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="note">note</label>
                        <input 
                            id="note" 
                            name="note"
                            type="text"
                            placeholder="Awesome note"
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
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="folder-select">Folders</label>
                        <select id="folder-select">
                            <NoteContext.Consumer>
                                {(value) => {
                                    <option value={value.folders}>{value.folders}</option>
                                }}
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
