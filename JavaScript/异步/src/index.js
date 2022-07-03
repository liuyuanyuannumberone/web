const fs= require('fs');
fs.readFile('../static/config/config.json',(err,data)=>{
  console.log(data.toString());
})
