import ext from "./utils/ext";
import storage from "./utils/storage";

var colorSelectors = document.querySelectorAll(".js-radio");

var setColor = (color) => {
  document.body.style.backgroundColor = color;
};

var git_img = ext.extension.getURL('images/GitHub-Mark.png')
document.getElementById('github-mark').src = git_img;
document.getElementById('git-login').onsubmit = function() {
  var kvpairs = [];
  var form = document.getElementById('git-login')
  for ( var i = 0; i < form.elements.length; i++ ) {
    var e = form.elements[i];
    kvpairs.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
  }
  
  var queryString = kvpairs.join("&");
  return false;
}
storage.get('color', function(resp) {
  var color = resp.color;
  var option;
  if(color) {
    option = document.querySelector(`.js-radio.${color}`);
    setColor(color);
  } else {
    option = colorSelectors[0]
  }

  option.setAttribute("checked", "checked");
});

colorSelectors.forEach(function(el) {
  el.addEventListener("click", function(e) {
    var value = this.value;
    storage.set({ color: value }, function() {
      setColor(value);
    });
  })
})
