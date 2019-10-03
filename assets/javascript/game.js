//To Do:
//.detach() the fight div once they are defeated!!!!!!!!!
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
    let characterArray = ['grievous', 'windu', 'dooku', 'yoda']
    let properties = ['health', 'attack', 'counterAttack']
    //must give hero Attack and Health a global scope to sustain it through each attacking sequence
    let heroHealth = 0;
    let heroAttack = 0;

    function displayValue() {
        $('#grievous-health').text(grievous.health);
        $('#windu-health').text(windu.health);
        $('#dooku-health').text(dooku.health);
        $('#yoda-health').text(yoda.health);
        
    }

    //function to assign object as data to character divs
    function data() {
        for (let i=0; i < characterArray.length; i++) {
            for(let j=0; j < properties.length; j++) {
                //Someone fixed they syntax of my template literals on stack overflow.  User: Ghassen Louhaichi
                $(`#${characterArray[i]}`).attr(
                    `data-${properties[j]}`,
                    `${characterArray[i]}.${properties[j]}`
                );           
                
            }
            
        }
        
    }

    //fight the characters
    function fight() {
        heroHealth += $('.hero').attr('data-health');
        heroAttack += $('.hero').attr('data-attack');
        let enemyHealth = $('.fight').attr('data-health');
        let enemyAttack = $('.fight').attr('data-counterAttack')
        
        console.log (heroHealth) //test
        console.log (heroAttack) //test
        console.log (enemyHealth) //test
        console.log (enemyAttack) //test
    }

    //Start Game
    displayValue();
    data();

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

    //On click to have the fight start
    $('button').on('click', function () {
        if($('#defender').children('div').length == 0) {
            alert('No one to fight yet!')
        } else {
            fight();
        }
    });


});

//create a function that fights, the var you add to the () is to grab the id from the fight div so you can connect it to an object.
//figure out how to do this.