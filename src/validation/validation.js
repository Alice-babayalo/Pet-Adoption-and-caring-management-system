import { body } from "express-validator";

export const addTaskValidation = [
    body("name", "Pet name is required").not().isEmpty(),
    body("description", "The description of the pet should be provided").not().isEmpty()
];


export const addCheckListItemValidation = [
    body("name", "Item name is required").not().isEmpty(),
];