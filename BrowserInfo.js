function screenInfo() {
    var screenText = "";
    var browserText = "";
    var windowText = "";

    {
        screenText += "<p class ='property'>Total width/height:</p>" + "<p>"+ screen.width + "*" + screen.height + "</p>";
        screenText += "<p class ='property'>Available width/height:</p>" + "<p>"+ screen.availWidth + "*" + screen.availHeight + "</p>";
        screenText += "<p class ='property'>Color depth:</p>" +"<p>"+ screen.colorDepth + "</p>";
        screenText += "<p class ='property'>Color resolution:<p>" +"<p>"+ screen.pixelDepth + "</p>";

        document.getElementById("screenInfo").innerHTML += screenText;
    }

    {
        browserText += "<p class ='property'>Browser Name:</p>" +"<p>"+ navigator.appName + "</p>";
        browserText += "<p class ='property'>Browser Version:</p>" +"<p>"+ navigator.appVersion + "</p>";

        document.getElementById("browserInfo").innerHTML += browserText;
    }

    {
        windowText += "<p class ='property'>Window Size:</p>" +"<p>"+ window.outerWidth + "*" + window.outerHeight + "</p>";

        document.getElementById("windowInfo").innerHTML += windowText;
    }
}
