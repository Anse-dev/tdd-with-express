const request = require("supertest");
const app = require("../app");
const User = require("../src/user/User");
const sequelize = require("../src/config/config");

beforeAll(() => {
  return sequelize.sync();
});
beforeEach(() => {
  return User.destroy({ truncate: true });
});
describe("User Registration", () => {
  const postValidUser = () => {
    return request(app).post("/api/1.0/users").send({
      username: "jean",
      email: "email",
      password: "password",
    });
  };
  it("Returns 200  when request is valid", (done) => {
    postValidUser().then((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toBe("jean");
      done();
    });
  });
  it("Returns 404  when request is valid", (done) => {
    request(app)
      .post("/api/1.0/users")
      .send({
        username: "",
        email: "email",
        password: "password",
      })
      .then((response) => {
        expect(response.status).toBe(404);
        done();
      });
  });
  it("Save user on database", (done) => {
    postValidUser().then(() => {
      User.findAll().then((users) => {
        expect(users.length).toBe(1);
        done();
      });
    });
  });
  it("Hash password in database", (done) => {
    postValidUser().then(() => {
      User.findAll().then((users) => {
        const user = users[0];
        expect(user.password).not.toBe("password");
        done();
      });
    });
  });
});
