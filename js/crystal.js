
var random_result;
var lost = 0; 
var win = 0;
var previous = 0;

var startGame = function(){

    $(".crystals").empty();

    var images = [
        'http://pluspng.com/img-png/png-crystal-file-crystal-rare-png-256.png', 
        'http://pluspng.com/img-png/png-crystal-crystal-png-500.png', 
        'http://pluspng.com/img-png/png-crystal-ball-transparent-crystal-ball-crystal-ball-magic-crystal-png-image-260.jpg', 
        'https://vignette.wikia.nocookie.net/thelorienlegacies/images/7/71/Green_Wind_Crystal.PNG/revision/latest?cb=20160610041134'
    ];

    random_result = Math.floor(Math.random() * 101) + 19;
    
    $("#result").html('Random Result: ' + random_result  );

    for(var i= 0; i<4; i++){
    
        var random = Math.floor(Math.random() * 12);

          
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            })
        $(".crystals").append(crystal);

    }
    $("#previous").html("Total Score:", previous);

}

startGame();

$(document).on('click',".crystal", function(){
   
    
    var num = parseInt($(this).attr('data-random')); 

    previous += num;

    $("#previous").html("Total Score:" + previous);

    console.log(previous);  

    if(previous > random_result){
        lost--;

        $("#lost").html("You lost:" + lost);
        previous = 0;
        startGame();
    }
   
    else if(previous === random_result){
        win++;

        $("#win").html("You win:" + win);

        previous = 0;
        startGame();
    }
    
})

// pseudo coding
// a game with four crystals
// each crystal has a ramdom number
// a new random number should be generated everytime
//when click, get a number, imput the number into the "total"
//add up all the mnumbers until hit Random result 
//if equal , alert you win. if above, lose, if below, keep adding up
////          crystal.html(random);