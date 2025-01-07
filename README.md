# TypeScript Generic For Loop Type Error

This repository demonstrates a common type error encountered when using generics in TypeScript for loops.  The error arises because TypeScript cannot reliably infer the type of a generic parameter used within a numerical comparison in a loop.

## The Bug

The `printAnything` function attempts to generalize the `printNumbers` function to work with any type `T`. However, the loop condition `i <= n` fails type checking because TypeScript cannot guarantee that `n` is a number, even if it's called with a number.  The compiler will throw a type error.

## The Solution

The solution involves either constraining the type parameter `T` to be a number or providing a more sophisticated type guard to check for numerical values.