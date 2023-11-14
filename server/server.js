//IMPORTS :
const express = require("express");

const app = express();

app.use(express.json());


//REQUESTS : 
app.get("/", (req, res) => {
    res.send("Hello World");
})

const port = 3002;
app.listen(port, () => {
    console.log(`Running on ${port}..`);
})