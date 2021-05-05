const express = require('express');

const userController = require('../userController');

const router = express.Router();

// router.get('/',
//   userController.getUser,
//   (req, res) => res.status(200).json(res.locals.user)
// );

// router.get('/category',
//   userController.getCategory,
//   (req, res) => res.status(200).json(res.locals.categories)
// );

// router.get('/wallet',
//   userController.getUser,
//   (req, res) => res.status(200).json(res.locals.user)
// );

// router.post('/wallet/:user_categoryId',
//   userController.createUserCategory,
//   (req, res) => res.status(200).json({})
// );

// router.post('/expenses',
//   userController.addExpense,
//   (req, res) => res.status(200).json({})
// );



module.exports = router;
