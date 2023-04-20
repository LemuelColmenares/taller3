function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento; 
        });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana() {
    const entradaMediana = document.getElementById("inputMediana");
    const medianaValue = entradaMediana.value;
    let arrayMediana = Array.from(medianaValue.split(","), Number);


const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
const mitadLista = parseInt(listaOrdenada.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    }else{
        return false
    }
}

let mediana;

if(esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];
    
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
} else {
    mediana = listaOrdenada[mitadLista];
}

const mostrarResultado = document.getElementById("resultadoMediana");
mostrarResultado.innerText = "La mediana es de: " + mediana;
}












/* 
const lista1 = [
   100,
   200,
   500,
   40000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
   if (numerito % 2 === 0){
   return true;
   } else {
       return false;
   }
}

let mediana;


if (esPar (lista1.length)){
   const elemento1 =  lista1[mitadLista1 - 1];
   const elemento2 = lista1[mitadLista1];   
   
   
   const promedioElemento1y2 = calcularMediaAritmetica([
       elemento1,
       elemento2,
   ]);

   mediana = promedioElemento1y2;
} else {
   mediana = lista1[mitadLista1];
}
*/