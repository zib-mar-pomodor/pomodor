import express, { Application } from 'express';

import { userRoute } from './routes/userRoute';
import morgan from 'morgan';

export const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', userRoute);
