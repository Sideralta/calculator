const displayValorAnterior = document.getElementById('memory');
const displayValorActual = document.getElementById('result');
const botonesNumeros = document.querySelectorAll('.number');
const botonesOperadores = document.querySelectorAll('.operator');
const igual = document.getElementById('igual');
const reset = document.getElementById('ac');
let memoria;


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
    if(tecla == '+' || tecla ==  '-' || tecla == '*' || tecla == '/'){
        operator(tecla);
        
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
        else if (char === '='){

        }

    }
    
    switch (op){
        case '+':
           resultado = parseInt(displayValorAnterior.innerHTML.slice(0, -1)) + parseInt(displayValorActual.innerHTML);
           break;
        case 'x':
            resultado = parseInt(displayValorAnterior.innerHTML.slice(0, -1)) * parseInt(displayValorActual.innerHTML);
            break;
        case '-':
            resultado = parseInt(displayValorAnterior.innerHTML.slice(0, -1)) - parseInt(displayValorActual.innerHTML);
            break;
        case '/':
            resultado = parseInt(displayValorAnterior.innerHTML.slice(0, -1)) / parseInt(displayValorActual.innerHTML);
            break;    
    }

    displayValorAnterior.innerHTML = displayValorAnterior.innerHTML + displayValorActual.innerHTML + '=';
    displayValorActual.innerHTML = resultado;


}