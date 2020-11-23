console.log('Tic-Tac-Toe')
let box = document.querySelectorAll('.box');
console.log(box);
var user1 = true;
var user2 = false;
var click = false;
var user_1 = document.getElementById('user-1');
var start = document.getElementById('start');
var user_2 = document.getElementById('user-2');
var timer = document.getElementById('timer');
var game = document.getElementById('game');
var count = 0;
var box1 = document.getElementById('box-1');
var box2 = document.getElementById('box-2');
var box3 = document.getElementById('box-3');
var box4 = document.getElementById('box-4');
var box5 = document.getElementById('box-5');
var box6 = document.getElementById('box-6');
var box7 = document.getElementById('box-7');
var box8 = document.getElementById('box-8');
var box9 = document.getElementById('box-9');
var winner1 = document.getElementById('winner1')
var winner2 = document.getElementById('winner2');
var tie = document.getElementById('tie');
var again = document.getElementById('play-again');
var win = false

setTimeout(function () {
    start.style.display = 'none';
    user_1.style.display = 'block';
    timer.style.display = 'none';
    game.style.display = 'grid';

}, 7000);

box.forEach(function (e) {

    // console.log('Clicked');


    e.addEventListener('click', function () {
        if (e.innerHTML == '') {
            if (user1) {

                e.innerHTML = 'X';
                user1 = false;
                user2 = true;
                user_1.style.display = 'none';
                user_2.style.display = 'block';
                count++;
                // console.log(count)

            }
            else if (user2) {
                e.innerHTML = 'O';
                user2 = false;
                user1 = true;
                user_1.style.display = 'block';
                user_2.style.display = 'none';
                count++;
                // console.log(count)
            }
            else {
                alert('Its Not Your Turn');
            }
            // click = true;

        }
        if (count >= 5) {
            if (((box[0].innerHTML == box[1].innerHTML) && (box[1].innerHTML == box[2].innerHTML)) || ((box[0].innerHTML == box[4].innerHTML) && (box[4].innerHTML == box[8].innerHTML)) || ((box[0].innerHTML == box[3].innerHTML) && (box[3].innerHTML == box[6].innerHTML)) || ((box[2].innerHTML == box[5].innerHTML) && (box[5].innerHTML == box[8].innerHTML)) || ((box[6].innerHTML == box[7].innerHTML) && (box[7].innerHTML == box[8].innerHTML)) || ((box[3].innerHTML == box[4].innerHTML) && (box[4].innerHTML == box[5].innerHTML)) || ((box[1].innerHTML == box[4].innerHTML) && (box[4].innerHTML == box[7].innerHTML)) || ((box[2].innerHTML == box[4].innerHTML) && (box[4].innerHTML == box[6].innerHTML))) {
                console.log('Found match')


                if ((box[0].innerHTML == box[1].innerHTML) && (box[1].innerHTML == box[2].innerHTML) && (box[0].innerHTML != '')) {
                    win = true;
                    box1.style.fontSize = '100px';
                    box1.style.color = 'red';

                    box2.style.fontSize = '100px';
                    box2.style.color = 'red';
                    box3.style.fontSize = '100px';
                    box3.style.color = 'red';
                    setTimeout(function () {
                        if (box[0].innerHTML == 'X') {
                            winner1.style.display = 'block';
                            winner1.style.animationName = 'winner';
                            game.style.display = 'none';
                        }
                        else {
                            winner2.style.display = 'block';
                            winner2.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                    }
                        , 2000);
                    console.log('8')


                }
                else if ((box[3].innerHTML == box[4].innerHTML) && (box[4].innerHTML == box[5].innerHTML) && (box[3].innerHTML != '')) {
                    win = true;
                    box4.style.fontSize = '100px';
                    box4.style.color = 'red';

                    box5.style.fontSize = '100px';
                    box5.style.color = 'red';
                    box6.style.fontSize = '100px';
                    box6.style.color = 'red';
                    setTimeout(function () {
                        if (box[3].innerHTML == 'X') {
                            winner1.style.display = 'block';
                            winner1.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                        else {
                            winner2.style.display = 'block';
                            winner2.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                    }
                        , 2000);
                    console.log('7')
                }
                else if ((box[6].innerHTML == box[7].innerHTML) && (box[7].innerHTML == box[8].innerHTML) && (box[6].innerHTML != '')) {
                    win = true;
                    box7.style.fontSize = '100px';
                    box7.style.color = 'red';

                    box8.style.fontSize = '100px';
                    box8.style.color = 'red';
                    box9.style.fontSize = '100px';
                    box9.style.color = 'red';
                    setTimeout(function () {
                        if (box[6].innerHTML == 'X') {
                            winner1.style.display = 'block';
                            winner1.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                        else {
                            winner2.style.display = 'block';
                            winner2.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                    }
                        , 2000);
                    console.log('6')
                }
                else if ((box[0].innerHTML == box[4].innerHTML) && (box[4].innerHTML == box[8].innerHTML) && (box[0].innerHTML != '')) {
                    win = true;
                    box1.style.fontSize = '100px';
                    box1.style.color = 'red';

                    box5.style.fontSize = '100px';
                    box5.style.color = 'red';
                    box9.style.fontSize = '100px';
                    box9.style.color = 'red';
                    setTimeout(function () {
                        if (box[0].innerHTML == 'X') {
                            winner1.style.display = 'block';
                            winner1.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                        else {
                            winner2.style.display = 'block';
                            winner2.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                    }
                        , 2000);
                    console.log('5')
                }
                else if ((box[0].innerHTML == box[3].innerHTML) && (box[3].innerHTML == box[6].innerHTML) && (box[0].innerHTML != '')) {
                    win = true;
                    box1.style.fontSize = '100px';
                    box1.style.color = 'red';

                    box4.style.fontSize = '100px';
                    box4.style.color = 'red';
                    box7.style.fontSize = '100px';
                    box7.style.color = 'red';
                    setTimeout(function () {
                        if (box[0].innerHTML == 'X') {
                            winner1.style.display = 'block';
                            winner1.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                        else {
                            winner2.style.display = 'block';
                            winner2.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                    }
                        , 2000);
                    console.log('4')
                }
                else if ((box[2].innerHTML == box[5].innerHTML) && (box[5].innerHTML == box[8].innerHTML) && (box[2].innerHTML != '')) {
                    win = true;
                    box3.style.fontSize = '100px';
                    box3.style.color = 'red';

                    box6.style.fontSize = '100px';
                    box6.style.color = 'red';
                    box9.style.fontSize = '100px';
                    box9.style.color = 'red';
                    setTimeout(function () {
                        if (box[2].innerHTML == 'X') {
                            winner1.style.display = 'block';
                            winner1.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                        else {
                            winner2.style.display = 'block';
                            winner2.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                    }
                        , 2000);
                    console.log('3')
                }
                else if ((box[2].innerHTML == box[4].innerHTML) && (box[4].innerHTML == box[6].innerHTML) && (box[2].innerHTML != '')) {
                    win = true;
                    box3.style.fontSize = '100px';
                    box3.style.color = 'red';

                    box5.style.fontSize = '100px';
                    box5.style.color = 'red';
                    box7.style.fontSize = '100px';
                    box7.style.color = 'red';
                    setTimeout(function () {
                        if (box[2].innerHTML == 'X') {
                            winner1.style.display = 'block';
                            winner1.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                        else {
                            winner2.style.display = 'block';
                            winner2.style.animationName = 'winner'
                            game.style.display = 'none';
                        }
                    }
                        , 2000);
                    console.log('2')
                }
                else {
                    
                    if (box[2].innerHTML != '') {
                        win = true;


                        box2.style.fontSize = '100px';
                        box2.style.color = 'red';

                        box5.style.fontSize = '100px';
                        box5.style.color = 'red';
                        box8.style.fontSize = '100px';
                        box8.style.color = 'red';
                        setTimeout(function () {
                            if (box[1].innerHTML == 'X') {
                                winner1.style.display = 'block';
                                winner1.style.animationName = 'winner'
                                game.style.display = 'none';
                            }
                            else {
                                winner2.style.display = 'block';
                                winner2.style.animationName = 'winner'
                                game.style.display = 'none';
                            }
                        }
                            , 2000);
                        console.log('1')
                    }



                }
                
            }
            else {
                console.log('No match found')
                if (count == 9) {


                    winner2.style.display = 'none';
                    winner1.style.display = 'none';
                    game.style.display = 'none';
                    tie.style.display = 'block';
                    tie.style.animationName = 'tie';
                    win = false;
                    user_1.style.display = 'none'
                    user_2.style.display = 'none'
                    setTimeout(function () {
                        again.style.display = 'block';
                        winner2.style.display = 'none';
                        winner1.style.display = 'none';
                        tie.style.display = 'none';

                    }, 5000);
                }
            }


            if (win) {

                user_1.style.display = 'none'
                user_2.style.display = 'none'
                setTimeout(function () {
                    again.style.display = 'block';
                    winner2.style.display = 'none';
                    winner1.style.display = 'none';

                }, 7000)
            }


            // console.log('clicked', count)
        }
    });


});
