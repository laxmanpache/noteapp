import React, { useState } from 'react'
import { InputBase, Box, Button, styled, Typography } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { TITLE_LIMIT, DETAILS_LIMIT } from '../constant/Contant'
import { NoteObject } from '../models/note'
const Container = styled(Box)`
   & > *{
    margin:20px 20px 20px 0;
   }
    & > div > input[type='text']{
        border-bottom: 1px solid #111111;
        opacity: 0.4;
        width:300px;
        padding-right:25px;
    }
    & > div > input[type='color']{
        width:40px;
        height:30px;
        position: relative;
        bottom: -10px;
    }
`
const Error = styled(Typography)`
    color: red;
    padding: 10px;
`
const defaultObject = {
    id: 0,
    title: '',
    details: '',
    color: '',
    date: new Date().toLocaleDateString()
}
interface createNoteProps {
    addNote: (note: NoteObject) => void
}

const CreateNote: React.FC<createNoteProps> = ({ addNote }) => {
    const [note, setNote] = useState<NoteObject>(defaultObject)
    const [error, setError] = useState<string>('')
    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (error) {
            setError('')
        }
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const createNote = () => {
        if (!note?.title || !note?.details) {
            setError('All Fields are Mandatory')
            return;
        }

        addNote({ ...note, id: uuid() })
        setNote(defaultObject)
    }
    return (
        <Container>
            <InputBase placeholder='title' title="title"inputProps={{
                maxLength:TITLE_LIMIT
            }} value={note?.title} onChange={(e) => onValueChange(e)} name="title" />
            <Box component="span">{note?.title?.length}/{TITLE_LIMIT}</Box>
            <InputBase placeholder='Details' inputProps={{
                maxLength:DETAILS_LIMIT
            }} title="details" value={note?.details} onChange={(e) => onValueChange(e)} name="details" />
            <Box component="span">{note?.details?.length}/{DETAILS_LIMIT}</Box>
            <InputBase defaultValue="#f5f5f5"  placeholder='Choose color' value={note?.color} type="color" onChange={(e) => onValueChange(e)} name="color" />
            <Button variant='outlined' onClick={() => { createNote() }}>Create</Button>
            {error && <Error color="initial">{error}</Error>}
        </Container>
    )
}

export default CreateNote