const getGithub = require("../lib/Engineer");

test("checks if github is truthy", () => {
    expect(getGithub).toBeTruthy();
});

const getRole = require("../lib/Engineer");

test("checks if role is truthy", () => {
    expect(getRole).toBeTruthy();
});