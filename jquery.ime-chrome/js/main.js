$(document).ready(function(){
	var keyboardIcon = chrome.extension.getURL("/images/ime-active.png");
	$( '.imeselector' ).css( 'background', 'url(' + keyboardIcon + ') no-repeat left 3px center rgba(255,255,255,0.75) ');
	$( 'textarea, input[type=text]' ).ime();
	$( 'input[type=text]' ).ime();
});