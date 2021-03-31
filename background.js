// Background Script - registered in the manifest
//  - a service worker that will run in the background,
// 		best used for event handling

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
	// accessing storage API, which is needed to allow multiple
	// components of the extension to access this resource
	// 		requires explicit permisions request in manifest
	chrome.storage.sync.set({ color });
	console.log("Default background color set to %cgreen", `color: ${color}`);
});
