import { body } from "express-validator";

export const addPetValidation = [
    body("name", "Pet name is required").not().isEmpty(),
    body("description", "The description of the pet should be provided").not().isEmpty(),
    body("gender", "Pet gender is required").not().isEmpty(),
    body("age", "Pet age is required").not().isEmpty(),
    body("adopted", "Is the pet adopted or not").not().isEmpty(),

];


