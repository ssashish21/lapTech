const express = require('express');
const router = express.Router();
const { ensureAuthenticated} = require('../config/auth');

//landing Page
router.get('/', (req, res) => res.render('landing'));



// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    name: req.user.email
  })
);

module.exports = router;
