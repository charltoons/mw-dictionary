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
    define: function(word, callback){
        this.raw(word, function(error, result){
            if (error === null) {
                var results = [];

                //remove erroneous results (doodle != Yankee Doodle)
                var entries = result.entry_list.entry;
                for (var i=0; i<entries.length; i++){
                    if (entries[i].ew == word) {

                        //construct a more digestable object
                        results.push({
                            partOfSpeech: entries[i].fl,
                            definition: entries[i].def[0].dt
                        });
                    }
                }
                callback(null, results);
            }
            else callback(error);
        });
    },

    //return a javascript object equivalent to the XML response from M-W
    raw: function(word, callback){
        request(this.getSearchUrl(word), function (error, response, body) {
            if (!error && response.statusCode == 200) {
                xml.parseString(body, function(error, result){
                    if (error === null) callback(null, result);
                    else callback('XML Parsing error.');
                });
            }
            else callback('API connection error.')
        });
    },

    //constructs the search url
    getSearchUrl: function(word){
        return MW_ROOT+word+'?key='+this.key;
    }
}

module.exports = Dictionary;