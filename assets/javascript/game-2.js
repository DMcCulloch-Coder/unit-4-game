
$(document).ready( function() {

    //global Variables
    //set each character and their stats to objects in an object
    let characters = {
        "grievous": {health: 110, attack: 8, counterAttack: 20},
        "windu": {health: 140, attack: 11, counterAttack: 10},
        "dooku": {health: 100, attack: 12, counterAttack: 15},
        "yoda": {health: 90, attack: 13, counterAttack: 25},
    
    }
   
    let heroHealth = 0;
    let heroAttack = 0;
    let enemyHealth;
    let enemyAttack;
    let wins = 0;
    let loses = 0;
    
    //define functions
    function initialDisplayValue() {
        $('#grievous-health').text(characters['grievous'].health);
        $('#windu-health').text(characters['windu'].health);
        $('#dooku-health').text(characters['dooku'].health);
        $('#yoda-health').text(characters['yoda'].health);
        $('#wins').text(wins)
        $('#loses').text(loses)
        $('.clean-display').css('display', 'none')

    }

    //dynamically change health during fight
    function displayValue () {
        $('#your-character span').text(heroHealth)
        $('#defender span').text(enemyHealth)

    }

    //reset values
    function reset (){
        initialDisplayValue();
        $('#select-character').css('display','block');
        $('#hero-attack').text('');
        $('#enemy-attack').text('');
        let moveDiv = $('.hero').detach('div');
        moveDiv.appendTo('#select-character');
        moveDiv.removeClass('hero');
        let moveEnemyDivs = $('.enemy').detach('div');
        moveEnemyDivs.appendTo('#select-character')
        moveEnemyDivs.removeClass('enemy fight')
        $('#select-character div').addClass('character')

    }

    function checkDefeats () {
        //check if the enemy is dead (defeat)
        if (enemyHealth <= 0) {
            
            $('#hero-attack').text('You have defeated ' + $('.fight').attr('name') + '!  Select another enemy!'); 
            $('#enemy-attack').text('');
            let moveDiv = $('.fight').detach('div');
            moveDiv.appendTo('#select-character')
            moveDiv.removeClass('fight enemy')

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
        
        if ($('#defender').children('div').length !== 0){
            heroHealth = heroHealth - enemyAttack;
            loseCheck();
            displayValue();
        }
    }

    //Start Game - calling functions and on click events
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
        $('.clean-display').css('display', 'block')
        heroSetUp();
        $('#hero-attack').text('Select an Opponent!');

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
