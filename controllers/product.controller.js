import productRepository from "../repositories/product.repository.js";
import productService from "../services/product.service.js";

async function createProduct(req, res, next) {
  try {
    let product = req.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error("Nome, CPF, telefone, email e endereço são obrigatorios");
    }
    res.send(await productService.createProduct(product));
    logger.info(`POST /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    res.send(await productService.getProducts());
    logger.info("GET/product");
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    res.send(await productService.getProduct(req.params.id));
    logger.info("GET/product");
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    await productService.deleteProduct(req.params.id);
    res.end();
    logger.info("DELETE/product");
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    let product = req.body;
    if (
      !product.productId ||
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error("Nome, CPF, telefone, email e endereço são obrigatorios");
    }
    product = await productService.updateProduct(product);
    res.send(product);
    logger.info(`PUT /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function createProductInfo(req, res, next) {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) {
      throw new Error("Product Id é Obrigatorio mané");
    }
    productInfo = await productService.createProductInfo(productInfo);
    res.end();
    logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function updateProductInfo(req, res, next) {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) {
      throw new Error("Product Id é Obrigatorio mané");
    }
    productInfo = await productService.updateProductInfo(productInfo);
    res.end();
    logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);
  } catch (err) {
    next(err);
  }
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
