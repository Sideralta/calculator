const igualbtn = document.querySelector('.igual-btn');
const bluebtn = document.getElementById('bluebtn');
const greybtn = document.getElementById('greybtn');
const orangebtn = document.getElementById('orangebtn');
/* const num = document.querySelector('.number'); */
const calcBox = document.querySelector('.calc-box');
const calc = document.querySelector('.calc');
const btn =  document.querySelectorAll('.btn');
const memory = document.querySelector('.memory');
const operador = document.querySelectorAll('.operator');



// change to blue skin
bluebtn.addEventListener('click', function(){

    if (calcBox.classList.contains('calc-box')) {
        calcBox.classList.replace("calc-box","calc-box2");
        calc.classList.replace("calc","calc2");
        memory.classList.replace("memory","memory2");
       igualbtn.classList.replace("igual-btn", "igual-btn2");
       
    
        operador.forEach(op => {
            op.classList.replace("operator","operator2");
    
            
        });
       
    
        btn.forEach(btn => {
            btn.classList.replace("btn","btn2");
            
        });
        

    }

    else if (calcBox.classList.contains('calc-box3')){
        calcBox.classList.replace("calc-box3","calc-box2");
        calc.classList.replace("calc3","calc2");
        memory.classList.replace("memory3","memory2");
        igualbtn.classList.replace("igual-btn3", "igual-btn2");
       
    
        operador.forEach(op => {
            op.classList.replace("operator3","operator2");
    
            
        });
       
    
        btn.forEach(btn => {
            btn.classList.replace("btn3","btn2");
            
        });

    }
   
   
  
   
});

// change to grey skin
greybtn.addEventListener('click', function(){

    if (calcBox.classList.contains('calc-box2')){
        calcBox.classList.replace("calc-box2","calc-box");
        calc.classList.replace("calc2","calc");
        memory.classList.replace("memory2","memory");
        igualbtn.classList.replace("igual-btn2", "igual-btn");
    
        operador.forEach(op => {
            op.classList.replace("operator2","operator");
    
            
        });
       
    
        btn.forEach(btn => {
            btn.classList.replace("btn2","btn");
            
        });

    }
   
    else if (calcBox.classList.contains('calc-box3')){
        calcBox.classList.replace("calc-box3","calc-box");
        calc.classList.replace("calc3","calc");
        memory.classList.replace("memory3","memory");
        igualbtn.classList.replace("igual-btn3", "igual-btn");
    
        operador.forEach(op => {
            op.classList.replace("operator3","operator");
    
            
        });
       
    
        btn.forEach(btn => {
            btn.classList.replace("btn3","btn");
            
        });

    }
   
    
   
});
// change to orange skin
orangebtn.addEventListener('click', function(){

    if (calcBox.classList.contains('calc-box2')){
        calcBox.classList.replace("calc-box2","calc-box3");
        calc.classList.replace("calc2","calc3");
        memory.classList.replace("memory2","memory3");
        igualbtn.classList.replace("igual-btn2", "igual-btn3");
    
        operador.forEach(op => {
            op.classList.replace("operator2","operator3");
    
            
        });
       
    
        btn.forEach(btn => {
            btn.classList.replace("btn2","btn3");
            
        });

    }
   
    else if (calcBox.classList.contains('calc-box')){
        calcBox.classList.replace("calc-box","calc-box3");
        calc.classList.replace("calc","calc3");
        memory.classList.replace("memory","memory3");
        igualbtn.classList.replace("igual-btn", "igual-btn3");
    
        operador.forEach(op => {
            op.classList.replace("operator","operator3");
    
            
        });
       
    
        btn.forEach(btn => {
            btn.classList.replace("btn","btn3");
            
        });

    }
   
    
   
});