//Connect with Database
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

// const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD}=process.env.DATABASE_URL;

//creates a sql connection using our environment variables
export const sql = neon(process.env.DATABASE_URL);
// This sql function we export is used as a tagged template literal, which allows us to write SQL queries safely

