const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User model
const User = require('../models/User');


//log in page
router.get('/signin',(req,res)=> res.render('signin'));

//sign up page
router.get('/signup',(req,res)=> res.render('signup'));




// Register handle
router.post('/signup',(req,res)=>{
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
     errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
     errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
     errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if(errors .length > 0){
    res.render('signup', {
      errors,
      name,
      email,
      password,
      password2
    });
  }else{
    //Validation pass
    User.findOne({ email: email }).then(user => {
      if (user) {
        //User Exist
        errors.push({ msg: 'Email already exists' });
        res.render('signup', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
          });
          bcrypt.genSalt(10, (err, salt) => {
             bcrypt.hash(newUser.password, salt, (err, hash) => {
               if (err) throw err;
               newUser.password = hash;
               newUser.save()
               .then(user => {
                   req.flash('success_msg','You are now registered and can log in');
                   res.redirect('/users/signin');
                 })
                 .catch(err => console.log(err));
             });
           });
         }
       });
     }
   });


// Login
router.post('/signin', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/signin',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/signin');
});


module.exports = router;
