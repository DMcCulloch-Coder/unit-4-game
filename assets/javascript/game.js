//To Do:
//to move .detach(location).append(location)





//set each character and their stats to objects

let grievous = {
    health: 250,
    attack: 20,
    counterAttack: 25,

}

let windu = {
    health: 250,
    attack: 20,
    counterAttack: 25,
    
}

let dooku = {
    health: 250,
    attack: 20,
    counterAttack: 25,
    
}

let yoda = {
    health: 250,
    attack: 20,
    counterAttack: 25,
    
}

//define functions
function displayValue() {
    $('#grievous-health').text(grievous.health);
    $('#windu-health').text(windu.health);
    $('#dooku-health').text(dooku.health);
    $('#yoda-health').text(yoda.health);
}

//Start Game
displayValue();