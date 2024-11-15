import express from 'express';
const router = express.Router();
import contactController from '../controllers/contact.controller'


router.use('/contacts',contactController);

export default router;




