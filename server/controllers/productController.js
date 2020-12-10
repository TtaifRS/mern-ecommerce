import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// fetch all products
// /api/products/
// public access
const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// fetch single products
// /api/products/:id
// public access

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProduct, getProductById };
