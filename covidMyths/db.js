require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
const request = require('request');

const MongoUtils = () => {
  const MyMongoLib = this || {};
  const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
  const apiKey = process.env.MONGODB_URI.APIKEY;
  const apiUrl = process.env.MONGODB_URI.APIURL;
  const dbName = process.env.DB
  let db;
  MongoClient.connect(url, { useUnifiedTopology: true }).then((client) => {
    db = client.db(dbName);
  });

  MyMongoLib.connect = (url) => {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    return client.connect();
  };

  MyMongoLib.insertOneDoc = (doc, dbCollection) => {
    console.log("INSERT INE DOC");
    console.log("DOC",doc)
    return MyMongoLib.connect(url).then((client) =>
      client
        .db(dbName)
        .collection(dbCollection)
        .insertOne(doc)
        .finally(() => client.close())
    );
  };

  MyMongoLib.insertManyDocs = (docs, dbCollection) => {
    return MyMongoLib.connect(url).then((client) =>
      client
        .db(dbName)
        .collection(dbCollection)
        .insertManyDocs(doc)
        .finally(() => client.close())
    );
  };

  MyMongoLib.getDocs = (dbCollection) => {
    return MyMongoLib.connect(url).then((client) =>
      client
        .db(dbName)
        .collection(dbCollection)
        .find({})
        .toArray()
        .finally(() => client.close())
    );
  };

  MyMongoLib.updateDoc = (id, object, dbCollection) => {
    return MongoClient.connect(url).then((client) =>
      client
        .db(dbName)
        .collection(dbCollection)
        .replaceOne(
          {
            _id: ObjectId(id),
          },
          object
        )
        .finally(() => client.close())
    );
  };

  MyMongoLib.getDocById = (id, dbCollection) => {
    return MyMongoLib.connect(url).then((client) =>
      client
        .db(dbName)
        .collection(dbCollection)
        .find({ _id: ObjectId(id) })
        .toArray()
        .finally(() => client.close())
    );
  };
  MyMongoLib.getLoginByUsername = (username) => {
    return MyMongoLib.connect(url).then((client) =>
      client
        .db(dbName)
        .collection('login')
        .find({ username: username })
        .toArray()
        .finally(() => client.close())
    );
  };

  MyMongoLib.getNewsOfCovid = () => {
    return new Promise((resolve, reject) => {
      let options = {
        url: apiUrl,
        qs: {
          q: 'Covid AND coronaVirus',
          qInTitle: 'Covid AND Coronavirus',
          language: 'es',
          apiKey: apiKey,
        },
      };
      request(options, (error, response, body) => {
        if (!error) {
          resolve(body);
        } else {
          reject(error);
        }
      });
    });
  };

  MyMongoLib.getWithJoin = (
    dbcollection,
    fromCollection,
    localField,
    foreingField,
    asName,
    id
  ) => {
    return MyMongoLib.connect(url).then((client) =>
      client
        .db(dbName)
        .collection(dbcollection)
        .aggregate([
          { $match: { _id: ObjectId(id) } },
          { $unwind: '$' + localField },
          {
            $lookup: {
              from: fromCollection,
              localField: localField,
              foreignField: foreingField,
              as: asName,
            },
          },
          { $unwind: '$' + asName },
          {
            $group: {
              _id: '$_id',
              revisiones_id: { $push: '$' + localField },
              revisiones: { $push: '$' + asName },
            },
          },
        ])
        .toArray()
        .finally(() => client.close())
    );
  };
  
  return MyMongoLib;
};

module.exports = MongoUtils();
