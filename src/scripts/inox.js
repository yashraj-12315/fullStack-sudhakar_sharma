function BookClick() {
    document.getElementById("btnQuickBooking").style.display = "none";
    document.getElementById("summaryContainer").style.display = "block";
    document.getElementById("lblMovie").textContent = document.getElementById("lstMovies").value
    document.getElementById("lblDate").textContent = document.getElementById("lstDate").value
    document.getElementById("lblCinema").textContent = document.getElementById("lstCinema").value
    document.getElementById("lblTime").textContent = document.getElementById("lstTime").value

    poster = document.getElementById("imgPoster")
    movieName = document.getElementById("lstMovies").value

    if (movieName == "Mission Impossible") {
        poster.src = "../public/images/mission-impossible.png"
    } else if (movieName == "Final Destination") {
        poster.src = "../public/images/final-destination.png"
    } else {
        poster.src = "../public/images/raid-2.png"

    }
}

function ModifyClick() {
    document.getElementById("title").textContent = "Modify Booking"
    document.getElementById("btnBook").textContent = "Save"
    document.getElementById("btnBook").className = "btn btn-success"
}