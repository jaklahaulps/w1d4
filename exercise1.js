function findWaldo(arr, found) {
  arr.forEach( (element, index) => {
    if (element === "Waldo"){
      found(index);
    }
  });

  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
}

function actionWhenFound(indexPos) {
  console.log("Found Waldo at index" + indexPos + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);