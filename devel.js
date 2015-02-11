define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    'amber-minimal-ide/MinimalIDE',
    'minimapless/MiniMapless-Tests',
    'amber-flow/Flow-Scaffolding',
	'amber-flow/Flow-Tests'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});
