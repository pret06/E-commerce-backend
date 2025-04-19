import express from 'express'

const app = express()

const PORT = 3000

app.get('/', (req,res)=>{
    res.status(200).send('Home Page!')
})

app.listen(PORT, ()=>{
    console.log(`Server is working fine on PORT ${PORT}`)
})