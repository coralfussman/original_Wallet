const fetch = require('node-fetch');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
const cookieSession = require('cookie-session');

const apiRouter = require('./routes/api');
// const expenseRouter = require('./routes/expense');
// const user_categoryRouter = require('./routes/user_category');
const client_id = process.env.GITHUB_CLIENT_ID
const client_secret = process.env.GITHUB_CLIENT_SECRET
const cookie_secret = process.env.COOKIE_SECRET
console.log({client_id, client_secret})


//__creating session object
app.use(
  cookieSession({
    secret: cookie_secret

}))

//__handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV ==='production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
};
//__defining route handler
app.use('/api', apiRouter);
// app.use('/expense', expenseRouter);
// app.use('/user/category', user_categoryRouter);



// catch-all route handler for any requests to an unknown route
//app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//global error debugger 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



//__________ test routes __________//

// app.get( '/', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
// });


app.get('/api/', (req, res) => {
  return res.status(200).send("hi");
});

// app.get('/wallet', (req, res) => {
//   return res.status(200) //.sendFile(path.resolve(__dirname, '../client/components/Wallet.js'));
// });

// app.get('/about',  (req, res) => {
//   return res.status(200).json() //sendFile(path.resolve(__dirname, '../client/components/About.js'));
// });

app.post('/login', (req, res) => {
  return res.status(200).json();
});

// app.get('/register', (req, res) => {
//   return res.status(200).json();
// });

// app.get('/categories', (req, res) => {
//   return res.status(200).json();
// });




//__________ GITHUB O Auth routes __________//
app.get('/login/github', (req, res) => {
  const url =`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/login/github/callback`
  res.redirect(url)
});

async function getAccessToken(code) {
  const res = await fetch(`https://github.com/login/oauth/access_token`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code
    })
  })
  const data = await res.text()
  const params = new URLSearchParams(data)
  return params.get('access_token')
}

async function getGithubUser(access_token) {
  const req = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `bearer ${access_token}`
    }
  })
  const data = await req.json()
  return data
}
app.get('/login/github/callback', async (req, res) => {
  const code = req.query.code
  const token = await getAccessToken(code)
  //res.json({token})
  const githubData = await getGithubUser(token)
   //res.json(githubData)
   if(githubData){

     res.locals.githubId = githubData.id
     res.status(200).send(res.locals.githubId)
     req.session.githubId = githubData.id
     req.session.token = token

     res.redirect('/wallet')
     
   }
   else{
     res.send('error happened')
     //res.redirect('/login')
   }
});


  
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

