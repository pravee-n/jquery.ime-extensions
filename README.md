prototype.jquery.ime
====================

jQuery.IME is an input method editor that currently supports more than 150 input methods. This is the jQuery version of the input method tool
used in Wikimedia projects, a.k.a. Narayam.

This project aims at porting jQuery.IME to Firefox andd Chrome extension.

Current progress of the project:
* Working Chrome extension implemented
* On demand injection of scripts implemented (Input method for a language 
is injected on the page only when the user selects that particular language)

Installation on Google Chrome
=============================

Get the source code
```bash
https://github.com/pravee-n/prototype.jquery.ime.git
```

1. Click settings icon in the top right corner.
2. Goto Tools > Extensions
3. Make sure the developer mode option is checked on top right.
4. Click on Load Unpacked Extension
5. Open the directory where you cloned the source code. Navigate to the jQuery.ime-chrome directory and open it to install the extension


jQuery.IME for chrome is now installed.<br>
Try it out on any textarea or input box on any website. <br>
Try refreshing the page once if jQuery.IME extension is not loaded on a input field or a textarea.

