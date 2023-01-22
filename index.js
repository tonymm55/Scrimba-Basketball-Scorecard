let homePts=document.getElementById('home-pts')
let homeCount=0
let guestPts=document.getElementById('guest-pts')
let guestCount=0

function homeAddPoint() {
    homeCount=homeCount+1
    homePts.textContent=homeCount    
}

function homeAddTwoPoints() {
    homeCount=homeCount+2
    homePts.textContent=homeCount
}

function homeAddThreePoints() {
    homeCount=homeCount+3
    homePts.textContent=homeCount
}

function guestAddPoint() {
    guestCount=guestCount+1
    guestPts.textContent=guestCount    
}

function guestAddTwoPoints() {
    guestCount=guestCount+2
    guestPts.textContent=guestCount
}

function guestAddThreePoints() {
    guestCount=guestCount+3
    guestPts.textContent=guestCount
}