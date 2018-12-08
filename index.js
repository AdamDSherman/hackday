const express = require('express');
const app = express(); // define our app using express
const routes = require('./src/routes');
const port = 3003;

routes(app);

// app.get("/hello", (req, res) => {
//   res.status(200).send("world");
// });



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
