const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('Hello World!!')
})

app.listen(3100, ()=>console.log('Listening to port 3100'))

app.get('/api/properties', (req, res)=>{
    res.send([1,2,3])
})