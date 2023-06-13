function registrerBruker() {



    var brukerInfo = [];
    for (let i = 0; i < 4; i++){
        brukerInfo.push(document.getElementById("registrer_input" + i).value);
        console.log(brukerInfo);
    }
    localStorage.setItem('bruker', JSON.stringify(brukerInfo));
    console.log(localStorage.getItem('bruker'));
    console.log(JSON.parse(localStorage.getItem('bruker')));
    var passord1 = document.getElementById("registrer_input2").value;
    var passord2 = document.getElementById("bekreft_passord").value;
    console.log(passord1 + " og " + passord2)
    if (passord1 === passord2) {
        document.getElementById("melding_registrering").innerHTML = "brukeren er nå registrert. Du kan nå logge på";
    } else {
        document.getElementById("error_registrering").innerHTML = "passordene matcher ikke!"
    }
}

function clearStorage(){
    localStorage.clear();
    window.open(location.href = "logg_inn.html");
}

function loggUt(){
    window.open(location.href = "logg_inn.html")
}

function loggInn() {
    var brukerArray = JSON.parse(localStorage.getItem('bruker'));
    var email = brukerArray[1];
    var passord = brukerArray[2];
    var emailPassord = [email, passord];
    var emailInput = document.getElementById("email").value;
    var passordInput = document.getElementById("passord").value;
    var emailPassordInput = [emailInput, passordInput];
    if (email === emailInput, passord === passordInput){
        window.open(location.href = "logged_inn.html")
    } else if (email == "admin", passord == "admin") {
        window.open(location.href = "admin.html")
    } else {
        alert("feil brukernavn eller passord")
    }
    console.log("email og passordet er: " + emailPassord + ". du skrev: " + emailPassordInput)
}

function loggedInInfo () {
    var brukerInfo = JSON.parse(localStorage.getItem('bruker'));
    document.getElementById("navnpåbruker").innerHTML = brukerInfo[0];
    document.getElementById("navntabell").innerHTML = brukerInfo[0];
    document.getElementById("emailtabell").innerHTML = brukerInfo[1];
    document.getElementById("telefontabell").innerHTML = brukerInfo[3];
}



function oppdaterPris() {
    var prisPerPerson = 799;
    var antallPersoner = Number(document.getElementById("antall_personer").value);
    var prisAllePersoner = antallPersoner * prisPerPerson;
  
    var dato1 = document.getElementById("dato1").value;
    var dato2 = document.getElementById("dato2").value;
    //kode fra "stackabuse.com" fra bruker "Abhilash Kakumanu", denne regner ut hvor mange dager det er mellom 2 forskjellige datoer.
    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);
    
        // One day in milliseconds
        const oneDay = 1000 * 60 * 60 * 24;
    
        // Calculating the time difference between two dates
        const diffInTime = date2.getTime() - date1.getTime();
    
        // Calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);
    
        return diffInDays;
    }
    
    var antallDager = getNumberOfDays(dato1, dato2);



    if (document.getElementById("ja_til_frokost").checked==true) {
        var frokost = 150;
    } else {
        var frokost = 0;
    }
    var frokostPris = frokost * antallPersoner;
    if (document.getElementById("dyrepark").checked==true) {
        var dagspass = 269;
    } else if (document.getElementById("badeland").checked==true) {
        var dagspass = 199;
    } else if (document.getElementById("begge").checked==true) {
        var dagspass = 349;
    } else {
        var dagspass = 0;
    }
    var dagspassPris = dagspass * antallPersoner;
    var totalPris = prisAllePersoner * (antallDager + 1) + frokostPris + dagspassPris;
    document.getElementById("total_pris").innerHTML = totalPris + " NOK";
}



