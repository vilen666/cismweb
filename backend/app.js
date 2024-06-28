const cors = require('cors');
let express = require("express")
let app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/api', (req, res) => {
    res.send('Hello from the backend!');
  });
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`You are live at http://localhost:${process.env.PORT}/`)
    }
})