// Calculate Tip
function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numOfPeople = document.getElementById("peopleAmount").value;

    // Validate input
    if (billAmount === " " || serviceQuality === 0) {
        alert("Please enter values");
        return;
    }

    // Check to see if input is empty or less than or equal to 1
    if (numOfPeople === " " || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // Calculate Tip
    var total = (billAmount * serviceQuality) / numOfPeople
    // Round to two decimal places
    total = Math.round(total * 100) / 100;
    // Next line allows us to always have two digits after decimal point
    total = total.toFixed(2);

    // Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};