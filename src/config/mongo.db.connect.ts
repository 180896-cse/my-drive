import { MongoClient, ServerApiVersion } from "mongodb";

require("dotenv").config();
console.log(process.env.DBPASSWORD?.toString());


export default class MongoDBConnection {
  private static uri = `mongodb+srv://shantanupratap180896:${encodeURIComponent(
    process.env.DBPASSWORD?.toString()|| "No Password"
  )}@my-drive-cluster.ojkg5.mongodb.net/?retryWrites=true&w=majority&appName=my-drive-cluster`;

  
  static async dbConnect() {
    console.log(this.uri);
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const mongoDBClient = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    try {
      // Connect the client to the server	(optional starting in v4.7)
      await mongoDBClient.connect();
      // Send a ping to confirm a successful connection
      await mongoDBClient.db("admin").command({ ping: 1 });
      console.log(
        "Pinged your DB deployment. You successfully connected to MongoDB!"
      );
    } finally {
      // Ensures that the client will close when you finish/error
      await mongoDBClient.close();
    }
  }
}

// run().catch(console.dir);
