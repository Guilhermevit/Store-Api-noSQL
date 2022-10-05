import mongodb from "mongodb";

function getClient() {
  const uri =
    "mongodb+srv://Guilhermevit:Guivit180891@cluster0.ry78xcy.mongodb.net/?retryWrites=true&w=majority";
  return new mongodb.MongoClient(uri);
}

export { getClient };
