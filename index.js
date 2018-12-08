const express = require('express');
const app = express(); // define our app using express
const port = 3003;

app.get("/hello", (req, res) => {
  res.status(200).send("world");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
