var express = require('express');
var server = express();
// var routes = require('./routes/routes');
var mongoose = require('mongoose');
// const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/est", { useNewUrlParser: true, useUnifiedTopology: true })

// mongoose.connect("mongodb://localhost:27017/est", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("Database connected");
//     })
//     .catch((error) => {
//         console.log("Error connecting to database: ", error);
//     });
// server.use(cors());

server.use(express.json());
// server.use(routes);

server.listen(3000, () => {
    console.log("server started at 3000");
})