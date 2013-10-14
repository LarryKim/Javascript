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

    // get Item
    this.getItem = function(key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    };

    // set Item
    this.setItem = function(key, val) {
        var prevItem = undefined;
        if(this.hasItem(key)) {
            prevItem = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = val;

        return prevItem;
    };

    // has Item
    this.hasItem = function(key) {
        return this.items.hasOwnProperty(key);
    };

    // remove Item
    this.removeItem = function(key) {
        var prevItem = undefined;
        if(this.hasItem(key)) {
            prevItem = this.items[key];
            delete this.items[key];
            this.length--;
        }

        return prevItem;
    };

    //keys
    this.keys = function() {
        keys = [];
        for(key in this.items) {
            if(this.hasItem(key)) {
                keys.push(key);
            }
        }

        return keys;
    };

    //values
    this.values = function() {
        vals = [];
        for(key in this.items) {
            if(this.hasItem(key)) {
                vals.push(this.items[key]);
            }
        }

        return vals;
    };

    // each
    this.each = function (callback, obj) {
        for(key in this.items) {
            callback.call(obj, key, this.items[key], this);
        }
    };

    //clear
    this.clear = function() {
        this.items = {};
        this.length = 0;
    }
}

var ht = new HashTable(objTest);
log(ht.setItem('name', 'Toby'));
log(ht.getItem('name'));
log(ht.length);
log(ht.setItem('ttl', 5000));
log(ht.length);
log(ht.removeItem('ttl'));
log(ht.length);