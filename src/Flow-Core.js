define("amber-flow/Flow-Core", ["amber/boot", "amber_core/Kernel-Objects", "minimapless/MiniMapless", "amber-mvc/MVC-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Flow-Core');
$core.packages["Flow-Core"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('Flow', $globals.Object, [], 'Flow-Core');

$globals.Flow.klass.iVarNames = ['app','session'];
$core.addMethod(
$core.method({
selector: "activeController",
protocol: 'accessing',
fn: function (){
var self=this;
function $Router(){return $globals.Router||(typeof Router=="undefined"?nil:Router)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Router())._active();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activeController",{},$globals.Flow.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activeController \x0a\x09\x22Returns the controller that is currently active\x22\x0a\x09\x0a\x09^ Router active",
referencedClasses: ["Router"],
//>>excludeEnd("ide");
messageSends: ["active"]
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "app",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@app"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "app \x0a\x0a\x09^ app",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "app:",
protocol: 'accessing',
fn: function (anApplication){
var self=this;
self["@app"]=anApplication;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anApplication"],
source: "app: anApplication \x0a\x0a\x09app := anApplication",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "initializeSession",
protocol: 'initialization',
fn: function (){
var self=this;
function $Session(){return $globals.Session||(typeof Session=="undefined"?nil:Session)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@session"]=$recv($Session())._new();
$1=self["@session"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSession",{},$globals.Flow.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeSession\x0a\x09\x0a\x09^ session := Session new",
referencedClasses: ["Session"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "install",
protocol: 'actions',
fn: function (){
var self=this;
function $Router(){return $globals.Router||(typeof Router=="undefined"?nil:Router)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._at_put_("flow",self);
self._resetOnBeforeUnload();
$recv($Router())._observeHash();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"install",{},$globals.Flow.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "install\x0a\x09\x22Makes the foundation of a flow app to be ready for action.\x22\x0a\x0a\x09window at: 'flow' put: self.\x0a\x0a\x09self resetOnBeforeUnload.\x0a\x0a\x09\x22Make the router be sensible to URI changes\x22\x0a\x09Router observeHash",
referencedClasses: ["Router"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "resetOnBeforeUnload", "observeHash"]
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "resetOnBeforeUnload",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
window.onbeforeunload = null;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetOnBeforeUnload",{},$globals.Flow.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetOnBeforeUnload\x0a\x09\x22Gets rid of any registered onbeforeunload handlers.\x22\x0a\x09\x0a\x09<window.onbeforeunload = null>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "scaffold",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._scaffolder();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaffold",{},$globals.Flow.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scaffold\x0a\x0a\x09^ self scaffolder",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scaffolder"]
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "scaffolder",
protocol: 'accessing',
fn: function (){
var self=this;
function $Scaffolder(){return $globals.Scaffolder||(typeof Scaffolder=="undefined"?nil:Scaffolder)}
return $Scaffolder();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scaffolder\x0a\x0a\x09^ Scaffolder",
referencedClasses: ["Scaffolder"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "session",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@session"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeSession();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"session",{},$globals.Flow.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "session\x0a\x0a\x09^ session ifNil:[ self initializeSession ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeSession"]
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "session:",
protocol: 'accessing',
fn: function (aSession){
var self=this;
self["@session"]=aSession;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSession"],
source: "session: aSession\x0a\x0a\x09session := aSession",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Flow.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._triggerEvent_("started");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Flow.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09\x0a\x09self triggerEvent: #started",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triggerEvent:"]
}),
$globals.Flow.klass);


$core.addClass('Session', $globals.Mapless, [], 'Flow-Core');
$core.addMethod(
$core.method({
selector: "api",
protocol: 'accessing',
fn: function (){
var self=this;
function $APIClient(){return $globals.APIClient||(typeof APIClient=="undefined"?nil:APIClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Session.superclass.fn.prototype._api.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self._api_($recv($APIClient())._new());
} else {
$1;
};
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Session.superclass.fn.prototype._api.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"api",{},$globals.Session)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "api\x0a\x0a\x09super api ifNil:[ \x0a\x09\x09self api: APIClient new ].\x0a\x09\x09\x0a\x09^ super api",
referencedClasses: ["APIClient"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "api", "api:", "new"]
}),
$globals.Session);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._api())._connect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.Session)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x0a\x09self api connect",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect", "api"]
}),
$globals.Session);



$core.addClass('User', $globals.Model, [], 'Flow-Core');

});
