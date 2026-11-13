const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 8080;
const client = new MongoClient(process.env.MONGODB_URI);
let db;


app.use(express.json());

client.connect().then(()=>{
    db = client.db('urlshortener');
    app.listen(PORT,() => console.log(`Server running on Port ${PORT}`));
})
.catch((err)=>{
    console.error('DB connection failed:',err)
    process.exit(1);
    })
;
