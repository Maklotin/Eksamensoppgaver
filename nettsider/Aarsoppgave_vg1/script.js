
//Pause/resume GIF

//step 1
function resumeGIF1() {
  document.getElementById("step_1").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step1.gif"
}
function pauseGIF1() {
  document.getElementById("step_1").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step1_thumbnail.jpg"
}
//step 2
function resumeGIF2() {
  document.getElementById("step_2").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step2.gif"
}
function pauseGIF2() {
  document.getElementById("step_2").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step2_thumbnail.jpg"
}
//step 3
function resumeGIF3() {
  document.getElementById("step_3").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step3.gif"
}
function pauseGIF3() {
  document.getElementById("step_3").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step3_thumbnail.jpg"
}
//step 4
function resumeGIF4() {
  document.getElementById("step_4").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step4.gif"
}
function pauseGIF4() {
  document.getElementById("step_4").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step4_thumbnail.jpg"
}
//step 5
function resumeGIF5() {
  document.getElementById("step_5").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step5.gif"
}
function pauseGIF5() {
  document.getElementById("step_5").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step5_thumbnail.jpg";
}
//step 6
function resumeGIF6() {
  document.getElementById("step_6").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step6.gif"
}
function pauseGIF6() {
  document.getElementById("step_6").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step6_thumbnail.jpg"
}
//step 7
function resumeGIF7() {
  document.getElementById("step_7").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step7.gif"
}
function pauseGIF7() {
  document.getElementById("step_7").src = "bilder/PC_bygging/hvordan_bygge_PC/steps/step7_thumbnail.jpg"
}

//endre logoen på forsiden til GIF når man trykker på den
function animertLogo() {
  document.getElementById("logo").src = "bilder/animert_logo.gif"
}

//looper en GIF etter at den første GIF'en er ferdig
function byttGIF() {
  var bakgrunn = document.getElementById("PC_deler_knapper");
  setTimeout(bakgrunn.style.backgroundImage = 'url("bilder/PC_Bygging/PC/loop.gif")', 3000);
}

//legg til bilde på kortet (fant på: https://stackoverflow.com/questions/24837646/onchange-file-input-change-img-src-and-change-image-color ) (kort.html)
var loadFile = function(event) {
  var image = document.getElementById('kort_bilde_img');
  image.src = URL.createObjectURL(event.target.files[0]);
};

//legg til fødselsdato (kort.html)
function foedselsDato() {
  let dato = document.getElementById("foedselsdato").value;
  document.getElementById("dato").innerHTML = dato;
}

//endre tekst farge (kort.html)

function endreFargePaaKort() {
  let fargePaaKort = document.getElementById("endre_tekst_farge").value;
  document.getElementById("kort_bilde_img").style.border = "2px solid" + fargePaaKort;
  document.getElementById("kort_navn").style.color = fargePaaKort;
  document.getElementById("dato").style.color = fargePaaKort;
  document.getElementById("foedt").style.color = fargePaaKort;
  document.getElementById("pronomen_tekst").style.color = fargePaaKort;
  document.getElementById("pr1").style.color = fargePaaKort;
  document.getElementById("skraastrek").style.color = fargePaaKort;
  document.getElementById("pr2").style.color = fargePaaKort;
  document.getElementById("bosted_tekst").style.color = fargePaaKort;
  document.getElementById("sted_tekst").style.color = fargePaaKort;
  document.getElementById("komma1").style.color = fargePaaKort;
  document.getElementById("by_tekst").style.color = fargePaaKort;
  document.getElementById("komma2").style.color = fargePaaKort;
  document.getElementById("land_tekst").style.color = fargePaaKort;
  document.getElementById("bio").style.color = fargePaaKort;
  document.getElementById("bio").style.borderColor = "2px solid" + fargePaaKort;
  document.getElementById("utdanning_tekst").style.color = fargePaaKort;
  document.getElementById("skole_tekst").style.color = fargePaaKort;
  document.getElementById("jobb_tekst").style.color = fargePaaKort;
  document.getElementById("jobb_tekst2").style.color = fargePaaKort;

}


function endreFont() {
  console.log(valgtFont)
  var valgtFont = document.getElementById("velg_font_select").value
  document.getElementById("kort_navn").style.fontFamily = valgtFont;
  document.getElementById("dato").style.fontFamily = valgtFont;
  document.getElementById("foedt").style.fontFamily = valgtFont;
  document.getElementById("pronomen_tekst").style.fontFamily = valgtFont;
  document.getElementById("pr1").style.fontFamily = valgtFont;
  document.getElementById("skraastrek").style.fontFamily = valgtFont;
  document.getElementById("pr2").style.fontFamily = valgtFont;
  document.getElementById("bosted_tekst").style.fontFamily = valgtFont;
  document.getElementById("sted_tekst").style.fontFamily = valgtFont;
  document.getElementById("komma1").style.fontFamily = valgtFont;
  document.getElementById("by_tekst").style.fontFamily = valgtFont;
  document.getElementById("komma2").style.fontFamily = valgtFont;
  document.getElementById("land_tekst").style.fontFamily = valgtFont;
  document.getElementById("bio").style.fontFamily = valgtFont;
  document.getElementById("utdanning_tekst").style.fontFamily = valgtFont
  document.getElementById("skole_tekst").style.fontFamily = valgtFont
  document.getElementById("jobb_tekst").style.fontFamily = valgtFont
  document.getElementById("jobb_tekst2").style.fontFamily = valgtFont
}

