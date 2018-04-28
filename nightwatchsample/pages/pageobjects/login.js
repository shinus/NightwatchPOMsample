var globaldata=require('../../pages/configdata/global.data.json');

module.exports = function(browser){
        this.navigatetoapp=function(){
               browser 
                .windowMaximize()
                .url(globaldata.url);
                return browser;
        } ;
        this.logintoapp=function(username,password){
                browser
                .waitForElementVisible('#username',globaldata.min_time_out)
                .setValue('#username',username)
                .setValue('input[name=password]',password)
                .click('input.submit')  //div.status_text
                .waitForElementVisible('#statusbar_text',globaldata.min_time_out)
                .waitForElementNotVisible('#statusbar_text',globaldata.min_time_out);
        };
        this.logoutfromapp=function(){
                browser
                .waitForElementVisible('a.logout_icon',globaldata.min_time_out)
                .click('a.logout_icon')
                .waitForElementVisible('#statusbar_text',globaldata.min_time_out)
                .waitForElementVisible('#username',globaldata.min_time_out);
        };
return this;
};
