
let minimo=1;
let maximo=100;
let nuevoNumero=0;
let va=0;

function mostrarBotones(){
    document.getElementById("numeroMenor" ).style.visibility="visible";
    document.getElementById("numeroMayor").style.visibility="visible";
    document.getElementById("numeroCorrecto").style.visibility="visible";
}

function mostrarNumero(numero){
    let numer=document.querySelector("h2");
    numer.innerHTML=`El numero que estas pensando es:`;
    let nume=document.querySelector("h3");
    nume.innerHTML=`${numero}`;
   

}



function generarNumero(minimo, maximo) {
    nuevoNumero = (Math.floor(Math.random() *maximo - minimo+ 1))+minimo;
    console.log("numero maximo FUNCION "+maximo);
    console.log("numero minimo FUNCION " +minimo);
    return nuevoNumero;

}

function comenzarJuego(){
    document.getElementById("botonComenzar").style.visibility="hidden";
    mostrarBotones();
    va= generarNumero(1,100);
    mostrarNumero(va);
    



    
}

function numeroMenorFun(){
    maximo=va-1;
    va= generarNumero(minimo,maximo);
    mostrarNumero(va);
    

   // let nnnn=document.getElementById("numero");
    //console.log(nnnn);

    

}

function numeroMayorFun(){
    minimo = va + 1;
    if (minimo <= maximo) {
        va = generarNumero(minimo, maximo);
        mostrarNumero(va);
    } else {
        alert("Ya no quedan números menores disponibles");
    }
   

}

function numeroCorrectoFun(){
    alert("¡Adiviné tu número!");

}