//Chama o express
var express = require ('express')
var app = express();  
//Cria as rotas
app.get("/" ,(req, res) =>{
    res.sendFile(__dirname + "/html/index.html")
})
app.get("/agendamento" ,(req, res) =>{
    res.sendFile(__dirname + "/html/documento.html")
})
app.get("/lista" ,(req, res) =>{
    res.sendFile(__dirname + "/html/informatica.html")
})
    
app.listen(3000, () =>{
    console.log("servidor ligado na porta 3000")
})
