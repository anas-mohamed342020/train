import express from 'express'
const app = express()
import { config } from 'dotenv'
import path from 'path'

config({ path: path.resolve('config/.env') })

const port = process.env.port || 5000

app.get('/', (req, res) => res.send('Anas Anas'))
app.get('/send',(req,res)=>{
    res.json(req.query) 
    // anas
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))