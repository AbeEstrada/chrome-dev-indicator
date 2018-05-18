const defaultIndicator = "☕️";

chrome.storage.sync.get(
  {
    indicator: defaultIndicator
  },
  items => {
    setTitle(items.indicator);
  }
);

function setTitle(indicator) {
  document.title = `${indicator} ${document.title}`;
}
