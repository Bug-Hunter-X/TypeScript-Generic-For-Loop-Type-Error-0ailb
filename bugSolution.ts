function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // this works fine

// Solution 1: Constrain the type parameter
function printAnythingNumber<T extends number>(n: T): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printAnythingNumber(5); // Works!

// Solution 2: Type Guard (more flexible)
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function printAnythingFlexible<T>(n: T): void {
  if (isNumber(n)) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  } else {
    console.log('Not a number!');
  }
}

printAnythingFlexible(5); // Works!
printAnythingFlexible('hello'); // Handles non-numbers