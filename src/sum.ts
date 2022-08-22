// Write a sum method which will work properly when invoked using either syntax below.
//  Note that number of arguments should be dynamic; overloads are simply being used for initial typing.

// console.log(sum(2));   // Outputs 2
// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2, 3, 4, 5));  // Outputs 14

export function sum(a: number): number;
export function sum(a: number, b: number): number;
export function sum(a: number, b: number, c: number): number;
export function sum() {
  return 0;
}
