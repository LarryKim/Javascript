;"use strict";
var log=function(msg){console.log(msg);};
var alert=function(msg){log(msg);};

if(!Array.prototype.forEach2) {
	Array.prototype.forEach2 = function(callback, thisObj) {
		if(typeof callback !== "function") {
			throw new TypeError("callback should be a function type!!!");
		}
		var i, 
		len = this.length;
		for(i=0; i<len;i++) {
			callback.call(thisObj, this[i], i, this);
		}
	};
}

if(!Array.prototype.every2) {
    Array.prototype.every2 = function(callback, thisObj) {
        if(typeof callback !== "function") {
            throw new TypeError("callback should be a function type!!!");
        }
        var i, 
        len = this.length;
        for(i=0; i<len;i++) {
            if (false === callback.call(thisObj, this[i], i, this)) {
                return false;
            }
        }
        return true;
    };
}

if(!Array.prototype.some2) {
    Array.prototype.some2 = function(callback, thisObj) {
        if(typeof callback !== "function") {
            throw new TypeError("callback should be a function type!!!");
        }
        var i, 
        len = this.length;
        for(i=0; i<len;i++) {
            if (true === callback.call(thisObj, this[i], i, this)) {
                return true;
            }
        }

        return false;
    };
}

//[Testing Codes] -----------------------------------------------------
// forEach
function logArrayElements(element, index, array) {
    log("--------------------");
    console.log(this.name);
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach2(logArrayElements, {name:'test'});

// some
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [2, 5, 8, 1, 4].some2(isBigEnough);
console.log(passed); // passed is false
passed = [12, 5, 8, 1, 4].some2(isBigEnough);
console.log(passed); // passed is true

// every
passed = [2, 5, 8, 1, 4].every2(isBigEnough);
console.log(passed); // passed is false
passed = [12, 10, 11, 13, 65].every2(isBigEnough);
console.log(passed); // passed is true