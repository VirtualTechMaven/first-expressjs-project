import express from 'express';
import { 
    getallusers,
    getuserbyID,
    createanewuser,
    updateauserbyID,
    deleteauserbyID
} from '../controllers/usercontroller.js';

const router = express.Router();

// Map routes to controller functions
router.get('/', getallusers);
router.get('/:id', getuserbyID);
router.post('/', createanewuser);
router.put('/:id', updateauserbyID);
router.delete('/:id', deleteauserbyID);


export default router;

import { validateUser } from '../utils/validateUser.js';

router.post('/', validateUser, createanewuser);
router.put('/:id', validateUser, updateauserbyID);
