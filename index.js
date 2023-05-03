const express = require('express');
const PORT = 5000;
const app = express();
const path = require('path');
const apiRoute = require("./routes/api")

app.use("/" , apiRoute);
app.use("/home",express.static(path.join(__dirname, "public")));

app.listen(PORT , ()=>{
    console.log("Server running on port: ", PORT);
});

