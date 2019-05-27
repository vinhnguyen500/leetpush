import ext from "./utils/ext";
import storage from "./utils/storage";

function enumerate(data) {
  var lines = data.split('\n')
  var code = ""
  var i;
  for (i = 1; i <= lines.length - 2; i++) {
    code += i + ' ' + lines[i - 1] + '\n';
  }
  return code;
}

function pushCode(data) {
  var fname = document.getElementById("fname").value;
  var commit_msg = document.getElementById("commit").value;
  ext.runtime.sendMessage(
    { 
      action: "push-code",
      code: data,
      file: fname,
      commit: commit_msg
    }, function(resp) {
    if (resp === "pushed") {
      alert(`${fname} successfully pushed`);
    } else {
      alert(JSON.stringify(resp));
    }
  });
}

var renderMessage = (message) => {
  var displayContainer = document.getElementById("message-container");
  displayContainer.innerHTML = `<p class='message'>${message}</p>`;
}

var renderCode = (data) => {
  if (data) {
    var code = enumerate(data);
    var displayContainer = document.getElementById("display-container");
    displayContainer.innerHTML = `<span style="white-space:pre-line;">` + code + `</span>`;  
    displayContainer.className = 'code-presentation';
    var submit = document.getElementById("push-button");
    submit.onclick = function() {
      pushCode(data);
    };
    var config_input = document.getElementById("commit-config");
    config_input.style.display = "block";
  }
  else {
    renderMessage('Press the Push Button on Leetcode or HackerRank to load code')
  }
}

var locElement = document.getElementById("location")
storage.get('location', function(resp) {
  if (resp.location != 'undefined') {
    locElement.innerHTML = resp.location;
  } else {
    locElement.innerHTML = 'Select a location in options';
  }
});

ext.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var activeTab = tabs[0];
  chrome.tabs.sendMessage(activeTab.id, { action: 'get-code' }, renderCode);
});

var optionsLink = document.querySelector(".js-options");
optionsLink.addEventListener("click", function(e) {
  e.preventDefault();
  ext.tabs.create({'url': ext.extension.getURL('options.html')});
})