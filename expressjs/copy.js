// npm init -y
// npm install express
// npm i ejs (view engine)
// npm i --save-dev nodemon (automatically restart the server upon changes in the files)
// npm run devStart for starting server

const express = require('express')
app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded( {extended:true}))
// Routes

// We can create GET, POST, PUT, DELETE etc. requests
app.get('/', (req, res) => { 
    // console.log("Hi")
    // res.send("hello from the other side")
    // res.json({name:"Hi"})
    // res.download("hi.text")
    res.render('index', {name:"Deep"})
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.post('/contact', (req, res) => {
    console.log(req.body.firstname)
    res.redirect('/')
})
app.listen(8000)