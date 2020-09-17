$(document).ready(function() {
    //global variables
    let dubs = 0;
    let losses = 0;
    let score =0;
    $('#scoreTotal').text(score)

    //Randmon number from 19-120
    let randomNumber = Math.floor(Math.random() * (120-19)) + 19;
    $('#cNumber').text(randomNumber);
    console.log(randomNumber);

    //crystal arrays
    let crystalNumb = [];
        crystalNumb[0] = Math.floor(Math.random()*12+1);

        crystalNumb[1] = Math.floor(Math.random()*12+1);

        crystalNumb[2] = Math.floor(Math.random()*12+1);

        crystalNumb[3] = Math.floor(Math.random()*12+1);

        console.log(crystalNumb);


    //gets random number
    function wins () {
        dubs++;
        $("#dubs").html("Wins: " + dubs);
        reset();
    };

    
    function loss () {
        losses++;
        $("#losses").html("Losses: " + losses);
        reset();
    };


   
    $('#btn1').on('click', function (){
        score = score + crystalNumb[1];
        $('#scoreTotal').text(score);
            if (score === randomNumber) {
                win();
            } else if (score > randomNumber) {
                loss()
            }
        console.log(score)
    })



    $('#btn2').on('click', function (){
        score = score + crystalNumb[2];
        $('#scoreTotal').text(score);
            if (score === randomNumber) {
                win();
            } else if (score > randomNumber) {
                loss()
            }
        console.log(score)
    })




    $('#btn3').on('click', function (){
        score = score + crystalNumb[3];
        $('#scoreTotal').text(score);
            if (score === randomNumber) {
                win();
            } else if (score > randomNumber) {
                loss()
            }
        console.log(score)
    })





    $('#btn4').on('click', function (){
        score = score + crystalNumb[4];
        $('#scoreTotal').text(score);
            if (score === randomNumber) {
                win();
            } else if (score > randomNumber) {
                loss()
            }
        console.log(score)
    })
    


    let reset = function () {
        randomNumber = Math.floor(Math.random() * (120-19)) + 19;
        console.log(randomNumber);
        $("#cNumber").text(randomNumber);
        score = 0
        $("#scoreTotal").html(score);
            crystalNumb[0] = Math.floor(Math.random()*12+1);
            crystalNumb[1] = Math.floor(Math.random()*12+1);
            crystalNumb[2] = Math.floor(Math.random()*12+1);
            crystalNumb[3] = Math.floor(Math.random()*12+1);
    };

})