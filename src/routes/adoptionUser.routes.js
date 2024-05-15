import express from 'express';
import {newUser, allClients, SignUp, logIn, ValidateOpt, resetPassword, forgotPassword, logout} from '../controllers/userAdotion.controller.js'
import {userValidation} from '../middleware/validation/validation.js';
import { signUpValidations, logInValidations, otpValidation, forgotPasswordValidation, resetPasswordValidation } from '../middleware/validation/validation.js';

const adoptionUserRoute= express.Router();

adoptionUserRoute.post('/addClient',userValidation, newUser)

adoptionUserRoute.get('/allClients', allClients);

adoptionUserRoute.post('/signup', signUpValidations, SignUp);

adoptionUserRoute.post('/verify', otpValidation, ValidateOpt);

adoptionUserRoute.post('/reset', resetPasswordValidation, resetPassword);

adoptionUserRoute.post('/logout', logout);

adoptionUserRoute.post('/login', logInValidations, logIn);

adoptionUserRoute.post('/forgot', forgotPasswordValidation, forgotPassword);


export default adoptionUserRoute;