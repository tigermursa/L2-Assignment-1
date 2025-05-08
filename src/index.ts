function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toUpperCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const newArray = items.filter((item) => item.rating >= 4);
  return newArray;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArray: T[] = [];
  for (let arr of arrays) {
    newArray.push(...arr);
  }
  return newArray;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make:${this.make},Year:${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(model: string, year: number, make: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model:${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    const length = value.length;
    return length;
  } else {
    const multiplied = value * 2;
    return multiplied;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  let finalProduct = products.reduce((acc, cur) => {
    return acc.price >= cur.price ? acc : cur;
  });
  return finalProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekday";
  } else {
    return "Weekend";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((res, rej) => {
    if (n < 0) {
      rej(new Error("Negative number not allowed"));
    } else
      setTimeout(() => {
        res(n * n);
      }, 1000);
  });
}
