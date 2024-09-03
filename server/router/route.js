import { Router } from "express";
const router = Router();

// import all controllerrs 
import * as controller from "../controllers/appController.js"; 

// POST method 
router.route('/register').post(controller.register); // register user
// router.route('/registerMail').post(); // send the mail
router.route('/authenticate').post((req,res)=> res.end()); // authenticate user
router.route('/login').post(controller.verifyUser,controller.login); // login in app 

// GET method 
router.route('/user/:username').get(controller.getUser); // user wit username
router.route('/generateOTP').get(controller.generateOTP); // generate random OTP 
router.route('/verifyOTP').get(controller.verifyOTP); // verify generated OTP
router.route('/createReseetSession').get(controller.createResetSession); // reset all tthe variables

// PUT method
router.route('/updateuser').put(controller.updateUser); // is use to update the user profile
router.route('/resetPassword').put(controller.resetPassword); // use to reset password



export default router;