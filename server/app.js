//IMPORTS :
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const reteLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

// ERROR HANDLERS :
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// MANUAL FILE IMPORTS :
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require('./routes/profileRoutes');
const experienceRoutes = require('./routes/experienceRoutes');

// INSTANCE OF EXPRESS :
const app = express();

// MIDDLEWARES //

// >> GLOCAL MIDDLEWARES :

// Security HTTP Header:
app.use(helmet());

// Logger ==> To check request type :
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API
const limiter = reteLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP Address, try again after 1 hour",
});
app.use("/api", limiter);

// Body Parser, reading data from req.body :
app.use(express.json());
// app.use(express.json({ limit: '10kb' }));

// Data Sanitization : "email : { $gt: ' ' } --> Gets accepted.
app.use(mongoSanitize());

// Data Sanitization against XSS : HTML code is not allowed to passed :
app.use(xss());

// Backend - FrontEnd connections :
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  })
);

// >> CUSTOM MIDDLEWARE :
// app.use((req, res, next) => {
//     console.log('Hello from Middleware 🫂');
//     console.log(req.headers);
//     next();
// })

// ROUTE HANDLERS ==> MOUNTING THE ROUTER :
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/users", profileRoutes);
app.use("/api/v1/users", experienceRoutes);

// ANY UNHANDLED ROUTE :
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
