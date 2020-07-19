var express = require('express');
var router = express.Router();
 const { createQestion,
        getQestionById,
        getAllQuestions ,
        getQestion ,
        photo, 
        updateQestion,
        deleteQestion} = require("../controllers/AskQestions");

const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');


//all params
router.param("userId" , getUserById);
router.param("qestionId" , getQestionById)

//post route
router.post("/createQestions/:userId" ,isSignedIn, isAuthenticated , createQestion );
// router.put("/question/:questionId/:userId" , isSignedIn , isAuthenticated,  updateQestion);

//delete
router.delete("/question/:questionId/:userId" , isSignedIn, isAuthenticated , deleteQestion)
//read route
router.get("/question/:qestionId" ,getQestion );
router.get("/question/photo/:qestionId" , photo);
router.get("/questions" , getAllQuestions);

module.exports = router;