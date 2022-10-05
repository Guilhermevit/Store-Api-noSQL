import mongodb from "mongodb";

function getClient() {
  const uri =
    "adicionar seu banco de dados";
  return new mongodb.MongoClient(uri);
}

export { getClient };
