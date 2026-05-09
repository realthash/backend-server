// The address of this server connected to the network id:
// URL -> http://localhost:3000
// IP -> 127.0.0.1:3000
const express = require('express')
const app = express()
const PORT = 3000


app.listen(PORT, () => console.log(`server started to listen : ${PORT}`))