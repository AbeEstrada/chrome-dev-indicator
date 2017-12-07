var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const defaultIndicator = "☕️";

if (isChrome) {
  chrome.storage.sync.get(
    {
      indicator: defaultIndicator
    },
    items => {
      setTitle(items.indicator);
    }
  );
} else {
  // Firefox?
  const gettingIndicator = browser.storage.sync.get("indicator");
  gettingIndicator.then(res => {
    const indicator = res.indicator == undefined ? defaultIndicator : res.indicator;
    setTitle(indicator);
  });
}

function setTitle(indicator) {
  document.title = `${indicator} ${document.title}`;
}
