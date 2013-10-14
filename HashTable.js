;"use strict";
var log=function(msg){console.log(msg);};
var alert=function(msg){log(msg);};

var objTest = {
    a: 1,
    b: 3,
    name: "Larry"
};

function HashTable(obj) {
    this.items = {};
    this.length = 0;

    for(p in obj) {
        if(obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }
}

var ht = new HashTable(objTest);
log(ht.length);