// Create a context menu item
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "show-url",
    title: "Show Current URL",
    contexts: ["all"] // The context menu will appear on all types of elements
  });
});

// Add a click listener for the context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "show-url" && tab) {
    // Display the URL of the current tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const currentTab = tabs[0];
        if (currentTab.url) {
          // Show an alert with the tab's URL
          chrome.scripting.executeScript({
            target: { tabId: currentTab.id },
            func: (url) => alert(`Current URL: ${url}`),
            args: [currentTab.url]
          });
        }
      }
    });
  }
});