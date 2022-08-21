const router = require('express').Router();
const NotesController = require('../controllers/notes_controller').NotesController;

router.get('/get', NotesController.getNotes);
router.post('/post', NotesController.createNote);
router.delete('/delete', NotesController.deleteNote);



module.exports = router;