/* global describe, it, expect */

var Strategy = require('../lib/strategy');


describe('Strategy', function() {

  var strategy = new Strategy(function(){});

  it('should be named http-header-token', function() {
    expect(strategy.name).to.equal('http-header-token');
  });

  it('should throw if constructed without a verify callback', function() {
    expect(function() {
      var s = new Strategy();
    }).to.throw(TypeError, 'HTTPHeaderTokenStrategy requires a verify callback');
  });

});
