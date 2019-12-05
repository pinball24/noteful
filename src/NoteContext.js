import React from 'react'

const NoteContext = React.createContext({
    notes: [],
    folders: [],
    addFolder: () => {},
    deleteNote: () => {},
})

export default NoteContext