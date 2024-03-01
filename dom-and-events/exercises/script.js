function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const landButton = document.getElementById("landButton");
    const upButton = document.getElementById("upButton");
    const downButton = document.getElementById("downButton");
    const rightButton = document.getElementById("rightButton");
    const leftButton = document.getElementById("leftButton");
    const paragraph = document.getElementById("statusReport");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    let rocketPosition = 0;
    let rocketPositionLeft = 0;

    // Put your code for the exercises here.

    button.addEventListener('click', function() {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (response) {
        paragraph.textContent = 'Shuttle in flight!';
        shuttleBackground.style.backgroundColor = 'blue';
        let currentHeight = Number(shuttleHeight.textContent);
        shuttleHeight.textContent = currentHeight + '10,000';
      }
    });

    landButton.addEventListener('click', function() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        paragraph.textContent = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.textContent = '0';
        rocketPosition = 0;
        rocketPositionLeft = 0;
        rocket.style.top = `${rocketPosition}px`;
        rocket.style.left = `${rocketPositionLeft}px`;
    });

    missionAbort.addEventListener('click', function() {
        let response = window.confirm('Confirm that you want to abort the mission.');
        if (response) {
            paragraph.textContent = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.textContent = '0';
            rocketPosition = 0;
            rocketPositionLeft = 0;
            rocket.style.top = `${rocketPosition}px`;
            rocket.style.left = `${rocketPositionLeft}px`;
        }
 });
    
    upButton.addEventListener('click', function() {
      if (rocketPosition > 0) {
        rocketPosition -= 10;
        rocket.style.top = `${rocketPosition}px`;
        let currentHeight = Number(shuttleHeight.textContent);
        shuttleHeight.textContent = currentHeight + 10000;
      }
    });

    downButton.addEventListener('click', function() {
    if (rocketPosition < 250) {
        rocketPosition += 10;
        rocket.style.top = `${rocketPosition}px`;
        let currentHeight = Number(shuttleHeight.textContent);
        shuttleHeight.textContent = currentHeight - 10000;
      }
    });

    rightButton.addEventListener('click', function() {
       if(rocketPositionLeft < 250) {
        rocketPositionLeft += 10;
        rocket.style.left = `${rocketPosition}px`;
       }
    });

    leftButton.addEventListener('click', function() {
    if(rocketPositionLeft > 0) {
        rocketPositionLeft -= 10;
        rocket.style.left = `${rocketPosition}px`;
      }
    });
}

window.onload = init;