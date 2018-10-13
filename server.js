const express = require('express')
const app = express()
const port = 3000
const data_products = require('./products.json')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/product', function(req, res){
	res.json(data_products)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))