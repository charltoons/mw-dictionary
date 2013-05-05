//  Endpoints
var MW_ROOT = 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/';
  
//
//  Dictionary
//
var Dictionary = function (creds) {  
  console.log('cred');
}

Dictionary.prototype = {
  test: function(){
  	console.log('successful test');
  }
}

module.exports = Dictionary;