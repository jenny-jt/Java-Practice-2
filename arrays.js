"use strict";


// 1. printIndices
  //Print each item in the list, followed by its index.

function printIndices(items) {
  for (const i in items) {
    console.log(`{item[i]} {i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Print a list of every other item in `items`
  const printedList = []
  for (const i in items) {
    if (i%2 === 0) {
      printedList.push(item[i])
    }
  }
  console.log(printedList)
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Print a list of the `n` smallest integers in `items`.
  const sortedItems = items.sort((a,b) => a-b);
  const nItems = items.slice(0,n);
  nItems.reverse()

  console.log(nItems)
}
