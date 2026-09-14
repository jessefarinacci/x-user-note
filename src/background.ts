// Open the settings page when the extension icon is clicked
chrome.action.onClicked.addListener(() => {
  void chrome.runtime.openOptionsPage();
});
