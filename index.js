const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');

app.use(express.json());

app.use('/tasks', require("./routes/tasks"));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


//exportamos la App para poder testerla!!!
module.exports = app;