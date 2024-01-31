import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';

const server = express();
let PORT = 3000;

mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
})

server.post("/signup", (req, res) => {
    
    res.json(req.body)

})


server.listen(PORT, () => {
    console.log('Listening on por => ' + PORT);
})