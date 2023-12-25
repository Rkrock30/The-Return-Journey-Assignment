require('../model/db')
const express = require('express');
const router = express.Router();
const getProductController=require('../controller/getProducts')
const createProduct=require('../controller/createProduct')
const getSpecificController=require('../controller/getSpecificProduct')
const updateProductController=require('../controller/updateProduct')
const deleteController=require('../controller/deleteProduct')
  

router.get("/products", async (req, res) => {
    getProductController.getAllProducts(req, res);
  });

router.post("/createProduct", async (req, res) => {
    createProduct.createProducts(req, res);
  });

router.get("/products/:id", async (req, res) => {
    getSpecificController.getSpecificProducts(req, res);
  });

router.put("/products/:id", async (req, res) => {
    updateProductController.updateProducts(req, res);
  });

router.delete("/products/:id", async (req, res) => {
    deleteController.deleteProducts(req, res);
  });





module.exports = router