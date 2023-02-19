const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 5500

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}));

app.post('/add', (req, res) => {

  let products = JSON.parse(fs.readFileSync('./products.json'));

  let product = req.body;

  product.id = products.length + 1;

  products.push(product);

  fs.writeFileSync('./products.json', JSON.stringify(products));

  res.json({ok:true});

})

app.post('/like', (req, res) => {

  let products = JSON.parse(fs.readFileSync('./products.json'));

  let product_id = req.body.id;

  for (let i = 0; i < products.length; i++) {
    if(products[i].id == product_id) {
      products[i].like += 1;
    }
  }

  fs.writeFileSync('./products.json', JSON.stringify(products));

  res.json({ok:true});

})

app.get('/products', (req, res) => {

  let products = fs.readFileSync('./products.json');

  res.json(JSON.parse(products));

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
