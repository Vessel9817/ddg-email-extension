browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({
        url: 'https://duckduckgo.com/email/'
    });
});
