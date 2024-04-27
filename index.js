//Importing express.js framework
const express = require("express")

//Creating an express application instance
const app = express()

//Define a default route "/"
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");

});

//Setting the port that Express Application will be listening
const port = process.env.PORT || 3000;

//Tell the Express App to listen to the port
app.listen(port, () => console.log(`listening on port ${port}`));
