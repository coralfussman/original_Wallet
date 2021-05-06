const express = require('express');

const mwareController = require('../mwareController');

const router = express.Router();

// router.get('/',
//     mwareController.getUser,
//   (req, res) => res.status(200).json(res.locals.user)
// );

// router.get('/',
//     mwareController.getCategory,
//   (req, res) => res.status(200).json(res.locals.categories)
// );

// router.get('/wallet',
//   userController.getUser,
//   (req, res) => res.status(200).json(res.locals.user)
// );



// router.post('/walet/:user_categoryId',
//   userController.createUserCategory,
//   (req, res) => res.status(200).json({})
// );

// router.post('/expenses',
//   userController.addExpense,
//   (req, res) => res.status(200).json({})
// );



module.exports = router;
