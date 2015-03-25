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