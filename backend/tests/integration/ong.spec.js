const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
describe("ONG", async () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create new ong", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "ONGA",
        email: "ONG@apad.com.br",
        whatsapp: "11999223222",
        city: "São Paulo",
        uf: "SP"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
