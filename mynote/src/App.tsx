import { useEffect, useState } from 'react';
import CreateNote from './componets/CreateNote';
import Header from './componets/Header';
import { Box } from '@mui/material'
import Notes from './componets/Notes';
import { NoteObject } from './models/note';

function App() {

  const [notes, setNotes] = useState<NoteObject[]>([])

  useEffect(() => {
    if (sessionStorage?.getItem('notes')) {
      setNotes(JSON.parse(sessionStorage?.getItem('notes') as string))
    }
  },[])
  const addNote = (note: NoteObject) => {
    setNotes([note, ...notes])
    sessionStorage.setItem('notes', JSON.stringify([note, ...notes]))
  }
  const deleteNote = (id: number) => {
    const updatedNote: NoteObject[] = notes?.filter((note) => note?.id !== id)
    setNotes(updatedNote)
    sessionStorage.setItem('notes', JSON.stringify(updatedNote))
  }
  return (
    <div className="App">
      <Header />
      <Box sx={{ padding: 2 }}>
        <CreateNote addNote={addNote} />
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>

    </div>
  );
}

export default App;
