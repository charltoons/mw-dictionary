var Dictionary = require('./dictionary'),
	dict = new Dictionary({
		key: process.argv[2]
	});

dict.raw('doodle');
