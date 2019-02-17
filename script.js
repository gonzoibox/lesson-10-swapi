const fs = require('fs-extra');
const needle = require('needle');

needle('get', 'https://swapi.co/api/planets/8/')
  .then(function(resp) {
    const filePath = JSON.stringify(resp.body);
    return filePath;
  })
  .then(function(filePath){
    fs.writeFile('/home/kavabata/proCode/Javascript/lesson-10-swapi/swapiData.txt', filePath, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })
  .catch(function(err) {
    console.log('error');
  });