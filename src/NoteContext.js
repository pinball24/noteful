import React from 'react'

const NoteContext = React.createContext({
    notes: [],
    folder: [],
    addFolder: () => {},
    deleteNote: () => {},
})

export default NoteContext