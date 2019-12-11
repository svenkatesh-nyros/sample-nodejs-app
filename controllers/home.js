"use strict"
var bla = require('../models/test_data.js');

var self = module.exports = {
    myName : function(req, res, next) {
    },
//Code to get data
    select : function(req,res) {
        bla.select(req,res);
        
    },
    //Code to save data
    insert : function(req,res) {
        bla.insert(req,res)
    },
    
    //Code to update data
    update : function(req,res) {
        bla.update(req,res)
    },
    
    //Code to delete data
    remove : function(req,res) {
        bla.remove(req,res)
    }
}
