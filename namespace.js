;"use strict";
var log=function(msg){console.log(msg);};
var alert=function(msg){log(msg);};

var MYAPP = MYAPP || {};
MYAPP = (function(name) {
    var myApp = {
        name: name,
        date: new Date()
    };

    myApp.$ = function(qry) {
        var nodes = document.querySelectorAll(qry)
        return (nodes.length == 1) ? nodes[0] : nodes;
    };

    return myApp;
})('toby');

log(MYAPP.date);

