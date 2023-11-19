const express = require('express');
const { registerUser, authUser } = require('../controllers/userControllers');

const router = express.Router();

router.post("/",function(req, res){registerUser});
router.post("/login",function(req, res){authUser}); 

module.exports = router;
