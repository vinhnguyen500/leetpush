import ext from "./utils/ext";
import storage from "./utils/storage";

var popup = document.getElementById("app");
storage.get('color', function(resp) {
  var color = resp.color;
  if(color) {
    popup.style.backgroundColor = color
  }
});

var template = (data) => {
  var json = JSON.stringify(data);
  return (`
  <div id="gitgraph>
    <h3 class="title">${data.title}</h3>
    <p class="description">${data.description}</p>
    <a href="${data.url}" target="_blank" class="url">${data.url}</a>
  </div>
  <div class="action-container">
    <button data-bookmark='${json}' id="save-btn" class="btn btn-primary">Save</button>
  </div>
  `);
}

var renderMessage = (message) => {
  var displayContainer = document.getElementById("message-container");
  displayContainer.innerHTML = `<p class='message'>${message}</p>`;
}

var renderBookmark = (data) => {
  if (data) {
    var code = enumerate(data);
    var displayContainer = document.getElementById("display-container");
    displayContainer.innerHTML = `<span style="white-space:pre-line;">` + code + `</span>`;  
    displayContainer.className = 'code-presentation';
    var config_input = document.getElementById("commit-config");
    config_input.style.display = "block";
  }
  else {
    renderMessage('Press the Push Button on Leetcode or HackerRank to load code')
  }
}

ext.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var activeTab = tabs[0];
  chrome.tabs.sendMessage(activeTab.id, { action: 'get-code' }, renderBookmark);
});

popup.addEventListener("click", function(e) {
  if(e.target && e.target.matches("#save-btn")) {
    e.preventDefault();
    var data = e.target.getAttribute("data-bookmark");
    ext.runtime.sendMessage({ action: "perform-save", data: data }, function(response) {
      if(response && response.action === "saved") {
        renderMessage("Your bookmark was saved successfully!");
      } else {
        renderMessage("Sorry, there was an error while saving your bookmark.");
      }
    })
  }
});

var optionsLink = document.querySelector(".js-options");
optionsLink.addEventListener("click", function(e) {
  e.preventDefault();
  ext.tabs.create({'url': ext.extension.getURL('options.html')});
})

function enumerate(data) {
  var lines = data.split('\n')
  var code = ""
  var i;
  for (i = 1; i <= lines.length - 2; i++) {
    code += i + ' ' + lines[i - 1] + '\n';
  }
  return code;
}