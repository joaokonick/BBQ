let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

function calculate(){

    let adults = inputAdults.value;
    let children = inputChildren.nodevalue;
    let duration = inputDuration.value;

    let meat = meatPP(duration) * adults + meatPP(duration) / 2 * children;
    let beer = beerPP(duration) * adults;
    let allDrinks = drinksPP(duration) * adults + drinksPP(duration) / 2 * children;

    result.innerHTML = `<p>${Math.ceil(meat / 1000)} Kg of meat</p>`
    result.innerHTML += `<p>${Math.ceil(beer / 355)} cans of beer</p>`
    result.innerHTML += `<p>${Math.ceil(allDrinks / 2000)} ml of drinks</p>`
}

function meatPP(duration){
    if (duration >= 6)
        return 650;
    else {
        return 400;
    }
}

function beerPP(duration){
    if (duration >= 6)
        return 2000;
    else {
        return 1200;
    }
}

function drinksPP(duration){
    if (duration >= 6)
        return 1500;
    else {
        return 1000;
    }
}
