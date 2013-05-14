prototype.jquery.ime
====================

jQuery.IME is an input method editor that currently supports more than 150 input methods. This is the jQuery version of the input method tool
used in Wikimedia projects, a.k.a. Narayam.

This project aims at porting jQuery.IME to Firefox andd Chrome extension.

Current progress of the project:

* Chrome Extension
	* Working extension implemented
	* On demand injection of input method scripts implemented (Input method for a language is injected on the page only when the user selects that particular language)

* Firefox Extension
	* Working extension implemented
	* On demand injection of input method scripts implemented

Get the source code
-------------------
Clone the repository:

	https://github.com/pravee-n/prototype.jquery.ime.git
Or you can download the code as zip also.

Installation on Google Chrome
-----------------------------

1. Launch Google Chrome and click settings icon in the top right corner.
2. Goto Tools > Extensions
3. Make sure the developer mode option is checked on top right.
4. Click on Load Unpacked Extension
5. Open the directory where you cloned the source code. Navigate to the jquery.ime-chrome directory and open it to install the extension


jQuery.IME for chrome is now installed.<br>
Try it out on any textarea or input box on any website. <br>
Try refreshing the page once if jQuery.IME extension is not loaded on a input field or a textarea on a webpage.

Installation on Firefox
-----------------------
1. Launch Firefox.
2. Goto Tools > Addons or you can use the shortcut Ctrl+Shift+A.
3. Click on settings icon near the search bar on top right and select "Install Addon from file"
4. Open the directory where you cloned the source code. Navigate to the jquery.ime-firefox directory and open jquery-ime-firefox.xpi to install the extension

jQuery.IME for firefox is now installed.<br>
Try refreshing the page once if jQuery.IME extension is not loaded on a input field or a textarea on a webpage.
