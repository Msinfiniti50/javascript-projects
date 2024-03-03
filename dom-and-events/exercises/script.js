

let rocketPosition = 250; // Initialize to starting position
let rocketPositionLeft = 0; // Initialize to starting position
let liftOff = document.getElementById('liftOff'); // Replace with actual ID
let abortMission = document.getElementById('abortMission'); // Replace with actual ID
let rocket = document.getElementById('rocket'); // Replace with actual ID
let up = document.getElementById('up'); // Replace with actual ID
let down = document.getElementById('down'); // Replace with actual ID
let right = document.getElementById('right'); // Replace with actual ID
let left = document.getElementById('left'); // Replace with actual ID
let spaceShuttleHeight = document.getElementById('spaceShuttleHeight'); // Replace with actual ID

function moveRocket(direction, amount) {
    switch (direction) {
        case 'up':
            if (rocketPosition > 0) {
                rocketPosition -= amount;
                let currentHeight = Number(spaceShuttleHeight.textContent);
                spaceShuttleHeight.textContent = currentHeight + 10000;
            }
            break;
        case 'down':
            if (rocketPosition < 250) {
                rocketPosition += amount;
                let currentHeight = Number(spaceShuttleHeight.textContent);
                spaceShuttleHeight.textContent = currentHeight - 10000;
            }
            break;
        case 'right':
            if (rocketPositionLeft < 250) {
                rocketPositionLeft += amount;
            }
            break;
        case 'left':
            if (rocketPositionLeft > 0) {
                rocketPositionLeft -= amount;
            }
            break;
    }
    rocket.style.top = `${rocketPosition}px`;
    rocket.style.left = `${rocketPositionLeft}px`;
}
abortMission.addEventListener('click', () => {
    if (confirm('Are you sure you want to abort the mission?')) {
        spaceShuttleHeight.textContent = 0;
        rocket.style.top = '250px';
        rocket.style.left = '0px';
        rocketPosition = 250;
        rocketPositionLeft = 0;
    
    }
});
  
liftOff.addEventListener('click', () => {
    alert('Initiating lift off!');
    let currentHeight = Number(spaceShuttleHeight.textContent);
    spaceShuttleHeight.textContent = currentHeight + 10000;
    rocket.style.top = '0px';
    rocketPosition = 0;
});
up.addEventListener('click', () => moveRocket('up', 10));
down.addEventListener('click', () => moveRocket('down', 10));
right.addEventListener('click', () => moveRocket('right', 10));
left.addEventListener('click', () => moveRocket('left', 10));