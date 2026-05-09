// The address of this server connected to the network id:
// URL -> http://localhost:3000
// IP -> 127.0.0.1:3000
const express = require('express')
const app = express()
const PORT = 3000

//HTTP VERBS and Routes
/* The method informs the nature of request and the route is a further 
subdirectory*/
app.get('/', (req, res)=>{
    console.log("this is an endpoint", req.method)
    res.sendStatus(200)
})

app.listen(PORT, () => console.log(`server started to listen : ${PORT}`))