const express = require('express');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
