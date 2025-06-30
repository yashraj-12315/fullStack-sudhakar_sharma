var appointments = ["Birthday Party", "Meeting with Manager"]

function loadAppointments() {
    document.getElementById("lstAppointments").innerHTML = ""
    appointments.map(function (appointment) {
        var option = document.createElement("option")
        option.text = appointment;
        option.value = appointment;

        document.getElementById("lstAppointments").appendChild(option);
    })
    document.getElementById("lblCount").innerHTML = `You have ${appointments.length} appointments`

}

function bodyLoad() {
    loadAppointments()
}

function addClick() {
    var appointment = document.getElementById("txtTask").value;
    appointments.push(appointment);
    alert(`${appointment} Added to your list`)
    loadAppointments()
    document.getElementById("txtTask").value = "";
}

function sortAsc() {
    appointments.sort();
    loadAppointments()
}

function sortDesc() {
    appointments.sort();
    appointments.reverse();
    loadAppointments();
}

function deleteClick() {
    var selectedAppointment = document.getElementById("lstAppointments").value;
    var selectedIndex = appointments.indexOf(selectedAppointment);
    var choice = confirm(`Are you sure?\nWant to Delete?\n${selectedAppointment}`)
    if (choice === true) {
        appointments.splice(selectedIndex, 1);
        loadAppointments();
    }
}

function clearAll() {
    appointments.length = 0;
    loadAppointments();
}

function editClick() {
    document.getElementById("txtEdit").value = document.getElementById("lstAppointments").value;
}

function saveClick() {
    var selectedAppointment = document.getElementById("lstAppointments").value;
    var selectedIndex = appointments.indexOf(selectedAppointment);
    var newAppointment = document.getElementById("txtEdit").value;
    appointments[selectedIndex] = newAppointment
    loadAppointments();
}