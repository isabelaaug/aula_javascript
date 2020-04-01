/* var nome = "Isabela Augusta";
var num1 = 5;
var num2 = 10;
var frase = "Japão é um país";
alert("Olá, " + nome + "!");
alert(num1 + num2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
var lista = ["manga", "uva", "maçã", "salada mista"];
lista.push("banana");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista[2]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
var fruta = {nome:"maça", cor:"verde"};
console.log(fruta.nome);
alert(fruta.cor);
var frutas = [{nome:"maça", cor:"verde"}, {nome:"uva", cor:"roxo"}, {nome:"banana", cor:"amarelo"}];
console.log(frutas);
alert(frutas[1].nome); 

var idade = prompt("Qual sua idade? ")

if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
} 

var count = 0;

while(count < 5){
    console.log(count);
    alert(count);
    // count = count + 1;
    count++
} 

var count;

for(count=0; count<=5; count++){
    alert(count);
} 

var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours())

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Japão é um país", "Japão", "Brasil"))

function validaIdade(idade){
    var validador;
    if (idade >= 18){
        validador = true
    }else{
        validador = false
    }
    return validador; 
}

var idade = prompt("Qual sua idade? ")
console.log(validaIdade(idade)) 


function soma(n1,n2){
    return n1 + n2;
}
alert(soma(5,10))
*/

function botao(){
    //alert("Obrigada por clicar!")
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar!!</b>";
    console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    // window.open("https://digitalinnovation.one/");  // outra aba
    window.location.href = "https://digitalinnovation.one/"; // mesma aba
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML="<b>Obrigado por passar o mouse!!</b>";
    // alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse!!"
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML="<b>Passe o mouse aqui!!</b>";
    elemento.innerHTML = "Passe o mouse aqui!!"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}