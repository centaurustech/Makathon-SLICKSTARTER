var app = require('../server');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');


describe('test', function() {

  var browser

  before(function() {
    this.app = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
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

  it('says hello world I fucking hate you', function(){
    expect(browser.text("h1")).to.eql("Slickstarter")
  });

  it('has a sign up button', function () {
    expect(browser.text("a")).to.eql("Sign up")
  });
});