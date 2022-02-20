const express = require('express');
const app = express();
const { Router } = express;
const PORT = process.env.PORT || 8080;
let serverRoutes = require('./routes');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

serverRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


