require('jasmine-jquery');
var addClass = require ('../src/js/addClass');

describe('adding a class', function() {
  beforeEach(function() {
    setFixtures('<div class="toggle"></div>');
  });
  it('should add a class to .toggle', function() {
    addClass('active', document.querySelector('.toggle'));
    expect(document.querySelector('.toggle')).toHaveClass('active');
  });
});
