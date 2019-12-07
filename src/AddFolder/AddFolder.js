import React, { Component } from 'react'
import config from '../config'
import NoteContext from '../NoteContext'
import './AddFolder.css'
import PropTypes from 'prop-types'

export default class AddFolder extends Component {
    static contextType = NoteContext;

    state = {
        error: null,
    };

    handleClickCancel = () => {
        this.props.history.push('/')
    };

    handleSubmit = e => {
        e.preventDefault()
        const { folder } = e.target
        const folders = {
            name: folder.value
        }
        fetch(config.FOLDERS_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(folders),
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
                this.context.addFolder(data)
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
                this.setState({ error })
            })
    }

    render() {
        return (
            <section className="AddFolder">
                <h2>Add Folder</h2>
                <form className="Folder-form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="folder">Name</label>
                        <input 
                            id="folder" 
                            name="folder"
                            type="text"
                            placeholder="Awesome folder"
                            required>
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

AddFolder.propTypes = {
    name: PropTypes.string.isRequired
}