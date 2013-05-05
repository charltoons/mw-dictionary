//  Endpoints
var MW_ROOT = 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/';

//  Dependencies
var request = require('request'),
    xml     = require('xml2js');
  
//  Dictionary constructor
var Dictionary = function (config) {  
    this.key = config.key;
}

//  Dictionary functions
Dictionary.prototype = {

    //returns a word's definition
    define: function(word){
        
    },

    //return a javascript object equivalent to the XML response from M-W
    raw: function(word){
        console.log(this.getSearchUrl(word));
        request(this.getSearchUrl(word), function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        });
    },

    //constructs the search url
    getSearchUrl: function(word){
        return MW_ROOT+word+'?key='+this.key;
    }
}

module.exports = Dictionary;