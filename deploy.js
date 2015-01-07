define([
    'amber/deploy',
    // --- packages to be deployed begin here ---
    'text',
    'sightglass',
    'rivets',
    'domevents/DOMEvents',

    'amber-mvc/MVC-Core',
    'amber-mvc/MVC-Iterables',
    'amber-mvc/MVC-Routables',

    'minimapless/MiniMapless',
    
	'amber-flow/Flow',
	'amber-flow/Flow-Core',
	'amber-flow/Flow-API',
    'amber-flow/App'
    // --- packages to be deployed end here ---
], function (amber) {
    return amber;
});
