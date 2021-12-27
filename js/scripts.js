var score_x = document.getElementById("score-x");
var score_o = document.getElementById("score-o");
var score_Draw = document.getElementById("score-Draw");
var NewGame = document.getElementById("NewGame");
var score_x_counter = 0;
var score_o_counter = 0;
var score_Draw_counter = 0;
var cell = document.getElementsByClassName("cell");
var btn = document.querySelectorAll(".cell");
var lblplyer=document.getElementById("lblPlayers");
var lblcpuplyer=document.getElementById("lblCPUPlayers");
var warning=document.getElementById("warning");
var barande=document.getElementById("barande");
var buttons = [[cell[0], cell[1], cell[2]],
    [cell[3], cell[4], cell[5]],
    [cell[6], cell[7], cell[8]]];

var flags = [[null, null, null],
    [null, null, null],
    [null, null, null]];
var ply = "x";
var Winner = "";

// function display() {
//     if (document.getElementById('Players').checked) {
//         warning.innerHTML="";
//     }
//     else if (document.getElementById('CPUPlayers').checked) {
//         warning.innerHTML="";
//     }
//     // else {
//     //     warning.innerHTML = "You did not select the type of game :(";
//     // }
// }


function NEWGAME() {
    flags = [[null, null, null],
        [null, null, null],
        [null, null, null]];

    var i, j;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            buttons[i][j].innerHTML = "";
            buttons[i][j].classList.remove("x");
            buttons[i][j].classList.remove("o");
        }
    }
    btn.forEach(function (res){
        res.removeAttribute("disabled")
    })
    warning.innerHTML="";
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function cpuPlayer() {
    var MI =(getRandomInt(3));
    var MJ =(getRandomInt(3));

    if (flags[MI][MJ] ==null ) {
        flags[MI][MJ] = "o";
        buttons[MI][MJ].innerHTML ="o";
        buttons[MI][MJ].classList.add("o");
        console.log(buttons[MI][MJ]);
    }
    else {
        cpuPlayer();
        console.log("null nist")
    }
}
function check_game() {
    var i, j;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            // console.log((flags[i][0] +""+  flags[i][1] +""+ flags[i][2]));
            if ((flags[i][0] == "x" && flags[i][1] == "x" && flags[i][2] == "x") || (flags[0][j] == "x" && flags[1][j] == "x" && flags[2][j] == "x") || (flags[0][0] == "x" && flags[1][1] == "x" && flags[2][2] == "x") || (flags[0][2] == "x" && flags[1][1] == "x" && flags[2][0] == "x"))
            {
                Winner = "x";
            }
            else if ((flags[i][0] == "o" && flags[i][1] == "o" && flags[i][2] == "o") || (flags[0][j] == "o" && flags[1][j] == "o" && flags[2][j] == "o") || (flags[0][0] == "o" && flags[1][1] == "o" && flags[2][2] == "o") || (flags[0][2] == "o" && flags[1][1] == "o" && flags[2][0] == "o"))
            {
                Winner = "o";

            }

        }

    }

    var status = false;
    btn.forEach(function (res){
        if(res.innerHTML=='' || res.innerHTML==null){
            status = true;
        }
    });
    if(!status){
        Winner = "E";
    }
    console.log(Winner);
    if(Winner =="x"){
        score_x_counter =score_x_counter+1;
        score_x.innerHTML=score_x_counter;
        btn.forEach(function (res){
            res.setAttribute("disabled",true);
        })
        Winner="";
        warning.innerHTML="x won";
    }
    else if(Winner == "o"){
        score_o_counter =score_o_counter+1;
        score_o.innerHTML=score_o_counter;
        btn.forEach(function (res){
            res.setAttribute("disabled",true);
        })
        Winner="";
        warning.innerHTML="o won";

    }
    else if(Winner == "E"){
        score_Draw_counter =score_Draw_counter+1;
        score_Draw.innerHTML=score_Draw_counter;
        console.log(score_Draw_counter);
        Winner="";
        warning.innerHTML="Equal";
    }

}



function show_index(x, y) {
    if (document.getElementById('Players').checked) {

        if (flags[x][y] == null) {
            if (ply == "x") {
                flags[x][y] = "x";
                buttons[x][y].innerHTML = "x";
                buttons[x][y].classList.add("x");
                ply = "o";
            } else if (ply == "o") {
                flags[x][y] = "o";
                buttons[x][y].innerHTML = "o";
                buttons[x][y].classList.add("o");
                ply = "x";
            }
        }

        // document.getElementsByName("play").disabled = true;
        check_game();
    }
    else if (document.getElementById('CPUPlayers').checked) {
        if (flags[x][y] == null ) {
            if (ply == "x") {
                flags[x][y] = "x";
                buttons[x][y].innerHTML = "x";
                buttons[x][y].classList.add("x");
                ply = "o";
                cpuPlayer();
                ply = "x";
            }
        }
        check_game();
    }

}

