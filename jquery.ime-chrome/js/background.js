// document.addEventListener("DOMContentLoaded", function () {
//     //Fetch all inactive completly loaded tabs or use your own query
//     chrome.tabs.query({
//         active: true,
//         // "status": "complete"
//     }, function (tabs) {
//         for (tab in tabs) { //It returns array of tabs
//             chrome.tabs.executeScript(tabs[tab].id, {
//                 "file": "js/jquery.js",
//                 "file": "js/jquery.ime.js",
//                 "file": "js/jquery.ime.selector.js",
//                 "file": "js/jquery.ime.preferences.js",
//                 "file": "js/jquery.ime.inputmethods.js",
//                 "file": "js/main.js",
//                 "file": "rules/hi/hi-transliteration.js" //Inject Code
//                 // console.log("injected");
//             });
//         }
//     });
// });
// "js": [ "js/jquery.js", "js/jquery.ime.js", "js/jquery.ime.selector.js", "js/jquery.ime.preferences.js", "js/jquery.ime.inputmethods.js", "js/main.js" ],