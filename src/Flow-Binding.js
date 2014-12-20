define("amber-flow/Flow-Binding", ["amber/boot", "amber-flow/Flow-Templates", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Flow-Binding');
$core.packages["Flow-Binding"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('BindingController', $globals.TemplateController, [], 'Flow-Binding');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BindingController.comment="## BindingController is an abstraction\x0aThe concrete subclasses of BindingController are users of the two-way data binding mechanism loaded by flow.\x0a\x0aNote that BindingController is a subclass of TemplateController so all subclasses of it follow the convention of loading a html template from the server using the keyword of the controller as the name of the template to be found at views/";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "asBindArgument",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$globals.HashedCollection._newFromPairs_(["model",self._getModelAsArgument(),"controller",self]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asBindArgument",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asBindArgument\x0a\x09\x22Answers the model and this controller as rivets like it for binding.\x22\x0a\x0a\x09^ #{\x0a\x09'model' -> self getModelAsArgument.\x0a\x09'controller' -> self\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getModelAsArgument"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "bind",
protocol: 'actions',
fn: function (){
var self=this;
function $Rivets(){return $globals.Rivets||(typeof Rivets=="undefined"?nil:Rivets)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($Rivets())._rv())._bind_to_(self._view(),self._asBindArgument());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bind",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bind\x0a\x09\x22Tells rivets.js to bind \x0a\x09the model of this controller to its view.\x22\x0a\x09\x0a\x09Rivets rv\x0a\x09\x09bind: self view \x0a\x09\x09to: self asBindArgument",
referencedClasses: ["Rivets"],
//>>excludeEnd("ide");
messageSends: ["bind:to:", "rv", "view", "asBindArgument"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "configure",
protocol: 'actions',
fn: function (){
var self=this;
var conf;
function $Rivets(){return $globals.Rivets||(typeof Rivets=="undefined"?nil:Rivets)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
conf=self._getConfiguration();
$recv($recv($Rivets())._rv())._configure_(conf);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configure",{conf:conf},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configure\x0a\x09\x22Sets some configurations for rivets\x22\x0a\x09| conf |\x0a\x09\x0a\x09conf := self getConfiguration.\x0a\x09\x0a\x09Rivets rv configure: conf",
referencedClasses: ["Rivets"],
//>>excludeEnd("ide");
messageSends: ["getConfiguration", "configure:", "rv"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "configureAndBind",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self._hasModel())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["not"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._hasView())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return self;
};
$recv(console)._log_($recv($recv(self._class())._name()).__comma(">>initialize"));
self._configure();
self._bind();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureAndBind",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureAndBind\x0a\x0a\x09(self hasModel not or: [\x0a\x09self hasView not ]) ifTrue: [ ^ self ].\x0aconsole log: self class name,'>>initialize'.\x09\x0a\x09self configure.\x0a\x09\x0a\x09self bind.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "or:", "not", "hasModel", "hasView", "log:", ",", "name", "class", "configure", "bind"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "getConfiguration",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$globals.HashedCollection._newFromPairs_(["handler",self._getHandler()]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getConfiguration",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getConfiguration\x0a\x0a\x09^ #{ #handler -> self getHandler }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getHandler"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "getHandler",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return function( target, event, binding ){
		this.call(binding.model);
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getHandler",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getHandler\x0a\x09\x22Answers the custom handler of flow controllers for rivets.\x0a\x09We need it to be call on binding.model otherwhise \x0a\x09rivets would send the html element (target of the event)\x0a\x09screwing the self instance of this controller\x22\x0a\x0a\x09<return function( target, event, binding ){\x0a\x09\x09this.call(binding.model);\x0a\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "getModelAsArgument",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@model"])._data();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getModelAsArgument",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getModelAsArgument\x0a\x09\x22Returns the model in a way that is appropiate for binding (usable by rivets).\x0a\x09By default BindingController assumes you are using mapless as the controllers model\x0a\x09so we send their data but subclasses might differ if they please to do so.\x22\x0a\x09^ model data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["data"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.BindingController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._configureAndBind();
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
return self._rebind();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:do:"]=2;
//>>excludeEnd("ctx");
self._when_do_("onBeforeRemove",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._unbind();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$1=self._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView do: [ self configureAndBind ];\x0a\x09\x09when: #onAfterModel do: [ self rebind ];\x0a\x09\x09when: #onBeforeRemove do: [ self unbind ];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "configureAndBind", "rebind", "unbind", "yourself"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "rebind",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._unbind();
$1=self._configureAndBind();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rebind",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rebind\x0a\x0a\x09self unbind; configureAndBind",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unbind", "configureAndBind"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "silentRefresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._unbind();
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.BindingController.superclass.fn.prototype._silentRefresh.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRefresh",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "silentRefresh\x0a\x0a\x09self unbind.\x0a\x09\x0a\x09super silentRefresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["unbind", "silentRefresh"]
}),
$globals.BindingController);

$core.addMethod(
$core.method({
selector: "unbind",
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
$recv(self["@view"])._unbind();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unbind",{},$globals.BindingController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unbind\x0a\x09\x22Tells rivets.js to unbind the view.\x22\x0a\x09\x0a\x09view ifNotNil:[ view unbind ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "unbind"]
}),
$globals.BindingController);


$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $BindingController(){return $globals.BindingController||(typeof BindingController=="undefined"?nil:BindingController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__eq($BindingController());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.BindingController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = BindingController",
referencedClasses: ["BindingController"],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.BindingController.klass);


$core.addClass('ItemsController', $globals.BindingController, ['getItemsBlock', 'itemControllerClass', 'newItemControllerBlock'], 'Flow-Binding');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ItemsController.comment="##IteratedController\x0a##Sorry this one is not currently being supported\x0aIt requires a rivetjs hack to work and the ListController gives you the feature \x0a____\x0a\x0aLike ListController except it relies on rivets.js to iterate  models' presentation.\x0a\x0aIt's rivets who triggers the creation, maintenance and destruction of the (sub)controllers of this controller.\x0a\x0a[This is how you use it in the template/view](http://rivetsjs.com/docs/reference/#each-[item])";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "getCustomBindFor:",
protocol: 'actions',
fn: function (theEachBind){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return function(el){
		this.view.onViewCreated = function(aView, aModel){ self._onViewCreated_for_(aView, aModel) };
		this.view.onViewDestroyed = function(aView, aModel){ self._onViewDestroyed_for_(aView, aModel) };
		theEachBind.call(this,el);		
		};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getCustomBindFor:",{theEachBind:theEachBind},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theEachBind"],
source: "getCustomBindFor: theEachBind\x0a\x0a\x09<return function(el){\x0a\x09\x09this.view.onViewCreated = function(aView, aModel){ self._onViewCreated_for_(aView, aModel) };\x0a\x09\x09this.view.onViewDestroyed = function(aView, aModel){ self._onViewDestroyed_for_(aView, aModel) };\x0a\x09\x09theEachBind.call(this,el);\x09\x09\x0a\x09\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "getCustomRoutineFor:",
protocol: 'actions',
fn: function (theEachRoutine){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return function(el, collection){
		var results = theEachRoutine.call(this, el, collection);
		self._onRoutine_value_(el, collection);
		return results;
		};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getCustomRoutineFor:",{theEachRoutine:theEachRoutine},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theEachRoutine"],
source: "getCustomRoutineFor: theEachRoutine\x0a\x0a\x09<return function(el, collection){\x0a\x09\x09var results = theEachRoutine.call(this, el, collection);\x0a\x09\x09self._onRoutine_value_(el, collection);\x0a\x09\x09return results;\x0a\x09\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "getItemsBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@getItemsBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getItemsBlock\x0a\x0a\x09^ getItemsBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ItemsController);

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
$globals.ItemsController);

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
$globals.ItemsController);

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
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "makeCustomBinder",
protocol: 'actions',
fn: function (){
var self=this;
var theEachBind,theEachRoutine;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$8,$7,$6,$11,$10,$9,$14,$13,$12;
$2=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=1;
//>>excludeEnd("ctx");
$5=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._at_("each-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("iterated-*",$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$8=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=3;
//>>excludeEnd("ctx");
$6=$recv($7)._at_("each-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
theEachBind=$recv($6)._at_("bind");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$11=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=4;
//>>excludeEnd("ctx");
$10=$recv($11)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=4;
//>>excludeEnd("ctx");
$9=$recv($10)._at_("each-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=5;
//>>excludeEnd("ctx");
theEachRoutine=$recv($9)._at_("routine");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$14=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=5;
//>>excludeEnd("ctx");
$13=$recv($14)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=5;
//>>excludeEnd("ctx");
$12=$recv($13)._at_("iterated-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=6;
//>>excludeEnd("ctx");
$recv($12)._at_put_("bind",self._getCustomBindFor_(theEachBind));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($recv($recv(self._rivets())._binders())._at_("iterated-*"))._at_put_("routine",self._getCustomRoutineFor_(theEachRoutine));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeCustomBinder",{theEachBind:theEachBind,theEachRoutine:theEachRoutine},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeCustomBinder\x0a\x09\x22Answers the rivetjs configuration needed for this controller to maintain subcontrollers\x0a\x09in sync with the lifecicly of the elements maintained by rivets via the each-* directive\x22\x0a\x09\x0a\x09| theEachBind theEachRoutine |\x0a\x09\x0a\x09self rivets binders \x0a\x09\x09at: 'iterated-*'\x0a\x09\x09put: (self rivets binders at: 'each-*').\x0a\x09\x09\x0a\x09theEachBind := (self rivets binders at: 'each-*') at: #bind.\x0a\x09theEachRoutine := (self rivets binders at: 'each-*') at: #routine.\x0a\x09\x0a\x09(self rivets binders at: 'iterated-*') at: #bind put: (self getCustomBindFor: theEachBind).\x0a\x09(self rivets binders at: 'iterated-*') at: #routine put: (self getCustomRoutineFor: theEachRoutine)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "binders", "rivets", "at:", "getCustomBindFor:", "getCustomRoutineFor:"]
}),
$globals.ItemsController);

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
$globals.ItemsController);

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
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "newItemControllerOn:for:",
protocol: 'actions',
fn: function (aRivetJSView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@itemControllerClass"])._isNil();
if($core.assert($2)){
$1=$recv(self._newItemControllerBlock())._value_value_value_(aRivetJSView,aModel,self);
} else {
$1=$recv(self["@itemControllerClass"])._for_on_appendingTo_(aModel,self,$recv(jQuery)._value_($recv($recv(aRivetJSView)._els())._first()));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newItemControllerOn:for:",{aRivetJSView:aRivetJSView,aModel:aModel},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetJSView", "aModel"],
source: "newItemControllerOn: aRivetJSView for: aModel\x0a\x0a\x09^ itemControllerClass isNil\x0a\x09\x09ifFalse:[ itemControllerClass \x0a\x09\x09\x09\x09\x09for: aModel \x0a\x09\x09\x09\x09\x09on: self \x0a\x09\x09\x09\x09\x09appendingTo: (jQuery value: aRivetJSView els first) ] \x0a\x09\x09ifTrue:[ self newItemControllerBlock \x0a\x09\x09\x09\x09\x09\x09value: aRivetJSView \x0a\x09\x09\x09\x09\x09\x09value: aModel \x0a\x09\x09\x09\x09\x09\x09value: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "isNil", "for:on:appendingTo:", "value:", "first", "els", "value:value:value:", "newItemControllerBlock"]
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "onRoutine:value:",
protocol: 'reactions',
fn: function (anElement,aValue){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "aValue"],
source: "onRoutine: anElement value: aValue\x0a\x09\x22Rivetjs has executed the routing of the iterated-* binder.\x22\x0a\x0a\x09\x22no-op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "onViewCreated:",
protocol: 'reactions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(console)._log_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onViewCreated:",{anObject:anObject},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "onViewCreated: anObject \x0a\x0a\x09console log: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:"]
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "onViewCreated:for:",
protocol: 'reactions',
fn: function (aRivetJSView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aModel)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
self._ifAbsentAt_put_($1,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._newItemControllerOn_for_(aRivetJSView,aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_($recv(aModel)._id()))._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onViewCreated:for:",{aRivetJSView:aRivetJSView,aModel:aModel},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetJSView", "aModel"],
source: "onViewCreated: aRivetJSView for: aModel\x0a\x09\x22aRivetJSView was ceated for aModel by rivetsjs iterated-* and \x0a\x09we make sure we have a controller for it.\x22\x0a\x0a\x09self ifAbsentAt: aModel id\x0a\x09\x09put:[ self newItemControllerOn: aRivetJSView for: aModel].\x0a\x09\x09\x0a\x09(self controllerAt: aModel id) render",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "id", "newItemControllerOn:for:", "render", "controllerAt:"]
}),
$globals.ItemsController);

