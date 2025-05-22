const express = require('express');
const path = require('node:path');
const { newMsgRouter, messages } = require('./router/newMsgRouter')


const app = express()

// ejs configuration
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//form parsing config
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('index', {title: 'mini message board', messages: messages});
})
app.use('/new', newMsgRouter);


app.listen(PORT, () => {
    console.log(`server started ... port ${PORT}`)
}).on("error", (err) => {
    console.log('error:', err)
})