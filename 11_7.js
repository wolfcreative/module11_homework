function getNumbers(a, b) {
    let i = a;
  
    let timer = setInterval(function() {
      console.log(i);
      
      if (i == b) {
        clearInterval(timer);
      }
      
      i++;
    }, 1000);
  }
  
  getNumbers(5, 15);