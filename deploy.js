define([
    'amber/deploy',
    // --- packages to be deployed begin here ---
    'amber-contrib-web/Web',
    
    'bootstrap',
    'rlite',
    'rivets',

    'domevents/DOMEvents',

    'minimapless/MiniMapless',

    'amber-mvc/MVC-Core',
    
	'amber-flow/Flow-Core',
	'amber-flow/Flow-API'
    // --- packages to be deployed end here ---
], function (amber) {
    return amber;
});
