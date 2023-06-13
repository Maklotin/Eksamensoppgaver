
var regnUtKnappEl = document.getElementById("regn_ut");
var resultatEl = document.getElementById("resultat");
var leggTilFagEl = document.getElementById("Legg_til_fag")


var fag1 = document.getElementById("fag1");
var fag2 = document.getElementById("fag2");
var fag3 = document.getElementById("fag3");
var fag4 = document.getElementById("fag4");
var fag5 = document.getElementById("fag5");
var fag6 = document.getElementById("fag6");
var fag7 = document.getElementById("fag7");
var fag8 = document.getElementById("fag8");
var fag9 = document.getElementById("fag9");
var fag10 = document.getElementById("fag10");
var fag11 = document.getElementById("fag11");
var fag12 = document.getElementById("fag12");
var fag13 = document.getElementById("fag13");
var fag14 = document.getElementById("fag14");

var allInputs = document.querySelectorAll(".input_el");
allInputs.forEach(input => {
  input.oninput = function () {
    if (this.value.length > 1)
        this.value = this.value.slice(0,1); 
      }
});

function regnUt(e) {
	var registrertKarakter = 14;
	if (document.getElementById("Karakter1").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter2").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter3").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter4").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter5").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter6").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter7").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter8").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter9").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter10").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter11").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter12").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter13").value > 0) {
		registrertKarakter--;
	}
	if (document.getElementById("Karakter14").value > 0) {
		registrertKarakter--;
	}
	var karakterAntall = 14 - Number(registrertKarakter);

    // var karakterSvar = [document.getElementById("Karakter1").value, 
    //                     document.getElementById("Karakter2").value,
    //                     document.getElementById("Karakter3").value,
    //                     document.getElementById("Karakter4").value,
    //                     document.getElementById("Karakter5").value,
    //                     document.getElementById("Karakter6").value,
    //                     document.getElementById("Karakter7").value,
    //                     document.getElementById("Karakter8").value,
    //                     document.getElementById("Karakter9").value,
    //                     document.getElementById("Karakter10").value ];
    var karakterSvar = [];
    for (let index = 0; index < 14; index++) {
        var navnID = "Karakter" + Number(index+1);
        karakterSvar[index] = document.getElementById(navnID).value;
    }


    const karakterSvar2 = karakterSvar.map((i) => Number(i));

    var reducer = (accumulator, curr) => accumulator + curr;

    karakterSum = karakterSvar2.reduce(reducer);

    var karakterGjennomsnitt = karakterSum / karakterAntall;
    console.log("ditt snitt er: " + karakterGjennomsnitt.toFixed(2));
    resultatEl.innerHTML = karakterGjennomsnitt.toFixed(2);


	if (karakterGjennomsnitt < 2) {
		resultatEl.innerHTML = "du har ingen framtid, GG well played";
	} else if (karakterGjennomsnitt >= 6){
		resultatEl.innerHTML = "Error - Går ikke ann å ha høyere snitt enn 6"
	}

}

function reset() {
	window.location.reload();
}

regnUtKnappEl.addEventListener("click", regnUt);

function endreFag(hvilketFag) {
    fagNavn = prompt("Skriv inn faget");
    hvilketFag.innerHTML = fagNavn;
	if(fagNavn == "") {
		alert("Vennligst skriv inn et fag");
		hvilketFag.innerHTML = "fag1";
	} else {
	hvilketFag.innerHTML = fagNavn;
}

} 
