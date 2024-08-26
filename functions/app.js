const express = require("express");
const ServerlessHttp = require("serverless-http");

const app = express();
const router = express.Router();
//const PORT = 3000;
app.use(express.json());

router.get("/", (req, res) => {
    return res.json({GET: "/bfhl", POST: "/bfhl"});
});

router.get("/bfhl", (req, res) => {

    return res.json({operationCode: "1"});
});

router.post("/bfhl", (req, res) => {
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

app.use("/", router);

module.exports.handler = ServerlessHttp(app);

//app.listen(PORT, ()=> console.log("Server Started"));