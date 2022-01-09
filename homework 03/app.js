var time =parseInt(prompt('what time is it?'));

switch(time) {
    case 8:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-success bg-dark p-3">Wake up.</h1>';
        break;
    case 9:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-success bg-dark p-3">Wake up.</h1>';
        break;
    case 10:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-white bg-dark p-3">Go to work.</h1>';
        break;
    case 11:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-white bg-dark p-3">Go to work.</h1>';
        break;
    case 12:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-warning bg-dark p-3">Lunch.</h1>';
        break;
    case 13:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-white bg-dark p-3">Go to work.</h1>';
        break;
    case 14:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-white bg-dark p-3">Go to work.</h1>';
        break;
    case 15:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-white bg-dark p-3">Go to work.</h1>';
        break;
    case 16:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-white bg-dark p-3">Go to work.</h1>';
        break;
    case 17:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-primary bg-dark p-3">Gym.</h1>';
        break;
    case 18:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-primary bg-dark p-3">Gym.</h1>';
        break;
    case 19:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-warning bg-dark p-3">Dinner time.</h1>';
        break;
    case 20:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-info bg-dark p-3">Watch TV.</h1>';
        break;
    case 21:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-info bg-dark p-3">Watch TV.</h1>';
        break;
    case 22:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-white-50 bg-dark p-3">Time to go to sleep.</h1>';
        break;
    default:
        document.getElementById('output').innerHTML = '<h1 class="text-center text-danger bg-dark p-3">You should be sleeping.</h1>';
}