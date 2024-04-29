import { body } from "express-validator";

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
