const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose.connect(DB).then((con) => {
  console.log("DB CONNECTION DONE :)");
  
});

// SERVER START :
console.log("MODE (server.js) : ", process.env.NODE_ENV);
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port - ${port}..`);
});
