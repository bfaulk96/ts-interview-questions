import { isInteger } from "./isInteger";
import { isAnagram } from "./anagram";
import { sum } from "./sum";

describe.skip("isIneger()", () => {
  it("works with 1", () => {
    expect(isInteger(1)).toBe(true);
  });
  it("works with 1.1", () => {
    expect(isInteger(1.1)).toBe(false);
  });
  it("works with '1.123'", () => {
    expect(isInteger("1.123")).toBe(false);
  });
  it("works with false", () => {
    expect(isInteger(false)).toBe(false);
  });
  it("works with undefined", () => {
    expect(isInteger(undefined)).toBe(false);
  });
});

describe.skip("sum()", () => {
  it("works with normal invocation", () => {
    expect(sum(2, 3)).toBe(5);
  });
  it("works with many number invocation", () => {
    expect((sum as any)(2, 3, 4, 5)).toBe(14);
  });
  it("works with 0 invocation", () => {
    expect(sum(2)).toBe(2);
  });
  it("works with 0 invocation", () => {
    expect(sum(6, 0)).toBe(6);
  });
});

describe("isAnagram", () => {
  it("returns true ignoring case", () => {
    expect(isAnagram("finder", "Friend")).toBe(true);
  });

  it("returns false when strings are different length and not anagram", function () {
    expect(isAnagram("car", "yellow")).toEqual(false);
  });

  it("returns false when strings are same length and not anagrams", function () {
    expect(isAnagram("black", "green")).toEqual(false);
  });

  it("returns false when strings have same characters and not anagrams", function () {
    expect(isAnagram("laashes", "hassle")).toEqual(false);
  });

  it("returns true when strings are anagrams", function () {
    expect(isAnagram("listen", "silent")).toEqual(true);
    expect(isAnagram("lashes", "hassle")).toEqual(true);
  });

  it("returns true when strings are anagrams and have spaces in the middle", function () {
    expect(isAnagram("dormitory", "dirty room")).toEqual(true);
  });

  it("returns true when strings are anagrams with repeating letters", function () {
    expect(isAnagram("dad", "add")).toEqual(true);
  });

  it("returns false when strings are not anagrams with repeating letters", function () {
    expect(isAnagram("abb", "aab")).toEqual(false);
  });

  it("returns true if there are spaces in and around the words", () => {
    expect(isAnagram("fi n d  er  ", "frie n d")).toBe(true);
  });
});
