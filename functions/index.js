const express = require("express");
const ServerlessHttp = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/.netlify/functions/bfhl", async (req, res) => {

    return res.json({operationCode: "1"});
});

app.post("/bfhl", async (req, res) => {
    const body = req.body.data;
    console.log(body);

    const numbers = [];
    const capitalAlphabets = [];
    const smallAlphabets = [];

    body.forEach(item => {
    if (/^\d+$/.test(item)) {
        numbers.push(item);
    } else if (/^[A-Z]$/.test(item)) {
        capitalAlphabets.push(item);
    } else if (/^[a-z]$/.test(item)) {
        if(smallAlphabets.length>0){
            const lastElement = smallAlphabets.pop();
            if(lastElement>item){
                smallAlphabets.push(lastElement);
            }else{
                smallAlphabets.push(item);
            }
        }
        else{
            smallAlphabets.push(item);
        }
    }
});

    return res.json({is_success: true, user_id: "Shikhar_22032002", email: "shikharsharma2203@gmail.com", roll_number: "21BCI0063", numbers: numbers, alphabets: capitalAlphabets, highest_lowercase_alphabet: smallAlphabets});

});

const handler = ServerlessHttp(app);

module.exports.handler = async(event, context) => {
    const result = await handler(event, context);
    return result;
}