//To Do:
//display none- other elements, until characters are selected.
//change innerHTML to show 'select an opponent', but only when you have no current opponent.

//BUG - need to not lose health if your opponent is defeated by your attack
//Fix - balance so any charaacter can win or lose, but each are different
//Fix - REset and win / lose counter / display

//loads js after html and css
$(document).ready( function() {

    //set each character and their stats to objects in an object
    let characters = {
        "grievous": {health: 200, attack: 11, counterAttack: 10},
        "windu": {health: 220, attack: 12, counterAttack: 10},
        "dooku": {health: 240, attack: 15, counterAttack: 20},
        "yoda": {health: 260, attack: 15, counterAttack: 25},
    
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

    function checkDefeats () {
        //check if the enemy is dead (defeat)
        if (enemyHealth <= 0) {
            $('.fight').detach('div');
            $('#select-character').append('.fight')
            alert('defeated him') //fix - individual enemy defeat sequence

            //check if all enemies are dead (win)
            if ($('#defender').children('div').length == 0 &&
                $('#enemies').children('div').length == 0) {

                //you win sequence!!!!!!
                alert('you win') //fix - win sequecne
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
            alert('you lose') //fix - lose sequence
            loses++;
            reset();
        }
    }

    //reset values
    function reset (){
        initialDisplayValue();
        alert('reset');
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
        heroHealth = heroHealth - enemyAttack;
        loseCheck();
        displayValue();

        //add / fix - display fight stats in html under defender div!!!!!!!!!!!!!!!!!!!!!!!
        
        console.log ('hero health: ' + heroHealth) //test
        console.log ('hero attack: ' + heroAttack) //test
        console.log ('enemy health: ' + enemyHealth) //test
        console.log ('enemy attack: ' + enemyAttack) //test
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
