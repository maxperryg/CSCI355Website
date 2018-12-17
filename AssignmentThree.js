var amount,
    prefixSize,
    binaryNetwork = [],
    dottedDecimal,
    binary,
    version,
    isClassful,
    classLetter,
    amount;

function showIPv4Menu(){
    version = 4;
    var y = document.getElementById("ip6Menu");
    if(y.className==="ip6Menuvisible")
        y.className="ip6Menu";
    var x = document.getElementById("ip4Menu");
    if(x.className==="ip4Menu")
        x.className += "visible";
    var versionOutput = "version: ";
    document.getElementById("versionOutput").innerHTML = versionOutput+version;
    if(classLetter === "Zero")
        document.getElementById("zeroCompression").innerHTML = "";
    if(classLetter === "!Zero")
        document.getElementById("zeroCompression").innerHTML = "";
}
function showClassMenu(isClassfull){
    isClassful=isClassfull;
    var classVersion;
    if(isClassful){
        var x = document.getElementById("classMenu");
        if(x.className === "classMenu")
            x.className += "visible";
        classVersion = "Class: ";
    }
    if(!isClassful){
        var x = document.getElementById("classMenu");
        if(x.className === "classMenuvisible")
            x.className = "classMenu";
        classVersion = "Classless";
    }
    document.getElementById("isClassful").innerHTML = classVersion;
    showAmount("none")
}
function showIPv6Menu(){
    version = 6;
    var y = document.getElementById("ip4Menu");
    if(y.className==="ip4Menuvisible")
        y.className="ip4Menu";
    var x = document.getElementById("ip6Menu");
    if(x.className==="ip6Menu")
        x.className += "visible";
    var versionOutput = "version: ";
    document.getElementById("versionOutput").innerHTML = versionOutput+version;
    var z = document.getElementById("classMenu");
    if(z.className === "classMenuvisible")
            z.className = "classMenu";
    document.getElementById("isClassful").innerHTML = "";
}
function showAmount(classLetterr){
    classLetter=classLetterr;
    var x = document.getElementById("setAmount");
    x.className += "visible";
    if(isClassful)
        document.getElementById("isClassful").innerHTML = "Class: "+classLetter;
    if(classLetter === "Zero")
        document.getElementById("zeroCompression").innerHTML = "Zero-Compression";
    if(classLetter === "!Zero")
        document.getElementById("zeroCompression").innerHTML = "Non Zero-Compression";
}
function setAmount() {
//    document.getElementsByClassName('retry')[0].style.display = 'inherit';
//    let module = document.getElementById('number-needed');
    amount = document.getElementById('amount').value;
    start();
//    module.style.display = 'none';
//    module = document.getElementById('type-needed');
//    module.style.display = 'inherit';
}
function start(){
    if(version == 4) start4();
    if(version == 6) start6();
}
function start4(){
    if(isClassful) startClassful(classLetter);
    if(!isClassful) startClassless();
}
//function startClassful(letter){
//    var output = document.getElementById("output");
//    switch (letter) {
//        case "A":
//            leadingBits = '0';
//            prefixSize = 8;
//            break;
//        case "B":
//            leadingBits = '10';
//            prefixSize = 16;
//            break;
//        case "C":
//            leadingBits = '110';
//            prefixSize = 24;
//            break;
//        case "D":
//            leadingBits = '1110';
//            prefixSize = 32;
//        case "E":
//            output.innerHTML = "<h1>Reserved</h1>";
//            return;
//    }
//    var table = document.getElementById("outputTable");
//    table.innerHTML += ('<tr> <th>Number</th>\n' +
//        '    <th>IP Address in Dotted Decimal Notation</th>\n' +
//        '    <th>IP Address in Dotted Binary Notation</th> </tr>');
//    if (isClassful) binaryNetwork = networkNumberFromPrefix(leadingBits, prefixSize);
//    for (var i=1; i<=amount; i++){
//        var address;
//        if (!isClassful) {
//            var array = binaryNetwork.slice();
//            array[array.length - 1] = padOctet(array[array.length - 1]);
//            address = addAddressToNetwork(array);
//        }
//        else address = addAddressToNetwork(binaryNetwork);
//        dottedDecimal = binToDottedDec(address);
//        binary = binaryArrayToDotted(address);
//        table.innerHTML += ('<tr>\n' +
//            '    <td>' + i + '</td>\n' +
//            '    <td>' + dottedDecimal + '</td>\n' +
//            '    <td>' + binary + '</td>\n' +
//            '  </tr>');
//        if (classLetter === "D") break;
//    }
//}
//function startClassless(){
//    var bitsNeededInHost = Math.ceil(Math.log2(amount));
//    prefixSize = 32 - bitsNeededInHost;
//    for (var i=leadingBits.length; i < prefixSize; i++){
//        leadingBits += randomBit();
//    }
//        // if leading bits are more than 1 octet length, push each octet into network array
//    while (leadingBits.length > 8) {
//        binaryNetwork.push(leadingBits.substring(0, 8));
//        leadingBits = leadingBits.substring(8);
//    } // push remaining bits into network array
//    if (leadingBits) binaryNetwork.push(leadingBits);
//    var table = document.getElementById("outputTable");
//    table.innerHTML += ('<tr> <th>Number</th>\n' +
//        '    <th>IP Address in Dotted Decimal Notation</th>\n' +
//        '    <th>IP Address in Dotted Binary Notation</th> </tr>');
//    if (isClassful) binaryNetwork = networkNumberFromPrefix(leadingBits, prefixSize);
//    for (var i=1; i<=amount; i++){
//        var address;
//        if (!isClassful) {
//            var array = binaryNetwork.slice();
//            array[array.length - 1] = padOctet(array[array.length - 1]);
//            address = addAddressToNetwork(array);
//        }
//        else address = addAddressToNetwork(binaryNetwork);
//        dottedDecimal = binToDottedDec(address);
//        binary = binaryArrayToDotted(address);
//        table.innerHTML += ('<tr>\n' +
//            '    <td>' + i + '</td>\n' +
//            '    <td>' + dottedDecimal + '</td>\n' +
//            '    <td>' + binary + '</td>\n' +
//            '  </tr>');
//        if (classLetter === "D") break;
//    }
//}
//function randomBit() {
//    return Math.round(Math.random());
//}
//
//function randomOctet() {
//    var octet = '';
//    for (var i=0; i<8; i++) octet += randomBit();
//    return octet;
//}
//
//function padOctet(octet) {
//    while (octet.length < 8){
//        octet += randomBit();
//    }
//    return octet;
//}
//
//function networkNumberFromPrefix (leadingBits, size) {
//    var array=[];
//    // get first octet
//    array.push(padOctet(leadingBits));
//    // get remaining octets
//    for (var i = 1; i < size; i+=8)
//        array.push(randomOctet());
//    return array;
//}
//
//
//function addAddressToNetwork (network) {
//    var array = network.slice();
//    for(var i=array.length; i<4; i++){
//        array.push(randomOctet());
//    }
//    return array;
//}
//
//function binToDottedDec(binaryArray) {
//    var output = "";
//    for (var i=0; i<binaryArray.length; i++){
//        output += binToDec(binaryArray[i]);
//        if (i+ 1<binaryArray.length) output += '.';
//    }
//    return output;
//}
//
//function binToColonHex(binArray, shouldCompress) {
//    var output = "";
//    for (var i=0; i<binArray.length; i += 2){
//        var number = decimalToHex(binToDec((binArray[i] + binArray[i+1])));
//        if (!(number === '0' && shouldCompress)) output += number;
//        if (i+2 < binArray.length) output += ':';
//    }
//    return output;
//}
//
//function binToDec(binary) {
//    return parseInt((binary + '')
//        .replace(/[^01]/gi, ''), 2);
//}
//function decToBin(decimal) {
//    return parseInt(decimal, 10).toString(2);
//}
//
//function binaryArrayToDotted (binaryArray) {
//    var output = "";
//    for (var i=0; i<binaryArray.length; i++){
//        output += (binaryArray[i]);
//        if (i+ 1<binaryArray.length) output += '.';
//    }
//    return output;
//}
//
//function decimalToHex(d) {
//    return Number(d).toString(16);
//}
//function handleIpv6(typeNeeded) {
//    let module = document.getElementById('type-needed'),
//        table = document.getElementById('output');
//    module.innerHTML = '<h1>You asked for ' + numberOfNeededAddresses + ' '
//        + typeNeeded + ' addresses.</h1>';
//    table.innerHTML += ('<tr> <th>Number</th>\n' +
//        '    <th>IP Address in Colon Hex Notation</th>\n' +
//        '    <th>IP Address in Dotted Binary Notation</th> </tr>');
//    let binNetwork = [];
//    for (let i= 0; i<8; i++){
//        binNetwork.push(randomOctet());
//    }
//
//    for (let i=1; i<=numberOfNeededAddresses; i++){
//        // console.log(binNetwork);
//        let host = binNetwork.slice();
//        for (let i= 0; i<8; i++) {
//            host.push(randomOctet());
//        }
//        table.innerHTML += ('<tr>\n' +
//            '    <td>' + i + '</td>\n' +
//            '    <td>' + binToColonHex(host, !typeNeeded.includes('without')) + '</td>\n' +
//            '    <td>' + binaryArrayToDotted(host) + '</td>\n' +
//            '  </tr>');
//    }
//}
