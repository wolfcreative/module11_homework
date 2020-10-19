let arr = [4, 8, null, 16, 23, 'IDDQD', 42, 0];

function checkArray(array){
  let even = 0;
  let odd = 0;
  let zero = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof arr[i] == 'number' && !isNaN(arr[i])){
      if (arr[i] === 0) {
        zero++;
      } else if (arr[i] % 2 == 0){
        even++;
      } else {
        odd++;
      }
    }
  }

  console.log(`Чётных чисел: ${even}`);
  console.log(`Нечётных чисел: ${odd}`);
  console.log(`Нулей: ${zero}`);
}

checkArray(arr);

// Почти верно, но обход массива содержит ошибку - вы начинаете с элементом под индексом 1, который по факту является вторым элементом массива, т.к. в массивах нумерация индексов начинается с 0. Из-за этого первый элемент массива не обрабатывается и не учитывается при подсчёте.