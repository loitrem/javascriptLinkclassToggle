
const footClan = () => {

    let footClanPic = document.querySelector('.footClanImg');
    footClanPic.classList.toggle('ninjaVanish');
    
    if (document.querySelector('.swapButtonNinja').innerHTML === "Ninja Vanish!"){
    document.querySelector('.swapButtonNinja').innerHTML = "Where did they go!?!";
    }
    else {
        document.querySelector('.swapButtonNinja').innerHTML = "Ninja Vanish!";
    }
        
}

const rollOut = () => {

    let primePic = document.querySelector('.primeImg');
    primePic.classList.toggle('rollOut');
    
    if (document.querySelector('.swapButtonPrime').innerHTML === "Transformers! Roll out!"){
        document.querySelector('.swapButtonPrime').innerHTML = "Transform Back";
        }
        else {
            document.querySelector('.swapButtonPrime').innerHTML = "Transformers! Roll out!";
        }
        
}

const slime = () => {

    let slimePic = document.querySelector('.slimeImg');
    slimePic.classList.toggle('slime');

    if (document.querySelector('.swapButtonSlime').innerHTML === "Switch to slime form"){
        document.querySelector('.swapButtonSlime').innerHTML = "Switch to human form";
        }
        else {
            document.querySelector('.swapButtonSlime').innerHTML = "Switch to slime form";
        }
        
}

const burger = () => {

    let burgerPic = document.querySelector('.burgerImg');
    burgerPic.classList.toggle('burger');

    if (document.querySelector('.swapButtonBurger').innerHTML === "Eat the cheeseburgher"){
        document.querySelector('.swapButtonBurger').innerHTML = "Get a new cheeseburger";
        }
        else {
            document.querySelector('.swapButtonBurger').innerHTML = "Eat the cheeseburgher";
        }
        
}

const water = () => {

    let waterPic = document.querySelector('.waterImg');
    waterPic.classList.toggle('water');

    if (document.querySelector('.swapButtonWater').innerHTML === "Drink some water"){
        document.querySelector('.swapButtonWaterr').innerHTML = "Fill up your glass";
        }
        else {
            document.querySelector('.swapButtonWater').innerHTML = "Drink some water";
        }
        
}

