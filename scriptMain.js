// variables
let multiplicador = 1;
let intervalo=false;
let contador = 0;
let autoClicks = 0;
let monedasXSegundo = 0;
let tier = 1;

//niveles
let nivelArma = 1;
let nivelSoldado = 1;
let nivelSargento = 1;
let nivelCapitan = 1;

let nivelPowerUps = 1;
let nivelTalentos = 1;
let nivelReliquias = 1;

//Costes tropas
let costeArma = 10;
let costeSoldado = 15;
let costeSargento = 25;
let costeCapitan = 35;

let costePowerUps = 10;
let costeTalentos = 15;
let costeReliquias = 20;

//Declaracion de los elementos principales
const monedaPrincipal = document.getElementById('monedaClickable');
const objetosMejoras = document.getElementsByClassName('contenedorMejoras');
const objetosTienda = document.getElementsByClassName('contenedorTienda');

//Declaracion de los inputs por pantalla primera columna
const monedasSegundoGeneral = document.getElementById('displayMonedasSegundo');
const monedasSegundoParcial = document.getElementById('informacionMoneda1');

//Declaracion de los inputs por pantalla segunda columna
const lvlCountArma = document.getElementById('levelCountArma');
const lvlCountSoldado = document.getElementById('levelCountSoldado');
const lvlCountSargento = document.getElementById('levelCountSargento');
const lvlCountCapitan = document.getElementById('levelCountCapitan');

const costeArmaVer = document.getElementById('costeArma');
const costeSoldadoVer = document.getElementById('costeSoldado');
const costeSargentoVer = document.getElementById('costeSargento');
const costeCapitanVer = document.getElementById('costeCapitan');

//Mostrar por pantalla la segunda columna 
lvlCountArma.textContent = `Nivel: ${nivelArma}`;
costeArmaVer.textContent = `${costeArma}`;
lvlCountSoldado.textContent = `Nivel: ${nivelSoldado}`;
costeSoldadoVer.textContent = `${costeSoldado}`;
lvlCountSargento.textContent = `Nivel: ${nivelArma}`;
costeSargentoVer.textContent = `${costeSargento}`;
lvlCountCapitan.textContent = `Nivel: ${nivelCapitan}`;
costeCapitanVer.textContent = `${costeCapitan}`;

//Declaracion de los inputs por pantalla tercera columna
const lvlCountPowerUps = document.getElementById('levelCountPowerUps');
const lvlCountTalentos = document.getElementById('levelCountTalentos');
const lvlCountReliquias = document.getElementById('levelCountReliquias');

const costePowerUpsVer = document.getElementById('costePowerUps');
const costeTalentosVer = document.getElementById('costeTalentos');
const costeReliquiasVer = document.getElementById('costeReliquias');

//Mostrar por pantalla la tercera columna 
lvlCountPowerUps.textContent = `Nivel: ${nivelPowerUps}`;
costePowerUpsVer.textContent = `${costePowerUps}`;
lvlCountTalentos.textContent = `Nivel: ${nivelTalentos}`;
costeTalentosVer.textContent = `${costeTalentos}`;
lvlCountReliquias.textContent = `Nivel: ${nivelReliquias}`;
costeReliquiasVer.textContent = `${costeReliquias}`;

//Métodos
function imprimirMonedas(){
    monedasSegundoGeneral.innerHTML = `<strong>Monedas totales: ${Math.round(contador)} </strong>`; 
}
function imprimirMonedasSegundo(){
    monedasSegundoParcial.innerHTML = `<h4>Monedas/s:</h4> <br> <span>${monedasXSegundo}</span> <br> Tier: ${tier}`;
}

imprimirMonedas();
imprimirMonedasSegundo();

//Funcion autoclick
function autoClick(){
    // Establecer el intervalo solo si no está en funcionamiento
    if (intervalo==false) {
        intervalo=true;
        // Usar setInterval para sumar monedas cada 100 ms (1 segundo)
        intervalo = setInterval(() => {
            contador += autoClicks;
            imprimirMonedas();
        //Gestion de unidades
        if(contador>=100){
            monedaPrincipal.src = "img/nivel 1/1.png";
            tier = 2;
            imprimirMonedasSegundo();
        }
        }, 10);
    }
}
// Método para contar el click
monedaPrincipal.addEventListener('click', () => {  
    contador = contador + multiplicador;  

    // Actualizar la visualización del contador
    imprimirMonedas();
});

//Método para el multiplicador de clicks - ARMA
objetosMejoras[0].addEventListener('click', () => {
    if(contador>=costeArma){
        contador=contador-costeArma;
        costeArma = Math.trunc(costeArma+(nivelArma*15));
        imprimirMonedas();
        costeArmaVer.textContent = `${costeArma}`;
        multiplicador++;
        nivelArma ++;
        lvlCountArma.textContent = `Nivel: ${nivelArma}`;
    }
});

//Método para el autoclick del Soldado (Aumenta en 1)
objetosMejoras[1].addEventListener('click', () => {
    if(contador>=costeSoldado){
        contador = contador - costeSoldado;
        costeSoldado = Math.trunc(costeSoldado +(nivelSoldado*25) );
        imprimirMonedas();
        costeSoldadoVer.textContent = `${costeSoldado}`;
        nivelSoldado++;
        autoClicks += 0.01;
        monedasXSegundo = Math.round(autoClicks * 100);
        imprimirMonedasSegundo();
        lvlCountSoldado.textContent = `Nivel: ${nivelSoldado}`;

        autoClick();
    }
});

//Método para el autoclick del Sargento (Aumenta en 3)
objetosMejoras[2].addEventListener('click', () => {
    if(contador>=costeSargento){
        contador = contador - costeSargento;
        costeSargento = Math.trunc(costeSargento +(nivelSargento*25) );
        imprimirMonedas();
        costeSargentoVer.textContent = `${costeSargento}`;
        nivelSargento++;
        autoClicks += 0.03;
        monedasXSegundo = Math.round(autoClicks * 100);
        imprimirMonedasSegundo();
        lvlCountSargento.textContent = `Nivel: ${nivelSargento}`;

        autoClick();
    }
});

//Método para el autoclick del Capitan (Aumenta en 5)
objetosMejoras[3].addEventListener('click', () => {
    if(contador>=costeCapitan){
        contador = contador - costeCapitan;
        costeCapitan = Math.trunc(costeCapitan +(nivelCapitan*25) );
        imprimirMonedas();
        costeCapitanVer.textContent = `${costeCapitan}`;
        nivelCapitan++;
        autoClicks += 0.05;
        monedasXSegundo = Math.round(autoClicks * 100);
        imprimirMonedasSegundo();
        lvlCountCapitan.textContent = `Nivel: ${nivelCapitan}`;

        autoClick();
    }
});