import { expect, test } from "vitest";
import { calculate } from "./calculator";

test("addition of two numbers", () => {
  expect(calculate("+", 9, 10)).toEqual(19);
});

test("addition of two numbers", () => {
  expect(calculate("+", 50, 40)).toEqual(90);
});

test("subtraction of two numbers", () => {
  expect(calculate("-", 4, 6)).toEqual(-2);
});

test("subtraction of two numbers", () => {
  expect(calculate("-", 80, 5)).toEqual(75);
});

test("multiplication of two numbers", () => {
  expect(calculate("*", -6, -8)).toEqual(48);
});

test("multiplication of two numbers", () => {
  expect(calculate("*", 4, 5)).toEqual(20);
});

test("division of two numbers", () => {
  expect(calculate("/", 121, 11)).toEqual(11);
});

test("division of two numbers", () => {
  expect(calculate("/", 20, 2)).toEqual(10);
});

test("sqaure two number", () => {
  expect(calculate("sq", 5)).toEqual(25);
});

test("square two numbers", () => {
  expect(calculate("sq", 3, 44)).toEqual(9);
});

test("unsupported operator", () => {
  expect(() => calculate("%", 124, 56)).toThrow();
});

test("unsupported operator", () => {
  expect(() => calculate("🍕", -41414, 2)).toThrow();
});
