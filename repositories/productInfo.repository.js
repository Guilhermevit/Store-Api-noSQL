import { getClient } from "./mongo.db.js";

async function createProductInfo(productInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client.db("store").collection("productInfo").insertOne(productInfo);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function updateProductInfo(productInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db("store")
      .collection("productInfo")
      .updateOne(
        { productId: productInfo.productId },
        { $set: { ...productInfo } }
      );
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function getProductInfo(productInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client.db("store").collection("productInfo").findOne({ productInfo });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export default { createProductInfo, updateProductInfo, getProductInfo };
