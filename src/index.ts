//!Problem-1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toUpperCase();
  }
}

//console.log(formatString("mursalin", true));

//!Problem-2
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book A", rating: 4.0 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

type input = {
  items: { title: string; rating: number }[];
};

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const newArray = items.filter((item) => item.rating >= 4);
  return newArray;
}

//console.log(filterByRating(books));

//!Problem-3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArray: T[] = []; //Q...,
  for (let arr of arrays) {
    newArray.push(...arr);
  }
  return newArray;
}

//console.log(concatenateArrays(["a", "b"], ["c"], ["d"]));

//!Problem-4
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make:${this.make},Year:${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(model: string, year: number, make: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model:${this.model}`);
  }
}

// const myCar = new Car("walton", 2000, "hello");
// myCar.getInfo();
// myCar.getModel();

//!Problem-5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    const length = value.length;
    return length;
  } else {
    const multiplied = value * 2;
    return multiplied;
  }
}

// console.log(processValue(5));
//!Problem-6
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

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 250 },
//   { name: "Bag", price: 50 },
// ];
// console.log(getMostExpensiveProduct(products));

//!Problem-7

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

// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));

//!Problem-8
async function squareAsync(n: number): Promise<number> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (n < 0) {
        rej(new Error("negative number not allowed!!"));
      } else {
        res(n * n);
      }
    }, 1000);
  });
}
// squareAsync(4).then(console.log);
// squareAsync(-3).then(console.error);
