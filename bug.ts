function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // this works fine

// Now let's make it generic 
function printAnything<T>(n: T): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printAnything(5); // Error!