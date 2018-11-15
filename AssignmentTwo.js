function setFileUploadAmount(){
    document.getElementById("myFile").multiple = false;
}
var openTextFile = function(event){
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var text = reader.result;
        text = text.split("\n");
        ipAddressing(text);
    };
    reader.readAsText(input.files[0]);
};
function ipAddressing(text){
    var ips = [];
    var urls = [];
    var data = {'https': 0, 'http': 0, 'ftp': 0, 'other': 0};
    for(var i = 0; i < text.length; i++){
        //try{
            urls[i] = new URL(text[i]);
            switch (urls[i].protocol) {
            case ('ftp:'):
                data['ftp']++;
                break;
            case ('http:'):
                data['http']++;
                break;
            case ('https:'):
                data['https']++;
                break;
            default:
                data['other']++
        }
        //}
        /*catch(err){
            alert(text[i] +" coultn't be turned into a URL object");
            urls[i] = new URL();
            continue;
        }*/

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var response = this.response;
                response = JSON.parse(response);
                console.log(response);
                response = response.Answer;
                console.log(response);
                var length = response.length;

                var ip = response[length-1].data;
                console.log(ip);
                var table = document.getElementById("ipTable");
                var row;
                var cel;


                ips.push(ip);
                row = table.rows[ips.length];
                cell = row.insertCell(9);
                cell.innerHTML = ip;

            }
        }
        xhr.open("GET", "https://dns.google.com/resolve?name=" + urls[i].host);
        xhr.send();
    }


    document.getElementById("ipStuff").innerHTML= "<table class=\"ipTable\" id=\"ipTable\"><tr class=\"ipTHeader\"><th>URL</th><th>Scheme</th><th>Authority</th><th>User Info</th><th>Host</th><th>Port</th><th>Path</th><th>Query</th><th>Fragment</th><th>IP Address</th></tr></table>";

    var table = document.getElementById("ipTable");
    var row;
    var cell;

    for(i = 0; i < urls.length; i++){
        row = table.insertRow(i+1);
        cell = row.insertCell(0);
        cell.innerHTML = urls[i].href;
        cell = row.insertCell(1);
        cell.innerHTML = urls[i].protocol;
        cell = row.insertCell(2);
        cell.innerHTML = urls[i].host;
        cell = row.insertCell(3);
        cell.innerHTML = urls[i].username;
        cell = row.insertCell(4);
        cell.innerHTML = urls[i].hostname;
        cell = row.insertCell(5);
        cell.innerHTML = urls[i].port;
        cell = row.insertCell(6);
        cell.innerHTML = urls[i].pathname;
        cell = row.insertCell(7);
        cell.innerHTML = urls[i].search;
        cell = row.insertCell(8);
        cell.innerHTML = urls[i].hash;


    }
    let total = data.http + data.https + data.ftp + data.other,
        chart = new CanvasJS.Chart("chartArea", {
            backgroundColor:"aliceblue",
            animationEnabled: true,
            animationDuration: 2000,
            title: {
                text: "Protocol Chart"
            },
            data: [{
                type: "pie",
                startAngle: 240,
                yValueFormatString: "##0.00\"%\"",
                indexLabel: "{label} {y}",
                dataPoints: [
                    {y: (data.http / total) * 100, label: "HTTP"},
                    {y: (data.https / total) * 100, label: "HTTPS"},
                    {y: (data.ftp / total) * 100, label: "FTP"},
                    {y: (data.other / total) * 100, label: "Other"}
                ]
            }]
        });
    chart.render();

}
