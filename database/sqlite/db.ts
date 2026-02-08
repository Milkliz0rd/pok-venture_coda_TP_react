import sqlite, { type Database } from "better-sqlite3";
import path from "node:path";

let singleton: Database | undefined;

export function db(): Database {
  if (!singleton) {
    if (!process.env.DATABASE_URL) {
      throw new Error("Missing DATABASE_URL in .env file");
    }

    const cleanPath = process.env.DATABASE_URL.replace("file:", "");

    const dbPath = path.join(process.cwd(), cleanPath);

    singleton = sqlite(dbPath);
  }

  return singleton;
}
