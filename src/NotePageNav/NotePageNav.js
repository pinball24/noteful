import React from 'react'

export default function NotePageNav(props) {
    return (
        <div className='NotePageNav'>
            <button
                type='button'
                role='link'
                onClick={() => props.history.goBack()}
                className='NotePageNav__button'
            >
                Go back
            </button>
        </div>
    )
}