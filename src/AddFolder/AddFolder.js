import React, { Component } from 'react'
import config from '../config'
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
            name: folder.value
        }
        this.setState({ error: null })
        fetch(config.FOLDERS_ENDPOINT, {
            method: 'POST',
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
                folder.value = ''
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
                <form 
                    className="Folder-form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="field">
                        <label htmlFor="folder">Name</label>
                        <input 
                            id="folder" 
                            name="folder"
                            type="text"
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