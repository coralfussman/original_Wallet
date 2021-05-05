const db = require('./models')

const userController = {}

userController.getCategory = async (req, res, next) => {
  
  //declare variable to SQL query
  try {
  const category =  `SELECT * FROM wallet."Category";`
  const result = await db.query(category)
    res.locals.categories = result;
    //console.log('This is from get to category');
    //console.log(res.locals.categories);
    return next();
  } catch (error) {
     next(error);
  }
};

userController.createUserCategory = (req, res, next) => {
  
    //declare variable to SQL query
    const category =  `SELECT * FROM wallet."Category";`
    db.query(category)
    .then((data) => {
      res.locals.category = data;
      //console.log('This is from characters');
      //console.log(res.locals.characters);
      next();
    }).catch((error) => {
      return next(error);
    });
  };
  
userController.addExpense = (req, res, next) => {
// write code here
try {
    const {
    name,
    cost
    } = req.body;
    const text =
      "INSERT INTO expenses(name, cost)";
    const values = [
      name,
      cost
    ];

    const result = db.query(text, values);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userController;
