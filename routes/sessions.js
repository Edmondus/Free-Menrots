import express from 'express';
import { createSession, acceptSession, rejectSession } from '../controllers/sessions'

const router = express.Router();

router
    .get('/', createSession)
    .patch('/:sessionId/accept', acceptSession)
    .patch('/:sessionId/reject', rejectSession)

export default router;