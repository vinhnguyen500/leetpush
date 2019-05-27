import ext from "./utils/ext";
import storage from "./utils/storage";


require("babel-core/register");
require("babel-polyfill");
var GitHub = require('github-api');

async function push_code(access_token, file, commit, code) {
  var token = await storage.get('token');
  var access_token = token.token;
  if (access_token ==='undefined') {
    return 'Please authenticate to Github through options';
  }
  var loc = (await storage.get('location'));
  var location = loc.location + "";
  var paths = location.split("/")
  if (location === 'undefined') {
    return 'Location not set. Configure the path in the options page.';
  }
  var gh = new GitHub({
    token: access_token
  });
  var user = gh.getUser();
  try {
    var profile = (await user.getProfile());
    console.log(JSON.stringify(profile))
  } catch (error) {
    return 'Invalid Token! Reauthenticate through the options tab';
  }
  return 'pushed';
}

ext.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "push-code") {
      var code = request.code;
      var file = request.file;
      var commit = request.commit;
      push_code(file, commit, code).then(data => sendResponse(data));
      return true;
    }
  }
);
