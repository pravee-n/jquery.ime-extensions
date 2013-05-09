var self = require("sdk/self");
var pageMod = require("sdk/page-mod");
var tabs = require("sdk/tabs");

pageMod.PageMod({
	include: "*",
	contentStyleFile: self.data.url("css/jquery.ime.css"),
	contentScriptFile: [ self.data.url("js/jquery.js"),
							self.data.url("js/jquery.ime.js"),
							self.data.url("js/jquery.ime.selector.js"),
							self.data.url("js/jquery.ime.preferences.js"),
							self.data.url("js/jquery.ime.inputmethods.js"),
							self.data.url("js/invoke.jquery.ime.js"),
							self.data.url("rules/hi/hi-transliteration.js"),
							self.data.url("rules/gu/gu-transliteration.js")
					   ]
	// onAttach: function(worker) {
	// 	worker.port.on( "injectScript", function ( imeSource ) {
	// 		worker = tabs.activeTab.attach({
	// 			contentScriptFile: [ self.data.url(imeSource)]
	// 		});
	// 		worker.port.emit( "scriptInjected",  );
	// 	} );
	// },	
});