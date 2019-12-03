import React, { Component } from 'react'
import './AddFolder.css'

export default class AddFolder extends Component {

    state = {
        error: null,
    };

    handleClickCancel = () => {
        this.props.history.push('/')
    };

    handleSubmit = e => {
        e.preventDefault()
        const { name } = e.target
        const folder = {
            name: folder-name.value
        }
        console.log(folder)
    }

    render() {
        return (
            <section className="AddFolder">
                <h2>Add Folder</h2>
                <form 
                    className="Folder-form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="field">
                        <label htmlFor="folder-name">Name</label>
                        <input 
                            id="folder-name" 
                            name="folder-name"
                            type="text">
                        </input>
                    </div>
                    <div className='AddFolder__buttons'>
                        <button type='button' onClick={this.handleClickCancel}>
                            Cancel
                        </button>
                        <button type='submit'>
                            Add Folder
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}