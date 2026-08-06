chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({
        url: 'https://duckduckgo.com/email/'
    });
});
