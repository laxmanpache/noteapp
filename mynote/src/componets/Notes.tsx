import React from 'react'
import { Box, Typography } from '@mui/material'
import { NoteObject } from '../models/note'
import { Note } from './Note'

interface notesProps {
    notes: NoteObject[],
    deleteNote: (id: number) => void
}
const Notes: React.FC<notesProps> = ({ notes, deleteNote }) => {
    return (
        <Box>
            <Typography variant='h5'>Notes</Typography>
            <Box>
                {notes?.map((note, index) => {
                    return <Box key={index}><Note note={note} deleteNote={deleteNote} /></Box>
                })}
            </Box>
        </Box>
    )
}

export default Notes