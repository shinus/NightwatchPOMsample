var logindata=require('./testdata/login.data.json');
var loginpage=require('../pages/pageobjects/login.js');

module.exports={
  '@tags':['smoke'],
  before: function(browser){
    loginpage(browser).navigatetoapp();
  },
  'Login to app':function(browser){
    loginpage(browser).logintoapp(logindata.login.username,logindata.login.password);
  },
  'Logout from app':function(browser){
    loginpage(browser).logoutfromapp();
  },
  after: function(browser){
        browser.end();     
  }
};
