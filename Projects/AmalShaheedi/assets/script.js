document.addEventListener("DOMContentLoaded", initialize);

var button = document.getElementById('play');

function initialize(){
  if (annyang) {
    var commands = {
     "The fool (upright) (fool)" : Thefoolup,
     "The fool (reversed)": Thefoolrev,
     "Judgement (upright) (judge)" : Judgementup,
     "Judgement (reversed)" : Judgementrev,
     "Temperance (upright)" : TempUp,
     "Temperance (reversed)": Temprev,
     "(upright) The moon (moon) (upright)" : Moonup,
     "(reversed) the moon (reversed)": Moonrev,
     "The devil (upright)": Devilup,
     "the devil (reversed)" : Devilrev,
     "index (card) (options)" : index,
     "wheel of furtune (upright)" : Wheelup,
     "wheel of furtune (reversed)" : Wheelrev,
     "The sun (upright)" : Sunup,
     "The sun (reversed)" : Sunrev,
    }

    annyang.addCommands(commands);

     button.addEventListener('click', startListening);

    annyang.start();

  }
}


// function sayHello (){
//   alert('hello human');
// }

// function sayHelloToMe(name, lastname){
//   alert('hello human' + name + '' + lastname);
// }

// function detectSplat(splat){
//   alert('detecting Splat' + Splat);
// }

function startListening(){

  // starting annyang
  annyang.start();
}

function Thefoolup(){

	document.getElementById("thefool1").style.zIndex = "1";
	document.getElementById("fooltextup").style.opacity= "1";
	document.getElementById("uprightfoolbold").style.opacity= "1";
	document.getElementById("uprightfoolreg").style.opacity= "1";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("judgement").style.zIndex = "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("thefool1").style.transform = "rotate(0deg)";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("temperance").style.zIndex = "0";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1moonup").style.opacity= "0";
	document.getElementById("h2moonup").style.opacity= "0";
	document.getElementById("h3moonup").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("moon").style.zIndex = "0";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";



//   var div = document.createElement('div');
//   div.idList.add('fooltextup');
//   div.innerHTML = text;
//   output_container.appendChild(div);
//   setTimeout(function(){
//     div.idList.add('fooltextup');
//   }, 500)
}


function Thefoolrev(){

	document.getElementById("index").style.zIndex = "0";
	document.getElementById("thefool1").style.transform = "rotate(180deg)";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "1";
	document.getElementById("revfoolbold").style.opacity= "1";
	document.getElementById("revfoolreg").style.opacity= "1";
	document.getElementById("judgement").style.zIndex = "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("temperance").style.zIndex = "0";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1moonup").style.opacity= "0";
	document.getElementById("h2moonup").style.opacity= "0";
	document.getElementById("h3moonup").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("moon").style.zIndex = "0";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";



}


function Judgementup(){

	document.getElementById("judgement").style.zIndex = "2";
	document.getElementById("h1judgementup").style.opacity= "1";
	document.getElementById("h2judgementup").style.opacity= "1";
	document.getElementById("h3judgementup").style.opacity= "1";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("judgement").style.transform = "scaleY(1)";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("temperance").style.zIndex = "0";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1moonup").style.opacity= "0";
	document.getElementById("h2moonup").style.opacity= "0";
	document.getElementById("h3moonup").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("moon").style.zIndex = "1";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";


}

function Judgementrev(){
	document.getElementById("judgement").style.transform = "scaleY(-1)";
	document.getElementById("judgement").style.zIndex = "2";

	document.getElementById("h1judgementrev").style.opacity= "1";
	document.getElementById("h2judgementrev").style.opacity= "1";
	document.getElementById("h3judgementrev").style.opacity= "1";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";

	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("temperance").style.zIndex = "0";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1moonup").style.opacity= "0";
	document.getElementById("h2moonup").style.opacity= "0";
	document.getElementById("h3moonup").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("moon").style.zIndex = "1";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";


}

function TempUp(){
	document.getElementById("temperance").style.zIndex = "3";
	document.getElementById("temperance").style.transform = "scaleY(1)";

	document.getElementById("h1tempup").style.opacity= "1";
	document.getElementById("h2tempup").style.opacity= "1";
	document.getElementById("h3tempup").style.opacity= "1";

	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("judgement").style.transform = "scaleY(1)";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1moonup").style.opacity= "0";
	document.getElementById("h2moonup").style.opacity= "0";
	document.getElementById("h3moonup").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("moon").style.zIndex = "2";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";


}


function Temprev(){
	document.getElementById("temperance").style.transform = "scaleY(-1)";
	document.getElementById("temperance").style.zIndex = "3";

	
	document.getElementById("h1temprev").style.opacity= "1";
	document.getElementById("h2temprev").style.opacity= "1";
	document.getElementById("h3temprev").style.opacity= "1";

	document.getElementById("h1moonup").style.opacity= "0";
	document.getElementById("h2moonup").style.opacity= "0";
	document.getElementById("h3moonup").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("moon").style.zIndex = "2";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";


}




function Moonup(){
	document.getElementById("moon").style.zIndex = "4";

	document.getElementById("h1moonup").style.opacity= "1";
	document.getElementById("h2moonup").style.opacity= "1";
	document.getElementById("h3moonup").style.opacity= "1";


	document.getElementById("moon").style.transform = "scaleY(1)";

	
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";

}


