const router = require('express').Router();
// const comment = require("../public/js/comment.js");

router.get('/', (req, res) => res.json('Sample API get endpoint'));

// router.post('/create-game', (req, res) => {
//   db.Games.create(req.body).then(function(dbGames) {
//     res.json(dbGames);
//   });
// //  res.sendFile(path.join(__dirname, '../public/index.html'));
// });


// Routes
// =============================================================
module.exports = function(app) {

  // Get all comments
  app.get("/api/all", function(req, res) {

    // Finding all comments, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    comment.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a comment
  app.post("/api/new", function(req, res) {

    console.log("Comment Data:");
    console.log(req.body);

    comment.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created comment
      res.end();
    });

  });

};



module.exports = router;
