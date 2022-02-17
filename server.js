const { urlencoded } = require('express');
const express = require('express');
const notes = require('./db/db.json');
const { nanoid } = require('nanoid');


const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

function createNewNote(body, notesArray) {
    console.log(body);

    return body;
};

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.listen(PORT, () => {
    console.log(`API server now on PORT ${PORT}`);
});