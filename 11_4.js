function numberChecker(num){
    if (num <= 1 || num >= 1000){
      console.log('Введите число больше 1, но меньше 1000');
      return false;
    } else {
      for(let i = 2; i < num; i++){
        if(num % i === 0){
          console.log('Число НЕ является простым');
          return false;
        }
      }
      
      console.log('Число является простым');
      return true;  
    }
  }
  
  numberChecker(17);