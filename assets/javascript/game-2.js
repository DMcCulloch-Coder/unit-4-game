//To Do:
//.detach() the fight div once they are defeated!!!!!!!!!
//display none- other elements, until characters are selected.
//make a play again button that just reloads the page!!!
//change innerHTML to show 'select an opponent', but only when you have no current opponent.
//when they are defeated, display none and clear the div so i can move next enemy to div.
//add win tracker - add stats and win++ to win function [same with loses?]

//loads js after html and css
$(document).ready( function() {

    //set each character and their stats to objects
    let characters = {
        "grievous": {health: 180, attack: 4, counterAttack: 5},
        "windu": {health: 200, attack: 8, counterAttack: 10},
        "dooku": {health: 220, attack: 12, counterAttack: 20},
        "yoda": {health: 250, attack: 20, counterAttack: 25},
    
    }
   
    //define functions
    //let characterArray = ['grievous', 'windu', 'dooku', 'yoda'] //need?
    //let properties = ['health', 'attack', 'counterAttack'] //need?
    let heroHealth = 0;
    let heroAttack = 0;
    let enemyHealth;
    let enemyAttack;
    
    //not working until I can fix the fightSetup() function
    function displayValue() {
        $('#grievous-health').text(characters['grievous'].health);
        $('#windu-health').text(characters['windu'].health);
        $('#dooku-health').text(characters['dooku'].health);
        $('#yoda-health').text(characters['yoda'].health);
        
    }

    function checkDefeats () {
        //check if the enemy is dead (defeat) - need to code
        if (enemyHealth <= 0) {
            $('.fight').detach('div'); //need to fix
            $('#select-character').append('.fight') //test
            alert('defeated him') //test

            //check if all enemies are dead (win) - need to code
            if ($('#defender').children('div').length == 0 &&
                $('#enemies').children('div').length == 0) {

                //you win sequence!!!!!!
                alert('you win') //code
                reset();
            }
        } else {
            return;
        }
    }

    function loseCheck () {
        //check if hero is dead (lose) - need to code
        if (heroHealth <= 0) {
            //you lose sequence
            alert('you lose') //code
            reset();
        }
    }

    //reset values
    function reset (){
        alert('reset'); //need to code 
    }

    //---------------------------------------------------------------------------------------------------------
    //call id from divs and figure out their health
    function fightSetUp(){
        heroHealth = characters[$('.hero').attr('id')].health
        heroAttack += characters[$('.hero').attr('id')].health
        enemyHealth =//$('.fight').attr('data-health');
        enemyAttack = //$('.fight').attr('data-counterAttack');

        // heroHealth = //$('.hero').attr('data-health');
        // heroAttack += //$('.hero').attr('data-attack'); //NEED TO DEBUG
        // enemyHealth =//$('.fight').attr('data-health');
        // enemyAttack = //$('.fight').attr('data-counterAttack');
        //heroHealth = 250; //test
        // heroAttack = 5; //test
        // enemyHealth = 250; //test
        // enemyAttack = 15; //test

    }

    //fight the characters - only runs if there is an enemy in the current opponent section
    function fight() {

        enemyHealth = enemyHealth - heroAttack;
        heroAttack = heroAttack + heroAttack;
        checkDefeats();
        heroHealth = heroHealth - enemyAttack;
        loseCheck();
        displayValue();

        //display fight stats in html under defender div!
        
        console.log ('hero health: ' + heroHealth) //test
        console.log ('hero attack: ' + heroAttack) //test
        console.log ('enemy health: ' + enemyHealth) //test
        console.log ('enemy attack: ' + enemyAttack) //test
    }

    //Start Game
    displayValue();
    //data();

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
            //sets up the fight stats
            fightSetUp();

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