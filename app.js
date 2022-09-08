//psuedo code

// 1. define target elements - buttons, score
// 2. define count for home, count for guest
// 3. onclick() - define functions in html
// 4. add points logic in the functions accordingly


const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

let countHome = 0;
let countGuest = 0;

function plusOneHome() {
    // console.log("im in");
    countHome += 1;
    homeScore.textContent = countHome;
}

function plusTwoHome() {
    countHome += 2;
    homeScore.textContent = countHome;
}

function plusThreeHome() {
    countHome += 3;
    homeScore.textContent = countHome;
}

function plusOneGuest() {
    countGuest += 1;
    guestScore.textContent = countGuest;
}

function plusTwoGuest() {
    countGuest += 2;
    guestScore.textContent = countGuest;
}

function plusThreeGuest() {
    countGuest += 3;
    guestScore.textContent = countGuest;
}