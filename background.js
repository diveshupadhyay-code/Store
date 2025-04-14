// Get the URL of the current tab and display it
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
      if (currentTab && currentTab.url) {
        document.getElementById('urlDisplay').textContent = currentTab.url;
      } else {
          document.getElementById('urlDisplay').textContent = "Could not retrieve URL.";
      }
  });