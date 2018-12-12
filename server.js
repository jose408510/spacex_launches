const express = require('express');
const graphqlHTTP  = require('express-graphql');
const schema = require('./schema')
const cors = require('cors') 
const app = express(); 
const path = require("path")

// allows cross origin browser 
app.use(cors())
app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
})
);
app.use(express.static('public'));


app.get('*' , (req,res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const Port = process.env.Port || 5000 

app.listen(Port , () => {
    console.log(`Server started on port ${Port}`)
})