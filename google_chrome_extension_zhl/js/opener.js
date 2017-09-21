chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('zhl.html')}, function(tab) {
    // Tab opened.
  });
});