;"use strict";

var txt = "Noodle Doodle";

var re = /([nd])(o+)dle/gi;

var rtnArr;
while((rtnArr = re.exec(txt)) !== null) {
	console.log(rtnArr);
}

var rtnArr2 = txt.match(re);
console.log(rtnArr2);
