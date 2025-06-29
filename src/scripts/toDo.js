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
    appointments.splice(selectedIndex, 1);
    loadAppointments();
}