define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
	// 'amber-attic/IDE',
    'amber-attic/IDE',
    'minimapless/MiniMapless-Tests',

	'amber-flow/Flow-Tests',
	'amber-flow/App-Tests'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});
