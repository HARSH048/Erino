import { query } from "express";

const { Joi } = require('express-validation');

export const createContact = {
    body:
        Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().optional(),
            email: Joi.string().required(),
            phoneNumber: Joi.string().required(),
            company: Joi.string().required(),
            jobTitle: Joi.string().required(),
        }).unknown(),
}

export const deleteContact = {
    params: Joi.object({
        contactId: Joi.string().required(), 
    }).unknown(),
}

export const editContact = {
    params: Joi.object({
        contactId: Joi.string().required(), 
    }),
    query: Joi.object({
        firstName: Joi.string().optional(),
        lastName: Joi.string().optional(),
        email: Joi.string().optional(),
        phoneNumber: Joi.string().optional(),
        companyName: Joi.string().optional(),
        jobTitle: Joi.string().optional(),
    }).unknown(), // To allow other query parameters
}

export const getContact = {
    query: Joi.object({
        contactId: Joi.string().optional(), 
        firstName: Joi.string().optional(),
        lastName: Joi.string().optional(),
        email: Joi.string().optional(),
        phoneNumber: Joi.string().optional(),
        companyName: Joi.string().optional(),
        jobTitle: Joi.string().optional(),
        page: Joi.string().required(),
        limit: Joi.string().required(),
    }).unknown(),
}


