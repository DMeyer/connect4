const { it, test, expect } = require("@jest/globals");
const mongoose = require("mongoose");
const dbHandler = require("./db-handler");
const userService = require("../services/user.service");
const User = require("../models/user.model");
const request = require("supertest");
const app = require("../app");

describe("User Model", () => {
  /**
   * Connect to a new in-memory database before running any tests.
   */
  beforeAll(async () => await dbHandler.connect());

  /**
   * Clear all test data after every test.
   */
  afterEach(async () => await dbHandler.clearDatabase());

  /**
   * Remove and close the db and server.
   */
  afterAll(async () => await dbHandler.closeDatabase());

  describe("POST /api/auth/signup", function () {
    const user = {
      email: "test@test.com",
      password: "123456",
    };

    it("responds with json", function (done) {
      request(app)
        .post("/api/auth/signup")
        .send(user)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });
});