function bekreftBooking() {
    if (confirm("Bekreft Booking?")) {
        alert("Booking mottatt");
        var prisPerPerson = 799;
        var antallPersoner = Number(document.getElementById("antall_personer").value);
        var prisAllePersoner = antallPersoner * prisPerPerson;
        var dato1 = document.getElementById("dato1").value;
        var dato2 = document.getElementById("dato2").value;
        function getNumberOfDays(start, end) {
            const date1 = new Date(start);
            const date2 = new Date(end);
        
            // One day in milliseconds
            const oneDay = 1000 * 60 * 60 * 24;
        
            // Calculating the time difference between two dates
            const diffInTime = date2.getTime() - date1.getTime();
        
            // Calculating the no. of days between two dates
            const diffInDays = Math.round(diffInTime / oneDay);
        
            return diffInDays;
        }
        
        var antallDager = getNumberOfDays(dato1, dato2) + 1;
        var prisPerDagPerPerson = antallDager * prisAllePersoner;
        if (document.getElementById("ja_til_frokost").checked==true) {
            var frokost = 150;
            var frokostStatus = "Ja";
        } else {
            var frokost = 0;
            var frokostStatus = "Ingen frokost";
        }
        var frokostPris = frokost * antallPersoner;
        if (document.getElementById("dyrepark").checked==true) {
            var dagspass = 269;
            var dagspassStatus = "Dagspass for dyreparken";
        } else if (document.getElementById("badeland").checked==true) {
            var dagspass = 199;
            var dagspassStatus = "Dagspass for badeland";
        } else if (document.getElementById("begge").checked==true) {
            var dagspass = 349;
            var dagspassStatus = "Dagspass for både dyreparken og badeland"
        } else {
            var dagspass = "error";
        }
        var dagspassPris = dagspass * antallPersoner;
        var totalPris = (prisAllePersoner * antallDager) + frokostPris + dagspassPris;
        var brukerInfo = JSON.parse(localStorage.getItem('bruker'));
        document.getElementById("kvittering_top").innerHTML = '</div><h1>Abra Havn</h1><hr><div id="kunde_info"><p>' + brukerInfo[0] + '</p>' + '<p>' + brukerInfo[1] + '</p>' + '<p>' + brukerInfo[3] + '</p>';
        document.getElementById("kvittering_info").innerHTML = '<h1>Booking oversikt</h1><hr><table><tr><td><p>antall personer:</p></td><td><p>' + antallPersoner + '</p></td><td><p> <b>' + prisPerPerson + 'kr</b> per person <br> totalt: <b>' + prisAllePersoner + 'kr</b></p></td></tr><tr><td><p>antall dager:</p></td><td><p>fra: ' + dato1 + ' <br> til: ' + dato2 + '</p></td><td><p>' + antallDager + ' dager, <br> pris: <b>' + prisPerDagPerPerson + 'kr</b> </p></td></tr><tr><td><p>Frokost:</p></td><td><p><b>' + frokostStatus + '</b></p></td><td><p>pris totalt: <b>' + frokostPris + 'kr</b<</p></td></tr><tr><td><p>dagspass:</p></td><td><p><b>' + dagspassStatus + '</b></p></td><td><p>pris: <b>' + dagspassPris + 'kr</b></p></td></tr></table><br><h3><b>sum: ' + totalPris + 'kr</b></h3>';
        //Print PDF funskjon fra "wp-punch.com" av bruker "Tristan Kappel"
        function printElement() {
 
            var popup = window.open('', 'PRINT', 'height=600,width=900');
            popup.document.write('<html><head><title>' + "Salgskvittering"  + '</title><style>body {font-family: Arial;} table {width: 100%;} table td{border: solid 2px black; padding: 20px;}</style>');
            popup.document.write('</head><body >');
            popup.document.write(document.getElementById("kvittering").innerHTML);
            popup.document.write('</body></html>');
            popup.document.close(); 
            popup.focus(); 
            popup.print();
            popup.close();
            return true;
          }
        printElement();
      } else {
        alert("Booking kansellert");
      }
}

