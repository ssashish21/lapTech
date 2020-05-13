const express = require('express');
const router = express.Router();
const { ensureAuthenticated} = require('../config/auth');

//landing Page
router.get('/', (req, res) => res.render('landing'));

// Welcome Page
router.get('/welcome', (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    name: req.user.name
  })
);

module.exports = router;
