const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://queries:MKOJZ2GbDLSu7wnd@cluster1.1jzlgma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();

    const userCollection = client.db('blood').collection('user');
    const quiresCollection = client.db('blood').collection('quires');

    const commentCollection = client.db('blood').collection('comments');
    const appointmentCollection = client.db('blood').collection('appointments');
      const bookingCollection = client.db('blood').collection('bookings');

    // // // // // // // // // // // //

    //  *********  User  ********//

    // create and update a user
    app.put('/create-user/:email', async (req, res) => {
      const email = req.params.email;
      const user = req.body;

      const filter = { email: email };
      const options = { upsert: true };

      const updatedDoc = {
        $set: user,
      };

      const result = await userCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
    // get all users from db
    app.get('/users', async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    // all User filter by email category
    app.get('/user/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = userCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });

    // // //  *********  post quires  ********//

    // Post appointments
    app.post('/quires', async (req, res) => {
      const appointmentsBook = req.body;
      const result = await quiresCollection.insertOne(appointmentsBook);
      res.send(result);
    });
    // get quires
    app.get('/quires', async (req, res) => {
      const query = {};
      const cursor = quiresCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    // Delete one quires
    app.delete('/quire/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await quiresCollection.deleteOne(query);
      res.send(result);
    });

    // // //  *********  post comment  ********//

    // Post appointments
    app.post('/comments', async (req, res) => {
      const appointmentsBook = req.body;
      const result = await commentCollection.insertOne(appointmentsBook);
      res.send(result);
    });

    // get comments
    app.get('/comments', async (req, res) => {
      const query = {};
      const cursor = commentCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    //  comment  filter by post
    app.get('/comment/:pId', async (req, res) => {
      const pId = req.params.pId;
      const query = { pId };
      const cursor = commentCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    // Delete one comment Remove
    app.delete('/commentRemove/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await commentCollection.deleteOne(query);
      res.send(result);
    });

    // Post solve
    app.post('/solve', async (req, res) => {
      const appointmentsBook = req.body;
      const result = await quizSolutionCollection.insertOne(appointmentsBook);
      res.send(result);
    });
    // get comments
    app.get('/solve', async (req, res) => {
      const query = {};
      const cursor = quizSolutionCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    // Delete one comment Remove
    app.delete('/solveDelete/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await quizSolutionCollection.deleteOne(query);
      res.send(result);
    });
    // app.get('/comment/:pId', async (req, res) => {
    //   const pId = req.params.pId;
    //   const query = { pId };
    //   const cursor = commentCollection.find(query);
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    // doctor

    // // get appointments to query multiple collection  and them marge data

    app.get('/appointments', async (req, res) => {
      const date = req.query.date;
      const query = {};
      const options = await appointmentCollection.find(query).toArray();
      const bookingQuery = { date: date };
      const alreadyBooked = await bookingCollection
        .find(bookingQuery)
        .toArray();
      //
      options.forEach(option => {
        const optionBooked = alreadyBooked.filter(
          book => book.terminalName === option.name
        );
        const bookedSlots = optionBooked.map(book => book.slot);
        const remainingSlots = option.slots.filter(
          slot => !bookedSlots.includes(slot)
        );
        option.slots = remainingSlots;
      });
      res.send(options);
    });

    // Post appointments
    app.post('/appointments', async (req, res) => {
      const appointmentsBook = req.body;
      const result = await appointmentCollection.insertOne(appointmentsBook);
      res.send(result);
    });
    // post Booking/ terminal
    app.post('/bookings', async (req, res) => {
      const newBooking = req.body;
      const result = await bookingCollection.insertOne(newBooking);
      res.send(result);
    });
    // get Booking/terminal
    app.get('/bookings', async (req, res) => {
      const query = {};
      const cursor = bookingCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    // bookings filter by email
    app.get('/myBookings/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = bookingCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    //  Booking filter by Division
    app.get('/bookingDate/:date', async (req, res) => {
      const date = req.params.date;
      const query = { date };
      const cursor = bookingCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Running Queries ');
});

app.listen(port, () => {
  console.log('Queries  server is running ');
});
