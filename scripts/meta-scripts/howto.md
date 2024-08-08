## to clean json file
$ cd to scripts/meta-scripts
=> comment/uncomment line 24 onwards as desired.
$ node cleanJson.js


## parse json
$cd to scripts/meta-scripts
=> at line 6, set path of json dir
$ node parseJson.js
=> output of the result is like below
==> Summary of traits occurance

=======> finalMetaSummary: {
  background: { trippy_pink: 5 },
  tail: { snowball: 5 },
  body: { 'adult_v-necked_gloveless_grey': 5 },
  face: { bored: 5 },
  clothes: { blue_boxer: 5 },
  'head-gear': { devil_horns: 5 },
  objects: { bomb: 5 },
  objects111: { bomb: 1 }
}

// comma seperated files which can be easily sorted in excel

FileName,    Score
Parsing file: 1.json
1.json , 55965
Parsing file: 2.json
2.json , 55965
Parsing file: 3.json
3.json , 55965
Parsing file: 4.json
4.json , 55965
Parsing file: 5.json
5.json , 63964