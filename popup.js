//obtenir tous les onglets
// function logTabs(tabs) {
//   for (let tab of tabs) {
//     // tab.url requires the `tabs` permission
//     console.log("coucou");
//     console.log(tab.url);
//   }
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

// var querying = browser.tabs.query({});
// querying.then(logTabs, onError);


// //obtenir l'onglet actif dans la fenêtre actuelle
// function logTabs(tabs) {
//   for (let tab of tabs) {
//     // tab.url requires the `tabs` permission
//     console.log(tab.url);
//   }
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

// var querying = browser.tabs.query({currentWindow: true, active: true});
// querying.then(logTabs, onError);

chrome.tabs.getCurrent(function(tab){
        console.log(tab.url);
    }
);