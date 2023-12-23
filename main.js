function bubbleSort(arr) {
    var len = arr.length;
    var swapped;
    do {
      swapped = false;
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements if they are in the wrong order
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  // Contoh penggunaan
  var arrayToSort = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array sebelum diurutkan: " + arrayToSort);
  var sortedArray = bubbleSort(arrayToSort);
  console.log("Array setelah diurutkan: " + sortedArray);
  