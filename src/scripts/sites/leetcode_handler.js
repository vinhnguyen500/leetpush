import ext from "../utils/ext";

function create_button(evt) {
  var js_timer = setInterval(check_JS, 111);

  function check_JS() {
    var btn_div = document.querySelector(".action__38Xc");
    if (btn_div) {
      clearInterval(js_timer);

      //Creating Elements
      inject_css();
      var push_btn = document.createElement("BUTTON");
      push_btn.className = "push-btn-2156"
      var content_span = document.createElement("span")
      content_span.className = "push-content-2156"
      var t = document.createTextNode("Push Code");
      content_span.appendChild(t)
      push_btn.appendChild(content_span);
      push_btn.onclick = function git_push() {
        push_btn.style.backgroundColor="rgb(232,232,232)";
        setTimeout(() => push_btn.style.backgroundColor='rgb(190, 226, 206)', 250) 
        code = ""
        Array.from(document.querySelectorAll(".CodeMirror-line")).forEach(el => code += (el.textContent + '\n'));
        ext.runtime.sendMessage({ action: "push-code", data: code })
      }
      //Appending to DIV
      btn_div.appendChild(push_btn);
    }
  }
}


function inject_css() {
  var styles = `
    .push-btn-2156 {
      display: inline-flex;
      vertical-align: middle;
      -moz-box-pack: center;
      justify-content: center;
      -moz-box-align: center;
      align-items: center;
      border-radius: 3px;
      line-height: 20px;
      margin-left: 15px;
      transition: all 0.18s ease-in-out 0s;
      outline: currentcolor none 0px;
      cursor: pointer;
      border: 1px solid rgb(237, 218, 218);
      color: #263238;
      background: rgb(190, 226, 206) none repeat scroll 0% 0%;
      height: 32px;
      padding: 0px 9px;
      font-size: 13px;
      min-width: 80px;
    },
    .push-content-2156 {
      opacity: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .push-btn-2156:hover {
      border: 1px solid black; 
    }
  `
  var styleSheet = document.createElement("style")
  styleSheet.type = "text/css"
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
}

function onRequest(request, sender, sendResponse) {
  if (request.action === "get-code") {
      sendResponse(code);
  }
}

var code = ""
window.addEventListener ("load", create_button, false);
ext.runtime.onMessage.addListener(onRequest);

