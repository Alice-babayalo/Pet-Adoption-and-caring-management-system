import express from 'express';
import {newUser, allClients, SignUp, logIn, ValidateOpt, resetPassword, forgotPassword, logout} from '../controllers/userDayCare.controllers.js'
import {userValidation, signUpValidations, logInValidations, otpValidation, forgotPasswordValidation, resetPasswordValidation } from '../middleware/validation/validation.js';


const dayCareRoute= express.Router();

dayCareRoute.post('/addClient',userValidation, newUser)

dayCareRoute.get('/allClients', allClients);

dayCareRoute.post('/signup', signUpValidations, SignUp);

dayCareRoute.post('/verify', otpValidation, ValidateOpt);

dayCareRoute.post('/reset', resetPasswordValidation, resetPassword);

dayCareRoute.post('/logout', logout);

dayCareRoute.post('/login', logInValidations, logIn);

dayCareRoute.post('/forgot', forgotPasswordValidation, forgotPassword);



export default dayCareRoute;