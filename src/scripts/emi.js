function AmountChange() {
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value
}

function RateChange() {
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;

}

function YearChange() {
    document.getElementById("txtYears").value = document.getElementById("rangeYear").value;
}

function CalculateClick() {
    var P = parseInt(document.getElementById("txtAmount").value);
    var R = parseFloat(document.getElementById("txtRate").value) / 12 / 100;
    var N = parseInt(document.getElementById("txtYears").value) * 12;
    var EMI = P * R * (Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)
    document.getElementById("lblResult").innerHTML = "Your EMI Amount is <span class='fw-bold'> &#8377; " + Math.round(EMI).toLocaleString('en-in') + "</span> every month for next " + N + " months";

}