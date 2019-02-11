const fse = require('fs-extra');
const needle = require('needle');

needle('get', 'https://swapi.co/api/starships/')
  .then(function(resp) {
    // ...
    
  })
  .catch(function(err) {
    // ...
  })
});