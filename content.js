const defaultIndicator = '☕️'

chrome.storage.sync.get({
  indicator: defaultIndicator
}, (items) => {
  document.title = `${items.indicator} ${document.title}`
})
