var calcBtns = Array.from(document.querySelectorAll('button'));
var display = document.querySelector('.show');


calcBtns.forEach(button => {
  button.addEventListener('click', (event) => {
    switch(event.target.innerHTML){
      case 'RESET':
        display.innerHTML = '';
        break;
      case 'DEL':
          display.innerHTML = display.innerHTML.slice(0, -1);
         break;
      case '=':
          display.innerHTML = eval(display.innerHTML.replace('x', '*'));
        break;
      default: 
        display.innerHTML += event.target.innerHTML;
    }
  })
});

