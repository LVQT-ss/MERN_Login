import { Router } from "express";

const router = Router();

// POST method 
router.route('/register').post((req, res) =>  res.json('Register route')); // register user
router.route('/registerMail').post(); // send the mail
router.route('/authenticate').post(); // authenticate user
router.route('/login').post(); // login in app 

// GET method 
router.route('/user/:username').get(); // user wit username
router.route('/generatteOTP').get(); // generate random OTP 
router.route('/verifyOTP').get(); // verify generated OTP
router.route('/createReseetSession').get(); // reset all tthe variables

// PUT method
router.route('/updateuser').put(); // is use to update the user profile
router.route('/resetPassword').put(); // use to reset password



export default router;