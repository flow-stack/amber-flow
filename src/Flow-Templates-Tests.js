define("amber-flow/Flow-Templates-Tests", ["amber/boot", "amber-flow/Flow-Templates", "amber-flow/Flow-Binding"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Flow-Templates-Tests');
$core.packages["Flow-Templates-Tests"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('HelloWorldController', $globals.TemplateController, [], 'Flow-Templates-Tests');

$core.addMethod(
$core.method({
selector: "viewPath",
protocol: 'accessing',
fn: function (){
var self=this;
return "text!views/demo/";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewPath\x0a\x09\x22Returns the path where the template of the view should be found\x22\x0a\x09\x0a\x09^ 'text!views/demo/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.HelloWorldController.klass);


$core.addClass('StuffController', $globals.BindingController, [], 'Flow-Templates-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StuffController.comment="StuffController is a Controller composed by ThingControllers that are created based in the model's content.\x0a\x0aStuff has a collection of Thing(s)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addThing",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._model())._things())._add_(self._newThing());
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addThing",{},$globals.StuffController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addThing\x0a\x09\x0a\x09self model things add: self newThing.\x0a\x09self refresh.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "things", "model", "newThing", "refresh"]
}),
$globals.StuffController);

$core.addMethod(
$core.method({
selector: "inspiration",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["so", "many", "cool", "things", "here", "wow", "great", "sweet", "groovy"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspiration\x0a\x09\x22Answers a collection to inspire a name for something.\x22\x0a\x09\x0a\x09^ #(\x0a\x09so \x0a\x09many \x0a\x09cool \x0a\x09things \x0a\x09here \x0a\x09wow \x0a\x09great \x0a \x09sweet \x0a\x09groovy \x0a\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StuffController);

$core.addMethod(
$core.method({
selector: "intialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.StuffController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onStuffChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onStuffChanged"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:do:"]=1;
//>>excludeEnd("ctx");
self._when_do_("onAfterModel",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["model"]=1;
//>>excludeEnd("ctx");
$recv($1)._when_do_("changed",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._onStuffChanged();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onStuffChanged"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$2=self._hasView();
if($core.assert($2)){
self._onStuffChanged();
};
$3=self._model();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["model"]=2;
//>>excludeEnd("ctx");
$recv($3)._name_("Hey... this stuff is new!");
$4=$recv(self._model())._things();
$5=$4;
$6=self._newThing();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["newThing"]=1;
//>>excludeEnd("ctx");
$recv($5)._add_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$7=$recv($4)._add_(self._newThing());
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:do:"]=2;
//>>excludeEnd("ctx");
$8=self._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"intialize",{},$globals.StuffController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "intialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView do: [ self onStuffChanged ];\x0a\x09\x09when: #onAfterModel do: [\x0a\x09\x09\x09self model when: #changed do:[ self onStuffChanged ].\x0a\x09\x09\x09self hasView ifTrue:[\x0a\x09\x09\x09\x09self onStuffChanged ].\x0a\x09\x09\x09\x22Customize the model\x22\x0a\x09\x09\x09self model name: 'Hey... this stuff is new!'.\x0a\x09\x09\x09\x22Silently add something so by default it isn't empty.\x22\x0a\x09\x09\x09self model things add: self newThing; add: self newThing];\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "onStuffChanged", "model", "ifTrue:", "hasView", "name:", "add:", "things", "newThing", "yourself"]
}),
$globals.StuffController);

$core.addMethod(
$core.method({
selector: "newThing",
protocol: 'actions',
fn: function (){
var self=this;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Thing())._new();
$recv($2)._name_($recv(self._inspiration())._atRandom());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newThing",{},$globals.StuffController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newThing\x0a\x0a\x09^ Thing new\x0a\x09\x09name: self inspiration atRandom;\x0a\x09\x09yourself",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "atRandom", "inspiration", "yourself"]
}),
$globals.StuffController);

$core.addMethod(
$core.method({
selector: "onStuffChanged",
protocol: 'reactions',
fn: function (){
var self=this;
function $ListController(){return $globals.ListController||(typeof ListController=="undefined"?nil:ListController)}
function $ThingController(){return $globals.ThingController||(typeof ThingController=="undefined"?nil:ThingController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._ifAbsentAt_put_("things",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($ListController())._for_on_appendingTo_(self["@model"],self,".things"._asJQuery());
$recv($1)._getItemsBlock_((function(m){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(m)._things();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({m:m},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$recv($1)._itemControllerClass_($ThingController());
$2=$recv($1)._yourself();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onStuffChanged",{},$globals.StuffController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onStuffChanged\x0a\x09\x09\x0a\x09self ifAbsentAt: 'things' \x0a\x09\x09put: [\x0a\x09\x09\x09\x22Lazy creation of the list controller for the thumbnails\x22\x0a\x09\x09\x09(ListController \x0a\x09\x09\x09\x09for: model \x0a\x09\x09\x09\x09on: self \x0a\x09\x09\x09\x09appendingTo: '.things' asJQuery)\x0a\x09\x09\x09\x09\x09getItemsBlock: [:m| m things ];\x0a\x09\x09\x09\x09\x09itemControllerClass: ThingController;\x0a\x09\x09\x09\x09\x09yourself].\x0a\x09self refresh",
referencedClasses: ["ListController", "ThingController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "getItemsBlock:", "for:on:appendingTo:", "asJQuery", "things", "itemControllerClass:", "yourself", "refresh"]
}),
$globals.StuffController);

$core.addMethod(
$core.method({
selector: "refresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._controllerAt_("things"))._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"refresh",{},$globals.StuffController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "refresh\x0a\x0a\x09(self controllerAt: 'things') refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["refresh", "controllerAt:"]
}),
$globals.StuffController);

$core.addMethod(
$core.method({
selector: "removeThing",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._model())._things())._removeLast();
self._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeThing",{},$globals.StuffController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeThing\x0a\x09\x0a\x09self model things removeLast.\x0a\x09self refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeLast", "things", "model", "refresh"]
}),
$globals.StuffController);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $Stuff(){return $globals.Stuff||(typeof Stuff=="undefined"?nil:Stuff)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Stuff())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.StuffController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ Stuff new",
referencedClasses: ["Stuff"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.StuffController.klass);

$core.addMethod(
$core.method({
selector: "viewPath",
protocol: 'accessing',
fn: function (){
var self=this;
return "text!views/demo/";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewPath\x0a\x09\x22Returns the path where the template of the view should be found\x22\x0a\x09\x0a\x09^ 'text!views/demo/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StuffController.klass);


$core.addClass('StuffUsingEachController', $globals.BindingController, [], 'Flow-Templates-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.StuffUsingEachController.comment="StuffController is a Controller composed by ThingControllers that are created based in the model's content.\x0a\x0aStuff has a collection of Thing(s)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addThing",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._model())._things())._add_($recv(self._class())._newThing());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addThing",{},$globals.StuffUsingEachController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addThing\x0a\x09\x0a\x09self model things add: self class newThing",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "things", "model", "newThing", "class"]
}),
$globals.StuffUsingEachController);

$core.addMethod(
$core.method({
selector: "newThing",
protocol: 'actions',
fn: function (){
var self=this;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Thing())._new();
$recv($2)._name_($recv(self._inspiration())._atRandom());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newThing",{},$globals.StuffUsingEachController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newThing\x0a\x0a\x09^ Thing new\x0a\x09\x09name: self inspiration atRandom;\x0a\x09\x09yourself",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "atRandom", "inspiration", "yourself"]
}),
$globals.StuffUsingEachController);

$core.addMethod(
$core.method({
selector: "removeThing",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._model())._things())._removeLast();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeThing",{},$globals.StuffUsingEachController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeThing\x0a\x09\x0a\x09self model things removeLast",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeLast", "things", "model"]
}),
$globals.StuffUsingEachController);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._newStuff();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.StuffUsingEachController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ self newStuff",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newStuff"]
}),
$globals.StuffUsingEachController.klass);

$core.addMethod(
$core.method({
selector: "inspiration",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["so", "many", "cool", "things", "here", "wow", "great", "sweet", "groovy"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inspiration\x0a\x09\x22Answers a collection to inspire a name for something.\x22\x0a\x09\x0a\x09^ #(\x0a\x09so \x0a\x09many \x0a\x09cool \x0a\x09things \x0a\x09here \x0a\x09wow \x0a\x09great \x0a \x09sweet \x0a\x09groovy \x0a\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StuffUsingEachController.klass);

$core.addMethod(
$core.method({
selector: "newStuff",
protocol: 'actions',
fn: function (){
var self=this;
var stuff;
function $Stuff(){return $globals.Stuff||(typeof Stuff=="undefined"?nil:Stuff)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
$1=$recv($Stuff())._new();
$recv($1)._name_("Hey... this stuff is new!");
$2=$recv($1)._yourself();
stuff=$2;
$3=$recv(stuff)._things();
$4=$3;
$5=self._newThing();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newThing"]=1;
//>>excludeEnd("ctx");
$recv($4)._add_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$6=$recv($3)._add_(self._newThing());
$7=stuff;
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newStuff",{stuff:stuff},$globals.StuffUsingEachController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newStuff\x0a\x0a\x09| stuff |\x0a\x09\x0a\x09stuff := Stuff new\x0a\x09\x09\x09\x09name: 'Hey... this stuff is new!';\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09\x09\x0a\x09stuff things add: self newThing; add: self newThing.\x0a\x09^ stuff",
referencedClasses: ["Stuff"],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "yourself", "add:", "things", "newThing"]
}),
$globals.StuffUsingEachController.klass);

$core.addMethod(
$core.method({
selector: "newThing",
protocol: 'actions',
fn: function (){
var self=this;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Thing())._new();
$recv($2)._name_($recv(self._inspiration())._atRandom());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newThing",{},$globals.StuffUsingEachController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newThing\x0a\x0a\x09^ Thing new\x0a\x09\x09name: self inspiration atRandom;\x0a\x09\x09yourself",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "atRandom", "inspiration", "yourself"]
}),
$globals.StuffUsingEachController.klass);

$core.addMethod(
$core.method({
selector: "viewPath",
protocol: 'accessing',
fn: function (){
var self=this;
return "text!views/demo/";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewPath\x0a\x09\x22Returns the path where the template of the view should be found\x22\x0a\x09\x0a\x09^ 'text!views/demo/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StuffUsingEachController.klass);


$core.addClass('StuffComposedUsingEachController', $globals.StuffUsingEachController, [], 'Flow-Templates-Tests');
$core.addMethod(
$core.method({
selector: "configureAndBind",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.StuffComposedUsingEachController.superclass.fn.prototype._configureAndBind.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureAndBind",{},$globals.StuffComposedUsingEachController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureAndBind\x0a\x0a\x09super configureAndBind",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["configureAndBind"]
}),
$globals.StuffComposedUsingEachController);

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
$globals.StuffComposedUsingEachController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._showThings();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.StuffComposedUsingEachController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self when: #onAfterView do: [ self showThings ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "showThings"]
}),
$globals.StuffComposedUsingEachController);

$core.addMethod(
$core.method({
selector: "showThings",
protocol: 'actions',
fn: function (){
var self=this;
function $IteratedController(){return $globals.IteratedController||(typeof IteratedController=="undefined"?nil:IteratedController)}
function $ThingController(){return $globals.ThingController||(typeof ThingController=="undefined"?nil:ThingController)}
function $TemplateController(){return $globals.TemplateController||(typeof TemplateController=="undefined"?nil:TemplateController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._ifAbsentAt_put_("things",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($IteratedController())._for_on_appendingTo_(self["@model"],self,".listOfThings"._asJQuery());
$recv($1)._itemControllerClass_($ThingController());
$recv($1)._templateUri_($recv($recv($TemplateController())._viewPath()).__comma("demo/ListOfThings.html"));
$2=$recv($1)._yourself();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_("things"))._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showThings",{},$globals.StuffComposedUsingEachController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showThings\x0a\x09\x09\x0a\x09self ifAbsentAt: 'things' \x0a\x09\x09put: [\x0a\x09\x09\x09\x22Lazy creation of the iterated controller for the things in stuff\x22\x0a\x09\x09\x09(IteratedController \x0a\x09\x09\x09\x09for: model \x0a\x09\x09\x09\x09on: self\x0a\x09\x09\x09\x09appendingTo: '.listOfThings' asJQuery)\x0a\x09\x09\x09\x09\x09itemControllerClass: ThingController;\x0a\x09\x09\x09\x09\x09templateUri: (TemplateController viewPath, 'demo/ListOfThings.html');\x0a\x09\x09\x09\x09\x09yourself].\x0a\x0a\x09(self controllerAt: 'things') render",
referencedClasses: ["IteratedController", "ThingController", "TemplateController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "itemControllerClass:", "for:on:appendingTo:", "asJQuery", "templateUri:", ",", "viewPath", "yourself", "render", "controllerAt:"]
}),
$globals.StuffComposedUsingEachController);



$core.addClass('ThingController', $globals.BindingController, [], 'Flow-Templates-Tests');

$core.addMethod(
$core.method({
selector: "viewPath",
protocol: 'accessing',
fn: function (){
var self=this;
return "text!views/demo/";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewPath\x0a\x09\x22Returns the path where the template of the view should be found\x22\x0a\x09\x0a\x09^ 'text!views/demo/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ThingController.klass);

});