$core.addMethod(
$core.method({
selector: "onViewDestroyed:for:",
protocol: 'reactions',
fn: function (aView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._removeControllerAt_($recv(aModel)._id());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onViewDestroyed:for:",{aView:aView,aModel:aModel},$globals.ItemsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView", "aModel"],
source: "onViewDestroyed: aView for: aModel\x0a\x09\x22The view for aModel was revoved by rivetjs, \x0a\x09so we make sure we remove the controller as well\x22\x0a\x09\x0a\x09self removeControllerAt: aModel id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeControllerAt:", "id"]
}),
$globals.ItemsController);



$core.addClass('IteratedController', $globals.BindingController, ['itemControllerClass', 'newItemControllerBlock'], 'Flow-Binding');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IteratedController.comment="##IteratedController\x0a##Sorry this one is not currently being supported\x0aIt requires a rivetjs hack to work and the ListController gives you the feature \x0a____\x0a\x0aLike ListController except it relies on rivets.js to iterate  models' presentation.\x0a\x0aIt's rivets who triggers the creation, maintenance and destruction of the (sub)controllers of this controller.\x0a\x0a[This is how you use it in the template/view](http://rivetsjs.com/docs/reference/#each-[item])";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "configureAndBind",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._configure();
self._makeCustomBinder();
self._bind();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"configureAndBind",{},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "configureAndBind\x0a\x0a\x09self configure.\x0a\x0a\x09self makeCustomBinder.\x0a\x09\x0a\x09self bind",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["configure", "makeCustomBinder", "bind"]
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "getCustomBindFor:",
protocol: 'actions',
fn: function (theEachBind){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return function(el){
		this.view.onViewCreated = function(aView, aModel){ self._onViewCreated_for_(aView, aModel) };
		this.view.onViewDestroyed = function(aView, aModel){ self._onViewDestroyed_for_(aView, aModel) };
		theEachBind.call(this,el);		
		};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getCustomBindFor:",{theEachBind:theEachBind},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theEachBind"],
