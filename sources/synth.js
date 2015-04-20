// Innerworkings

var input1 = document.getElementById('firstinput'), Name = '';

function R() {
	input1.value = Name;
	console.log(Name);
}
function L() {
	sylln = document.getElementById('SyllC').value;
}

//var stringn = 8, namen = 8, greekn = 3, norsen = 2;
var sylln = 3;
function RandString() {
	L();
	Name = createString(sylln*2);
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
	L();
	Name = createName(sylln*2);
	R();
}

function createName(n) {
	var click = new Audio('sources/click.wav');
	var Text = '', Vowels = 'aeiouy', Cons = 'wybcdfghjklmnpqrstvxzaeiou';
	for(i=0; i < n; i++) {
		if(isOdd(i)){Text += Cons.charAt( Math.floor( Math.random() * Cons.length ));}
		else{ Text += Vowels.charAt( Math.floor( Math.random() * Vowels.length ));}
	}; 
	Text = PronFilter(Text);
	click.play(); return Text;
}

function PronFilter(oldtext){
	var newtext = '';
	newtext = oldtext;
	newtext = newtext.replace(/q$/, "c")
	newtext = newtext.replace('qo','quo');
	newtext = newtext.replace('qe','que');
	newtext = newtext.replace('qa','qua');
	newtext = newtext.replace('qi','qui');
	newtext = newtext.replace('yj','ij');
	newtext = newtext.replace('yy','y');
	newtext = newtext.replace('uu','u');
	newtext = newtext.replace('ee','e');
	newtext = newtext.replace('ii','i');
	newtext = newtext.replace('aa','a');
	newtext = newtext.replace('iw','yow');
	newtext = newtext.replace('iey','ihy');
	newtext = newtext.replace('yk','ic');
	newtext = newtext.replace('ys','is');
	newtext = newtext.replace('oej','ojey');
	newtext = newtext.replace('oei','wey');
	newtext = newtext.replace('uw','ow');
	newtext = newtext.replace('ieuo','ihewo');
	newtext = newtext.replace('iaue','ihawe');
	newtext = newtext.replace('aoyi','auyi');
	newtext = newtext.replace('owu','ohu');
	newtext = newtext.replace('ioae','iohay');
	newtext = newtext.replace('jo','yo');
	newtext = newtext.replace('uiye','uhiye');
	newtext = newtext.replace('yij','yih');
	newtext = newtext.replace('quq','quoc');
	newtext = newtext.replace('ty','try');
	
	return newtext;
}

function RandGreek() {
	L();
	Name = createGreekName(sylln);
	R();
}

function createGreekName(n) {
	// Greek Name Generator BETA 1.0 - Onomaton
	// Over 17000 possible names with 3 syllables, over 345000 with 4 and over 800 with 2.
	// Over 362800 possible names!
	var click = new Audio('sources/click.wav');
	var Text = '';
	var StartSyll = [
		'ae','aph','ap','ar','ath','an','de','dio','ha','he','her','hes','pos','ze','cha','chro','cro','chra','er','hy','psi','coe','hy','ia','mne','o','pho','te','the','as','at','au','cly','per','se','ul','kle'
	];
	var MidSyll = [
		'rod','ei','ol','tem','ch','mi','nys','me','en','psi','cath','an','per','pet','mos','cea','eb','tra','the','ys','pto'
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
	//Text = PtFilter(Text);
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
	newtext = newtext.replace('thth','th');
	newtext = newtext.replace('dd','d');
	newtext = newtext.replace('aa','a');
	newtext = newtext.replace('mm','m');
	newtext = newtext.replace('tht','th');
	newtext = newtext.replace('yy','y');
	return newtext;
}
//setInterval(function(){ Name = createGreekName(3);R(); },1000)

function RandNord() {
	L();
	Name = createNorseName(sylln);
	R();
}

function createNorseName(n) {
	var click = new Audio('sources/click.wav');
	var Text = '';
	var StartSyll = [
		'bal','bo','bra','bu','da','del','el','fr','lo','od','njo','tho','thru','ul','va','ho','eo','jo','heim'
	];
	var MidSyll = [
		'ey','rd','ln','dra','fj','ld','rs'
	];
	var EndSyll = [
		'dur','orr','gi','gur','li','ja','jun','yr','lur','la','ki','fn','inn','ur','ir','lr','thus','ott','heim','seih'
	];
	for(i=1; i < n; i++) {
		if(i == 1){ Text += StartSyll[( Math.floor( Math.random() * StartSyll.length ))]; }
		if(i == (n-1)){ Text += EndSyll[( Math.floor( Math.random() * EndSyll.length ))]; }
		else { Text += MidSyll[( Math.floor( Math.random() * MidSyll.length ))]; }
	}; 
	//Text = NorseFilter(Text);
	click.play(); return Text;
}
function NorseFilter(old){
	return old;
}

function PtFilter(oldtext){
	var newtext = '';
	newtext = oldtext;
	newtext = newtext.replace('ch','c');
	newtext = newtext.replace('us','o');
	newtext = newtext.replace('os','o');
	newtext = newtext.replace('ph','f');
	newtext = newtext.replace('is','isa');
	newtext = newtext.replace('k','qu');
	newtext = newtext.replace('y','i');
	newtext = newtext.replace('on','\u00E3'+'o');
	newtext = newtext.replace('hi','i');
	newtext = newtext.replace('th','t');
	return newtext;
}

function RandAtla() {
	L();
	Name = createAtladonName(sylln);
	R();
}

function createAtladonName(n) {
	var click = new Audio('sources/click.wav');
	var Text = '';
	var StartSyll = [
		'ark','akh','bak','veth','ghim','el','del','ea','ef','ia','mah','thra'
	];
	var MidSyll = [
		'ir','ed','op','el','er','ksh','osh','iek','otr','al','rn'
	];
	var EndSyll = [
		'eln','uln','oln','on','don','chron','ern','elro','kno','os','nos','al','iln','kreon'
	];
	for(i=1; i < n; i++) {
		if(i == 1){ Text += StartSyll[( Math.floor( Math.random() * StartSyll.length ))]; }
		if(i == (n-1)){ Text += EndSyll[( Math.floor( Math.random() * EndSyll.length ))]; }
		else { Text += MidSyll[( Math.floor( Math.random() * MidSyll.length ))]; }
	}; 
	Text = AtlaFilter(Text);
	click.play(); return Text;
}

function AtlaFilter(oldtext){
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
	newtext = newtext.replace('thth','th');
	newtext = newtext.replace('dd','d');
	newtext = newtext.replace('aa','a');
	newtext = newtext.replace('mm','m');
	newtext = newtext.replace('tht','th');
	newtext = newtext.replace('khk','k');
	newtext = newtext.replace('yy','y');
	newtext = newtext.replace('kk','k');
	return newtext;
}

// Others

function isOdd(num) { return num % 2;}