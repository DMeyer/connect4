
const add = (a, b) => a + b;

test("2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

// const { it } = require("@jest/globals");
// const mongoose = require("mongoose");
// const dbHandler = require("./db-handler");
// const userService = require("../services/user.service");
// const User = require("../models/user.model");
// const request = require("supertest");
// const app = require("../app");

// describe("User Model", () => {
//   /**
//    * Connect to a new in-memory database before running any tests.
//    */
//   beforeAll(async () => await dbHandler.connect());

//   /**
//    * Clear all test data after every test.
//    */
//   afterEach(async () => await dbHandler.clearDatabase());

//   /**
//    * Remove and close the db and server.
//    */
//   afterAll(async () => await dbHandler.closeDatabase());

//   it("create & save user successfully", async () => {
//     const user = new User({
//       email: "test-user@test.com",
//       password: "123456",
//     });

//     const savedUser = await user.save();

//     expect(savedUser._id).toBeDefined();
//     expect(savedUser.name).toBe(user.name);
//     expect(savedUser.email).toBe(user.email);
//   });

//   it("insert user successfully, but the field does not defined in schema should be undefined", async () => {
//     const userWithInvalidField = new User({
//       email: "test-user@test.com",
//       password: "123456",
//       name: "TekLoon",
//     });
//     const savedUserWithInvalidField = await userWithInvalidField.save();
//     expect(savedUserWithInvalidField._id).toBeDefined();
//     expect(savedUserWithInvalidField.name).toBeUndefined();
//   });

//   it("create user without required field should failed", async () => {
//     const userWithoutRequiredField = new User({ email: "test-user@test.com" });
//     let err;
//     try {
//       const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
//       error = savedUserWithoutRequiredField;
//     } catch (error) {
//       err = error;
//     }
//     expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
//     expect(err.errors.password).toBeDefined();
//   });
// });
