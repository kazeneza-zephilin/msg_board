const express = require('express');
const app = express()

const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('server started');
})


app.listen(PORT, () => {
    console.log(`server started ... port ${PORT}`)
}).on("error", (err) => {
    console.log('error:', err)
})