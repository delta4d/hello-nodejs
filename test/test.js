"use strict";

var expect = require("chai").expect;
var hello  = require("../index");

describe("#hello", () => {
    it("should say hello to nodejs", () => {
        var result = hello();
        expect(result).to.equal("hello nodejs");
    });

    it("should say hello to world", () => {
        var result = hello("world");
        expect(result).to.equal("hello world");
    });
});
