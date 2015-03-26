// Innerworkings

var input1 = document.getElementById('firstinput'), Name = '';

function R() {
	input1.value = Name;
	console.log(Name);
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
		'ae','aph','ap','ar','ath','an','de','dio','ha','he','her','hes','pos','ze','cha','chro','cro','chra','er','hy','psi','coe','hy','ia','mne','o','pho','te','the','as','at','au','cly','per','se'
	];
	var MidSyll = [
		'rod','ei','ol','tem','ch','mi','nys','me','en','psi','cath','an','per','pet','mos','cea','eb','tra','the'
	];
	var EndSyll = [
		'es','mis','os','on','nos','no','na','ra','sis','is','tos','ia','bus','us','lon','ther','er','ke','don','tris','eos','las','ne','ses'
	];
	for(i=1; i < n; i++) {
		if(i == 1){ Text += StartSyll[( Math.floor( Math.random() * StartSyll.length ))]; }
		if(i == (n-1)){ Text += EndSyll[( Math.floor( Math.random() * EndSyll.length ))]; }
		else { Text += MidSyll[( Math.floor( Math.random() * MidSyll.length ))]; }
	}; 
	Text = GreekFilter(Text);
	click.play(); return Text;
}
function GreekFilter(oldtext) {
	var newtext = '';
	newtext = oldtext;
	newtext = newtext.replace('ii','i');
	newtext = newtext.replace('pp','p');
	newtext = newtext.replace('ee','e');
	newtext = newtext.replace('nn','n');
	newtext = newtext.replace('bb','b');
	newtext = newtext.replace('ss','s');
	newtext = newtext.replace('tt','t');
	newtext = newtext.replace('rr','r');
	newtext = newtext.replace('ll','l');
	newtext = newtext.replace('oo','o');
	return newtext;
}

// Others

function isOdd(num) { return num % 2;}