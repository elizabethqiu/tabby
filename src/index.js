// final: max tabs, var numTabsOpen
const MAX_TABS = 4;
let numTabsOpen = 0;

// listen for tab creation events
chrome.tabs.onCreated.addListener(function(tab) {
    if (numTabsOpen >= MAX_TABS) {
        chrome.tabs.remove(tab.id);
    } else {
        numTabsOpen++;
    }
});

// listen for tab removal events
chrome.tabs.onRemoved.addListener(function() {
  numTabsOpen--;
});

// // listen for tab removal events
// chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
//     // numTabsOpen--;
  
//     if (numTabsOpen >= MAX_TABS) {
//       chrome.tabs.create({ url: "about:blank" }, function(tab) {
//         chrome.tabs.executeScript(tab.id, {
//           code: `
//             const container = document.createElement("div");
//             container.style.display = "flex";
//             container.style.flexDirection = "column";
//             container.style.justifyContent = "center";
//             container.style.alignItems = "center";
//             container.style.height = "100vh";
  
//             const img = document.createElement("img");
//             img.src = chrome.extension.getURL("tabby.png");
//             img.style.width = "200px";
//             img.style.marginBottom = "20px";
  
//             // create a heading element for message
//             const heading = document.createElement("h1");
//             heading.textContent = "Close Your Tabs!";
//             heading.style.fontSize = "24px";
//             heading.style.fontWeight = "bold";
  
//             // add image and heading to container element
//             container.appendChild(img);
//             container.appendChild(heading);
  
//             // set container as the content of the new tab
//             document.body.innerHTML = "";
//             document.body.appendChild(container);
//           `
//         });
//       });
//     }
//   });