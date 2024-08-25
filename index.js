const express = require("express");

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    college: {
        type: String,
    },
    collegeEmail: {
        type: String,
        required: true,
        unique: true,
    },
    numbers:{
        type: Array,
    },
    alphabets: {
        type: Array,
    },
});

app.get("/bfhl", async (req, res) => {

    return res.json({operationCode: "1"});
});

app.post("/bfhl", async (req, res) => {
    const body = req.body
    return res.json(body);
});

