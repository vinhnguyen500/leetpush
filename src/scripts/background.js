import ext from "./utils/ext";
import storage from "./utils/storage";


require("babel-core/register");
require("babel-polyfill");
var GitHub = require('github-api');

async function push_code(file, commit, code) {
  var token = await storage.get('token');
  var access_token = token.token;
  if (access_token ==='undefined') {
    return 'Please authenticate to Github through options';
  }
  var loc = (await storage.get('location'));
  var location = loc.location + "";
  var paths = location.split("/")
  var repoName = paths[0];
  var branchName = paths[1];
  var path = ""
  for (var i = 2; i < paths.length; i++) {
    if (paths[i]) {
      path += paths[i] + "/"
    }
  }
  path += file;
  if (location === 'undefined') {
    return 'Location not set. Configure the path in the options page.';
  }
  var gh = new GitHub({
    token: access_token
  });
  var user = gh.getUser();
  try {
    var profile = (await user.getProfile());
    var username = profile.data.login;
    console.log(username);
    console.log(repoName);
    console.log(branchName);
    console.log(path);
    var committer = {
      "committer": {
        "name": username,
        "email": "LeetPushApp@gmail.com"
      }
    }
    var repo = gh.getRepo(username, repoName);
    try {
      await repo.writeFile(branchName, path, code, commit, committer);
    }
    catch (error) {
      return ('Failed to create file! ' + error);
    }
  } catch (error) {
    return 'Invalid Token! Reauthenticate through the options tab. ' + error;
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
