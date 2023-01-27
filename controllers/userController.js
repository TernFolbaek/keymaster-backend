const User = require('../models/user');

exports.log_in = (req, res, next) => {
  User.findOne(
    { username: req.body.username, password: req.body.password },
    function (err, rs) {
      if (err) {
        console.log(err);
      } else if (rs == null) {
        res.send(false);
      } else {
        res.json({
          boolean: true,
          id: rs._id,
          username: rs.username,
          highScore: rs.highScore,
        });
      }
    }
  );
};

exports.sign_up = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

exports.high_score = (req, res, next) => {
  User.findByIdAndUpdate(
    req.body.userId,

    { highScore: req.body.score },
    function (error, user) {
      if (error) {
        res.send({ info: error });
        return;
      } else {
        res.send({ info: 'nice' });
      }
    }
  );
};

exports.get_leaderboard = (req, res, next) => {
  User.find({})
    .sort({ highScore: -1 })
    .limit(10)
    .exec((err, posts) => {
      if (err) {
        console.log(err);
      } else {
        res.send(posts);
      }
    });
};
