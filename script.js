//
//

//

document.getElementById("dugme").addEventListener("click", kadaSeKlikne);

document.getElementById("dugme2").addEventListener("click", kadaSeKlikne);

function kadaSeKlikne() {
	this.style.border = "5px double red";
}
//

function pozdraviKorisnika() {
	let ime = prompt("unesite vase ime:");
	alert(ime);
}

//

function izracunaj(broj1, broj2) {
	console.log(broj1 * broj2);
}

izracunaj(5, 5);

function pomnoziBrojeve(broj1, broj2) {
	console.log(broj1 * broj2);
}
pomnoziBrojeve(20, 11);

function proveraPunoletstva(godine) {
	if (godine < 18) {
		console.log("Niste punoletni!");
	} else {
		console.log("Punoletni ste!");
	}
}

proveraPunoletstva(18);

//

function deljenjeBrojeva(broj1, broj2) {
	console.log(broj1 / broj2);
	if (broj2 == 0) {
		console.log("delilac ne moze biti 0!");
	}
}

deljenjeBrojeva(50, 22);

//

function deljenjePrompt(broj1, broj2) {
	broj1 = prompt("koji broje zelite da podelite:");
	broj2 = prompt("sa kojim brjem zelite da podelite:");
	alert(broj1 / broj2);
}

deljenjePrompt();