const router = require('express').Router();
const noteRoutes = require('./notesRoutes.js');

router.use(noteRoutes);

module.exports = router;