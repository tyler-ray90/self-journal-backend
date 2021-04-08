const express = require('express');
const router = express.Router();
const journalCtrl = require('../../controllers/journals');


router.get('/', journalCtrl.index);
router.post('/', journalCtrl.create);


module.exports = router;