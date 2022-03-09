//public variables

let aUsersturns = [];
let aDealerturns = [];

let userscore = 26;
let dealerscore = 26;


//main function

function playingDeck() {

    //usercard special chars

    var usercard = Math.floor(Math.random() * 13 + 2);
    aUsersturns.push(usercard);

    var usercardoutput = "";
    specialChars(usercard,usercardoutput,"usercardnum");

    // dealercard special chars

    var dealercard = Math.floor(Math.random() * 13 + 2);
    aDealerturns.push(dealercard);

    var dealercardoutput = "";
    specialChars(dealercard,dealercardoutput,"dealercardnum");

    // dealer chars:
    var dealerchar = Math.floor(Math.random() * 4 + 1);
    charGeneration(dealerchar, "dealerchar", "dealerbigchar");

    // user chars:
    var userchar = Math.floor(Math.random() * 4 + 1);
    charGeneration(userchar, "userchar", "userbigchar");

    // scores:
    if(usercard === dealercard) {
        ifequal();
        document.getElementById("pointer").innerHTML = "=";
    } else if(usercard > dealercard) {
        userscore++;
        dealerscore--;
        document.getElementById("pointer").innerHTML = "►";
    } else if(dealercard > usercard) {
        dealerscore++;
        userscore--;
        document.getElementById("pointer").innerHTML = "◄";
    }

    // loosing score color

    if(userscore < 10) {
        document.getElementById("userscore").style.color = "red";
    } else {
        document.getElementById("userscore").style.color = "black";
    }

    if(dealerscore < 10) {
        document.getElementById("dealerscore").style.color = "red";
    } else {
        document.getElementById("dealerscore").style.color = "black";
    }

    // Display Scores:
    document.getElementById("dealerscore").innerHTML = dealerscore;
    document.getElementById("userscore").innerHTML = userscore;        

    chekingscores();
}

function ifequal() {
    var usercard = Math.floor(Math.random() * 13 + 2);
    aUsersturns.push(usercard);

    var dealercard = Math.floor(Math.random() * 13 + 2);
    aDealerturns.push(dealercard);

    if(usercard === dealercard) {
        ifequal();
        document.getElementById("pointer").innerHTML = "=";
    } else if(usercard > dealercard) {
        userscore = userscore +4;
        dealerscore = dealerscore -4;
        document.getElementById("pointer").innerHTML = "►";
    } else if(dealerscore > userscore) {    
        dealerscore = dealerscore +4;
        userscore = userscore -4;
        document.getElementById("pointer").innerHTML = "◄";
    }
}

function specialChars(a,b,c){
    if(a === 11) {
        b = "J"
    } else if(a === 12) {
        b = "Q";
    } else if(a === 13) {
        b = "K";
    } else if(a === 14) {
        b = "A";
    } else {
        b = a;
    }

    document.getElementById(c).innerHTML = b;
}

function charGeneration(a,b,c){
    switch(a) {
        case 1:
            a = "&hearts;";
            document.getElementById(b).style.color = "red";
            document.getElementById(c).style.color = "red";
        break;

        case 2:
            a = "&spades;";
            document.getElementById(b).style.color = "black";
            document.getElementById(c).style.color = "black";
        break;

        case 3:
            a = "&diams;";
            document.getElementById(b).style.color = "red";
            document.getElementById(c).style.color = "red";
        break;
        
        case 4:
            a = "&clubs;";
            document.getElementById(b).style.color = "black";
            document.getElementById(c).style.color = "black";
        break;
    }
    document.getElementById(b).innerHTML = a;
    document.getElementById(c).innerHTML = a;
}

function chekingscores() {
    if(userscore <= 0) {
        userscore = 0;
        alert("Dealer Win!");
        document.getElementById("mainbtn").disabled = true;
    } else if(dealerscore <= 0) {
        userscore = 0;
        alert("User Win!");
        document.getElementById("mainbtn").disabled = true;
    }
}
