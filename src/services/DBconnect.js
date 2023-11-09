import { MongoClient, ServerApiVersion } from "mongodb"

let db
// const { MongoClient, ServerApiVersion } = require('mongodb');
// import { MongoClient, ServerApiVersion } from 'mongodb'
/**
 *
 * @type {import('mongodb').db}
 */
const DBconnect = async () => {
  if (db) return db
  try {
    const uri = `mongodb+srv://tanzimnahid6:bSu5T21nYwrQMW88@cluster0.hzcsu4a.mongodb.net/?retryWrites=true&w=majority`
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
     
      
    })
    db = await client.db("QTube")
    await client.db("admin").command({ ping: 1 })
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
    return db
  } catch (error) {
    console.log("error=", error.message)
  }
}

export default DBconnect