//print kort som PDF (kort.html)
function printKort() {

  var popup = window.open('', 'PRINT', 'height=600,width=1000');
  popup.document.write('<html><head><title>' + "Lag ditt eget kort om deg" + '</title><style>body {font-family: Arial;} #kort {border: 2px solid black;width: 1000px;height: 600px;display: flex;flex-direction: column;box-shadow: 5px 5px 5px black;background-color: white;}#top_kort {display: flex;flex-direction: row;}#kort_bilde {width: 200px;height: 200px;border: 2px solid black;margin: 50px;}#kort_navn {font-family: Arial, Helvetica, sans-serif;text-decoration: none;text-shadow: none;position: relative;top: 10px;width: 600px;}#kort_navn, .editable {cursor: pointer;}#kort_info2 {width: 350px;height: 50px;display: flex;flex-flow: row wrap;}#kort_info2 p, #skole_kort p {font-family: Arial, Helvetica, sans-serif;margin: 20px;margin-top: 0px;}#pronomen {display: flex;flex-direction: row;}#bosted {display: flex;flex-direction: row;margin: 0px;width: 200px;}#bosted p {margin-left: -16px;}#bio {height: 250px;width: 600px;max-width: 600px;max-height: 250px;margin-left: 50px;}#bunn_kort {display: flex;flex-direction: row;}#bunn_kort p {font-family: Arial, Helvetica, sans-serif;border-color: 2px solid black;;}</style>');
  popup.document.write('</head><body >');
  popup.document.write(document.getElementById("kort").innerHTML);
  popup.document.write('</body></html>');
  popup.document.close();
  popup.focus();
  popup.print();
  popup.close();
  return true;
}


function prosessorPlakat() {
  let plakat = document.getElementById("PC_deler_knapper");
  var img = new Image();
  img.src = "bilder/PC_bygging/PC/prosessor.gif";
  plakat.style.backgroundImage = 'url("' + img.src + '?x=' + Date.now() + '")';
  setTimeout(function() { plakat.style.backgroundImage = 'url("bilder/PC_bygging/PC/Prosessor.jpg")' }, 2800);
  setTimeout(
    function() {
      document.getElementById("knapp1PC").style.display = "none";
      document.getElementById("knapp2PC").style.display = "none";
      document.getElementById("knapp3PC").style.display = "none";
      document.getElementById("knapp4PC").style.display = "none";
      document.getElementById("knapp5PC").style.display = "none";
      document.getElementById("knapp6PC").style.display = "none";
      document.getElementById("knapp7PC").style.display = "none";
      document.getElementById("knapp8PC").style.display = "inline";
      document.getElementById("knapp9PC").style.display = "inline";
      document.getElementById("knapp9PC").href = "#cpu";
    }, 1500)
}

function tilbake() {
  document.getElementById("PC_deler_knapper").style.backgroundImage = 'url("bilder/PC_bygging/PC/loop.gif")'
  document.getElementById("knapp1PC").style.display = "inline";
  document.getElementById("knapp2PC").style.display = "inline";
  document.getElementById("knapp3PC").style.display = "inline";
  document.getElementById("knapp4PC").style.display = "inline";
  document.getElementById("knapp5PC").style.display = "inline";
  document.getElementById("knapp6PC").style.display = "inline";
  document.getElementById("knapp7PC").style.display = "inline";
  document.getElementById("knapp8PC").style.display = "none";
  document.getElementById("knapp9PC").style.display = "none";
}

function skjermkortPlakat() {
  let plakat = document.getElementById("PC_deler_knapper");
  var img = new Image();
  img.src = "bilder/PC_bygging/PC/gpu.gif";
  plakat.style.backgroundImage = 'url("' + img.src + '?x=' + Date.now() + '")';
  setTimeout(function() { plakat.style.backgroundImage = 'url("bilder/PC_bygging/PC/gpu.jpg")' }, 2800);
  setTimeout(
    function() {
      document.getElementById("knapp1PC").style.display = "none";
      document.getElementById("knapp2PC").style.display = "none";
      document.getElementById("knapp3PC").style.display = "none";
      document.getElementById("knapp4PC").style.display = "none";
      document.getElementById("knapp5PC").style.display = "none";
      document.getElementById("knapp6PC").style.display = "none";
      document.getElementById("knapp7PC").style.display = "none";
      document.getElementById("knapp8PC").style.display = "inline";
      document.getElementById("knapp9PC").style.display = "inline";
      document.getElementById("knapp9PC").href = "#gpu";
    }, 1500)
}

