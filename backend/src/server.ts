import { app } from "./app"
import * as dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config();

const DB = process.env.DATABASE?.replace('<password>', process.env?.DATABASE_PASSWORD as string);

mongoose
  .connect(DB as string)
  .then(() => console.log('Connected to the DB'))
  .catch(() => console.log('Error while connecting to DB'));

app.listen(process.env.PORT, () => {
  console.log('hey from backend')
})
