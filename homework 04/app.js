var count = Math.floor(Math.random() * 3);
var answer
var round = 0;
var win = 0;
var equal = 0;
var lose = 0;


function rock () {
    answer = 0;
    count = Math.floor(Math.random() * 3);
    round ++;

    document.getElementById('round').innerHTML =  'ROUND ' + round;

    if (count == 0) {
        document.getElementById('output').innerHTML = '<img src="./images/rock-1.jpg"><img src="./images/rock-2.jpg">';
        document.getElementById('try').innerHTML = '<h2 class="text-center text-secondary">You became equal</h2>';
        equal ++;
    } else if (count == 1) {
        document.getElementById('output').innerHTML = '<img src="./images/rock-1.jpg"><img src="./images/paper-2.jpg">';
        document.getElementById('try').innerHTML = '<h2 class="text-center text-danger">YOU LOSEEE</h2>';
        lose ++;
    } else{
        document.getElementById('output').innerHTML = '<img src="./images/rock-1.jpg"><img src="./images/scissors-2.jpg">';
        document.getElementById('try').innerHTML = '<h2 class="text-center text-success">YOU WINNNN</h2>';
        win ++;
    }
    document.getElementById('win').innerHTML =  'WIN ' + win;
    document.getElementById('equal').innerHTML =  'EQUAL ' + equal;
    document.getElementById('lose').innerHTML =  'LOSE ' + lose;
}

function paper () {
    answer = 1;
    count = Math.floor(Math.random() * 3);
    round ++;

    document.getElementById('round').innerHTML =  'ROUND ' + round;

    if (count == 0) {
        document.getElementById('output').innerHTML = '<img src="./images/paper-1.jpg"><img src="./images/rock-2.jpg">';
        document.getElementById('try').innerHTML = '<h2 class="text-center text-success">YOU WINNNN</h2>';
        win ++;
    }  else if (count == 1) {
        document.getElementById('output').innerHTML = '<img src="./images/paper-1.jpg"><img src="./images/paper-2.jpg">';
        document.getElementById('try').innerHTML = '<h2 class="text-center text-secondary">You became equal</h2>';
        equal ++;
    }  else {
        document.getElementById('output').innerHTML = '<img src="./images/paper-1.jpg"><img src="./images/scissors-2.jpg">';
        document.getElementById('try').innerHTML = '<h2 class="text-center text-danger">YOU LOSEEE</h2>';
        lose ++;
    }
    document.getElementById('win').innerHTML =  'WIN ' + win;
    document.getElementById('equal').innerHTML =  'EQUAL ' + equal;
    document.getElementById('lose').innerHTML =  'LOSE ' + lose;
}

function scissors () {
    answer = 2;
    count = Math.floor(Math.random() * 3);
    round ++;

    document.getElementById('round').innerHTML =  'ROUND ' + round;

    if (count == 0) {
        document.getElementById('output').innerHTML = '<img src="./images/scissors-1.jpg"><img src="./images/rock-2.jpg">';
        document.getElementById('try').innerHTML = '<h2 class="text-center text-danger">YOU LOSEEE</h2>';
        lose ++;

    }  else if (count == 1) {
        document.getElementById('output').innerHTML = '<img src="./images/scissors-1.jpg"><img src="./images/paper-2.jpg">';
        document.getElementById('try').innerHTML = '<h2 class="text-center text-success">YOU WINNNN</h2>';
        win ++;
    
    }  else {
        document.getElementById('output').innerHTML = '<img src="./images/scissors-1.jpg"><img src="./images/scissors-2.jpg">';
        document.getElementById('try').innerHTML = '<h2 class="text-center text-secondary">You became equal</h2>';
        equal ++;
    }
    document.getElementById('win').innerHTML =  'WIN ' + win;
    document.getElementById('equal').innerHTML =  'EQUAL ' + equal;
    document.getElementById('lose').innerHTML =  'LOSE ' + lose;
}

