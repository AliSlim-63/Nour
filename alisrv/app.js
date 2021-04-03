const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
 
app.get('/', function (req, res) {
  res.send('Hello World');


})

  app.get('/data', function (req, res) {
    var xlsx = require('xlsx');
     var wb = xlsx.readFile('pics.xlsx');

     var ws = wb.Sheets['Pics'] 

    var data = xlsx.utils.sheet_to_json(ws);

    res.send(data);
 console.log(data);

})
 
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
// app.listen(3000)