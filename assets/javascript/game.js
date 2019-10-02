//To Do:
//to move .detach(location).append(location).
//set javascript to load after html and css.
//display none- other elements, until characters are selected.
//once characters are selected, selection div is display none.
//reset to move all the values to original, to move everything back to original position
// --and to correct all the display values.
//get divs that are in enemies, once clicked to be fought, not selected as a character.
//make a play again button that just reloads the page!!!
//change innerHTML to show 'select an opponent', but only when you have no current opponent.

//loads js after html and css
$(document).ready( function() {

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

    //when a character is selected, it moves to the 'your character div'
    $('.character').on('click', function(){
        let moveDiv = $(this).detach('#enemies');
        moveDiv.appendTo('#your-character');
        $(this).removeClass('character');
        $(this).addClass('hero');
        let moveAllDiv = $('.character').detach('#select-character');
        moveAllDiv.appendTo('#enemies');
        $('.character').addClass('enemy');
        $('.character').removeClass('character');

    })

    //Once an enemy, make it a defender to fight.
    //add an if statnement that this only happens if there is no defender, also change so can't be changed out of defender div
    $('.enemy').on('click', function() {
        let moveDiv = $(this).detach('#enemies');
        moveDiv.appendTo('#defender');
        $(this).addClass('fight')

    })

});