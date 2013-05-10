var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var tabs = require("sdk/tabs");

pageMod.PageMod({
	include: "*",
	contentScriptFile: [ data.url("js/jquery.js"),
							data.url("js/jquery.ime.js"),
							data.url("js/jquery.ime.selector.js"),
							data.url("js/jquery.ime.preferences.js"),
							data.url("js/jquery.ime.inputmethods.js"),
							data.url("js/invoke.jquery.ime.js"),
							data.url("rules/hi/hi-transliteration.js"),
							data.url("rules/gu/gu-transliteration.js")
					   ],
	contentStyleFile: data.url("css/jquery.ime.css")
});