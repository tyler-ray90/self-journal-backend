const express = require('express');
const router = express.Router();
const journalCtrl = require('../../controllers/journals');


router.get('/', journalCtrl.index);
router.post('/', journalCtrl.create);
router.get('/:id', journalCtrl.show);


module.exports = router;