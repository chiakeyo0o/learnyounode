var total = 2;
for (var i = 2; i < process.argv.length; i++){
	total = total + parseInt(process.argv[i],10);
}
console.log(total);
