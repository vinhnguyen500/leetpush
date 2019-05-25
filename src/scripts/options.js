import ext from "./utils/ext";
import storage from "./utils/storage";
import { getAccessToken } from "./utils/authorize";

var GitHub = require('github-api');
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
  var gh = new GitHub({
    token: access_token
  });
  var user = gh.getUser();
  var gitDisplay = document.getElementById('git-info');
  gitDisplay.style.display="block";
  user.listRepos(function(err, repos) {
    if (err) {
      getErr(err);
    } else {
      var repoList = document.createElement("ol");
      repoList.className = "tree";
      for (var i = 0; i < repos.length; i++) {
        var repoItem = document.createElement("li");
        var f = "folder" + i;
        var html = `<label for="${f}">${repos[i].name}</label><input id="${f}" type="checkbox">`
        repoItem.innerHTML = html;
        var repoObj = gh.getRepo(repos[i].owner.login, repos[i].name);
        repoItem.onclick = (function() {
          var currObj = repoObj
          var currItem = repoItem
          return function() {
            getBranch(currObj, currItem)
          }
        })();
        console.log(repos[i].name);
        repoList.appendChild(repoItem);
      }
      gitDisplay.appendChild(repoList);
    }
  });
}

function getBranch(repoObj, repoItem) {
  repoItem.onclick = ""
  repoObj.listBranches(function(err, branches) {
    if (err) {
      getErr(err)
    } else {
      var brList = document.createElement("ol");
      for (var j = 0; j < branches.length; j++) {
        var brItem = document.createElement("li");
        var b = "subfolder" + j;
        var brHtml = `<label for="${b}">${branches[j].name}</label><input id=${b} type="checkbox">`;
        brItem.innerHTML = brHtml;
        brItem.onclick = (function() {
          var currObj = repoObj;
          var currItem = brItem;
          var bname = branches[j].name
          return function() {
            getContents(currObj, currItem, bname)
          }
        })();
        brList.appendChild(brItem);
      }
      repoItem.appendChild(brList);
    }
  });
}

function getContents(repoObj, brItem, bname) {
  brItem.onclick = "";
  repoObj.getContents(bname, '', true, function(err, data) {
    if (err) {
      getErr(err);
    } else {
      for (let item of data) {
        if (item.type == "file") {
          alert("file!")
        } else {
          alert("dir!")
        }
      }
    }
  });
}