import express from "express";
const app = express();
import router from "./routes/index.js";


app.use(express.json());
app.use(router);
app.get('/',(req,res) =>{
    res.send("success")
})

app.listen(5000, () =>{
    console.log("Server running in port 5000")
})