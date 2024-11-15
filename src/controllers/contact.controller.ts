import express from 'express'
const router = express.Router();
import {Joi, validate} from 'express-validation'
import {createContact,deleteContact,editContact, getContact} from './contact.validation';
import ContactService from '../service/contact.service'

const contactService = new ContactService();

router.route('/create-contact').post(validate(createContact),async(req,res)=>{
    try {
        const data = req.body;
        await contactService.createContact(data);

        return res.status(201).json({
            success: true,
            message: 'contact is created successfully'
        })
    } catch (error) {
        if(error instanceof Joi.ValidationError)
            console.log(error)
        const errorMessages = error.details.map((err) => err.message);
        console.log(errorMessages)
        return res.status(400).json({
          message: 'Validation failed',
          errors: errorMessages,
        });
    }
})

router.route('/get-contact').get(validate(getContact),async(req,res)=>{
    try {
        const filter = req.query;
        const data = await contactService.getAllContact(filter);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({
            error: error.message || "An error occurred while getting the contact",
            success: false,
        });
    }
})

router.route('/delete-contact/:contactId').delete(validate(deleteContact),async(req,res)=>{
    try {
        const {contactId} = req.params;
        await contactService.deleteContact(contactId);
        return res.status(200).json({
            success: true,
            message: 'contact is deleted successfully'
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message || "An error occurred while deleting the contact",
            success: false,
        });
    }
})

router.route('/update-contact/:contactId').put(validate(editContact),async(req,res)=>{
    try {
        const {contactId} = req.params;
        const dataToUpdate = req.query;
        await contactService.editContact(contactId,dataToUpdate)
        return res.status(200).json({
            success: true,
            message: 'contact is updated successfully'
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message || "An error occurred while updating the contact",
            success: false,
        });
    }
})

export default router;