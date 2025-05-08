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
//!Problem-7
//!Problem-8
