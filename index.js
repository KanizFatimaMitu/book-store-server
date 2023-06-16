const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());

// kanizfatima528
// lACXnDM8j9gzGVDV



const uri = "mongodb+srv://kanizfatima528:lACXnDM8j9gzGVDV@cluster0.hgmgi0u.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const booksCollection = client.db("book-store").collection("books")

    http://localhost:5000/books
    app.post('/books', async (req, res) => {
      const newBook = req.body;
      console.log(newBook)
      const addBook = await booksCollection.insertOne(newBook)
      res.send(addBook)
    })

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('this is official book-store server')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 