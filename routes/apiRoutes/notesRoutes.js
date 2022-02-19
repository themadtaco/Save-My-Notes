const router = require('express').Router();
// nanoid is used to make unique id for each note
const { nanoid } = require('nanoid');
const { notes } = require('../../db/db');
const { createNewNote, editNote } = require('../../lib/notes');

// get notes json
router.get('/notes', (req, res) => {
    res.json(notes);
});

// create a new note and post to json file
router.post('/notes', (req, res) => {

    // edits note if id exists, if not creates a new note
    if (!req.body.id) {
        req.body.id = nanoid(5);
        createNewNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }

    res.json(req.body);
});

module.exports = router;