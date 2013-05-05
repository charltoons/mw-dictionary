var Dictionary = require('./dictionary'),
	
	//pass the constructor a config object with your key
	dict = new Dictionary({
		key: process.argv[2]
	});

//sample method
dict.define('doodle', function(error, result){
	if (error == null) {
		for(var i=0; i<result.length; i++){
			console.log(i+'.');
			console.log('Part of speech: '+result[i].partOfSpeech);
			console.log('Definitions: '+result[i].definition);
		}
	}
	else console.log(error);
});
