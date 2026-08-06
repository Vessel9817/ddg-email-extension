browser.tabs.getCurrent((tab) => {
    if (tab?.id == null) return;

    browser.scripting.insertCSS({
        target: {
            tabId: tab.id
        },
        files: ["/styles.css"]
    });
});
