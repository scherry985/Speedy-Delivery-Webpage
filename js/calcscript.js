const destinations = ["Aurora", "Dallas", "Detroit", "Milwaukee", "Peoria"];
const distanceInMiles = [42, 902, 230, 92, 172];
const costsPerMile = [1.5, 1.2, 1.0, 2.0, 1.3];
const weightMultipliers = [1.0, 1.5, 2.0, 2.5, 3.0];
const weights = ["0-10 lbs", "11-20 lbs", "21-30 lbs", "31-40 lbs", "41 lbs and above"];

function calcCost() {
    let selectedDest = document.getElementById("destination").value;
    let selectedWeight = document.getElementById("weight").value;
    let distance = distanceInMiles[selectedDest];
    let mileCost = costsPerMile[selectedDest];
    let weightMult = weightMultipliers[selectedWeight];
    let cost = (distance * mileCost) * weightMult;
    let oStr = `Cost for a distance of ${distance} with ${weights[selectedWeight]}: $${cost}`
    document.getElementById("results").innerHTML = oStr;
}

function populateOptions() {
    let destInput = document.getElementById("destination");
    let weightInput = document.getElementById("weight");
    for (let i = 0; i < destinations.length; i++) {
        let dest = document.createElement("option");
        let weight = document.createElement("option");
        console.log(destinations[i]);
        console.log(weights[i]);
        dest.textContent = destinations[i];
        dest.value = i;
        weight.textContent = weights[i];
        weight.value = i;
        destInput.appendChild(dest);
        weightInput.appendChild(weight);
    }
}

function reset() {
    document.getElementById("results").innerHTML = "";
}

window.onload = function () {
    // Populate select options
    populateOptions();
    // Create event handlers
    let calcBT = document.getElementById("calc");
    calcBT.addEventListener("click", calcCost);
    let resetBT = document.getElementById("reset");
    resetBT.addEventListener("click", reset);
}
