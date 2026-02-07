import "dotenv/config";
import { dbMiddleware } from "./db-middleware";
import { telefuncHandler } from "./telefunc-handler";
import { apply, serve } from "@photonjs/express";
import express from "express";
import cookieParser from "cookie-parser";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export default startApp() as unknown;

function startApp() {
  const app = express();
  app.use(cookieParser());

  apply(app, [
    // Make database available in Context as `context.db`
    dbMiddleware,

    // Telefunc route. See https://telefunc.com
    telefuncHandler,
  ]);

  return serve(app, {
    port,
  });
}
