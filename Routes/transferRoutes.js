import express from 'express';
import processTransfer from '../controller/TransferController.js';  // Import default export here

const router = express.Router();

router.post('/process-transfer', processTransfer);

export default router;
