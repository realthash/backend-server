// The address of this server connected to the network id:
// URL -> http://localhost:3000
// IP -> 127.0.0.1:3000
const express = require('express')
const app = express()
const PORT = 3000

//define some data
let data = {
    name: 'thash'
}


//ENDPOINT - HTTP VERBS and Routes
/* The method informs the nature of request and the route is a further 
subdirectory*/
app.get('/', (req, res)=>{
    console.log("this is an endpoint", req.method)
    res.send('<h1>home page</h1>')
})

// TYPE 1 - website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)
app.get('/dashboard', (req, res)=> {
    res.send('<h1>dashboard</h1>')
})

// TYPE 2 - API endpoints
app.get('/api/data', (req, res)=> {
    console.log('this one was for data')
    res.send(data)
})

app.listen(PORT, () => console.log(`server started to listen : ${PORT}`))