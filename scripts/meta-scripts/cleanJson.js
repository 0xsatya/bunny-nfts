const fs = require('fs');

var data = {};
var dirname = './jsons/';
// var dirname = "G:\\Workspaces_AllinOne\\Workspaces_Myupw\\Workspace_DavidNFT\\Usagi\\scripts\\meta-scripts\\jsons\\";

function cleanFiles(dirname) {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        console.log(`Error reading directory files ${filename} from disk: ${err}`);
        return;
      }
      filenames.forEach(function(filename) {
        // console.log('filename:', filename);
        fs.readFile(dirname + filename, 'utf-8', function(err, data) {
            if (err) {
                console.log(`Error reading file - ${filename}, from disk: ${err}`);
                
            } else {
                console.log('Parsing file:', filename);
                // parse JSON string to JSON object
                const jsonData = JSON.parse(data);
                
                //delete a key pair
                // delete jsonData['edition2'];

                // add key pair
                // jsonData.edition2 = 'test';

                // add a new record
                // jsonData.attributes.push( {
                //     "trait_type": "background1",
                //     "value": "trippy_pink"
                // });
        
                // write new data back to the file
                fs.writeFile(dirname + filename, JSON.stringify(jsonData, null, 4), (err) => {
                    if (err) {
                        console.log(`Error writing file: ${err}`);
                    }
                });
            }
        
        //   onFileContent(filename, content);
        });
      });
    });
}

cleanFiles(dirname);


