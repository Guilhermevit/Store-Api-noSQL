import Sale from "..//models/sale.models.js";
import Product from "../models/product.models.js";
import Client from "../models/client.models.js";

async function insertSale(sale) {
  try {
    return await Sale.create(sale);
  } catch (err) {
    throw err;
  }
}

async function getSales() {
  try {
    return await Sale.findAll({
      include: [
        {
          model: Product,
        },
        {
          model: Client,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getSale(id) {
  try {
    return await Sale.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteSale(id) {
  try {
    await Sale.destroy({
      where: {
        saleId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateSale(sale) {
  try {
    await Sale.update(
      {
        value: sale.value,
        date: sale.date,
        ClientId: sale.ClientId,
      },
      {
        where: {
          saleId: sale.saleId,
        },
      }
    );
    return await getSale(sale.saleId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertSale,
  getSale,
  getSales,
  deleteSale,
  updateSale,
};
