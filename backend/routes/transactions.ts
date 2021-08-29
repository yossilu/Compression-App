import express from 'express';
import { getAll, addOne, getPaying, getReceiving } from '../controllers/postgres_controller';
const router = express.Router();

/* 
*
 Route to the transactions Controller
*
*/
router.get('/', createTransactionTable); 

router.get('/getAll', getAll); 

router.get('/getPaying', getPaying); 

router.get('/getReceiving', getReceiving); 

router.post('/addOne', addOne); 




export default router;
