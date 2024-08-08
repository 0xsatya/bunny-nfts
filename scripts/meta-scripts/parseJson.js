const fs = require('fs')

var finalMetaSummary = {}
var finalMetaList = []
let totalAssets = 8000;
var dirname = './jsons/backup/'
// var dirname = "G:\\Workspaces_AllinOne\\Workspaces_Myupw\\Workspace_DavidNFT\\Usagi\\scripts\\meta-scripts\\jsons\\";
parseFiles(dirname)

function parseFiles(dirname) {
  let filenames = fs.readdirSync(dirname) //, function(err, filenames) {
  filenames.forEach(function (filename) {
    // console.log('filename:', filename);
    let data = fs.readFileSync(dirname + filename, {
      encoding: 'utf-8',
      flag: 'r',
    }) //, function(err, data) {

    console.log('Parsing file:', filename)
    // parse JSON string to JSON object
    const jsonData = JSON.parse(data)
    jsonData.attributes.forEach((obj) => {
    //   console.log('obj:', obj)
      let trait_type = obj.trait_type
      let value = obj.value

      if (!finalMetaSummary[trait_type]) finalMetaSummary[trait_type] = {}
    //   console.log('trait value:', finalMetaSummary[trait_type][value])

      if (finalMetaSummary[trait_type][value] >= 0)
        finalMetaSummary[trait_type][value] += 1
      else finalMetaSummary[trait_type][value] = 1

    //   console.log(finalMetaSummary)
    })
    console.log('==> MetaSummary:', filename, ':', finalMetaSummary)
  })
  console.log('=======> finalMetaSummary:', finalMetaSummary)
  console.log('FileName,    Score');

  filenames.forEach(function (filename) {
    // console.log('filename:', filename);
    let data = fs.readFileSync(dirname + filename, {
      encoding: 'utf-8',
      flag: 'r',
    }) //, function(err, data) {

    console.log('Parsing file:', filename)
    // parse JSON string to JSON object
    const jsonData = JSON.parse(data)
    let assetScore = 0;
    jsonData.attributes.forEach((obj) => {
    //   console.log('obj:', obj)
      let trait_type = obj.trait_type
      let value = obj.value

      try {
          let tval = finalMetaSummary[trait_type][value] ;
          assetScore += (totalAssets - tval);
            
      } catch (err) {
          console.log('Trait_type or value not found:', err);
      }

    })
    console.log(filename,',', assetScore);

    // console.log('==> MetaSummary:', filename, ':', finalMetaSummary)
  })
  
}

console.log('====================> Completed')
