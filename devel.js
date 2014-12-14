define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    'amber-minimapless/MiniMapless-Tests',
   	'amber-amberflow/Flow-Binding-Tests',
	'amber-amberflow/Flow-Templates-Tests',
	'amber-amberflow/Flow-Tests',
	'amber-amberflow/App-Tests'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});
