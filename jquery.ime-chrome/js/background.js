var runtimeOrExtension = chrome.runtime && chrome.runtime.sendMessage ? 'runtime' : 'extension';
chrome[runtimeOrExtension].onMessage.addListener( function( request, sender, sendResponse ) {
	chrome.tabs.executeScript( null, {file: request.fileToInject}, function () {
		sendResponse( {injected: true} );    	
	});
	return true;
});