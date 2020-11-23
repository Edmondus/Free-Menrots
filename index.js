import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import users from './routes/users';
import sessions from './routes/sessions';
import connectDB from './helper/db';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/v1', users);
app.use('/api/v1/sessions', sessions);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}...`.yellow.bold));
