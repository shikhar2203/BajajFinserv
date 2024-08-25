const express = require("express");


const app = express();
const PORT = 8000;

app.get("/bfhl", async (req, res) => {

    return res.json({operationCode: "1"});
});

app.post("/bfhl", async (req, res) => {
    const body = req.body;
    return res.json(body);
});

app.listen(PORT, () => console.log( `Server is running on port ${PORT}` ));