const defaultIndicator = "☕️";

const saveOptions = e => {
  const indicator = document.getElementById("indicator").value;
  browser.storage.sync.set(
    {
      indicator: indicator || defaultIndicator
    },
    () => {
      const status = document.getElementById("status");
      status.style.opacity = 1;
      setTimeout(() => {
        status.style.opacity = 0;
      }, 1000);
    }
  );
};

const restoreOptions = () => {
  browser.storage.sync.get(
    {
      indicator: defaultIndicator
    },
    items => {
      document.getElementById("indicator").value = items.indicator;
    }
  );
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
