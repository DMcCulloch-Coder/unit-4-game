//To Do:
//display none- other elements, until characters are selected.
//css background for characters in different areas!!!

//Fix - balance so any charaacter can win or lose, but each are different

//fix how defeated characters are handled so that I can reset and stats are displayed properly

$(document).ready( function() {

    //set each character and their stats to objects in an object
    let characters = {
        "grievous": {health: 100, attack: 9, counterAttack: 20},
        "windu": {health: 120, attack: 11, counterAttack: 5},
        "dooku": {health: 150, attack: 13, counterAttack: 15},
        "yoda": {health: 180, attack: 15, counterAttack: 25},
    
    }
   
    //define functions
    let heroHealth = 0;
    let heroAttack = 0;
    let enemyHealth;
    let enemyAttack;
    let wins = 0;
    let loses = 0;
    
    //not working until I can fix the fightSetup() function
    function initialDisplayValue() {
        $('#grievous-health').text(characters['grievous'].health);
        $('#windu-health').text(characters['windu'].health);
        $('#dooku-health').text(characters['dooku'].health);
        $('#yoda-health').text(characters['yoda'].health);
        $('#wins').text(wins)
        $('#loses').text(loses)
        
    }

    //dynamically change health during fight
    function displayValue () {
        $('#your-character span').text(heroHealth)
        $('#defender span').text(enemyHealth)
        console.log('running')

    }

    //reset values
    function reset (){
        initialDisplayValue();
        $('#select-character').css('display','block')
        $('#hero-attack').text('');
        $('#enemy-attack').text('');
        alert('reset');
    }

    function checkDefeats () {
        //check if the enemy is dead (defeat)
        if (enemyHealth <= 0) {
            
            $('#hero-attack').text('You have defeated ' + $('.fight').attr('name') + '!  Select another enemy!'); //fix says undefined!!!!!!
            $('#enemy-attack').text('');
            let moveDiv = $('.fight').detach('div'); //fix!!!!!!!!!!!!!!!!!
            moveDiv.appendTo('#select-character')

            //check if all enemies are dead (win)
            if ($('#defender').children('div').length == 0 &&
                $('#enemies').children('div').length == 0) {

                //you win sequence!!!!!!
                alert('You Win! Way to Go!')
                wins++;
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
            alert('You Lose! Try again next Time!')
            loses++;
            reset();
        }
    }

    //call id from divs and figure out their health
    function heroSetUp(){
        heroHealth = characters[$('.hero').attr('id')].health
        heroAttack = characters[$('.hero').attr('id')].attack

    }

    //can id from dive of whoever was just put into defender div
    function fightSetUp(){
        enemyHealth = characters[$('.fight').attr('id')].health
        enemyAttack = characters[$('.fight').attr('id')].counterAttack

    }

    //fight the characters - only runs if there is an enemy in the current opponent section
    function fight() {

        enemyHealth = enemyHealth - heroAttack;
        heroAttack = heroAttack + characters[$('.hero').attr('id')].attack;
        checkDefeats();
        
        if ($('#defender').children('div').length !== 0){ //fix - check if there is a defender
            heroHealth = heroHealth - enemyAttack;
            loseCheck();
            displayValue();
        }
    }

    //Start Game
    initialDisplayValue();

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
        heroSetUp();

    })

    //Once an enemy, make it a defender to fight.
    $(document).on('click', '.enemy', function() {
        if($('#defender').children('div').length == 0) {
            let moveDiv = $(this).detach('#enemies');
            moveDiv.appendTo('#defender');
            $(this).addClass('fight')
            //sets up the fight stats
            fightSetUp();
            $('#hero-attack').text('');

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
            if($('#defender').children('div').length !== 0) {
                $('#hero-attack').text('You attacked ' + $('.fight').attr('name') + ' for ' + heroAttack + ' damage!');
                $('#enemy-attack').text($('.fight').attr('name') + ' attacked you for ' + enemyAttack + ' damage!');
            } 
        }
    });


});
