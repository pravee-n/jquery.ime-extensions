var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
	include: "*",
	contentStyleFile: data.url("css/jquery.ime.css"),
	
	// contentStyle is built dynamically here to include absolute URLs
	// for the images referenced by jquery.ime.css.
	// This workaround is needed because we can't use relative URLs 
	// in contentStyleFile or contentStyle.
	contentStyle: [
		".imeselector { background-image: url(" + data.url("images/ime-active.png") + ")}",
		".imeselector-menu .checked { background-image: url(" + data.url("images/tick.png") + ")}"
	],

	// Inject the required scripts into the page
	contentScriptFile: [ data.url("js/jquery.js"),
							data.url("js/jquery.ime.js"),
							data.url("js/jquery.ime.selector.js"),
							data.url("js/jquery.ime.preferences.js"),
							data.url("js/jquery.ime.inputmethods.js"),
							data.url("js/invoke.jquery.ime.js"),
							data.url("rules/hi/hi-transliteration.js"),
							data.url("rules/gu/gu-transliteration.js"),
							data.url("rules/de/de.js"),
							data.url("rules/ur/ur-transliteration.js")
	]
});