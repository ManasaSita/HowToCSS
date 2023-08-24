// const express = require('express');
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// const app = express();
// const PORT = 3000;

// // MongoDB Connection URL
// const url = 'mongodb://localhost:27017';
// const dbName = 'orderAndEat'; // Replace with your database name

// app.use(express.json());

// // Handle user login
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const client = new MongoClient(url);
//         await client.connect();
//         const db = client.db(dbName);
//         const users = db.collection('users');

//         const user = await users.findOne({ username, password });

//         if (user) {
//             res.status(200).json({ message: 'Login successful' });
//         } else {
//             res.status(401).json({ message: 'Invalid credentials' });
//         }

//         client.close();
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'An error occurred' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse POST data
// Add this before your route definitions
app.use(express.static('public'));

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Define the login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Perform authentication logic here
    if (username === 'valid_username' && password === 'valid_password') {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Add this after your existing route
app.get('/', (req, res) => {
    res.send('Welcome to the login page');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
