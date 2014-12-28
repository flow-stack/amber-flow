define("amber-flow/Flow-Core", ["amber/boot", "amber_core/Web", "minimapless/MiniMapless", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Flow-Core');
$core.packages["Flow-Core"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('Controller', $globals.Widget, ['controllers', 'model', 'view', 'parent', 'parentElement'], 'Flow-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Controller.comment="## This is an abstraction. \x0a\x0a*Concrete subclasses* are controllers with some degree of specialization. Here we concentrate in the commons and foundatinos for all of them.\x0a\x0aA typical controller might have:\x0a\x0a1. a model\x0a2. some (sub)controllers\x0a3. minimal common behavior";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "controllerAt:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifAbsent_(aKey,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Controller not found: ".__comma($recv(aKey)._asString()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:",{aKey:aKey},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "controllerAt: aKey \x0a\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifAbsent:[ self error: 'Controller not found: ', aKey asString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "controllers", "error:", ",", "asString"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifAbsent_(aKey,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "controllerAt: aKey ifAbsent: aBlock\x0a\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:ifAbsentPut:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifAbsent_(aKey,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._controllerAt_put_(aKey,$recv(aBlock)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:ifAbsentPut:",{aKey:aKey,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "controllerAt: aKey ifAbsentPut: aBlock\x0a\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifAbsent:[ self controllerAt: aKey put: aBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "controllers", "controllerAt:put:", "value"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:ifPresent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifPresent_ifAbsent_(aKey,aBlock,(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:ifPresent:",{aKey:aKey,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "controllerAt: aKey ifPresent: aBlock\x0a\x09\x22Evaluates aBlock if this controller has a controller at aKey.\x0a\x09Silently do nothing otherwise.\x22\x0a\x09\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifPresent: aBlock \x0a\x09\x09ifAbsent: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:ifPresent:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_ifPresent_ifAbsent_(aKey,aBlock,anotherBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:ifPresent:ifAbsent:",{aKey:aKey,aBlock:aBlock,anotherBlock:anotherBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock", "anotherBlock"],
source: "controllerAt: aKey ifPresent: aBlock ifAbsent: anotherBlock\x0a\x09\x22Evaluates aBlock if this controller has a controller at aKey or\x0a\x09evaluates anotherBlock if it's absent.\x22\x0a\x09\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifPresent: aBlock\x0a\x09\x09ifAbsent: anotherBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAt:put:",
protocol: 'accessing',
fn: function (aKey,aController){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllers())._at_put_(aKey,aController);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAt:put:",{aKey:aKey,aController:aController},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aController"],
source: "controllerAt: aKey put: aController\x0a\x0a\x09^ self controllers at: aKey put: aController",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAtView:",
protocol: 'accessing',
fn: function (aView){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._controllerAtView_ifAbsent_(aView,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Controller not found for view: ".__comma($recv(aView)._asString()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAtView:",{aView:aView},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView"],
source: "controllerAtView: aView \x0a\x0a\x09^ self controllerAtView: aView ifAbsent:[ \x0a\x09\x09self error: 'Controller not found for view: ', aView asString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["controllerAtView:ifAbsent:", "error:", ",", "asString"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllerAtView:ifAbsent:",
protocol: 'accessing',
fn: function (aView,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._controllers())._values())._detect_ifNone_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(e)._view()).__eq_eq(aView);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}),aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerAtView:ifAbsent:",{aView:aView,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView", "aBlock"],
source: "controllerAtView: aView ifAbsent: aBlock\x0a\x0a\x09^ self controllers values\x0a\x09\x09detect: [ :e | e view == aView ]\x0a\x09\x09ifNone: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "values", "controllers", "==", "view"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "controllers",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@controllers"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeControllers();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllers",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "controllers\x0a\x09\x0a\x09^ controllers ifNil:[ self initializeControllers ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeControllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "destroy",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destroy",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destroy\x0a\x0a\x09self remove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "hasModel",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@model"])._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasModel",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasModel\x0a\x09\x22Answers true if this controller has a model\x22\x0a\x09\x0a\x09^ model notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "hasView",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@view"])._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasView",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasView\x0a\x09\x22Answers true if this controller has a view\x22\x0a\x09\x0a\x09^ view notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "hide",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._view();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["view"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return self;
} else {
$1;
};
$recv(self._view())._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hide",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hide \x0a\x0a\x09self view ifNil: [ ^ self ].\x0a\x09\x0a\x09self view hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "view", "hide"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "ifAbsentAt:put:",
protocol: 'actions',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._controllerAt_ifAbsentPut_(aKey,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifAbsentAt:put:",{aKey:aKey,aBlock:aBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "ifAbsentAt: aKey put: aBlock\x0a\x09\x22Answers the controller already present at aKey or,\x0a\x09if absent, puts the one expected to be created during aBlock and returns it.\x22\x0a\x09\x0a\x09^ self controllerAt: aKey ifAbsentPut: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["controllerAt:ifAbsentPut:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "ifAbsentAt:put:andDo:",
protocol: 'actions',
fn: function (aKey,aBlock,aPostAddingBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._controllerAt_ifAbsent_(aKey,(function(){
var newController;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newController=$recv(aBlock)._value();
newController;
self._controllerAt_put_(aKey,newController);
$recv(aPostAddingBlock)._value_(newController);
return newController;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({newController:newController},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifAbsentAt:put:andDo:",{aKey:aKey,aBlock:aBlock,aPostAddingBlock:aPostAddingBlock},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock", "aPostAddingBlock"],
source: "ifAbsentAt: aKey put: aBlock andDo: aPostAddingBlock\x0a\x09\x22Answers the controller already present at aKey or,\x0a\x09if absent, puts the one expected to be created during aBlock,\x0a\x09evaluates aPostAddingBlock using it and finally returns it\x22\x0a\x09\x0a\x09^ self \x0a\x09\x09controllerAt: aKey \x0a\x09\x09ifAbsent: [ | newController |\x0a\x09\x09\x09newController := aBlock value.\x0a\x09\x09\x09self controllerAt: aKey put: newController.\x0a\x09\x09\x09aPostAddingBlock value: newController.\x0a\x09\x09\x09newController ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["controllerAt:ifAbsent:", "value", "controllerAt:put:", "value:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "initializeControllers",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@controllers"]=$recv($Dictionary())._new();
$1=self["@controllers"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeControllers",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeControllers\x0a\x09\x0a\x09^ controllers := Dictionary new",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09\x0a\x09^ model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("onBeforeModel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
self["@model"]=aModel;
self._trigger_("onAfterModel");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x0a\x09self trigger: #onBeforeModel.\x0a\x09model := aModel.\x0a\x09self trigger: #onAfterModel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "parent",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parent"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parent\x0a\x09\x22Answers the parent controller of this controller.\x22\x0a\x0a\x09^ parent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "parent:",
protocol: 'accessing',
fn: function (aParentControllerOrNil){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("onBeforeParent");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
self["@parent"]=aParentControllerOrNil;
self._trigger_("onAfterParent");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parent:",{aParentControllerOrNil:aParentControllerOrNil},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aParentControllerOrNil"],
source: "parent: aParentControllerOrNil\x0a\x0a\x09self trigger: #onBeforeParent.\x0a\x09parent := aParentControllerOrNil.\x0a\x09self trigger: #onAfterParent.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "parentElement",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parentElement"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parentElement\x0a\x0a\x09^ parentElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "parentElement:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("onBeforeParentElement");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
self["@parentElement"]=aHtmlElement;
self._trigger_("onAfterParentElement");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parentElement:",{aHtmlElement:aHtmlElement},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHtmlElement"],
source: "parentElement: aHtmlElement\x0a\x0a\x09self trigger: #onBeforeParentElement.\x0a\x09parentElement := aHtmlElement.\x0a\x09self trigger: #onAfterParentElement.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._remove();
$1=self._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x0a\x09self remove; render",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "render"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("onBeforeRemove");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
self._silentRemove();
self._trigger_("onAfterRemove");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remove\x0a\x09\x0a\x09self trigger: #onBeforeRemove.\x0a\x0a\x09self silentRemove.\x0a\x09\x0a\x09self trigger: #onAfterRemove.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:", "silentRemove"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "removeControllerAt:",
protocol: 'actions',
fn: function (aKey){
var self=this;
var controller;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
controller=self._controllerAt_ifAbsent_(aKey,(function(){
return nil;

}));
$1=controller;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(controller)._remove();
};
$recv(self._controllers())._removeKey_ifAbsent_(aKey,(function(){
return nil;

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeControllerAt:",{aKey:aKey,controller:controller},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "removeControllerAt: aKey \x0a\x0a\x09| controller |\x0a\x09\x0a\x09controller := self controllerAt: aKey ifAbsent:[ nil ].\x0a\x09\x0a\x09controller ifNotNil:[\x0a\x09\x09controller remove ].\x0a\x09\x09\x0a\x09self controllers removeKey: aKey ifAbsent: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["controllerAt:ifAbsent:", "ifNotNil:", "remove", "removeKey:ifAbsent:", "controllers"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "render",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("onBeforeRender");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
self._renderOn_($recv($HTMLCanvas())._onJQuery_(self._parentElement()));
self._trigger_("onAfterRender");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"render",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "render\x0a\x09\x0a\x09self trigger: #onBeforeRender.\x0a\x09self renderOn: (HTMLCanvas onJQuery: self parentElement).\x0a\x09self trigger: #onAfterRender.",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["trigger:", "renderOn:", "onJQuery:", "parentElement"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'actions',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._silentRenderOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09self silentRenderOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["silentRenderOn:"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._hasView();
if(!$core.assert($1)){
$2=self._render();
return $2;
};
$recv(self._view())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x0a\x09self hasView ifFalse: [ ^ self render ].\x0a\x09\x0a\x09self view show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "hasView", "render", "show", "view"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentRefresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._silentRemove();
$1=self._silentRender();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRefresh",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silentRefresh\x0a\x0a\x09self silentRemove; silentRender",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["silentRemove", "silentRender"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentRemove",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@view"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var exView;
exView=self["@view"];
exView;
$recv(exView)._off();
self["@view"]=nil;
self["@view"];
$recv(exView)._remove();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRemove",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silentRemove\x0a\x09\x0a\x09view ifNotNil:[ | exView |\x0a\x09\x09exView := view.\x0a\x09\x09exView off.\x0a\x09\x09view := nil.\x0a\x09\x09exView remove ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "off", "remove"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentRender",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._silentRenderOn_($recv($HTMLCanvas())._onJQuery_(self._parentElement()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRender",{},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silentRender\x0a\x09\x0a\x09self silentRenderOn: (HTMLCanvas onJQuery: self parentElement).",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["silentRenderOn:", "onJQuery:", "parentElement"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentRenderOn:",
protocol: 'actions',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._silentView_($recv($recv(html)._h1_($recv(self._class())._name()))._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRenderOn:",{html:html},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "silentRenderOn: html\x0a\x09\x22This is the actual render implementation in a silly default only useful to development \x0a\x09It provides quick feedback ans sets a view for easy visual identification.\x0a\x09Subclasses implement the interesting real renders.\x0a\x09TemplateController or BindingController are good examples of this.\x22\x0a\x09\x0a\x09self silentView: (html h1: self class name) asJQuery.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["silentView:", "asJQuery", "h1:", "name", "class"]
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "silentView:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
self["@view"]=aHtmlElement;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHtmlElement"],
source: " silentView: aHtmlElement\x0a\x09\x22Sets the instance of the element considered the view of this controller.\x22\x0a\x09view := aHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "view",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@view"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "view\x0a\x09\x22Answers the DOM element who is the root of this controller's view\x22\x0a\x09^ view",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller);

$core.addMethod(
$core.method({
selector: "view:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("onBeforeView");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
self._silentView_(aHtmlElement);
self._trigger_("onAfterView");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"view:",{aHtmlElement:aHtmlElement},$globals.Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHtmlElement"],
source: "view: aHtmlElement\x0a\x0a\x09self trigger: #onBeforeView.\x0a\x09self silentView: aHtmlElement.\x0a\x09self trigger: #onAfterView.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:", "silentView:"]
}),
$globals.Controller);


$core.addMethod(
$core.method({
selector: "defaultHtmlElement",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1="#content"._asJQuery();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultHtmlElement",{},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultHtmlElement\x0a\x0a\x09^ '#content' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "for:",
protocol: 'actions',
fn: function (aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._for_on_appendingTo_(aModel,nil,self._defaultHtmlElement());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aModel:aModel},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "for: aModel \x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09with no parent and meant to be appended to the default html element,\x0a\x09expected to be <div id=#content></div>.\x22\x0a\x09\x0a\x09^ self for: aModel on: nil appendingTo: self defaultHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "defaultHtmlElement"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "for:on:",
protocol: 'actions',
fn: function (aModel,aParentControllerOrNil){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._for_on_appendingTo_(aModel,aParentControllerOrNil,self._defaultHtmlElement());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:on:",{aModel:aModel,aParentControllerOrNil:aParentControllerOrNil},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aParentControllerOrNil"],
source: "for: aModel on: aParentControllerOrNil\x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09child of aParentControllerOrNil and meant to be appended to \x0a\x09the default html element, expected to be <div id=#content></div>.\x22\x0a\x09\x0a\x09^ self for: aModel on: aParentControllerOrNil appendingTo: self defaultHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "defaultHtmlElement"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "for:on:appendingTo:",
protocol: 'actions',
fn: function (aModel,aParentControllerOrNil,aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._model_(aModel);
$recv($2)._parent_(aParentControllerOrNil);
$recv($2)._parentElement_(aHtmlElement);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:on:appendingTo:",{aModel:aModel,aParentControllerOrNil:aParentControllerOrNil,aHtmlElement:aHtmlElement},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aParentControllerOrNil", "aHtmlElement"],
source: "for: aModel on: aParentControllerOrNil appendingTo: aHtmlElement\x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09child of aParentControllerOrNil and meant to be appended to aHtmlElement.\x22\x0a\x0a\x09^ self new\x0a\x09\x09model: aModel;\x0a\x09\x09parent: aParentControllerOrNil;\x0a\x09\x09parentElement: aHtmlElement;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "new", "parent:", "parentElement:", "yourself"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "for:on:view:",
protocol: 'actions',
fn: function (aModel,aParentControllerOrNil,aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._model_(aModel);
$recv($2)._parent_(aParentControllerOrNil);
$recv($2)._view_(aHtmlElement);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:on:view:",{aModel:aModel,aParentControllerOrNil:aParentControllerOrNil,aHtmlElement:aHtmlElement},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aParentControllerOrNil", "aHtmlElement"],
source: "for: aModel on: aParentControllerOrNil view: aHtmlElement\x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09child of aParentControllerOrNil and with the already created aHtmlElement as its view.\x22\x0a\x0a\x09^ self new\x0a\x09\x09model: aModel;\x0a\x09\x09parent: aParentControllerOrNil;\x0a\x09\x09view: aHtmlElement;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["model:", "new", "parent:", "view:", "yourself"]
}),
$globals.Controller.klass);

$core.addMethod(
$core.method({
selector: "on:appendingTo:",
protocol: 'actions',
fn: function (aParentControllerOrNil,aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._parent_(aParentControllerOrNil);
$recv($2)._parentElement_(aHtmlElement);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:appendingTo:",{aParentControllerOrNil:aParentControllerOrNil,aHtmlElement:aHtmlElement},$globals.Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aParentControllerOrNil", "aHtmlElement"],
source: "on: aParentControllerOrNil appendingTo: aHtmlElement\x0a\x09\x22Answers a new instance of this controller, child of aParentControllerOrNil \x0a\x09and meant to be appended to aHtmlElement.\x0a\x09Using this contructor will make the model to stay nil.\x22\x0a\x0a\x09^ self new\x0a\x09\x09parent: aParentControllerOrNil;\x0a\x09\x09parentElement: aHtmlElement;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent:", "new", "parentElement:", "yourself"]
}),
$globals.Controller.klass);


$core.addClass('ListController', $globals.Controller, ['getItemsBlock', 'itemControllerClass', 'newItemControllerBlock', 'listView'], 'Flow-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ListController.comment="## ListController\x0a\x0aListControllers know how to deal with lists of things. It needs to know how you want to create subcontrollers for its items and it needs to know how to get those items. It will also allow you to customize the subcontrollers with a callback when they are instantiated.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "getItems",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._getItemsBlock())._value_(self["@model"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getItems",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getItems\x0a\x09\x22Answers the items using the custom getItemsBlock on its model\x22\x0a\x09\x0a\x09^ self getItemsBlock value: model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "getItemsBlock"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "getItemsBlock",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@getItemsBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@getItemsBlock"]=(function(listModel){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(listModel)._list();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({listModel:listModel},$ctx1,2)});
//>>excludeEnd("ctx");
});
$1=self["@getItemsBlock"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getItemsBlock",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getItemsBlock\x0a\x0a\x09^ getItemsBlock ifNil: [ getItemsBlock := [ :listModel | listModel list ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "list"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "getItemsBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@getItemsBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "getItemsBlock: aBlock\x0a\x0a\x09getItemsBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ListController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterModel",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._observeList();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self when: #onAfterModel do: [ self observeList ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "observeList"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "itemControllerClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@itemControllerClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "itemControllerClass\x0a\x0a\x09^ itemControllerClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "itemControllerClass:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@itemControllerClass"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "itemControllerClass: aBlock\x0a\x0a\x09itemControllerClass := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "listView",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@listView"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "listView\x0a\x09\x22Answers the html element from where the item controllers are going to be appended.\x0a\x09Usually a <ul>\x22\x0a\x09^ listView",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "listView:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("onBeforeListView");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
self["@listView"]=aHtmlElement;
self._trigger_("onAfterListView");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"listView:",{aHtmlElement:aHtmlElement},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHtmlElement"],
source: "listView: aHtmlElement\x0a\x0a\x09self trigger: #onBeforeListView.\x0a\x09listView := aHtmlElement.\x0a\x09self trigger: #onAfterListView.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "newItemControllerBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@newItemControllerBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newItemControllerBlock\x0a\x0a\x09^ newItemControllerBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "newItemControllerBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@newItemControllerBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "newItemControllerBlock: aBlock\x0a\x0a\x09newItemControllerBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "newItemControllerFor:",
protocol: 'actions',
fn: function (anItem){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@itemControllerClass"])._isNil();
if($core.assert($2)){
$1=$recv(self._newItemControllerBlock())._value_(anItem);
} else {
$1=$recv(self["@itemControllerClass"])._for_on_appendingTo_(anItem,self,self._view());
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newItemControllerFor:",{anItem:anItem},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anItem"],
source: "newItemControllerFor: anItem\x0a\x0a\x09^ itemControllerClass isNil\x0a\x09\x09ifFalse:[ itemControllerClass \x0a\x09\x09\x09\x09\x09for: anItem \x0a\x09\x09\x09\x09\x09on: self \x0a\x09\x09\x09\x09\x09appendingTo: self view ] \x0a\x09\x09ifTrue:[ self newItemControllerBlock value: anItem ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "isNil", "for:on:appendingTo:", "view", "value:", "newItemControllerBlock"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "observeList",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._model())._when_do_("changed",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._refresh();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeList",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeList\x0a\x09\x22Observe the model for changes and react to them with a refresh.\x22\x0a\x0a\x09self model when: #changed do: [ self refresh ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:do:", "model", "refresh"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "parentElement:",
protocol: 'accessing',
fn: function (anHtmlElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ListController.superclass.fn.prototype._parentElement_.apply($recv(self), [anHtmlElement]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._view_(anHtmlElement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parentElement:",{anHtmlElement:anHtmlElement},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anHtmlElement"],
source: "parentElement: anHtmlElement\x0a\x09\x22Sets the parent elment for the list.\x0a\x09It can be anything but, in the case of lists, the parent element usually is a <ul>\x0a\x09The 'normal' thing is to treat it like an <ul> full of <li> children.\x22\x0a\x09super parentElement: anHtmlElement.\x0a\x09self view: anHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parentElement:", "view:"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
var items;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$receiver;
$1=$recv(self._controllers())._keys();
$2=self._getItems();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItems"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_do_($2,(function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._getItems();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["getItems"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each).__eq_eq(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($3)){
return self._removeControllerAt_(e);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._getItems())._do_((function(e){
var added;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._controllerAt_ifAbsentPut_(e,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
added=self._newItemControllerFor_(e);
return added;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
$5=added;
if(($receiver = $5) == null || $receiver.isNil){
return $5;
} else {
return $recv(added)._render();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,added:added},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{items:items},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09\x22Makes sure all the items in the model have its own controller.\x0a\x09Nothing less and nothing more. So it will add lazily \x0a\x09the missing controllers and remove those who's model isn't present.\x22\x0a\x09\x0a\x09| items |\x0a\x09\x0a\x09\x22Remove absences\x22\x0a\x09self controllers keys \x0a\x09\x09with: self getItems \x0a\x09\x09do:[ :e | (self getItems anySatisfy:[ :each | each == e]) ifFalse:[\x0a\x09\x09\x09\x09\x09self removeControllerAt: e ] ].\x0a\x09\x0a\x09\x22Add novelties\x22\x0a\x09self getItems do:[ :e | | added |\x0a\x09\x09self controllerAt: e ifAbsentPut:[ \x0a\x09\x09\x09added := self newItemControllerFor: e ].\x0a\x09\x09added ifNotNil:[ \x0a\x09\x09\x09added render ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:do:", "keys", "controllers", "getItems", "ifFalse:", "anySatisfy:", "==", "removeControllerAt:", "do:", "controllerAt:ifAbsentPut:", "newItemControllerFor:", "ifNotNil:", "render"]
}),
$globals.ListController);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._refresh();
$recv(self._view())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.ListController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x0a\x09self refresh.\x0a\x09\x0a\x09self view show.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh", "show", "view"]
}),
$globals.ListController);



$core.addClass('RouteableController', $globals.Controller, [], 'Flow-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RouteableController.comment="## This is an abstraction. \x0a\x0a*Concrete subclasses know* if they are valid for a given URI so the app can be routed to them.\x0a\x0aA typical web app might have:\x0a1. home\x0a2. sign up\x0a3. sign in\x0a4. many other app-specific controllers";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.RouteableController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._parentElement_("#content"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.RouteableController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09\x22The convention for routeable controllers is \x0a\x09to have only one element with id='content' in index.html \x0a\x09and all the rest of the app goes from that controller\x22\x0a\x09self parentElement: '#content' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "parentElement:", "asJQuery"]
}),
$globals.RouteableController);


$core.addMethod(
$core.method({
selector: "controllerFor:",
protocol: 'accessing',
fn: function (anURI){
var self=this;
function $NotFoundController(){return $globals.NotFoundController||(typeof NotFoundController=="undefined"?nil:NotFoundController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._allSubclasses())._detect_ifNone_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isValidFor_(anURI);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
return $NotFoundController();

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"controllerFor:",{anURI:anURI},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "controllerFor: anURI\x0a\x09\x22Answers the subclass that is a good fit to route anURI.\x22\x0a\x09\x0a\x09^ self allSubclasses\x0a\x09\x09detect:[ :each | each isValidFor: anURI ]\x0a\x09\x09ifNone:[ NotFoundController ]",
referencedClasses: ["NotFoundController"],
//>>excludeEnd("ide");
messageSends: ["detect:ifNone:", "allSubclasses", "isValidFor:"]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "forURI:",
protocol: 'actions',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._for_on_appendingTo_(self._modelFor_(anURI),nil,self._defaultHtmlElement());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forURI:",{anURI:anURI},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "forURI: anURI\x0a\x0a\x09^ self \x0a\x09\x09for: (self modelFor: anURI) \x0a\x09\x09on: nil \x0a\x09\x09appendingTo: self defaultHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "modelFor:", "defaultHtmlElement"]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $RouteableController(){return $globals.RouteableController||(typeof RouteableController=="undefined"?nil:RouteableController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__eq($RouteableController());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = RouteableController",
referencedClasses: ["RouteableController"],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09\x22the default policy is reject\x22\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "keyword",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$6,$5,$2,$1;
$4=self._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._reversed();
$6="Controller"._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__plus((1));
$2=$recv($3)._copyFrom_to_($5,$recv(self._name())._size());
$1=$recv($2)._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["reversed"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyword",{},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyword\x0a\x09\x22Answers the name of the class in lowercase without \x0a\x09the 'Controller' sufix so it can, for example, be used for friendly URI.\x0a\x09Subclasses are expected to follow the naming convention *Controller like\x0a\x09ThisNameController, ThatOtherNameController, AnyNameController, etc\x22\x0a\x0a\x09^ (self name reversed copyFrom: 'Controller' size + 1 to: self name size) reversed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reversed", "copyFrom:to:", "name", "+", "size"]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "modelFor:",
protocol: 'actions',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._defaultModel();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modelFor:",{anURI:anURI},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "modelFor: anURI\x0a\x09\x22Answers the model that corresponds to anURI.\x22\x0a\x0a\x09\x22The default is just to return the default model\x22\x0a\x09^ self defaultModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["defaultModel"]
}),
$globals.RouteableController.klass);

$core.addMethod(
$core.method({
selector: "routeFor:",
protocol: 'actions',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._controllerFor_(anURI))._forURI_(anURI);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"routeFor:",{anURI:anURI},$globals.RouteableController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "routeFor: anURI\x0a\x09\x22Answers a new controller suited to anURI.\x22\x0a\x09\x0a\x09^ (self controllerFor: anURI) forURI: anURI",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["forURI:", "controllerFor:"]
}),
$globals.RouteableController.klass);


$core.addClass('NotFoundController', $globals.RouteableController, [], 'Flow-Core');


$core.addClass('Model', $globals.MaplessModel, [], 'Flow-Core');


$core.addClass('ListModel', $globals.Model, [], 'Flow-Core');
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._list())._add_(anObject);
self._changed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x0a\x09self list add: anObject.\x0a\x09\x0a\x09self changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "list", "changed"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "first",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._first();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "first\x0a\x0a\x09^ self list first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["first", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "includes:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._includes_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"includes:",{anObject:anObject},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "includes: anObject\x0a\x0a\x09^ self list includes: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "isEmpty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._isEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEmpty",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEmpty\x0a\x0a\x09^ self list isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isEmpty", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "last",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._last();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"last",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x0a\x09^ self list last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "list:",
protocol: 'accessing',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ListModel.superclass.fn.prototype._list_.apply($recv(self), [aCollection]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._changed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"list:",{aCollection:aCollection},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "list: aCollection\x0a\x0a\x09super list: aCollection.\x0a\x09\x0a\x09self changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["list:", "changed"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "notEmpty",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notEmpty",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notEmpty\x0a\x0a\x09^ self list notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "list"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._list())._remove_(anObject);
self._changed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "remove: anObject\x0a\x0a\x09self list remove: anObject.\x0a\x09\x0a\x09self changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "list", "changed"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "remove:ifAbsent:",
protocol: 'actions',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._list())._remove_ifAbsent_(anObject,aBlock);
self._changed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x0a\x09self list remove: anObject ifAbsent: aBlock.\x0a\x09\x0a\x09self changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "list", "changed"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "removeFirst",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._remove_(self._first());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeFirst",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeFirst\x0a\x0a\x09self remove: self first",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "first"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "removeLast",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._remove_(self._last());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeLast",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeLast\x0a\x0a\x09self remove: self last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "last"]
}),
$globals.ListModel);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._list())._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x0a\x09^ self list size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "list"]
}),
$globals.ListModel);



$core.addClass('User', $globals.Model, [], 'Flow-Core');


$core.addClass('Router', $globals.Object, [], 'Flow-Core');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Router.comment="This router observes changes in the URI and reacts accordingly.\x0a\x0aThe strategy is to ignore what should be rote where in advance by collaborating intensively with controllers that understands #isValidFor: \x0aThat way this router will flexibly route thigs with a pontentially complex URI";
//>>excludeEnd("ide");

$globals.Router.klass.iVarNames = ['active'];
$core.addMethod(
$core.method({
selector: "active",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@active"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "active\x0a\x0a\x09^ active",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "goBack",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(window)._history())._go_((-1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"goBack",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "goBack\x0a\x09\x22Makes the browser go back one page in its navigation history.\x0a\x09Same effect as user pressing back button\x22\x0a\x0a\x09window history go: -1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["go:", "history"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "observeHash",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(window)._onhashchange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onHashChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeHash",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeHash\x0a\x0a\x09window onhashchange:[ self onHashChanged ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onhashchange:", "onHashChanged"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "onHashChanged",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@active"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@active"])._destroy();
};
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onHashChanged",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onHashChanged\x0a\x09\x0a\x09active ifNotNil:[ active destroy ].\x09\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "destroy", "refresh"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "parameterAt:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._parameterAt_in_(aKey,$recv($recv(window)._location())._href());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parameterAt:",{aKey:aKey},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "parameterAt: aKey\x0a\x09\x22Answers the value found in the parameter aKey found in the current URL.\x0a\x09Returns nil if there is no parameter at aKey.\x22\x0a\x09\x0a\x09^  self parameterAt: aKey in: window location href",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parameterAt:in:", "href", "location"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "parameterAt:in:",
protocol: 'accessing',
fn: function (aKey,anURL){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var re = new RegExp('.*[?&]' + aKey + '=([^&]+)(&|$)');
    var match = anURL.match(re);
    return(match ? decodeURIComponent(match[1]) : nil);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parameterAt:in:",{aKey:aKey,anURL:anURL},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "anURL"],
source: "parameterAt: aKey in: anURL\x0a\x09\x22Answers the value found in the parameter aKey found in anURL.\x0a\x09Returns nil if there is no parameter at aKey.\x22\x0a\x0a\x09<var re = new RegExp('.*[?&]' + aKey + '=([^&]+)(&|$)');\x0a    var match = anURL.match(re);\x0a    return(match ? decodeURIComponent(match[1]) : nil);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
function $RouteableController(){return $globals.RouteableController||(typeof RouteableController=="undefined"?nil:RouteableController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
self._trigger_("beforeRouting");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
$1=self["@active"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@active"])._remove();
};
self["@active"]=$recv($RouteableController())._routeFor_(self._route());
$recv(self["@active"])._refresh();
self._trigger_("afterRouting");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x09\x0a\x09self trigger: #beforeRouting.\x0a\x09\x0a\x09active ifNotNil:[ active remove ].\x0a\x09active := RouteableController routeFor: self route.\x0a\x0a\x09active refresh.\x0a\x09\x0a\x09self trigger: #afterRouting.",
referencedClasses: ["RouteableController"],
//>>excludeEnd("ide");
messageSends: ["trigger:", "ifNotNil:", "remove", "routeFor:", "route", "refresh"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "route",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._uri())._replace_with_("^#/","");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"route",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "route\x0a\x09\x22Answers the current route.\x22\x0a\x09\x0a\x09^ self uri replace: '^#/' with: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "uri"]
}),
$globals.Router.klass);

$core.addMethod(
$core.method({
selector: "uri",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(window)._location())._hash();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uri",{},$globals.Router.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uri\x0a\x0a\x09^ window location hash",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hash", "location"]
}),
$globals.Router.klass);


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


});
