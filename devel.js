define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    'domevents/DOMEvents-Tests',
    'minimapless/MiniMapless-Tests',
    'amber-flow/MVC-Models-Tests',
    'amber-flow/MVC-Templates-Tests',
	'amber-flow/Flow-Tests',
	'amber-flow/App-Tests'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});
