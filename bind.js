;"use strict";
var log=function(msg){console.log(msg);};
var alert=function(msg){log(msg);};

var Ttt = function (name) {
	this.name = name;
}

function Test() {
	this.callme = function () {
		alert(arguments);
		alert(this.name);
	};
}

(function () {
	if(!Function.prototype.bind) {
		Function.prototype.bind = function(obj) {
			var func = this,
			args = Array.prototype.slice.call(arguments, 1);
			return function () {
				func.apply(obj, args.concat(Array.prototype.slice.call(arguments)));
			};
		};
	}
})();

var test = new Test();
var ttt = new Ttt('Toby');
var binfunc = test.callme.bind(ttt, 3, 4, 5);
binfunc(1,2,3);