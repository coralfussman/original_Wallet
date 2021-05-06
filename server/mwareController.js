const db = require('./models')

const mwareController = {}







  mwareController.createUser = (req, res, next) => {

    //declare variable to SQL query
    const user = ` INSERT INTO wallet.User (name, username, password, email, budget)
              VALUES  ('steve', 'steveneven', 'password', 'steven@gmail.com', 5000 )`
    db.query(category)
    .then((data) => {
      res.locals.user = data;
      //console.log('This is from characters');
      //console.log(res.locals.characters);
      next();
    }).catch((error) => {
      return next(error);
    });
  };


mwareController.createGitHubUser = (req, res, next) => {
  
    //declare variable to SQL query
  try{
      const user = res.locals.githubId
      return next()
    }
   catch{
     (error) => {
      return next(error);
      }
    }
  };


  mwareController.createCategory = async (req, res, next) => {
  
    try {
      //declare variable to SQL query
    const category =  ` INSERT INTO wallet.Category (cat_name, target_budget, current_bal, expense_state)
                      VALUES  ('Living & Utilities', '2,000', '2,000', 'fixed')`
    const result = await db.query(category)
      res.locals.categories = result;
      //console.log('This is from get to category');
      //console.log(res.locals.categories);
      return next();
    } catch (error) {
       next(error);
    }
  };

  mwareController.createUserCategory = async (req, res, next) => {
  
    try {
      //declare variable to SQL query
    const category =  ` SELECT  * FROM wallet.User JOIN wallet.Category ON wallet.User.id = wallet.Category.id`
    const result = await db.query(category)
      res.locals.categories = result;
      //console.log('This is from get to category');
      //console.log(res.locals.categories);
      return next();
    } catch (error) {
       next(error);
    }
  };

  mwareController.createExpense = async (req, res, next) => {
  
    try {
      //declare variable to SQL query
    const category =  ` INSERT INTO wallet."Expense"(
      expense_id, expense_name, category_id, created_on)
      VALUES (, "gas & electric",'1', '')`
    const result = await db.query(category)
      res.locals.categories = result;
      //console.log('This is from get to category');
      //console.log(res.locals.categories);
      return next();
    } catch (error) {
       next(error);
    }
  };
  

  

  // mwareController.getCategory = async (req, res, next) => {
  
  //   //declare variable to SQL query
  //   try {
  //   const category =  `SELECT * FROM wallet."Category";`
  //   const result = await db.query(category)
  //     res.locals.categories = result;
  //     //console.log('This is from get to category');
  //     //console.log(res.locals.categories);
  //     return next();
  //   } catch (error) {
  //      next(error);
  //   }
  // };
  

//   mwareController.findUser = (req, res, next) => {
  
//     //declare variable to SQL query
//     const user =  `SELECT * FROM wallet."Category";`
//     db.query(category)
//     .then((data) => {
//       res.locals.user = data;
//       //console.log('This is from characters');
//       //console.log(res.locals.characters);
//       next();
//     }).catch((error) => {
//       return next(error);
//     });
//   };


  
// mwareController.addExpense = (req, res, next) => {
// // write code here
// try {
//     const {
//     name,
//     cost
//     } = req.body;
//     const text =
//       "INSERT INTO expenses(name, cost)";
//     const values = [
//       name,
//       cost
//     ];

//     const result = db.query(text, values);
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = mwareController;
