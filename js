let inputAdultos = document.getElementById("adultos");
let inputCrianças = document.getElementById("crianças");
let inputDuraçao = document.getElementById("duraçao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.nodevalue;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + carnePP(duracao) / 2 * criancas;
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + bebidasPP(duracao) / 2 * criancas;
    
    resultado.innerHTML = `<p>$ qdtTotalCarne / 1000 Kg de Carne</p>`
    resultado.innerHTML += `<p>${ Math.ceil(qdtTotalCerveja / 355)}Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)}Ml de Bebidas</p>`
}

function carnePP(duracao){
    if (duracao >= 6)
        return 650;
    else {
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6)
        return 2000;
    else {
        return 1200;
    }
}

function bebidaPP(duracao){
    if (duracao >= 6)
        return 1500;
    else {
        return 1000;
    }
}
