// npm init -y
// npm install express
// npm i ejs (view engine)
// npm i --save-dev nodemon (automatically restart the server upon changes in the files)
// npm run devStart for starting server

const express = require('express')
app = express()

app.get('/', (req, res) => {
    res.download("hi.text")
})

app.listen(8000)