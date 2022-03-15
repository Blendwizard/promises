/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', (err, file) => {
    if (err) {
      callback(err, null);
    } else {
      var line = file.split('\n')[0];
      callback(null, line);
    }

  });

};



// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // Create request with url
  request.get(url, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// NEEDLE


// needle.get('http://www.google.com', function(error, response) {
//   if (!error && response.statusCode == 200)
//     console.log(response.body);
// });

// fetch(url).then((response) => {
//   if (!response.ok) {
//     let err = new Error(response.statusText);
//     callback(err);
//   }
//   callback(null, response.statusText);
// });

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
