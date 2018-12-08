const router = (app) => {
  app.get("/destination/:destination/:expoint?/:month?", (req, res) => {
    res.status(200).send(JSON.stringify(req.params));
  });
};

module.exports = router;
