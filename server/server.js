// IMPORTS : 
// import express, { json } from "express";
const express = require("express");

// USAGE OF IMPORTS :
const app = express();
app.use(express.json());

// REQUESTS : 
app.get("/", (req, res) => {
    res.send("<h1> Hello World, from VESIT EXPO </h1>");
})

// const port = process.env.PORT;
// console.log(process.env);
const port = 3002;
console.log(port);
app.listen( port, () => {
    console.log(`Running on port ${port}`);
} )