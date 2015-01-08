define("amber-flow/Flow-Scaffolding", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Flow-Scaffolding');
$core.packages["Flow-Scaffolding"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('AbsrtactScaffolder', $globals.Object, [], 'Flow-Scaffolding');

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


$core.addClass('CRUDScaffolder', $globals.AbsrtactScaffolder, [], 'Flow-Scaffolding');

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


$core.addClass('MaplessScaffolder', $globals.AbsrtactScaffolder, [], 'Flow-Scaffolding');

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


$core.addClass('ModelScaffolder', $globals.MaplessScaffolder, [], 'Flow-Scaffolding');

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


$core.addClass('Scaffolder', $globals.Object, [], 'Flow-Scaffolding');

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

});
