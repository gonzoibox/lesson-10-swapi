const fs = require('fs-extra');
const needle = require('needle');

needle('get', 'https://swapi.co/api/planets/8/')
  .then(function(resp) {
    const file = JSON.stringify(resp.body);
    return file;
  })
  .then(function(file){
    fs.writeFile('/home/kavabata/proCode/Javascript/lesson-10-swapi/swapiData.txt', file, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })
  .catch(function(err) {
    console.log('error');
  });