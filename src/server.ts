import express, { Express } from "express";
import 'dotenv/config'
import MongoDBConnection from "./config/mongo.db.connect"

require('dotenv').config()

/**
* Exports express
* @public
*/
const app: Express = express();

const PORT: string | number = process.env.PORT || 3000;

app.listen(+PORT, () => {
  console.log(`server started over the https:\\localhost:${PORT}`);
});

//connect with mongo DB

MongoDBConnection.dbConnect();

export default app;