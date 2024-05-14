const express = require('express');
const router = express.Router();
const dressController = require('../controllers/dressController');

router.post('/dresses/:id/add-to-favorites', dressController.addToFavorites);
router.delete('/dresses/:id/remove-from-favorites', dressController.removeFromFavorites);

module.exports = router;
