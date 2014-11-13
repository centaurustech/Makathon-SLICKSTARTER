var app = require('../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

describe('test', function() {

  var browser

  before(function() {
    this.app = app.listen(9292);
    browser = new Browser({ site: 'http://localhost:9292' });
  });

  beforeEach(function(done) {
    browser.visit('/', done);
  });

  after(function(done) {
    this.app.close(done)
  });

  it('visits the home page', function() {
    expect(browser.success).to.be.true
  });

  it('hello world', function(){
    expect(browser.text("h1")).to.eql("Hello world, I fucking hate you")
  });

});
