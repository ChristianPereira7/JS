
function azul(){
    limpar();
    document.getElementById("titulo").classList.add('azul');
}

function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}


function verde(){
    limpar();
    document.getElementById("titulo").classList.add('verde');
}

function limpar(){
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('verde');
}



/* Evento de Teclado
function digitou(e){
    if(e.keyCode == 13){ //Enter
        let texto = document.getElementById("campo").value;

        console.log(texto);
    }
}
/*

/* Evento de teclado
function digitou(){
    console.log("Usuário está digitando");
}
*/

/* Evento de clique
function clicou(){
    document.getElementById("titulo").innerHTML= "Texto 2";
}
*/

/* Função
function somar(x, y){
    let total = x + y;

    return total;
}

let resultado = somar(25, 100);

console.log(resultado);
*/

/*
    function alterar(titulo){
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;

}

alterar("Título de exemplo");
*/

/*  Função

    function alterar(){
    document.getElementById("titulo").innerHTML = "Título alterado";
    document.getElementById("campo").value = "Campo alterado";

}

alterar();
*/

/*
 let campo = document.getElementById("campo")
campo.value = "Nome do usuário";
*/

/* 
let titulo = document.getElementById('titulo');

titulo.innerHTML = "Segundo Título";
*/

/*  
document.getElementById("titulo").innerHTML = "Olá Mundo!";
*/

/* básico de JS
let nome = "teste";
let idade = 100;
let salvo = true;

let tipo = typeof idade;

console.log(tipo);
*/


