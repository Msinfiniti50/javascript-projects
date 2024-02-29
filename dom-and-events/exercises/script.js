function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    button.addEventListener('click', function() {
        paragraph.textContent = 'Houston, we have liftoff!';
    });
    missionAbort.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'red';
    });
    missionAbort.addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = '';
    });
    missionAbort.addEventListener('click', function() {
        let response = window.confirm('Are you sure you want to abort the mission?');
        if (response) {
            paragraph.textContent = 'Mission aborted. Space shuttle returning home.';
        }
    });
    
}window.onload = init;