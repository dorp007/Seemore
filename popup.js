// Function to inject the content script into the current active tab
function injectContentScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["contentScript.js"],
    });
  });
}

// Add a click event listener to the "AutoSeeMore" button
document.getElementById("seeMoreButton").addEventListener("click", injectContentScript);
