import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from "../repositories/sale.repository.js";
import ProductInfoRepository from "../repositories/productInfo.repository.js";
import productInfoRepository from "../repositories/productInfo.repository.js";

async function createProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.insertProduct(product);
  }
  throw new Error("Fornecedor inexistente!");
}

async function getProducts() {
  return await ProductRepository.getProducts();
}

async function getProduct(id) {
  const product = await ProductRepository.getProduct(id);
  product.info = await productInfoRepository.getProductInfo(parseInt(id));
  return product;
}

async function deleteProduct(id) {
  const sales = await SaleRepository.getSalesByProductId(id);
  if (sales.length > 0) {
    throw new Error("Produto já foi vendido!");
  }
  await ProductRepository.deleteProduct(id);
}

async function updateProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.updateProduct(product);
  }
  throw new Error("Fornecedor inexistente!");
}

async function createProductInfo(productInfo) {
  await ProductInfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo) {
  await ProductInfoRepository.updateProductInfo(productInfo);
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductInfo,
  updateProductInfo,
};
