const express = require('express');
const { MongoClient } = require('mongodb');
const crypto = require('crypto')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const client = new MongoClient(process.env.MONGODB_URI);
let db;


app.use(express.json());

app.get('/health',(req,res)=>{
    res.status(200).send('ok');
})
app.post('/api/shorten',async(req,res)=>{
    const longUrl= req.body.url;
    const shortCode= crypto.randomBytes(4).toString('hex');
    await db.collection('links').insertOne({longUrl,shortCode});
    res.json({shortCode});
})

client.connect().then(()=>{
    db = client.db('urlshortener');
    app.listen(PORT,() => console.log(`Server running on Port ${PORT}`));
})
.catch((err)=>{
    console.error('DB connection failed:',err)
    process.exit(1);
})
