import { Router } from "express";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  signUp,
} from "../controllers/user-controller.js";

const UserRouter = Router();

UserRouter.get("/users/:userId", getUser);
UserRouter.get("/users", getUsers);
UserRouter.post("/users/", createUser);
UserRouter.patch("/users/:userId", updateUser);
UserRouter.delete("/users/:userId", deleteUser);
// UserRouter.post("/sign-up", authMiddleware, signUp);
// UserRouter.patch("/user/:userId", updateUser);
// UserRouter.post("/sign-up",  signUp);

export default UserRouter;
