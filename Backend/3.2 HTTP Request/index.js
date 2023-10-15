import express from "express";
const app = express();
const port=3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello World<h1>");
});
app.get("/about", (req, res)=>{
    res.send("<h1>About me<h1><p>My name is Khyati Mishra</p>");
});

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Me<h1><p>My E-mail: khyatimishra999@gmail.com</p>");
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});