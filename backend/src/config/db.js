// db.ts or db.js

import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
import { ENV } from "./env.js";
import * as schema from "../db/schema.js";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: ENV.DATABASE_URL, // e.g., postgres://recipeuser:recipepass@localhost:5433/recipedb
});

export const db = drizzle(pool, { schema });

