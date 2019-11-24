import React from 'react'

const NoteContext = React.createContext({
    notes: [],
    folder: [],
    deleteNote: () => {},
})

export default NoteContext