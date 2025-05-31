function CalculateBMI() {
    var age = document.getElementById("ageInput").value;
    var height = document.getElementById("heightInput").value;
    var weight = document.getElementById("weightInput").value;

    BMI =  weight/Math.pow(height / 100, 2) ;
    document.getElementById("bmi").textContent = Math.ceil(BMI) ;
}