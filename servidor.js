const http = require('http')

const PORT = 3000
const SUCCESS_CODE = 200

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = SUCCESS_CODE
    res.setHeader('Content-Type', 'application/json')
    if (req.url == '/pessoa'){
        const pessoa = {
            nome:"Edivan santos",
            idade:23,
            sexo:"Masculino",
            
        }
    res.end(JSON.stringify(pessoa))  
    }
    else if(req.url == '/curso'){
        const curso = {
            nome:"ADS",
            cargaHoraria:5984,

        }
    res.end(JSON.stringify(curso))  
    }
    else if (req.url == '/estudante'){
        const estudante={
            nome:"Aislan ",
            nome:"jessiel"
        }
    res.end(JSON.stringify(estudante))   
    }
    
   

})


server.listen(PORT, () => {
  console.log('Servidor rodando na porta: ', PORT)
})