const express = require('express');
const app = express();

app.use(express.static("./dist"));

const port = process.env.PORT || 3456;
app.listen(port, () => console.log("listening on " + port));