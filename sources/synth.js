// Innerworkings

var input1 = document.getElementById('firstinput'), Name = '';

function R() {
	input1.value = Name;
}

function RandString() {
	Name = createString(8);
	R();
}

function createString(n) {
	var click = new Audio('sources/click.wav');
	var Text = '', Chars = 'abcdefghijklmnopqrstuvwxyz';
	for(i=0; i < n; i++) {
		Text += Chars.charAt( Math.floor( Math.random() * Chars.length));
	}; click.play(); return Text;
}

function RandSyll() {
	Name = createName(8);
	R();
}

function createName(n) {
	var click = new Audio('sources/click.wav');
	var Text = '', Vowels = 'aeiouy', Cons = 'wybcdfghjklmnpqrstvxzaeiou';
	for(i=0; i < n; i++) {
		if(isOdd(i)){Text += Cons.charAt( Math.floor( Math.random() * Cons.length ));}
		else{ Text += Vowels.charAt( Math.floor( Math.random() * Vowels.length ));}
	}; click.play(); return Text;
}

function RandGreek() {
	Name = createGreekName(3);
	R();
}

function createGreekName(n) {
	var click = new Audio('sources/click.wav');
	var Text = '';
	var StartSyll = [
		'arch','al','pal','ga','be','ae','on','aph','eph','xi','ach','ech','ar','he','ze','ch','er'
	];
	var MidSyll = [
		'la','ai','arch','ae','ar','i','ze','o','e','a','ro','m','ik','ph','de','psi','ron','on','r','s'
	];
	var EndSyll = [
		'on','os','lon','a','e','es','o','i','ae','ea'
	];
	for(i=0; i < n; i++) {
		if(i == 0){ Text += StartSyll[( Math.floor( Math.random() * StartSyll.length ))]; }
		if(i > (n-2)){ Text += EndSyll[( Math.floor( Math.random() * EndSyll.length ))]; }
		else { Text += MidSyll[( Math.floor( Math.random() * MidSyll.length ))]; }
	}; click.play(); return Text;
}

// Others

function isOdd(num) { return num % 2;}