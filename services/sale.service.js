import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";
import clientRepository from "../repositories/client.repository.js";

async function createSale(sale) {
  if (!(await ClientRepository.getClient(sale.clientId))) {
    throw new Error("Cliente não encontrado!");
  }
  const product = await ProductRepository.getProduct(sale.productId);
  if (!product) {
    throw new Error("Produto inexistente!");
  }

  if (product.stock > 0) {
    sale = await SaleRepository.insertSale(sale);
    product.stock--;
    await ProductRepository.updateProduct(product);
    return sale;
  } else {
    throw new Error("Sem estoque garotinho");
  }
}
async function getSales(productId) {
  if (productId) {
    return await SaleRepository.getSalesByProductId(productId);
  }
  return await SaleRepository.getSales();
}

async function getSale(id) {
  return await SaleRepository.getSale(id);
}

async function deleteSale(id) {
  const sale = await SaleRepository.getSale(id);
  if (sale) {
    const product = await ProductRepository.getProduct(sale.productId);
    await SaleRepository.deleteSale(id);
    product.stock++;
    await ProductRepository.updateProduct(product);
  } else {
    throw new Error("Tem algo de errado que não esta certo");
  }
}

async function updateSale(sale) {
  if (!(await ClientRepository.getClient(sale.clientId))) {
    throw new Error("Cliente não encontrado!");
  }
  if (!(await ProductRepository.getProduct(sale.productId))) {
    throw new Error("Produto inexistente!");
  }
  return await SaleRepository.updateSale(sale);
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};
