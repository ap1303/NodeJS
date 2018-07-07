const csvFilePath='./customer-data.csv'
const csv=require('csvtojson')
const fs=require('fs')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    fs.writeFile('output.json', jsonObj);
})
