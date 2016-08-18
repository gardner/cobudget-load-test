// spec.js
describe('Cobudget Load Test', function() {
  var fn = function() {
    browser.get('http://cobudget.co/');
    // login
    element(by.xpath('//span[contains(text(),"Log in")]')).click();
    
    element(by.xpath('//input[@name="email"]')).sendKeys(process.env.COBUDGET_EMAIL);
    element(by.xpath('//input[@name="password"]')).sendKeys(process.env.COBUDGET_PASSWORD);
    element(by.xpath('//span[contains(text(),"Log In")]')).click();


    // start a group: '/html/body/div[2]/div/div[2]/div[2]/form/button'
    
    // group name input: '/html/body/div[2]/div/md-content/md-card/md-card-content/form/div/input'
    // start a group button: '/html/body/div[2]/div/md-content/md-card/md-card-content/form/button'
    // element(by.model('second')).sendKeys(2);
    //
    // element(by.id('gobutton')).click();
    
    expect(element(by.xpath('//div[contains(text(),"Available Funds")]')).getText()).
        toEqual('Available Funds'); // This is wrong!
  }
  
  it('should login 1', function() {
    fn();
  });
});