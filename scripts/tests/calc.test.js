const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition funtion", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("should return 14 for 10 + 4", () => {
            expect(addition(10, 4)).toBe(14);
        })
        test("should return -5 for 10 + -15", () => {
            expect(addition(10, 4)).toBe(14);
        })
        test("should return 40 for 10 + 10 + 10 + 10", () => {
            expect(addition(10, 10, 10, 10)).toBe(40);
        })
        test("should return 'Only enter numbers'", () => {
            expect(addition("Test String")).toEqual("Only enter numbers");
        })
        test("should return 'Only enter numbers'", () => {
            expect(addition(2, "donkey")).toEqual("Only enter numbers");
        })
        test("should return 'You must enter at least 2 inputs'", () => {
            expect(addition()).toEqual("You must enter at least 2 inputs");
        })
        test("should return 'You must enter at least 2 inputs'", () => {
            expect(addition(5)).toEqual("You must enter at least 2 inputs");
        })
    });

    describe("Subtraction funtion", () => {

    });

    describe("Multiplication funtion", () => {

    });

    describe("Division funtion", () => {

    });
})