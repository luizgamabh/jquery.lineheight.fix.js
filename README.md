jquery.lineheight.fix.js
========================
jquery.lineheight.fix is just to fix an issue with Google Chrome that always rounds down (floor) decimal numbers on property "line-height".

Eg.: line-height: 20.99998px => render as: line-height:20px;

This script will round to the nearest integer.

Just call this script in your page.
