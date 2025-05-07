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

//!Problem-5
//!Problem-6
//!Problem-7
//!Problem-8
