
const express = require("express"); // express is a module of node to make routes to the database
const morgan = require('morgan') // Simplifies the process of logging requests to your application
const helmet = require('helmet') // Helmet helps secure Express apps by setting various HTTP headers
const router = require('./routes/apiRoutes') // imports route
const path = require('path')


const PORT = process.env.PORT || 3500; // set te port to 3500 or let the process set the port

const app = express(); // initialize express

app.use(helmet(), morgan('tiny'))

// define middleware
app.use(express.urlencoded({ extended: true})) // turning typed in utf 8
app.use(express.json())

// serve up static assets (usually heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }
  
app.use('/api', router)
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });  

// start the server
app.listen(PORT, () => {
  console.log(`${new Date()} listening on port ${PORT}`);
});


