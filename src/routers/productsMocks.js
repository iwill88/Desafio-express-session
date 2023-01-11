const { Router } = require('express');

const mysqlConnection = require('../../SQL/mysqlConnection');
const ProductContenedorSQL = require('../contenedores/ProductContenedorSQL');

//const productRouter = Router();
const productMockRouter = Router();


const productContenedorSQL = new ProductContenedorSQL(mysqlConnection, 'productos');

const MockContenedor =require('../mocks/MockContenedor');

const mockContenedor = new MockContenedor;

productMockRouter.get('/', async (req, res) => {
  const productList = await mockContenedor.products(req.query.cant);
  res.json(productList)
});


module.exports = productMockRouter;