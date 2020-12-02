const express = require('express');
const path = require('path');
const app = express()


app.use(express.static("view"))


app.get('/',(req, res)=>{
    res.json("<h1>hello world</h1>")
})

app.get('/contact',(req, res)=>{
    res.send("<h1>contact page</h1>")
})
app.get('/about',(req, res)=>{
    res.sendFile(path.join(__dirname,"views","about.html"))
})

app.get('*',(req, res)=>{
    res.status(404).send("404")
})

const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`)
})