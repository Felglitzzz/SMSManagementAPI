import express from 'express';
import HomeController from '../controllers/Home.controller';
import ContactController from '../controllers/Contact.controller';
import SmsController from '../controllers/Sms.controller';

const router = express.Router();

router.get('/home', HomeController.welcomeMessage);
router.post('/contacts', ContactController.createContact);
router.get('/sms', SmsController.getSms);
router.get('/sms/sender/:id', SmsController.getSmsLinkedToSender);
router.get('/sms/receiver/:id', SmsController.getSmsLinkedToReceiver);
router.delete('/contacts/:id', ContactController.deleteContact);

export default router;
