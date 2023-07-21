import { Router } from "express";
import { signUp } from "../controllers/userController";

export const userRoute = Router();

userRoute.get('/user', (req, res) => {
  res.send('Hey there user')
})

userRoute.post('/signup', signUp)