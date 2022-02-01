var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var suits = ['♠', '♥', '♦', '♣'];
var cards = [];

var $player2 = document.getElementById('player2');
var $player3 = document.getElementById('player3');
var $player4 = document.getElementById('player4');
var $output1 = document.getElementById('output1');
var $output2 = document.getElementById('output2');
var $output3 = document.getElementById('output3');
var $output4 = document.getElementById('output4');


function makeCards() {
    for(var i = 0; i < suits.length; i++) {
        for(var j = 0; j < numbers.length; j++) {
            cards.push(numbers[j] + suits[i]);
        }
    }
    return cards;
};


function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

$player2.onclick = function() {
    cards =[];
    $output2.innerHTML = '';
    $output3.innerHTML = '';
    $output1.innerHTML = '';
    $output4.innerHTML = '';

    cards = shuffle(makeCards());
    $output2.innerHTML = '<h4><i class="las la-user-tie la-2x"></i>PLAYER 1</h4><div class="my-card pt-4">' + cards[0] + '</div><div class="my-card pt-4">' + cards[1] + '</div>';
    $output3.innerHTML = '<h4 class="player-2"><i class="las la-user-tie la-2x"></i>PLAYER 2</h4><div class="my-card pt-4">' + cards[2] + '</div><div class="my-card pt-4">' + cards[3] + '</div>';
};

$player3.onclick = function() {
    cards =[];
    $output2.innerHTML = '';
    $output3.innerHTML = '';
    $output1.innerHTML = '';
    $output4.innerHTML = '';

    cards = shuffle(makeCards());
    $output2.innerHTML = '<h4><i class="las la-user-tie la-2x"></i>PLAYER 1</h4><div class="my-card pt-4">' + cards[0] + '</div><div class="my-card pt-4">' + cards[1] + '</div>';
    $output3.innerHTML = '<h4 class="player-2"><i class="las la-user-tie la-2x"></i>PLAYER 2</h4><div class="my-card pt-4">' + cards[2] + '</div><div class="my-card pt-4">' + cards[3] + '</div>';
    $output1.innerHTML = '<h4 class="player-3"><i class="las la-user-tie la-2x"></i>PLAYER 3</h4><div class="my-card pt-4">' + cards[4] + '</div><div class="my-card pt-4">' + cards[5] + '</div>';
};

$player4.onclick = function() {
    cards =[];
    $output2.innerHTML = '';
    $output3.innerHTML = '';
    $output1.innerHTML = '';
    $output4.innerHTML = '';

    cards = shuffle(makeCards());
    $output2.innerHTML = '<h4><i class="las la-user-tie la-2x"></i>PLAYER 1</h4><div class="my-card pt-4">' + cards[0] + '</div><div class="my-card pt-4">' + cards[1] + '</div>';
    $output3.innerHTML = '<h4 class="player-2"><i class="las la-user-tie la-2x"></i>PLAYER 2</h4><div class="my-card pt-4">' + cards[2] + '</div><div class="my-card pt-4">' + cards[3] + '</div>';
    $output1.innerHTML = '<h4 class="player-3"><i class="las la-user-tie la-2x"></i>PLAYER 3</h4><div class="my-card pt-4">' + cards[4] + '</div><div class="my-card pt-4">' + cards[5] + '</div>';
    $output4.innerHTML = '<div class="my-card pt-4">' + cards[6] + '</div><div class="my-card pt-4">' + cards[7] + '</div><h4 class="player-4"><i class="las la-user-tie la-2x"></i>PLAYER 4</h4>';
};


