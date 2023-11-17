//IMPORTS :
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// ERROR HANDLERS :
const AppError = require('./utils/appError');
const globalErrorHandler = require("./controllers/errorController");

// MANUAL FILE IMPORTS :
const userRoutes = require("./routes/userRoutes");

// INSTANCE OF EXPRESS :
const app = express();

// MIDDLEWARES :
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());

// console.log(process.env.NODE_ENV);
// app.use((req, res, next) => {
//     console.log("Hello from Middleware 🫂");
//     console.log(req.headers);
//     next();
// })

// ROUTE HANDLERS ==> MOUNTING THE ROUTER :
app.use("/api/v1/users", userRoutes);

// ANY UNHANDLED ROUTE :
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
