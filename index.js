const express = require("express");

app.get("/bfhl", async (req, res) => {

    return res.json({operationCode: "1"});
});

app.post("/bfhl", async (req, res) => {
    const body = req.body
    return res.json(body);
});

