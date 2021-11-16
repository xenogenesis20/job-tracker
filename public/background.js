/*global chrome*/
/*global gapi*/

import secrets from "../secrets.development";

chrome.identity.getAuthToken({ interactive: true }, function (token) {
  console.log("got the token", token);
});

// const DISCOVERY_DOCS = [
//   "https://sheets.googleapis.com/$discovery/rest?version=v4",
// ];

// function onGAPILoad() {
//   window.gapi.client
//     .init({
//       // Don't pass client nor scope as these will init auth2, which we don't want
//       apiKey: secrets.SHEETS,
//       discoveryDocs: DISCOVERY_DOCS,
//     })
//     .then(
//       function () {
//         console.log("gapi initialized");
//       },
//       function (error) {
//         console.log("error", error);
//       }
//     );
// }
// onGAPILoad();
