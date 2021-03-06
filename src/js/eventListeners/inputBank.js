var addClass = require('../addClass');

var chart = document.getElementById('chart');
var inputBank = document.getElementById('bank-name');
var inputType = document.getElementById('loan-type');
var inputLocation = document.getElementById('bank-location');
var containerLocation = document.getElementById('container-bank-location');
var containerMeta = document.getElementById('container-metadata');

// custom awesomplete event
inputBank.addEventListener('awesomplete-selectcomplete', function() {
  location.hash = inputBank.value.replace(/ /g, '-').toLowerCase();
});
// new bank picked, reset loan type and location selects and hide location
inputBank.addEventListener('keydown', function() {
  inputType.selectedIndex = 0;
  inputLocation.selectedIndex = 0;
  addClass('visually-hidden', containerLocation);
  addClass('visually-hidden', containerMeta);
  addClass('visually-hidden', chart);
});
