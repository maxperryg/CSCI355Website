function openMenu() {
    var x = document.getElementById("topnavid");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
