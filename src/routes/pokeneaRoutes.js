const express = require('express');
const { pokeneaJsonHandler, pokeneaPhilosophyHandler } = require('../controllers/pokeneaController');

const router = express.Router();

// Define the /pokenea route
router.get('/pokenea', pokeneaJsonHandler);

// Define the /pokenea/philosophy route for the HTML view
router.get('/pokenea/philosophy', pokeneaPhilosophyHandler);

module.exports = router;