source: "getCustomBindFor: theEachBind\x0a\x0a\x09<return function(el){\x0a\x09\x09this.view.onViewCreated = function(aView, aModel){ self._onViewCreated_for_(aView, aModel) };\x0a\x09\x09this.view.onViewDestroyed = function(aView, aModel){ self._onViewDestroyed_for_(aView, aModel) };\x0a\x09\x09theEachBind.call(this,el);\x09\x09\x0a\x09\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "getCustomRoutineFor:",
protocol: 'actions',
fn: function (theEachRoutine){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return function(el, collection){
		var results = theEachRoutine.call(this, el, collection);
		self._onRoutine_value_(el, collection);
		return results;
		};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getCustomRoutineFor:",{theEachRoutine:theEachRoutine},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["theEachRoutine"],
source: "getCustomRoutineFor: theEachRoutine\x0a\x0a\x09<return function(el, collection){\x0a\x09\x09var results = theEachRoutine.call(this, el, collection);\x0a\x09\x09self._onRoutine_value_(el, collection);\x0a\x09\x09return results;\x0a\x09\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IteratedController);

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
$globals.IteratedController);

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
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "makeCustomBinder",
protocol: 'actions',
fn: function (){
var self=this;
var theEachBind,theEachRoutine;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$8,$7,$6,$11,$10,$9,$14,$13,$12;
$2=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=1;
//>>excludeEnd("ctx");
$5=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._at_("each-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("iterated-*",$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$8=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=3;
//>>excludeEnd("ctx");
$6=$recv($7)._at_("each-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
theEachBind=$recv($6)._at_("bind");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$11=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=4;
//>>excludeEnd("ctx");
$10=$recv($11)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=4;
//>>excludeEnd("ctx");
$9=$recv($10)._at_("each-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=5;
//>>excludeEnd("ctx");
theEachRoutine=$recv($9)._at_("routine");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$14=self._rivets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rivets"]=5;
//>>excludeEnd("ctx");
$13=$recv($14)._binders();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binders"]=5;
//>>excludeEnd("ctx");
$12=$recv($13)._at_("iterated-*");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=6;
//>>excludeEnd("ctx");
$recv($12)._at_put_("bind",self._getCustomBindFor_(theEachBind));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($recv($recv(self._rivets())._binders())._at_("iterated-*"))._at_put_("routine",self._getCustomRoutineFor_(theEachRoutine));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"makeCustomBinder",{theEachBind:theEachBind,theEachRoutine:theEachRoutine},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "makeCustomBinder\x0a\x09\x22Answers the rivetjs configuration needed for this controller to maintain subcontrollers\x0a\x09in sync with the lifecicly of the elements maintained by rivets via the each-* directive\x22\x0a\x09\x0a\x09| theEachBind theEachRoutine |\x0a\x09\x0a\x09self rivets binders \x0a\x09\x09at: 'iterated-*'\x0a\x09\x09put: (self rivets binders at: 'each-*').\x0a\x09\x09\x0a\x09theEachBind := (self rivets binders at: 'each-*') at: #bind.\x0a\x09theEachRoutine := (self rivets binders at: 'each-*') at: #routine.\x0a\x09\x0a\x09(self rivets binders at: 'iterated-*') at: #bind put: (self getCustomBindFor: theEachBind).\x0a\x09(self rivets binders at: 'iterated-*') at: #routine put: (self getCustomRoutineFor: theEachRoutine)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "binders", "rivets", "at:", "getCustomBindFor:", "getCustomRoutineFor:"]
}),
$globals.IteratedController);

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
$globals.IteratedController);

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
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "newItemControllerOn:for:",
protocol: 'actions',
fn: function (aRivetJSView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@itemControllerClass"])._isNil();
if($core.assert($2)){
$1=$recv(self._newItemControllerBlock())._value_value_value_(aRivetJSView,aModel,self);
} else {
$1=$recv(self["@itemControllerClass"])._for_on_appendingTo_(aModel,self,$recv(jQuery)._value_($recv($recv(aRivetJSView)._els())._first()));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newItemControllerOn:for:",{aRivetJSView:aRivetJSView,aModel:aModel},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetJSView", "aModel"],
source: "newItemControllerOn: aRivetJSView for: aModel\x0a\x0a\x09^ itemControllerClass isNil\x0a\x09\x09ifFalse:[ itemControllerClass \x0a\x09\x09\x09\x09\x09for: aModel \x0a\x09\x09\x09\x09\x09on: self \x0a\x09\x09\x09\x09\x09appendingTo: (jQuery value: aRivetJSView els first) ] \x0a\x09\x09ifTrue:[ self newItemControllerBlock \x0a\x09\x09\x09\x09\x09\x09value: aRivetJSView \x0a\x09\x09\x09\x09\x09\x09value: aModel \x0a\x09\x09\x09\x09\x09\x09value: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "isNil", "for:on:appendingTo:", "value:", "first", "els", "value:value:value:", "newItemControllerBlock"]
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "onRoutine:value:",
protocol: 'reactions',
fn: function (anElement,aValue){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "aValue"],
source: "onRoutine: anElement value: aValue\x0a\x09\x22Rivetjs has executed the routing of the iterated-* binder.\x22\x0a\x0a\x09\x22no-op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "onViewCreated:for:",
protocol: 'reactions',
fn: function (aRivetJSView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aModel)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
self._ifAbsentAt_put_($1,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._newItemControllerOn_for_(aRivetJSView,aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_($recv(aModel)._id()))._render();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onViewCreated:for:",{aRivetJSView:aRivetJSView,aModel:aModel},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRivetJSView", "aModel"],
source: "onViewCreated: aRivetJSView for: aModel\x0a\x09\x22aRivetJSView was ceated for aModel by rivetsjs iterated-* and \x0a\x09we make sure we have a controller for it.\x22\x0a\x0a\x09self ifAbsentAt: aModel id\x0a\x09\x09put:[ self newItemControllerOn: aRivetJSView for: aModel].\x0a\x09\x09\x0a\x09(self controllerAt: aModel id) render",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "id", "newItemControllerOn:for:", "render", "controllerAt:"]
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "onViewDestroyed:for:",
protocol: 'reactions',
fn: function (aView,aModel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._removeControllerAt_($recv(aModel)._id());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onViewDestroyed:for:",{aView:aView,aModel:aModel},$globals.IteratedController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aView", "aModel"],
source: "onViewDestroyed: aView for: aModel\x0a\x09\x22The view for aModel was revoved by rivetjs, \x0a\x09so we make sure we remove the controller as well\x22\x0a\x09\x0a\x09self removeControllerAt: aModel id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeControllerAt:", "id"]
}),
$globals.IteratedController);