function Moonrev(){
	document.getElementById("moon").style.zIndex = "4";
	document.getElementById("moon").style.transform = "scaleY(-1)";

	document.getElementById("h1moonrev").style.opacity= "1";
	document.getElementById("h2moonrev").style.opacity= "1";
	document.getElementById("h3moonrev").style.opacity= "1";


	document.getElementById("h1moonup").style.opacity= "0";
	document.getElementById("h2moonup").style.opacity= "0";
	document.getElementById("h3moonup").style.opacity= "0";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";


}




function Devilup(){
	document.getElementById("thedevil").style.zIndex = "5";

	document.getElementById("h1devilup").style.opacity= "1";
	document.getElementById("h2devilup").style.opacity= "1";
	document.getElementById("h3devilup").style.opacity= "1";


	document.getElementById("thedevil").style.transform = "scaleY(1)";

	
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";

}



function Devilrev(){
	document.getElementById("thedevil").style.transform = "scaleY(-1)";
	document.getElementById("thedevil").style.zIndex = "5";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "1";
	document.getElementById("h2devilrev").style.opacity= "1";
	document.getElementById("h3devilrev").style.opacity= "1";
	
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";

	
}

function index(){
	document.getElementById("index").style.zIndex = "6";

	document.getElementById("h1moonup").style.opacity= "0";
	document.getElementById("h2moonup").style.opacity= "0";
	document.getElementById("h3moonup").style.opacity= "0";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
    document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";

}



function Wheelup(){
	document.getElementById("wheeloffurtune").style.zIndex = "6";
	document.getElementById("h1wheelup").style.opacity= "1";
	document.getElementById("h2wheelup").style.opacity= "1";
	document.getElementById("h3wheelup").style.opacity= "1";
	document.getElementById("wheeloffurtune").style.transform = "scaleY(1)";

	document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";

	
}

function Wheelrev(){

	document.getElementById("h1wheelrev").style.opacity= "1";
	document.getElementById("h2wheelrev").style.opacity= "1";
	document.getElementById("h3wheelrev").style.opacity= "1";
	document.getElementById("wheeloffurtune").style.transform = "scaleY(-1)";
	document.getElementById("wheeloffurtune").style.zIndex = "6";


	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";

	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "1";
	document.getElementById("h2devilrev").style.opacity= "1";
	document.getElementById("h3devilrev").style.opacity= "1";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("thesun").style.transform = "scaleY(1)";
	document.getElementById("thesun").style.zIndex = "0";
	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";

	
}




function Sunup(){


	document.getElementById("thesun").style.zIndex = "6";
	document.getElementById("h1sunup").style.opacity= "1";
	document.getElementById("h2sunup").style.opacity= "1";
	document.getElementById("h3sunup").style.opacity= "1";
	document.getElementById("thesun").style.transform = "scaleY(1)";

	document.getElementById("h1sunrev").style.opacity= "0";
	document.getElementById("h2sunrev").style.opacity= "0";
	document.getElementById("h3sunrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.transform = "scaleY(1)";
	document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	
}

function Sunrev(){

	
	document.getElementById("h1sunrev").style.opacity= "1";
	document.getElementById("h2sunrev").style.opacity= "1";
	document.getElementById("h3sunrev").style.opacity= "1";
	document.getElementById("thesun").style.transform = "scaleY(-1)";
	document.getElementById("thesun").style.zIndex = "6";

	document.getElementById("h1sunup").style.opacity= "0";
	document.getElementById("h2sunup").style.opacity= "0";
	document.getElementById("h3sunup").style.opacity= "0";


	document.getElementById("h1wheelrev").style.opacity= "0";
	document.getElementById("h2wheelrev").style.opacity= "0";
	document.getElementById("h3wheelrev").style.opacity= "0";
	document.getElementById("wheeloffurtune").style.zIndex = "0";
	document.getElementById("h1wheelup").style.opacity= "0";
	document.getElementById("h2wheelup").style.opacity= "0";
	document.getElementById("h3wheelup").style.opacity= "0";
	document.getElementById("thedevil").style.zIndex = "0";
	document.getElementById("h1devilup").style.opacity= "0";
	document.getElementById("h2devilup").style.opacity= "0";
	document.getElementById("h3devilup").style.opacity= "0";
	document.getElementById("h1devilrev").style.opacity= "0";
	document.getElementById("h2devilrev").style.opacity= "0";
	document.getElementById("h3devilrev").style.opacity= "0";
	document.getElementById("h1temprev").style.opacity= "0";
	document.getElementById("h2temprev").style.opacity= "0";
	document.getElementById("h3temprev").style.opacity= "0";
	document.getElementById("h1tempup").style.opacity= "0";
	document.getElementById("h2tempup").style.opacity= "0";
	document.getElementById("h3tempup").style.opacity= "0";
	document.getElementById("h1judgementrev").style.opacity= "0";
	document.getElementById("h2judgementrev").style.opacity= "0";
	document.getElementById("h3judgementrev").style.opacity= "0";
	document.getElementById("h1judgementup").style.opacity= "0";
	document.getElementById("h2judgementup").style.opacity= "0";
	document.getElementById("h3judgementup").style.opacity= "0";
	document.getElementById("fooltextup").style.opacity= "0";
	document.getElementById("uprightfoolbold").style.opacity= "0";
	document.getElementById("uprightfoolreg").style.opacity= "0";
	document.getElementById("fooltextrev").style.opacity= "0";
	document.getElementById("revfoolbold").style.opacity= "0";
	document.getElementById("revfoolreg").style.opacity= "0";
	document.getElementById("h1moonrev").style.opacity= "0";
	document.getElementById("h2moonrev").style.opacity= "0";
	document.getElementById("h3moonrev").style.opacity= "0";
	
}




