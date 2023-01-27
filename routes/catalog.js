const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/api/sign-up', userController.sign_up);
router.post('/api/login', userController.log_in);
router.post('/api/highscore', userController.high_score);
router.get('/api/leaderboard', userController.get_leaderboard);



module.exports = router;
