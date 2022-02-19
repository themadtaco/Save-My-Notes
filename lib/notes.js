const fs = require('fs');
const { join } = require('path');
const path = require('path');

// create a new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    // Save it to actual json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return body;
};

// takes current note and allows it to be edited
function editNote(currentNote, notesArray) {
    const index = notesArray.findIndex(note => note.id === currentNote.id);

    notesArray.splice(index, 1);
    notesArray.splice(index, 0, currentNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    )
};

module.exports = { createNewNote, editNote };