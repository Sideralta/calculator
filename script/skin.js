let skin = document.getElementById('skin');
const calcBox = document.querySelector('.calc-box');
const calc = document.querySelector('.calc');
const btn =  document.querySelectorAll('.btn');
const memory = document.querySelector('.memory');
const operador = document.querySelectorAll('.operator');


skin.addEventListener('click', function(){
   
    calcBox.classList.toggle("calc-box2");
    calc.classList.toggle("calc2");
    memory.classList.toggle("memory2");

    operador.forEach(op => {
        op.classList.toggle("operator2");

        
    });
   

    btn.forEach(btn => {
        btn.classList.toggle("btn2");
        
    });
    
   
});