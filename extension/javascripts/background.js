REDIRECT_URI = 'http://api.vk.com/blank.html';
APP_NAME = 'ctrl-vk';

var getSettings = function(name) { var data = JSON.parse(localStorage.getItem(APP_NAME)); if (!data) { return console.log("your settings (" + name + ") are empty"); } return data[name]; };
var setSettings = function(name, value) { var data = JSON.parse(localStorage.getItem(APP_NAME)) || {}; data[name] = value; return localStorage.setItem(APP_NAME, JSON.stringify(data)); };

chrome.tabs.onUpdated.addListener(function(tab_id, changeInfo, tab) {
  if (getSettings('authorize_in_progress')) {
    alert(1)
    if (RegExp(REDIRECT_URI).test(tab.url)) {
      setSettings('authorize_in_progress', false);
      chrome.tabs.remove(tab.id);
      return setSettings('authorize_url');
      console.log('ok')
    }
  }
});
