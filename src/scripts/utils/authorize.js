import ext from "./ext";
/* exported getAccessToken */

const REDIR_URL = ext.identity.getRedirectURL();
const CLIENT_ID = "x";
const CLIENT_SCRT = "x";
const STATE_STR = Math.random().toString(36).slice(2);

function extractCode(redirectUri) {
  let m = redirectUri.match(/[#?](.*)/);
  if (!m || m.length < 1)
    return null;
  let params = new URLSearchParams(m[1].split("#")[0]);
  if (params.get("state") != STATE_STR) {
    return null;
  }
  return params.get("code");
}

function validate(redirectURL) {
  function checkResponse(response) {
    return new Promise((resolve, reject) => {
      if (response.status != 200) {
        reject("Code validation error");
      }
      response.json().then((json) => {
        console.log(json)
        if (json.access_token) {
          resolve(json.access_token);
        } else {
          reject("Token validation error");
        }
      });
    });
  }

  const code = extractCode(redirectURL);
  if (!code) {
    throw "Authorization failure";
  }
  let codeURL = 'https://github.com/login/oauth/access_token';
  codeURL += `?client_id=${CLIENT_ID}`;
  codeURL += `&client_secret=${CLIENT_SCRT}`;
  codeURL += `&code=${code}`;
  codeURL += `&redirect_uri=${REDIR_URL}`
  codeURL += `&state=${STATE_STR}`
  return fetch(codeURL, {
    method: "POST",
    headers: {
      'Accept': 'application/json'
    }
  }).then(checkResponse);
}

function authorize() {
  const scopes = ["gists", "repo"];
  let authURL = "https://github.com/login/oauth/authorize";
  authURL += `?client_id=${CLIENT_ID}`;
  authURL += `&response_type=token`;
  authURL += `&redirect_uri=${encodeURIComponent(REDIR_URL)}`;
  authURL += `&scope=${encodeURIComponent(scopes.join(' '))}`;
  authURL += `&state=${STATE_STR}`;

  return ext.identity.launchWebAuthFlow({
    interactive: true,
    url: authURL
  });
}

export function getAccessToken() {
  return authorize().then(validate);
}