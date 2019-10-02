//To Do:
//
//display none- other elements, until characters are selected.
//make a play again button that just reloads the page!!!
//change innerHTML to show 'select an opponent', but only when you have no current opponent.
//when they are defeated, display none and clear the div so i can move next enemy to div.

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
    $(document).on('click', '.character', function(event){
        let moveDiv = $(this).detach('#enemies');
        moveDiv.appendTo('#your-character');
        $(this).removeClass('character');
        $(this).addClass('hero');
        let moveAllDiv = $('.character').detach('#select-character');
        moveAllDiv.appendTo('#enemies');
        $('.character').addClass('enemy');
        $('.character').removeClass('character');
        $('#select-character').css('display','none');

    })

    //Once an enemy, make it a defender to fight.
    $(document).on('click', '.enemy', function() {
        if($('#defender').children('div').length == 0) {
            let moveDiv = $(this).detach('#enemies');
            moveDiv.appendTo('#defender');
            $(this).addClass('fight')
        } else {
            alert('Already in a fight!')
        }
    })

});