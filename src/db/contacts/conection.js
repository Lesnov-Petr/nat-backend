const { MongoClient } = require("mongodb");

const conectionContacts = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("NAT");
  return db;
};

module.exports = { conectionContacts };
