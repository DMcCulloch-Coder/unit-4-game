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
    let enemyHealth;
    let enemyAttack;

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
                $(`#${characterArray[i]}`).attr(`data-${properties[j]}`, `${characterArray[i]}.${properties[j]}`);           
                
            }
            
        }
        
    }

    function checkDefeats () {
        //check if the enemy is dead (defeat) - need to code
        if (enemyHealth <= 0) {
            $('#defender').detach('.fight'); //need to test
            alert('defeated him') //test
            //check if all enemies are dead (win) - need to code
        } else if ($('#defender').children('div').length == 0 &&
            $('#enemies').children('div').length == 0) {
            //you win sequence!!!!!!
            alert('you win') //code
            reset();
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
        alert(reset); //need to code 
    }

    function fightSetUp(){
        // heroHealth = $('.hero').attr('data-health');
        // heroAttack += $('.hero').attr('data-attack'); NEED TO DEBUG
        // let enemyHealth = $('.fight').attr('data-health');
        // let enemyAttack = $('.fight').attr('data-counterAttack');
        
        heroHealth = 250; //test
        heroAttack = 5; //test
        enemyHealth = 250; //test
        enemyAttack = 15; //test
    }

    //fight the characters - only runs if there is an enemy in the current opponent section
    function fight() {

        enemyHealth = enemyHealth - heroAttack;
        heroAttack = heroAttack + heroAttack;
        checkDefeats();
        heroHealth = heroHealth - enemyAttack;
        loseCheck();
        displayValue();
        
        console.log ('hero health: ' + heroHealth) //test
        console.log ('hero attack: ' + heroAttack) //test
        console.log ('enemy health: ' + enemyHealth) //test
        console.log ('enemy attack: ' + enemyAttack) //test
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