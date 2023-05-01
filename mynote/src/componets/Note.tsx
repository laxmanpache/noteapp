import React from 'react'
import { Box, Card, CardContent, Typography, Button, styled } from '@mui/material'
import { NoteObject } from '../models/note'


const StyledCard = styled(Card)`
    width:400px;
    margin:20px;
`;
const Wrapper = styled(Box)`
   & >button{ margin-top:5px;
    background-color: white;
    border: 1px solid #1111;
   }
`
interface INoteProps {
    note: NoteObject,
    deleteNote: (id: number) => void
}
export const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
    return (
        <Box>
            <StyledCard sx={{ background: note?.color }}>
                <CardContent>
                    <Wrapper>
                        <Typography>{note?.title}</Typography>
                        <Typography>{note?.details}</Typography>
                        <Typography>{note?.date}</Typography>
                        <Button variant='outlined' size={'small'} onClick={()=>{deleteNote(note?.id)}}>Delete</Button>
                    </Wrapper>
                </CardContent>
            </StyledCard>
        </Box>
    )
}
