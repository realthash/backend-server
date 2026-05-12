// The address of this server connected to the network id:
// URL -> http://localhost:3000
// IP -> 127.0.0.1:3000
const express = require('express')
const app = express()
const PORT = 3000

//define some data
let data = {
    name : ['thash']
}

// Middleware
app.use(express.json())


//ENDPOINT - HTTP VERBS and Routes
/* The method informs the nature of request and the route is a further 
subdirectory*/
app.get('/', (req, res) => {

    res.send(`<body>
        <h1>home page</h1>
        <p>${JSON.stringify(data)}</p> 
        <a href="/dashboard">Dashboard</a>
        </body>`)
    console.log('visited homepage.')
})

// TYPE 1 - website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)
app.get('/dashboard', (req, res) => {
    res.send('<h1>dashboard</h1>')
    console.log('visited dashboard')
})

// TYPE 2 - API endpoints

// CRUD method  - create-post read-get update-put and delete-delete

app.get('/api/data', (req, res) => {
    console.log('user requested data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    // someone wants to create a user when they click sign up button
    // the user clicks the sign up button after entering their credentials, and their browser is wired up to send out a network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)

    // push data
    data.name.push(newEntry.name)
    res.sendStatus(201)

})

app.delete('/api/data', (req, res) => {
    data.name.pop()
    console.log('requested to delete a user')
    res.sendStatus(200)
})

app.listen(PORT, () => console.log(`server started to listen : ${PORT}`))