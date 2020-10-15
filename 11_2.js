let arr = [4, 8, null, 16, 23, 'IDDQD', 42];

function checkArray(array, even, odd){
  for (let i = 1; i <= array.length; i++) {
    if (typeof array[i] == 'number' && !isNaN(array[i])){
      if (array[i] % 2 == 0){
        even++;
      } else {
        odd++;
      }
    }
  }

  console.log(`Чётных чисел: ${even}`);
  console.log(`Нечётных чисел: ${odd}`);
  console.log(`Значение нулевого элемента: ${arr[0]}`);
}

checkArray(arr, 0, 0);