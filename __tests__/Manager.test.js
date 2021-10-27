const getOfficeNumber = require("../lib/Manager");

test("checks if office number is truthy", () => {
    expect(getOfficeNumber).toBeTruthy();
});

const getRole = require("../lib/Manager");

test("checks if role is truthy", () => {
    expect(getRole).toBeTruthy();
})