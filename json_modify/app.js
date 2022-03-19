const express = require('express')
const {improveJSON} =require('./utils/improvejson')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
//akses: localhost:3000/improvejson
app.post('/improvejson',(req,res)=>{
    try{
        // json input diambil dari body request
        const json = req.body

        // service mengolah json tersebut menjadi improved json
        const improvedJson = improveJSON(json)

        // service mengirimkan kembali json yang sudah di improve
        res.status(200).json(improvedJson)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})

app.use('/',(req,res)=>{
    res.status(404).send('<h1>404</h1>')
})