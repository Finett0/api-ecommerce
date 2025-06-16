import express from "express";
import { userRoutes } from "./users.rout";

export const routes = (app: express.Express) => {
  app.use(express.json());
  app.use(userRoutes);
};