$core.addMethod(
$core.method({
selector: "parentElement:",
protocol: 'accessing',
fn: function (anHtmlElement){
var self=this;
self["@view"]=anHtmlElement;
self["@parentElement"]=self["@view"];
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anHtmlElement"],
source: "parentElement: anHtmlElement\x0a\x09\x22Sets the parent elment for the list.\x0a\x09It can be anything but, in the case of lists, the parent element usually is a <ul>\x0a\x09The thing is to treat it like an <ul> full of <li> children.\x22\x0a\x09parentElement := view := anHtmlElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IteratedController);



$core.addClass('ModalController', $globals.BindingController, [], 'Flow-Binding');
$core.addMethod(
$core.method({
selector: "close",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._view())._modal_("hide");
self._trigger_("modalClosed");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x0a\x09self view modal: 'hide'.\x0a\x09\x0a\x09self trigger: #modalClosed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modal:", "view", "trigger:"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "createModal",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(jQuery)._value_(self["@view"]))._modal_(self._modalOptions());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createModal",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createModal\x0a\x09\x22Creates the bootstrap modal on the view of this controller.\x22\x0a\x0a\x09(jQuery value: view) modal: self modalOptions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modal:", "value:", "modalOptions"]
}),
$globals.ModalController);

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
$globals.ModalController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._createModal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self when: #onAfterView do: [ self createModal ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "createModal"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "message:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("message",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "message: aString\x0a\x0a\x09self basicAt: #message put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "modalOptions",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._defaultModalOptions();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modalOptions",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "modalOptions\x0a\x0a\x09^ self class defaultModalOptions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["defaultModalOptions", "class"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._view())._modal_("show");
self._trigger_("modalOpened");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x0a\x09self view modal: 'show'.\x0a\x09\x0a\x09self trigger: #modalOpened",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modal:", "view", "trigger:"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "title:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("title",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "title: aString\x0a\x0a\x09self basicAt: #title put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.ModalController);

$core.addMethod(
$core.method({
selector: "toggle",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._view())._modal_("toggle");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggle",{},$globals.ModalController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggle\x0a\x0a\x09self view modal: 'toggle'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modal:", "view"]
}),
$globals.ModalController);


$core.addMethod(
$core.method({
selector: "defaultModalOptions",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["backdrop",true,"keyboard",true,"show",false]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModalOptions\x0a\x09\x22Answers the default options for the modal controllers.\x0a\x09For details on options check:\x0a\x09http://getbootstrap.com/javascript/\x22\x0a\x0a\x09^ #{\x0a\x09\x09#backdrop -> true.\x0a\x09\x09#keyboard -> true.\x0a\x09\x09#show -> false\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ModalController.klass);

$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $ModalController(){return $globals.ModalController||(typeof ModalController=="undefined"?nil:ModalController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__eq($ModalController());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.ModalController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = ModalController",
referencedClasses: ["ModalController"],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.ModalController.klass);


$core.addClass('AlertController', $globals.ModalController, [], 'Flow-Binding');
$core.addMethod(
$core.method({
selector: "buttonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("buttonLabel",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"buttonLabel:",{aString:aString},$globals.AlertController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "buttonLabel: aString\x0a\x0a\x09self basicAt: #buttonLabel put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.AlertController);

$core.addMethod(
$core.method({
selector: "onConfirmBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._when_do_("confirm",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onConfirmBlock:",{aBlock:aBlock},$globals.AlertController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onConfirmBlock: aBlock\x0a\x0a\x09self when: #confirm do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:do:"]
}),
$globals.AlertController);



$core.addClass('ConfirmController', $globals.ModalController, [], 'Flow-Binding');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ConfirmController.comment="##ConfirmController\x0aThis controller asks the user for confirmation of a given action. It has a reject and accept customizable callback";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "accept",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("accept");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accept",{},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "accept\x0a\x0a\x09self trigger: #accept",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "acceptBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._when_do_("accept",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptBlock:",{aBlock:aBlock},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "acceptBlock: aBlock\x0a\x0a\x09self when: #accept do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:do:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "acceptButtonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("acceptButtonLabel",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"acceptButtonLabel:",{aString:aString},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "acceptButtonLabel: aString\x0a\x0a\x09self basicAt: #acceptButtonLabel put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "reject",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("reject");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reject",{},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reject\x0a\x0a\x09self trigger: #reject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "rejectBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._when_do_("reject",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rejectBlock:",{aBlock:aBlock},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "rejectBlock: aBlock\x0a\x0a\x09self when: #reject do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["when:do:"]
}),
$globals.ConfirmController);

$core.addMethod(
$core.method({
selector: "rejectButtonLabel:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("rejectButtonLabel",aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rejectButtonLabel:",{aString:aString},$globals.ConfirmController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "rejectButtonLabel: aString\x0a\x0a\x09self basicAt: #rejectButtonLabel put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:"]
}),
$globals.ConfirmController);



$core.addClass('Rivets', $globals.Object, [], 'Flow-Binding');

$core.addMethod(
$core.method({
selector: "addFormatter:at:",
protocol: 'actions',
fn: function (aBlock,aName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._rv())._formatters())._at_put_(aName,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addFormatter:at:",{aBlock:aBlock,aName:aName},$globals.Rivets.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aName"],
source: "addFormatter: aBlock at: aName\x0a\x09\x22Tells rivets.js to add aBlock callback as a formatter under aName.\x22\x0a\x09\x0a\x09self rv formatters at: aName put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "formatters", "rv"]
}),
$globals.Rivets.klass);

$core.addMethod(
$core.method({
selector: "binderCallback",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return function(){
		var args = Array.prototype.slice.call(arguments);
		var fn = args.shift();
		var whoBinds = args.shift();

		if (typeof fn === 'function') {
			return function() {
				fn.apply(self, args);
			}
		}
		
		return fn;
	};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"binderCallback",{},$globals.Rivets.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "binderCallback\x0a\x09\x22Returns a callback to bind whoBinds.\x22\x0a\x09\x0a\x09<return function(){\x0a\x09\x09var args = Array.prototype.slice.call(arguments);\x0a\x09\x09var fn = args.shift();\x0a\x09\x09var whoBinds = args.shift();\x0a\x0a\x09\x09if (typeof fn === 'function') {\x0a\x09\x09\x09return function() {\x0a\x09\x09\x09\x09fn.apply(self, args);\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09return fn;\x0a\x09}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rivets.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._installUtils();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Rivets.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09self installUtils",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["installUtils"]
}),
$globals.Rivets.klass);

$core.addMethod(
$core.method({
selector: "installUtils",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._utilFormatters())._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addFormatter_at_(value,key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installUtils",{},$globals.Rivets.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "installUtils\x0a\x0a\x09self utilFormatters keysAndValuesDo: [ :key :value |\x0a\x09\x09self addFormatter: value at: key ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysAndValuesDo:", "utilFormatters", "addFormatter:at:"]
}),
$globals.Rivets.klass);

$core.addMethod(
$core.method({
selector: "rv",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(require)._value_("rivets");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rv",{},$globals.Rivets.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rv\x0a\x09\x22Answers the rivets accessor.\x0a\x09http://rivetsjs.com/docs/guide/\x22\x0a\x0a\x09^ require value: 'rivets'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.Rivets.klass);

$core.addMethod(
$core.method({
selector: "utilFormatters",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$6,$1;
$2=$recv($Dictionary())._new();
$recv($2)._at_put_("at",(function(object,key){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(object)._basicAt_(key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({object:object,key:key},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("reversed",(function(aCollection){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aCollection)._reversed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCollection:aCollection},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_("sorted",(function(aCollection){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aCollection)._sorted();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aCollection:aCollection},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($2)._at_put_("size",(function(anObject){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anObject)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({anObject:anObject},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($2)._at_put_("rounded",(function(aNumber){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNumber)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNumber:aNumber},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv($2)._at_put_("capitalized",(function(aString){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aString)._capitalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aString:aString},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$recv($2)._at_put_("currency",(function(aNumber,aCurrencySymbol){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(aCurrencySymbol)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4=$recv(aNumber)._printShowingDecimalPlaces_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["printShowingDecimalPlaces:"]=1;
//>>excludeEnd("ctx");
return $recv($3).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNumber:aNumber,aCurrencySymbol:aCurrencySymbol},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($2)._at_put_("decimalPlaces",(function(aNumber,decimalPlaces){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aNumber)._printShowingDecimalPlaces_(decimalPlaces);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aNumber:aNumber,decimalPlaces:decimalPlaces},$ctx1,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv($2)._at_put_("asLowercase",(function(aString){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(aString)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
return $recv($5)._asLowercase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aString:aString},$ctx1,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=9;
//>>excludeEnd("ctx");
$recv($2)._at_put_("asUppercase",(function(aString){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aString)._asString())._asUppercase();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aString:aString},$ctx1,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=10;
//>>excludeEnd("ctx");
$recv($2)._at_put_("bind",self._binderCallback());
$6=$recv($2)._yourself();
$1=$6;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"utilFormatters",{},$globals.Rivets.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "utilFormatters\x0a\x0a\x09^ Dictionary new \x0a\x09\x09at: #at put: [ :object :key | object basicAt: key ];\x0a\x09\x09at: #reversed put: [ :aCollection | aCollection reversed ];\x0a\x09\x09at: #sorted put: [ :aCollection | aCollection sorted ];\x0a\x09\x09at: #size put: [ :anObject | anObject size ];\x0a\x09\x09at: #rounded put: [ :aNumber | aNumber rounded ];\x0a\x09\x09at: #capitalized put: [ :aString | aString capitalized ];\x0a\x09\x09at: #currency put: [ :aNumber :aCurrencySymbol | aCurrencySymbol asString, (aNumber printShowingDecimalPlaces: 2) ];\x0a\x09\x09at: #decimalPlaces put: [ :aNumber :decimalPlaces | aNumber printShowingDecimalPlaces: decimalPlaces ];\x0a\x09\x09at: #asLowercase put: [ :aString | aString asString asLowercase ];\x0a\x09\x09at: #asUppercase put: [ :aString | aString asString asUppercase ];\x0a\x09\x09at: #bind put: self binderCallback;\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "basicAt:", "reversed", "sorted", "size", "rounded", "capitalized", ",", "asString", "printShowingDecimalPlaces:", "asLowercase", "asUppercase", "binderCallback", "yourself"]
}),
$globals.Rivets.klass);

});
