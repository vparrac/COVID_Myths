const { MongoClient, ObjectID } = require("mongodb");

describe("insert", () => {
  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
    });
    db = await connection.db("covidDB");
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it("inserts pregunta", async () => {
    const comentarios = db.collection("preguntas");
    let id = ObjectID();
    const pregunta = {
      _id: id,
      titulo: "Titulo",
      contenido: "Contenido",
      usuario: "m@mail.com",
      verdad: 0,
      mito: 0,
    };
    await comentarios.insertOne(pregunta);

    const inserted = await comentarios.findOne({ _id: id });
    expect(inserted).toEqual(pregunta);
  });

  it("inserts detalleNoticia", async () => {
    const comentarios = db.collection("detalleNoticia");
    let id = ObjectID();
    const pregunta = {
      _id: id,
      contenido: "Contenido",
      votos: [],
      comentarios: [],
    };
    await comentarios.insertOne(pregunta);

    const inserted = await comentarios.findOne({ _id: id });
    expect(inserted).toEqual(pregunta);
  });
});
