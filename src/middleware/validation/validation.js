import { body, validationResult } from "express-validator";

export const addPetValidation = [
    body("name")
        .not().isEmpty().withMessage("Pet name is required")
        .isString().withMessage("Pet name must be a string"),
    
    body("description")
        .not().isEmpty().withMessage("The description of the pet should be provided")
        .isString().withMessage("Description must be a string"),
    
    body("gender")
        .not().isEmpty().withMessage("Pet gender is required")
        .isString().withMessage("Gender must be a string"),
    
    body("age")
        .not().isEmpty().withMessage("Pet age is required")
        .isInt({ min: 0 }).withMessage("Age must be a positive integer"),
    
    body("adopted")
        .not().isEmpty().withMessage("Is the pet adopted or not")
        .isBoolean().withMessage("Adopted field must be a boolean value")
];

export const userValidation = [
    body("userName", "User name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
];

export const signUpValidations = [
   
    body("username", "User name  is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
    body("password", "Password is required").not().isEmpty(),
    body("password", "Password should contain atleast 8 characters, uppercase and lower case letters, numbers, and symbols").isStrongPassword()
];

export const logInValidations = [
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
    body("password", "Password is required").not().isEmpty(),
    body("password", "Invalid password").isStrongPassword()
];
export const otpValidation = [
    body("otp", "Otp must be provided").not().isEmpty(),
];
export const forgotPasswordValidation = [
    body("email", "Email must be provided").not().isEmpty(),
];

export const resetPasswordValidation = [
    body("password", "Password is required").not().isEmpty(),
    body("password", "Password should contain atleast 8 characters, uppercase and lower case letters, numbers, and symbols").isStrongPassword()
];

