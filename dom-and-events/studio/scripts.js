// Write your JavaScript code here.
// Remember to pay attention to page loading!

let spaceShuttleHeight = 250; // Initialize to starting position
let spaceShuttleLeft = 0;
let rocket = document.getElementById('rocket'); // Replace with actual ID
let abortMission = document.getElementById('abortMission'); // Replace with actual ID
let spaceShuttlePosition = 0; // Replace with actual ID
let up = document.getElementById('up'); // Replace with actual ID
let down = document.getElementById('down'); // Replace with actual ID
let right = document.getElementById('right'); // Replace with actual ID
let left = document.getElementById('left'); // Replace with actual ID
let land = document.getElementById('land'); // Replace with actual ID
function moveRocket(direction, amount) {
    switch (direction) {
        case 'up':
            if (spaceShuttleHeight > 250) {
                spaceShuttleHeight -= amount;
                let currentHeight = Number(spaceShuttleHeight.textContent);
                spaceShuttleHeight.textContent = currentHeight + 10000;
            }
            break;
        case 'down':
            if (spaceShuttleHeight < 250) {
                spaceShuttleHeight+= amount;

            }
            break;
        case 'right':
            if (spaceShuttleLeft < 250) {
                spaceShuttleLeft+= 10;
            }
            break;
        case 'left':
            if (spaceShuttleLeft > 0) {
                spaceShuttleLeft -= 10;
            }
            break;
        case 'land':
            alert('The shuttle is landing. Landing gear engaged.');
            spaceShuttleHeight = 0;
            spaceShuttleLeft = 0;
            break;    
    }
    rocket.style.top = `${spaceShuttleHeight}px`;
    rocket.style.left = `${spaceShuttleLeft}px`;
}
abortMission.addEventListener('click', () => {
    if (confirm('Are you sure you want to abort the mission?')) {
        rocket.style.top = 250;
        rocket.style.left = '0px';
        spaceShuttleHeight = 250;
        spaceShuttleLeft = 0;
    }
  });
up.addEventListener('click', () => moveRocket('up', +10));
down.addEventListener('click', () => moveRocket('down', -10));
right.addEventListener('click', () => moveRocket('right', +10));
left.addEventListener('click', () => moveRocket('left', -10));
land.addEventListener('click', () => moveRocket('land', 0));    