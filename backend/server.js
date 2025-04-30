
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";
import { aj } from './lib/arcjet.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());//express.json() is a built-in middleware function in Express that parses incoming requests with JSON payloads and is based on body-parser.
app.use(helmet());//helmet is a middleware that helps secure Express apps by setting various HTTP headers
app.use(cors());
app.use(morgan('dev'));//morgan is a middleware that logs HTTP requests and responses in the console


//apply arcjet rate-limit to all routes
app.use(async (req, res, next) => {
   try {
      const decision = await aj.protect(req, {
         requested: 1, // specifies that each request consume 1 token
      });

      if (decision.isDenied()) {
         if (decision.reason.isRateLimit()) {
            res.status(429).json({ error: "Too Many Requests" });
         } else if (decision.reason.isBot()) {
            res.status(403).json({ error: "Bot access denied" });
         } else {
            res.status(403).json({ error: "Forbidden" });
         }
         return
      }

      //check for spoofed bots
      if(decision.results.some((result)=>result.reason.isBot()&& result.reason.isSpoofed()))
      {
         res.status(403).json({error:"Spoofed BOt detected"});
         return;
      }
      next();
   } catch (error) {
      console.log("Arcjet error",error);
      next(error);
   }

});



//routes
app.use("/api/products", productRoutes);

//Connecting Database
async function initDB() {
   try {
      await sql`
         CREATE TABLE IF NOT EXISTS products(
         id SERIAL PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         image VARCHAR(255) NOT NULL,
         price DECIMAL(10,2) NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
         )
      `;
      console.log("Database is conected sucessfully");
   }
   catch (error) {
      console.log("Error initDB", error)
   }
}


initDB().then(() => {

   app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
   });



})