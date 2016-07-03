var fs = require('fs');
module.exports = function(dir, ext, callback){
	fs.readdir(dir, (err, list) => {
		if (err){
			return callback(err)
		}
		var filtered = list.filter(
			(string) => {
				return string.match("."+ext);
			}
			);
		callback(null, filtered);

	});
}
