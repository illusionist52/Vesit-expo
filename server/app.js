//IMPORTS :
const express = require('express');
const morgan = require('morgan');

// MANUAL FILE IMPORTS :
const userRoutes = require('./routes/userRoutes');

const app = express();

// MIDDLEWARES :
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

console.log(process.env.NODE_ENV);
app.use((req, res, next) => {
    console.log("Hello from Middleware 🫂");
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

// ROUTE HANDLERS ==> MOUNTING THE ROUTER :
app.use('/api/v1/users', userRoutes);

module.exports = app;