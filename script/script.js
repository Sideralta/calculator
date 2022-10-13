const displayValorAnterior = document.getElementById('memory');
const displayValorActual = document.getElementById('result');
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operator');
const igual = document.getElementById('igual');
const reset = document.getElementById('ac');
let memoria;
let memoria1;



// toma el valor del boton numero con un evento    
        for (let boton of botonesNumeros){

            boton.addEventListener('click', function(e){
                
          addCurrentNumber(e.target.innerHTML);  
          
                })    
        };

        //Reconoce el numero marcado con el teclado
    window.addEventListener('keydown', function (e) {
        let tecla = e.key;
        if(parseInt(tecla) >= 0 && parseInt(tecla) <= 9 || tecla == '.'){
            addCurrentNumber(tecla)
        }
        
    })



// toma el valor del boton operador con un evento

for (let operador of botonesOperadores){
    
    operador.addEventListener('click', function (e){
        operator(e.target.innerHTML);
    })
};

//muestra en pantalla el operador al precionar la tecla
window.addEventListener('keydown', function (e) {
    let tecla = e.key;
    if(displayValorActual.innerHTML === ''){
        return;
    }
    else if(tecla == '+' || tecla ==  '-' || tecla == '/'){
        operator(tecla);
        
    }
    else if (tecla == '*'){
        operator('x');
    }
    
});

// permite borrar el valor escritor al tocar la tecla Backspace
window.addEventListener('keydown', function (e) {
    if(e.key == 'Backspace'){
      displayValorActual.innerHTML = displayValorActual.innerHTML.slice(0, -1);
    }

});



// ejecuta la operacion al apretar boton igual

igual.addEventListener('click', function(e){
    if(displayValorAnterior.innerHTML === ''){
        return;
    }
    else{
        calcular();

    }
    
});

//calcula presionando tecla Enter
window.addEventListener('keydown', function(e) {
    if (e.key == 'Enter'){
        if(displayValorAnterior.innerHTML === ''){
            return;
        }
        else{
            calcular();
    
        }
    }

});


function addCurrentNumber (num){
    if (displayValorAnterior.innerHTML === ''){

    if (displayValorActual.innerHTML.length <12){
        displayValorActual.innerHTML = displayValorActual.innerHTML + num;
        

    }
}
else if (displayValorAnterior.innerHTML.slice(0, -1) === displayValorActual.innerHTML) {
   displayValorActual.innerHTML = num;
   memoria = num;


}
else {
    displayValorActual.innerHTML = displayValorActual.innerHTML + num;
}
    
}

function operator (op){
    // si presiona AC resetea la calculadora
    if (op == 'AC'){
        displayValorActual.innerHTML = '';
        displayValorAnterior.innerHTML = '';
        return;
    }
    
displayValorAnterior.innerHTML = displayValorActual.innerHTML + op;



}

function calcular(){

    let op;
    let resultado;
    for (let char of displayValorAnterior.innerHTML){
        if (char === '+' || char === '-' || char === 'x' || char === '/'){
            op = char;
        }
       

    }
    for (let char of displayValorAnterior.innerHTML){
        if (char === '='){
            resultado = operaciones(parseFloat(displayValorActual.innerHTML),parseFloat(memoria),op);
            displayValorAnterior.innerHTML = memoria1 + op + memoria + '=';
    displayValorActual.innerHTML = resultado;
    memoria1 = resultado;
    

            return;
        }
       

    }


     
    
    resultado = operaciones(parseFloat(displayValorAnterior.innerHTML.slice(0, -1)), parseFloat(displayValorActual.innerHTML), op);
    memoria1 = resultado;
   

    displayValorAnterior.innerHTML = displayValorAnterior.innerHTML + displayValorActual.innerHTML + '=';
    displayValorActual.innerHTML = resultado;


}

function operaciones (num1, num2, op){
    let resultado;
    console.log(num1);
    console.log(num2);
    console.log(op);

    switch (op){
        case '+':
           resultado = num1 + num2;
           break;
        case 'x':
            resultado = num1 * num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;    
    }
    console.log(resultado);
return resultado;

}