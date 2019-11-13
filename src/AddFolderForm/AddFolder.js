import React from 'react'
import './AddFolder.css'

export default function AddFolder(props) {
    return (
        <section className="AddFolder">
            <h2>Add Folder</h2>
            <form className="Folder-form">
                <div className="field">
                    <label htmlFor="folder-name">Name</label>
                    <input id="folder-name" type="text"></input>
                </div>
            </form>
        </section>
    )
}