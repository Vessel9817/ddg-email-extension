chrome.tabs.getCurrent((tab) => {
    if (tab?.id == null) return;

    // DDG doesn't check if you have their extension installed,
    // it just checks if a specific element is visible
    chrome.scripting.insertCSS({
        target: {
            tabId: tab.id
        },
        files: ["/styles.css"]
    });
});
