define("amber-flow/Flow", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Classes", "amber_core/Kernel-Collections", "amber_core/Kernel-Exceptions", "amber_core/Kernel-Infrastructure"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Flow');
$core.packages["Flow"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('AbsrtactScaffolder', $globals.Object, [], 'Flow');

$globals.AbsrtactScaffolder.klass.iVarNames = ['api'];
$core.addMethod(
$core.method({
selector: "api",
protocol: 'accessing',
fn: function (){
var self=this;
function $RESTfulAPI(){return $globals.RESTfulAPI||(typeof RESTfulAPI=="undefined"?nil:RESTfulAPI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@api"];
if(($receiver = $2) == null || $receiver.isNil){
self["@api"]=$recv($RESTfulAPI())._new();
$1=self["@api"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"api",{},$globals.AbsrtactScaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "api\x0a\x0a\x09^ api ifNil:[ api := RESTfulAPI new ]",
referencedClasses: ["RESTfulAPI"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.AbsrtactScaffolder.klass);

$core.addMethod(
$core.method({
selector: "scaffold:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaffold:",{anObject:anObject},$globals.AbsrtactScaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "scaffold: anObject\x0a\x09\x22Scaffold what's relevnt to this scaffolder\x22\x0a\x09\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AbsrtactScaffolder.klass);

$core.addMethod(
$core.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($recv($recv($recv(window)._location())._asString()).__comma($recv($Mapless())._basePath())).__comma("/scaffold");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(self._command());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"url",{},$globals.AbsrtactScaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x0a\x09^ window location asString,Mapless basePath,'/scaffold',self command,'/'",
referencedClasses: ["Mapless"],
//>>excludeEnd("ide");
messageSends: [",", "asString", "location", "basePath", "command"]
}),
$globals.AbsrtactScaffolder.klass);


$core.addClass('CRUDScaffolder', $globals.AbsrtactScaffolder, [], 'Flow');

$core.addMethod(
$core.method({
selector: "command",
protocol: 'accessing',
fn: function (){
var self=this;
return "/crud";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "command\x0a\x0a\x09^ '/crud'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CRUDScaffolder.klass);

$core.addMethod(
$core.method({
selector: "scaffold:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
$recv($Transcript())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$2=$recv("CRUD scaffolding ".__comma(aString)).__comma("...");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($Transcript())._show_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
$recv(self._api())._post_data_do_onError_(self._url(),aString,(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($Transcript())._cr();
$3=$recv($Transcript())._show_(" ...done");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_($recv(res)._responseText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaffold:",{aString:aString},$globals.CRUDScaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "scaffold: aString \x0a\x0a\x09Transcript cr; show: 'CRUD scaffolding ', aString,'...'.\x0a\x0a\x09self api\x0a\x09\x09post: self url  \x0a\x09\x09data: aString\x0a\x09\x09do: [ :res | Transcript cr; show: ' ...done']\x0a\x09\x09onError: [ :res | self error: res responseText ]",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["cr", "show:", ",", "post:data:do:onError:", "api", "url", "error:", "responseText"]
}),
$globals.CRUDScaffolder.klass);


$core.addClass('MaplessScaffolder', $globals.AbsrtactScaffolder, [], 'Flow');

$core.addMethod(
$core.method({
selector: "backendScaffold:do:onError:",
protocol: 'actions',
fn: function (aString,aBlock,anErrorBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._api())._post_data_do_onError_(self._url(),aString,aBlock,anErrorBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backendScaffold:do:onError:",{aString:aString,aBlock:aBlock,anErrorBlock:anErrorBlock},$globals.MaplessScaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock", "anErrorBlock"],
source: "backendScaffold: aString do: aBlock onError: anErrorBlock\x0a\x0a\x09self api\x0a\x09\x09post: self url  \x0a\x09\x09data: aString\x0a\x09\x09do: aBlock\x0a\x09\x09onError: anErrorBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["post:data:do:onError:", "api", "url"]
}),
$globals.MaplessScaffolder.klass);

$core.addMethod(
$core.method({
selector: "command",
protocol: 'accessing',
fn: function (){
var self=this;
return "/mapless";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "command\x0a\x0a\x09^ '/mapless'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MaplessScaffolder.klass);

$core.addMethod(
$core.method({
selector: "frontendScaffold:",
protocol: 'actions',
fn: function (aString){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._parentClass())._subclass_instanceVariableNames_package_(aString,"",$recv($recv($Flow())._scaffolder())._packageName());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frontendScaffold:",{aString:aString},$globals.MaplessScaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "frontendScaffold: aString\x0a\x09\x0a\x09self parentClass \x0a\x09\x09subclass: aString \x0a\x09\x09instanceVariableNames: '' \x0a\x09\x09package: Flow scaffolder packageName",
referencedClasses: ["Flow"],
//>>excludeEnd("ide");
messageSends: ["subclass:instanceVariableNames:package:", "parentClass", "packageName", "scaffolder"]
}),
$globals.MaplessScaffolder.klass);

$core.addMethod(
$core.method({
selector: "parentClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
return $Mapless();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parentClass\x0a\x0a\x09^ Mapless",
referencedClasses: ["Mapless"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MaplessScaffolder.klass);

$core.addMethod(
$core.method({
selector: "scaffold:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._backendScaffold_do_onError_(aString,(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._frontendScaffold_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_($recv(res)._responseText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaffold:",{aString:aString},$globals.MaplessScaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "scaffold: aString\x0a\x09\x22Scaffold what's relevnt to this scaffolder\x22\x0a\x09\x0a\x09self backendScaffold: aString \x0a\x09\x09do:[ :res | self frontendScaffold: aString ]\x0a\x09\x09onError:[ :res | \x0a\x09\x09\x09self error: res responseText ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["backendScaffold:do:onError:", "frontendScaffold:", "error:", "responseText"]
}),
$globals.MaplessScaffolder.klass);


$core.addClass('ModelScaffolder', $globals.MaplessScaffolder, [], 'Flow');

$core.addMethod(
$core.method({
selector: "command",
protocol: 'accessing',
fn: function (){
var self=this;
return "/model";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "command\x0a\x0a\x09^ '/model'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ModelScaffolder.klass);

$core.addMethod(
$core.method({
selector: "parentClass",
protocol: 'accessing',
fn: function (){
var self=this;
function $MaplessModel(){return $globals.MaplessModel||(typeof MaplessModel=="undefined"?nil:MaplessModel)}
return $MaplessModel();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parentClass\x0a\x0a\x09^ MaplessModel",
referencedClasses: ["MaplessModel"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ModelScaffolder.klass);


$core.addClass('Flow', $globals.Object, [], 'Flow');

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
self._trigger_("started");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.Flow.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09\x0a\x09self trigger: #started",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.Flow.klass);


$core.addClass('Scaffolder', $globals.Object, [], 'Flow');

$globals.Scaffolder.klass.iVarNames = ['packageName'];
$core.addMethod(
$core.method({
selector: "crud:",
protocol: 'actions',
fn: function (aMaplessClassOrName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._crudModel_(aMaplessClassOrName);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crud:",{aMaplessClassOrName:aMaplessClassOrName},$globals.Scaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMaplessClassOrName"],
source: "crud: aMaplessClassOrName\x0a\x0a\x09^ self crudModel: aMaplessClassOrName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["crudModel:"]
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "crudMapless:",
protocol: 'actions',
fn: function (aMaplessClassOrName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._mapless_(aMaplessClassOrName);
$1=$recv(self._crudScaffolder())._scaffold_(aMaplessClassOrName);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crudMapless:",{aMaplessClassOrName:aMaplessClassOrName},$globals.Scaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMaplessClassOrName"],
source: "crudMapless: aMaplessClassOrName\x0a\x0a\x09self mapless: aMaplessClassOrName.\x0a\x0a\x09^ self crudScaffolder scaffold: aMaplessClassOrName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mapless:", "scaffold:", "crudScaffolder"]
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "crudModel:",
protocol: 'actions',
fn: function (aMaplessClassOrName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._model_(aMaplessClassOrName);
$1=$recv(self._crudScaffolder())._scaffold_(aMaplessClassOrName);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crudModel:",{aMaplessClassOrName:aMaplessClassOrName},$globals.Scaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMaplessClassOrName"],
source: "crudModel: aMaplessClassOrName\x0a\x0a\x09self model: aMaplessClassOrName.\x0a\x0a\x09^ self crudScaffolder scaffold: aMaplessClassOrName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "scaffold:", "crudScaffolder"]
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "crudScaffolder",
protocol: 'accessing',
fn: function (){
var self=this;
function $CRUDScaffolder(){return $globals.CRUDScaffolder||(typeof CRUDScaffolder=="undefined"?nil:CRUDScaffolder)}
return $CRUDScaffolder();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "crudScaffolder\x0a\x0a\x09^ CRUDScaffolder",
referencedClasses: ["CRUDScaffolder"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "mapless:",
protocol: 'actions',
fn: function (aMaplessName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._maplessScaffolder())._scaffold_(aMaplessName);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mapless:",{aMaplessName:aMaplessName},$globals.Scaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMaplessName"],
source: "mapless: aMaplessName\x0a\x0a\x09^ self maplessScaffolder scaffold: aMaplessName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scaffold:", "maplessScaffolder"]
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "maplessScaffolder",
protocol: 'accessing',
fn: function (){
var self=this;
function $MaplessScaffolder(){return $globals.MaplessScaffolder||(typeof MaplessScaffolder=="undefined"?nil:MaplessScaffolder)}
return $MaplessScaffolder();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maplessScaffolder\x0a\x0a\x09^ MaplessScaffolder",
referencedClasses: ["MaplessScaffolder"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'actions',
fn: function (aModelName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._modelScaffolder())._scaffold_(aModelName);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{aModelName:aModelName},$globals.Scaffolder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModelName"],
source: "model: aModelName\x0a\x0a\x09^ self modelScaffolder scaffold: aModelName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scaffold:", "modelScaffolder"]
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "modelScaffolder",
protocol: 'accessing',
fn: function (){
var self=this;
function $ModelScaffolder(){return $globals.ModelScaffolder||(typeof ModelScaffolder=="undefined"?nil:ModelScaffolder)}
return $ModelScaffolder();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "modelScaffolder\x0a\x0a\x09^ ModelScaffolder",
referencedClasses: ["ModelScaffolder"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "packageName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@packageName"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "packageName\x0a\x0a\x09^ packageName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "packageName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@packageName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "packageName: aString\x0a\x0a\x09packageName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Scaffolder.klass);

$core.addMethod(
$core.method({
selector: "asRemoteReferenceFor:",
protocol: '*Flow',
fn: function (anObject){
var self=this;
return anObject;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asRemoteReferenceFor: anObject\x0a\x09\x22Answers anObject (copy) or an appropiate reference (can't be copied) for \x0a\x09traveling over the wire and still referring to this receiver\x22\x0a\x0a\x09^ anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Boolean.klass);

$core.addMethod(
$core.method({
selector: "asRemote",
protocol: '*Flow',
fn: function (){
var self=this;
function $Remote(){return $globals.Remote||(typeof Remote=="undefined"?nil:Remote)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Remote())._for_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asRemote",{},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asRemote\x0a\x09\x22Answers a new Remote instance based in the id represented in this string\x22\x0a\x09\x0a\x09^ Remote for: self",
referencedClasses: ["Remote"],
//>>excludeEnd("ide");
messageSends: ["for:"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "asRemoteReferenceFor:",
protocol: '*Flow',
fn: function (anObject){
var self=this;
return anObject;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asRemoteReferenceFor: anObject\x0a\x09\x22Answers anObject (copy) or an appropiate reference (can't be copied) for \x0a\x09traveling over the wire and still referring to this receiver\x22\x0a\x0a\x09^ anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CharacterArray.klass);

$core.addMethod(
$core.method({
selector: "asRemoteReferenceFor:",
protocol: '*Flow',
fn: function (anObject){
var self=this;
return anObject;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asRemoteReferenceFor: anObject\x0a\x09\x22Answers anObject (copy) or an appropiate reference (can't be copied) for \x0a\x09traveling over the wire and still referring to this receiver\x22\x0a\x0a\x09^ anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Date.klass);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: '*Flow',
fn: function (aStream){
var self=this;
var content;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Error.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($recv(self["@messageText"])._notNil())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@messageText"])._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
content=self["@messageText"];
content;
};
$2=self._isSmalltalkError();
if(!$core.assert($2)){
content=self._jsStack();
content;
};
$3=$recv(content)._isNil();
if($core.assert($3)){
return self;
};
$4=$recv("(".__comma($recv(content)._printString())).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream,content:content},$globals.Error)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09| content |\x0a\x09\x0a\x09super printOn: aStream.\x0a\x0a\x09(messageText notNil and:[\x0a\x09messageText notEmpty ]) ifTrue:[\x0a\x09\x09content := messageText ].\x0a\x09\x0a\x09self isSmalltalkError ifFalse:[ content := self jsStack ].\x0a\x09\x0a\x09content isNil ifTrue:[ ^ self ].\x0a\x09\x0a\x09aStream nextPutAll: '(',content printString,')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "ifTrue:", "and:", "notNil", "notEmpty", "ifFalse:", "isSmalltalkError", "jsStack", "isNil", "nextPutAll:", ",", "printString"]
}),
$globals.Error);

$core.addMethod(
$core.method({
selector: "asDictionary",
protocol: '*Flow',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv((function(newDic){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._addObjectVariablesTo_(newDic);
return newDic;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({newDic:newDic},$ctx1,1)});
//>>excludeEnd("ctx");
}))._value_($recv($Dictionary())._new());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asDictionary",{},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asDictionary\x0a\x09\x22Answers this object as a new Dictionary\x22\x0a\x0a\x09^ [ :newDic |\x0a\x09\x09self addObjectVariablesTo: newDic.\x0a\x09\x09newDic ] value: Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["value:", "addObjectVariablesTo:", "new"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "asHashedCollection",
protocol: '*Flow',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv((function(h){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._addObjectVariablesTo_(h);
return h;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({h:h},$ctx1,1)});
//>>excludeEnd("ctx");
}))._value_($globals.HashedCollection._newFromPairs_([]));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asHashedCollection",{},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asHashedCollection\x0a\x09\x22Answers this object as a new HashedCollection\x22\x0a\x0a\x09^ [ :h |\x0a\x09\x09self addObjectVariablesTo: h.\x0a\x09\x09h ] value: #{}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "addObjectVariablesTo:"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "asRemoteReference",
protocol: '*Flow',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._asRemoteReferenceFor_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asRemoteReference",{},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asRemoteReference\x0a\x09\x22Answers the object appropiate for \x0a\x09traveling over the wire and still referring to this receiver\x22\x0a\x09\x0a\x09^ self class asRemoteReferenceFor: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asRemoteReferenceFor:", "class"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "asRemoteReferenceFor:",
protocol: '*Flow',
fn: function (anObject){
var self=this;
function $RR(){return $globals.RR||(typeof RR=="undefined"?nil:RR)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($RR())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asRemoteReferenceFor:",{anObject:anObject},$globals.JSObjectProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asRemoteReferenceFor: anObject\x0a\x09\x22Answers anObject (copy) or an appropiate reference (can't be copied) for \x0a\x09traveling over the wire and still referring to this receiver\x22\x0a\x0a\x09\x22Subclasses differ you can check on them.\x0a\x09The default is not be copied, so...\x22\x0a\x0a\x09^ RR new",
referencedClasses: ["RR"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.JSObjectProxy.klass);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: '*Flow',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MessageNotUnderstood.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$5=$recv(self._receiver())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4="(".__comma($5);
$3=$recv($4).__comma(">>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv($recv(self._message())._selector())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.MessageNotUnderstood)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: '(',self receiver asString, '>>',self message selector asString,')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", ",", "asString", "receiver", "selector", "message"]
}),
$globals.MessageNotUnderstood);

$core.addMethod(
$core.method({
selector: "asRemoteReferenceFor:",
protocol: '*Flow',
fn: function (anObject){
var self=this;
function $RR(){return $globals.RR||(typeof RR=="undefined"?nil:RR)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($RR())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asRemoteReferenceFor:",{anObject:anObject},$globals.Metaclass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asRemoteReferenceFor: anObject\x0a\x09\x22Answers anObject (copy) or an appropiate reference (can't be copied) for \x0a\x09traveling over the wire and still referring to this receiver\x22\x0a\x0a\x09\x22Subclasses differ you can check on them.\x0a\x09The default is not be copied, so...\x22\x0a\x0a\x09^ RR new",
referencedClasses: ["RR"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Metaclass);

$core.addMethod(
$core.method({
selector: "asRemoteReferenceFor:",
protocol: '*Flow',
fn: function (anObject){
var self=this;
return anObject;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asRemoteReferenceFor: anObject\x0a\x09\x22Answers anObject (copy) or an appropiate reference (can't be copied) for \x0a\x09traveling over the wire and still referring to this receiver\x22\x0a\x0a\x09^ anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number.klass);

$core.addMethod(
$core.method({
selector: "asRemote",
protocol: '*Flow',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
"todo";
$1=self._asString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asRemote",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asRemote\x0a\x09\x22Answers this object in a way that is appropriate \x0a\x09for a remote end to do something with it\x22\x0a\x09\x0a\x09#todo. \x22return a proxy so it gets actually useful\x22\x0a\x09^ self asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asString"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asRemoteReference",
protocol: '*Flow',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._asRemoteReferenceFor_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asRemoteReference",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asRemoteReference\x0a\x09\x22Answers the object appropiate for \x0a\x09traveling over the wire while still referring to this receiver\x22\x0a\x09\x0a\x09^ self class asRemoteReferenceFor: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asRemoteReferenceFor:", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "changed",
protocol: '*Flow',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._trigger_("changed");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changed",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changed\x0a\x0a\x09self trigger: #changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "isRemote",
protocol: '*Flow',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRemote\x0a\x09\x22Answers true if this object is remote\x22\x0a\x09\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "promise:",
protocol: '*Flow',
fn: function (onDoneBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(jQuery)._value_(self))._promise())._done_(onDoneBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"promise:",{onDoneBlock:onDoneBlock},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["onDoneBlock"],
source: "promise: onDoneBlock\x0a\x09\x0a\x09^ (jQuery value: self) promise done: onDoneBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["done:", "promise", "value:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asRemoteReferenceFor:",
protocol: '*Flow',
fn: function (anObject){
var self=this;
function $RR(){return $globals.RR||(typeof RR=="undefined"?nil:RR)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($RR())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asRemoteReferenceFor:",{anObject:anObject},$globals.Object.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asRemoteReferenceFor: anObject\x0a\x09\x22Answers anObject (copy) or an appropiate reference (can't be copied) for \x0a\x09traveling over the wire and still referring to this receiver\x22\x0a\x0a\x09\x22Subclasses differ you can check on them.\x0a\x09The default is not be copied, so...\x22\x0a\x0a\x09^ RR new",
referencedClasses: ["RR"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Object.klass);

$core.addMethod(
$core.method({
selector: "isNil",
protocol: '*Flow',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isNil\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "isRemoteReference",
protocol: '*Flow',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRemoteReference\x0a\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "notNil",
protocol: '*Flow',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._isNil())._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notNil",{},$globals.ProtoObject)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notNil\x0a\x09^ self isNil not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isNil"]
}),
$globals.ProtoObject);

$core.addMethod(
$core.method({
selector: "shuffled",
protocol: '*Flow',
fn: function (){
var self=this;
var shaked,source;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
shaked=$recv(self._class())._new();
source=self._copy();
(1)._to_do_(self._size(),(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(shaked)._add_($recv(source)._remove_($recv(source)._atRandom()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=shaked;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shuffled",{shaked:shaked,source:source},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shuffled\x0a\x09\x22Answers a copy of this collection with the same elements but randomly positioned.\x22\x0a\x09\x0a\x09| shaked source | \x0a\x09\x0a\x09shaked := self class new.\x0a\x09source := self copy.\x0a\x09\x0a\x091 to: self size do: [ :i | \x0a\x09\x09shaked add: (source remove: source atRandom) ].\x0a\x09\x09\x0a\x09^ shaked",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "class", "copy", "to:do:", "size", "add:", "remove:", "atRandom"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "asRemoteReferenceFor:",
protocol: '*Flow',
fn: function (anObject){
var self=this;
return anObject;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asRemoteReferenceFor: anObject\x0a\x09\x22Answers anObject (copy) or an appropiate reference (can't be copied) for \x0a\x09traveling over the wire and still referring to this receiver\x22\x0a\x0a\x09^ anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UndefinedObject.klass);

});
