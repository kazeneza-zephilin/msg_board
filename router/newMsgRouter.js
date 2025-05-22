const { Router} = require('express');
const newMsgRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


newMsgRouter.get('/', (req, res) => {
    res.render('form')
})
newMsgRouter.post('/', (req, res) => {
    const messageTxt = req.body.messageTxt;
    const author = req.body.author;
    console.log(`message: ${messageTxt} author: ${author}`)
    messages.push({text: messageTxt, user: author, added: new Date()});
    res.redirect('/');
})

module.exports = { newMsgRouter, messages };