function psuPlakat() {
  let plakat = document.getElementById("PC_deler_knapper");
  var img = new Image();
  img.src = "bilder/PC_bygging/PC/psu.gif";
  plakat.style.backgroundImage = 'url("' + img.src + '?x=' + Date.now() + '")';
  setTimeout(function() { plakat.style.backgroundImage = 'url("bilder/PC_bygging/PC/psu.jpg")' }, 2800);
  setTimeout(
    function() {
      document.getElementById("knapp1PC").style.display = "none";
      document.getElementById("knapp2PC").style.display = "none";
      document.getElementById("knapp3PC").style.display = "none";
      document.getElementById("knapp4PC").style.display = "none";
      document.getElementById("knapp5PC").style.display = "none";
      document.getElementById("knapp6PC").style.display = "none";
      document.getElementById("knapp7PC").style.display = "none";
      document.getElementById("knapp8PC").style.display = "inline";
      document.getElementById("knapp9PC").style.display = "inline";
      document.getElementById("knapp9PC").href = "#psu";
    }, 1500)
}

function dvdPlakat() {
  let plakat = document.getElementById("PC_deler_knapper");
  var img = new Image();
  img.src = "bilder/PC_bygging/PC/dvd.gif";
  plakat.style.backgroundImage = 'url("' + img.src + '?x=' + Date.now() + '")';
  setTimeout(function() { plakat.style.backgroundImage = 'url("bilder/PC_bygging/PC/dvd.jpg")' }, 2800);
  setTimeout(
    function() {
      document.getElementById("knapp1PC").style.display = "none";
      document.getElementById("knapp2PC").style.display = "none";
      document.getElementById("knapp3PC").style.display = "none";
      document.getElementById("knapp4PC").style.display = "none";
      document.getElementById("knapp5PC").style.display = "none";
      document.getElementById("knapp6PC").style.display = "none";
      document.getElementById("knapp7PC").style.display = "none";
      document.getElementById("knapp8PC").style.display = "inline";
      document.getElementById("knapp9PC").style.display = "inline";
      document.getElementById("knapp9PC").style.display = "none";
    }, 1500)
}

function ramPlakat() {
  let plakat = document.getElementById("PC_deler_knapper");
  var img = new Image();
  img.src = "bilder/PC_bygging/PC/ram.gif";
  plakat.style.backgroundImage = 'url("' + img.src + '?x=' + Date.now() + '")';
  setTimeout(function() { plakat.style.backgroundImage = 'url("bilder/PC_bygging/PC/ram.jpg")' }, 2800);
  setTimeout(
    function() {
      document.getElementById("knapp1PC").style.display = "none";
      document.getElementById("knapp2PC").style.display = "none";
      document.getElementById("knapp3PC").style.display = "none";
      document.getElementById("knapp4PC").style.display = "none";
      document.getElementById("knapp5PC").style.display = "none";
      document.getElementById("knapp6PC").style.display = "none";
      document.getElementById("knapp7PC").style.display = "none";
      document.getElementById("knapp8PC").style.display = "inline";
      document.getElementById("knapp9PC").style.display = "inline";
      document.getElementById("knapp9PC").href = "#ram";
    }, 1500)
}

function hovedkortPlakat() {
  let plakat = document.getElementById("PC_deler_knapper");
  var img = new Image();
  img.src = "bilder/PC_bygging/PC/hovedkort.gif";
  plakat.style.backgroundImage = 'url("' + img.src + '?x=' + Date.now() + '")';
  setTimeout(function() { plakat.style.backgroundImage = 'url("bilder/PC_bygging/PC/hovedkort.jpg")' }, 2800);
  setTimeout(
    function() {
      document.getElementById("knapp1PC").style.display = "none";
      document.getElementById("knapp2PC").style.display = "none";
      document.getElementById("knapp3PC").style.display = "none";
      document.getElementById("knapp4PC").style.display = "none";
      document.getElementById("knapp5PC").style.display = "none";
      document.getElementById("knapp6PC").style.display = "none";
      document.getElementById("knapp7PC").style.display = "none";
      document.getElementById("knapp8PC").style.display = "inline";
      document.getElementById("knapp9PC").style.display = "inline";
      document.getElementById("knapp9PC").href = "#hovedkort";
    }, 1500)
}

function hddPlakat() {
  let plakat = document.getElementById("PC_deler_knapper");
  var img = new Image();
  img.src = "bilder/PC_bygging/PC/hdd.gif";
  plakat.style.backgroundImage = 'url("' + img.src + '?x=' + Date.now() + '")';
  setTimeout(function() { plakat.style.backgroundImage = 'url("bilder/PC_bygging/PC/hdd.jpg")' }, 2800);
  setTimeout(
    function() {
      document.getElementById("knapp1PC").style.display = "none";
      document.getElementById("knapp2PC").style.display = "none";
      document.getElementById("knapp3PC").style.display = "none";
      document.getElementById("knapp4PC").style.display = "none";
      document.getElementById("knapp5PC").style.display = "none";
      document.getElementById("knapp6PC").style.display = "none";
      document.getElementById("knapp7PC").style.display = "none";
      document.getElementById("knapp8PC").style.display = "inline";
      document.getElementById("knapp9PC").style.display = "inline";
      document.getElementById("knapp9PC").href = "#lagring";
    }, 1500)
}
