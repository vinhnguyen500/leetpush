import ext from "./utils/ext";
import storage from "./utils/storage";
import { getAccessToken } from "./utils/authorize";


var git_img = ext.extension.getURL('images/GitHub-Mark.png')
document.getElementById('github-mark').src = git_img;
var oauth_button = document.getElementById('git-oauth');
var auth_div = document.getElementById('authentication');
oauth_button.onclick = function() {
  getAccessToken().then(token => {
    storage.set({ 'token': token });
    auth_div.style.display="none";
    getGitData(token);
  });
}

storage.get('token', function(resp) {
  if (resp.token != 'undefined') {
    getGitData(resp.token);
  } else {
    auth_div.style.display="block";
  }
});

function getErr(err) {
  alert(`Leetpush ran into an error: ${err}. Try relogging.`)
  console.log(err);
  storage.remove('token');
  document.getElementById('git-info').style.display="none";
  var auth_div = document.getElementById('authentication');
  auth_div.style.display="block";
}

function getGitData(access_token) {
  var GitHub = require('github-api');
  var gh = new GitHub({
    token: access_token
  });
  var user = gh.getUser();
  var gitDisplay = document.getElementById('git-info');
  gitDisplay.style.display="block";
  storage.get('location', function(resp) {
    if (resp.location != 'undefined') {
      setLocation(resp.location);
    } else {
      setLocation('Select a location in options');
    }
  });
  user.listRepos(function(err, repos) {
    if (err) {
      getErr(err);
    } else {
      var repoList = document.createElement("ol");
      repoList.className = "tree";
      for (var i = 0; i < repos.length; i++) {
        var repoItem = document.createElement("li");
        var f = "repo" + i;
        repoItem.innerHTML = `<label for="${f}">${repos[i].name}</label><input id="${f}" type="checkbox" />`
        var repoObj = gh.getRepo(repos[i].owner.login, repos[i].name);
        repoItem.onclick = (function() {
          var currObj = repoObj
          var currItem = repoItem
          var repoName = repos[i].name
          return function() {
            getBranch(currObj, currItem, repoName)
          }
        })();
        repoList.appendChild(repoItem);
      }
      gitDisplay.appendChild(repoList);
    }
  });
}

function getBranch(repoObj, repoItem, repoName) {
  repoItem.onclick = ""
  repoObj.listBranches(function(err, branches) {
    if (err) {
      getErr(err)
    } else {
      var brList = document.createElement("ol");
      for (var j = 0; j < branches.length; j++) {
        var brItem = document.createElement("li");
        var b = `${repoName}-subfolder-${j}`
        brItem.innerHTML = `<label for="${b}">${branches[j].name}</label><input id=${b} type="checkbox" />`;
        brItem.onclick = (function() {
          var currObj = repoObj;
          var currItem = brItem;
          var bname = branches[j].name
          var repoN = repoName
          return function() {
            getContents(currObj, currItem, repoN, bname, "");
          }
        })();
        brList.appendChild(brItem);
      }
      repoItem.appendChild(brList);
    }
  });
}

function getContents(repoObj, parentItem, repoName, name, path) {
  var location = `${repoName}/${name}/${path}`
  parentItem.onclick = setLocation(location);
  repoObj.getContents(name, path, true, function(err, data) {
    if (err) {
      getErr(err);
    } else {
      var contentList = document.createElement("ol");
      for (let item of data) {
        if (item.type == "file") {
          var fileItem = document.createElement("li");
          fileItem.className = 'file'
          fileItem.innerHTML = `<a>${item.name}</a>`
          contentList.appendChild(fileItem);
        } else if (item.type == "dir") {
          var dirItem = document.createElement("li")
          var b = `${repoName}-${name}-${item.name}`
          dirItem.innerHTML = `<label for="${b}">${item.name}</label><input id=${b} type="checkbox" />`;
          dirItem.onclick = (function() {
            var currObj = repoObj;
            var currItem = dirItem;
            var tname = name;
            var repoN = repoName;
            return function() {
              getContents(currObj, currItem, repoN, tname, item.path);
            }
          })();
          contentList.appendChild(dirItem);
        } else {
          console.log(`Unknown file type: ${item.type}`)
        }
      }
      parentItem.appendChild(contentList);
    }
  });
}

function setLocation(location) {
  var locSelector = document.getElementById("location");
  locSelector.innerHTML = location;
  storage.set({'location' : location})
}