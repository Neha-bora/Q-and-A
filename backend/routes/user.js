const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const {getUserById, updateUser, photo, getUser} = require("../controllers/user");


router.param("userId",getUserById );


//update
router.put("/user/:userId" , isSignedIn, isAuthenticated, updateUser);

//get route

router.get("/user/:userId" ,getUser );
router.get("/profile/photo/:userId" , photo);



module.exports = router;