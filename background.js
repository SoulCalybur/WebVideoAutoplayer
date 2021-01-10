console.log("[Video MediaControls Autoplay] ------- Hello~!");

/**
 * Storage API, needs permission
 * chrome.storage.sync.set
 * chrome.storage.sync.get
 */

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: "#ffcc00" }, (result) => {
    console.log("Stored color value", result);
  });
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: "google.com" },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()],
    },
  ]);
});

chrome.browserAction.setBadgeText({ text: "SOOS" });
chrome.browserAction.setBadgeBackgroundColor({ color: "#cc0000" });
chrome.browserAction.setTitle({ title: "Hallooool!" });
