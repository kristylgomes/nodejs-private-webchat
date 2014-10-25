//  	var fs = require('fs');
//  function saveMe(){

// fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });
//   }

// var fs = require('fs');
// var myfile = "myfile.txt";

// if(fs.existsSync(myfile)) {
//     var content = fs.readFileSync(myfile, 'utf8');
//     fs.writeFileSync(myfile, content.toUpperCase());
//     console.log("Done");
// } else {
//     console.log("File does not exist - " + myfile);
// }
function saveMe(){
	var fs = require('fs');
fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
}
saveMe();