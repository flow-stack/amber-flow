define([
    'amber/deploy',
    // --- packages to be deployed begin here ---

    'bootstrap',
    'rlite',
    'rivets',

    'domevents/DOMEvents',

    'amber-mvc/MVC-Core',
    'amber-mvc/MVC-Iterables',
    'amber-mvc/MVC-Routeables',

    'minimapless/MiniMapless',
    
	'amber-flow/Flow-Core',
	'amber-flow/Flow-API',
    'amber-flow/Flow-Scaffolding',
    'amber-flow/App'
    // --- packages to be deployed end here ---
], function (amber) {
    return amber;
});
