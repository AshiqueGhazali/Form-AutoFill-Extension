document.getElementById('autofillBtn').addEventListener('click', () => {
    console.log("Button clicked");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {

            console.log("scripting is :",chrome.scripting);
            
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['content.js']
            }, () => {
                if (chrome.runtime.lastError) {
                    console.error("Script injection failed: ", chrome.runtime.lastError);
                } else {
                    console.log("Script injected successfully");
                }
            });
        } else {
            console.error("No active tab found.");
        }
    });
});
