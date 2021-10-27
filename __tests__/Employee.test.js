
const { expect, test } = require("@jest/globals");
const getName = require("../lib/Employee");

test("checks if name is truthy", () => {
    expect(getName).toBeTruthy();  
})
const getId = require("../lib/Employee");

test("checks if id is truthy", () => {
    expect(getId).toBeTruthy();
})
const getEmail = require("../lib/Employee");

test("checks if email is truthy", () => {
    expect(getEmail).toBeTruthy();
})
const getRole = require("../lib/Employee");

test("checks if role is truthy", () => {
    expect(getRole).toBeTruthy();
})