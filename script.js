

var playState1 = true;
var playState2 = !playState1;

var symbolx = "X";
var symbolo = "O";
var symbol = symbolx;
var counter = 0;





function myFunc() {

    var player1 = play.value;
    var player2 = playy.value;
    var startt = document.getElementById("box");
    

    document.getElementById("box").style.display = "block";

    // play.value = ''
    // playy.value = ''

}

function showSymbol(num) {
   


    var boxx = document.getElementById(num);
    var boxxx = symbol;
    if (boxx.value) return;
    // if(boxx.value){
    //     return;
    // }
    // if(boxx.value){

    // }
    // else{

    // }
    counter += 1;

    if (playState1 == true) {

        playState1 = false;
        boxx.value = symbol;
        symbol = symbolo


    }else {

        playState1 = true;
        boxx.value = symbol;
        symbol = symbolx;
    }
    
    if((b1.value == "X" && b2.value == "X" && b3.value == "X") || (b1.value == "O" && b2.value == "O" && b3.value == "O")){
        if(b1.value == "X" && b2.value == "X" && b3.value == "X") {

            result.innerHTML = "Congratulations," + " " + play.value + " " + "won!!!"
            box = ''

        }
        if(b1.value == "O" && b2.value == "O" && b3.value == "O"){

            result.innerHTML = "Congratulations," + " " + playy.value + " " + "won!!!"
        }
        
    } else if((b4.value == "X" && b5.value == "X" && b6.value == "X") || (b4.value == "O" && b5.value == "O" && b6.value == "O")){
        if(b4.value == "X" && b5.value == "X" && b6.value == "X") {

            result.innerHTML = "Congratulations," + " " + play.value + " " + "won!!!"

        }if(b4.value == "O" && b5.value == "O" && b6.value == "O"){

            result.innerHTML = "Congratulations," + " " + playy.value + " " + "won!!!"
        }
        
    }else if((b7.value == "X" && b8.value == "X" && b9.value == "X") || (b7.value == "O" && b8.value == "O" && b9.value == "O")) {
        if(b7.value == "X" && b8.value == "X" && b9.value == "X") {

            result.innerHTML = "Congratulations," + " " + play.value + " " + "won!!!"

        }if (b7.value == "O" && b8.value == "O" && b9.value == "O") {

            result.innerHTML = "Congratulations," + " " + playy.value + " " + "won!!!"

        }
    }else if((b1.value == "X" && b4.value == "X" && b7.value == "X") || (b1.value == "O" && b4.value == "O" && b7.value == "O")) {
        if(b1.value == "X" && b4.value == "X" && b7.value == "X") {

            result.innerHTML = "Congratulations," + " " + play.value + " " + "won!!!"

        }if  (b1.value == "O" && b4.value == "O" && b7.value == "O") {

            result.innerHTML = "Congratulations," + " " + playy.value + " " + "won!!!"
        }

    }else if((b2.value == "X" && b5.value == "X" && b8.value == "X") || (b2.value == "O" && b5.value == "O" && b8.value == "O")) {
        if(b2.value == "X" && b5.value == "X" && b8.value == "X") {

            result.innerHTML = "Congratulations," + " " + play.value + " " + "won!!!"

        }if(b2.value == "O" && b5.value == "O" && b8.value == "O") {

            result.innerHTML = "Congratulations," + " " + playy.value + " " + "won!!!"
        }
    }else if((b3.value == "X" && b6.value == "X" && b9.value == "X") || (b3.value == "O" && b6.value == "O" && b9.value == "O")) {
        if(b3.value == "X" && b6.value == "X" && b9.value == "X") {

            result.innerHTML = "Congratulations," + " " + play.value + " " + "won!!!"

        }if(b3.value == "O" && b6.value == "O" && b9.value == "O"){

            result.innerHTML = "Congratulations," + " " + playy.value + " " + "won!!!"
        }

    }else if((b3.value == "X" && b5.value == "X" && b7.value == "X") || (b3.value == "O" && b5.value == "O" && b7.value == "O")) {
        if(b3.value == "X" && b5.value == "X" && b7.value == "X") {

            result.innerHTML = "Congratulations," + " " + play.value + " " + "won!!!"

        }if(b3.value == "O" && b5.value == "O" && b7.value == "O"){

            result.innerHTML = "Congratulations," + " " + playy.value + " " + "won!!!"

        }
    
    }else if((b1.value == "X" && b5.value == "X" && b9.value == "X") || (b1.value == "O" && b5.value == "O" && b9.value == "O")) {
        if(b1.value == "X" && b5.value == "X" && b9.value == "X") {

            result.innerHTML = "Congratulations," + " " + play.value + " " + "won!!!"

        }if(b1.value == "O" && b5.value == "O" && b9.value == "O"){

            result.innerHTML = "Congratulations," + " " + playy.value + " " + "won!!!"

        }


    }else {
        if(counter == 9){
            result.innerHTML = 'It is a draw'
        }

    }
    

}

function set() {

    play.value = ''
    playy.value = ''

    counter = 0;
    
    b1.value= ''
    b2.value= ''
    b3.value= ''
    b4.value= ''
    b5.value= ''
    b6.value= ''
    b7.value= ''
    b8.value= ''
    b9.value= ''

    result.innerHTML = ''

    


}
