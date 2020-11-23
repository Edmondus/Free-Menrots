import express from 'express';
import { getMentors, signUp, signIn, toMentor, getMentor, deleteUser } from '../controllers/users'
import { checkName, checkEmail, checkPassword, checkMentor } from '../helper/validations';

const router = express.Router();

router
    .get('/mentors', getMentors)
    .post('/auth/signup', checkName, checkEmail, checkPassword, signUp)
    .post('/auth/signin', checkEmail, checkPassword, signIn)
    .patch('/user/:_id', toMentor)
    .get('/mentors/:_id', getMentor)
    .delete('/user/:_id', deleteUser);
    

export default router;