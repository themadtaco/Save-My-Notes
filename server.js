const { urlencoded } = require('express');
const express = require('express');
const notes = require('./db/db.json');
const { nanoid } = require('nanoid');
const fs = require('fs');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    // Save it to actual json file
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return body;
};

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    // set id for new saved notes
    req.body.id = nanoid(5);

    // adds note to json file
    const note = createNewNote(req.body, notes);

    res.json(note);
})

app.listen(PORT, () => {
    console.log(`API server now on PORT ${PORT}`);
});