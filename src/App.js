define("amber-flow/App", ["amber/boot", "amber_core/Kernel-Objects", "minimapless/MiniMapless", "amber-flow/Flow-Binding", "amber-flow/Flow-Templates"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('App');
$core.packages["App"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('App', $globals.Object, [], 'App');

$core.addMethod(
$core.method({
selector: "publishObjects",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($recv($recv($Flow())._session())._api())._ws();
$recv($1)._publish_at_($recv($Flow())._app(),"app");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._publish_at_($recv($Transcript())._current(),"Transcript");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=2;
//>>excludeEnd("ctx");
$recv($1)._publish_at_(console,"console");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=3;
//>>excludeEnd("ctx");
$recv($1)._publish_at_((function(sent){
return sent;

}),"echo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=4;
//>>excludeEnd("ctx");
$recv($1)._publish_at_((function(ping){
return "pong";

}),"ping");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["publish:at:"]=5;
//>>excludeEnd("ctx");
$recv($1)._publish_at_((function(a,b){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(a).__plus(b);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1,3)});
//>>excludeEnd("ctx");
}),"sum");
$2=$recv($1)._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"publishObjects",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "publishObjects\x0a\x0a\x09Flow session api ws\x0a\x09\x09publish: Flow app at: 'app';\x0a\x09\x09publish: Transcript current at: 'Transcript';\x0a\x09\x09publish: console at: 'console';\x0a\x09\x09publish: [ :sent | sent ] at: 'echo';\x0a\x09\x09publish: [ :ping | #pong ] at: 'ping';\x09\x09\x0a\x09\x09publish: [ :a :b | a + b ] at: 'sum';\x09\x0a\x09\x09yourself",
referencedClasses: ["Flow", "Transcript"],
//>>excludeEnd("ide");
messageSends: ["publish:at:", "ws", "api", "session", "app", "current", "+", "yourself"]
}),
$globals.App.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'actions',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $AppVisitor(){return $globals.AppVisitor||(typeof AppVisitor=="undefined"?nil:AppVisitor)}
function $Router(){return $globals.Router||(typeof Router=="undefined"?nil:Router)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($Flow())._install();
$recv($Flow())._app_(self);
$recv($recv($Flow())._session())._visitor_($recv($AppVisitor())._new());
self._publishObjects();
$recv($Flow())._start();
$recv($Router())._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.App.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a\x09Flow install.\x0a\x09\x0a\x09Flow app: self.\x0a\x09Flow session visitor: AppVisitor new.\x0a\x09self publishObjects.\x0a\x0a\x09Flow start.\x0a\x09\x0a\x09Router refresh",
referencedClasses: ["Flow", "AppVisitor", "Router"],
//>>excludeEnd("ide");
messageSends: ["install", "app:", "visitor:", "session", "new", "publishObjects", "start", "refresh"]
}),
$globals.App.klass);


$core.addClass('AppVisitor', $globals.MaplessModel, [], 'App');


$core.addClass('ConfirmNameController', $globals.ConfirmController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ConfirmNameController.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
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
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ConfirmNameController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._title_("Please confirm");
self._rejectButtonLabel_("Mmmm, I'd have to think about it");
self._acceptButtonLabel_("Of course I can!");
$1=self._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ConfirmNameController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09title: 'Please confirm';\x0a\x09\x09rejectButtonLabel: 'Mmmm, I''d have to think about it';\x0a\x09\x09acceptButtonLabel: 'Of course I can!';\x0a\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "title:", "rejectButtonLabel:", "acceptButtonLabel:", "yourself"]
}),
$globals.ConfirmNameController);



$core.addClass('Example1Controller', $globals.TemplateController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Example1Controller.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
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
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Example1Controller.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Example1Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView do: [ self observeEvents ];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "observeEvents", "yourself"]
}),
$globals.Example1Controller);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
function $Example1Controller(){return $globals.Example1Controller||(typeof Example1Controller=="undefined"?nil:Example1Controller)}
function $TemplateController(){return $globals.TemplateController||(typeof TemplateController=="undefined"?nil:TemplateController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@view"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._find_("a#browse-example1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["find:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example1Controller())._browse();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["browse"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv(self["@view"])._asJQuery())._find_("a#browse-template"))._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($TemplateController())._browse();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.Example1Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#browse-example1') on: 'click' do: [ Example1Controller browse ].\x0a\x09(view asJQuery find: 'a#browse-template') on: 'click' do: [ TemplateController browse ]",
referencedClasses: ["Example1Controller", "TemplateController"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "find:", "asJQuery", "browse"]
}),
$globals.Example1Controller);


$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anURI)._match_("^example1$");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anURI:anURI},$globals.Example1Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09^ anURI match: '^example1$'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["match:"]
}),
$globals.Example1Controller.klass);


$core.addClass('Example2Controller', $globals.BindingController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Example2Controller.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "confirm",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._controllerAt_("nameModal");
$recv($1)._message_($recv($recv($recv(self["@model"])._firstName())._asString()).__comma(" are you sure you can handle this?"));
$2=$recv($1)._open();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirm",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirm\x0a\x09\x22Sets a fresh message and opens the modal\x22\x0a\x0a\x09(self controllerAt: #nameModal) \x0a\x09\x09message: (model firstName asString,' are you sure you can handle this?');\x0a\x09\x09open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["message:", "controllerAt:", ",", "asString", "firstName", "open"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "confirmAgain",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@model"])._firstName_("");
$recv(self["@model"])._isConfirmed_(false);
self._updateCanConfirm();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"confirmAgain",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "confirmAgain\x0a\x0a\x09model firstName: ''.\x0a\x09model isConfirmed: false.\x0a\x09\x0a\x09self  updateCanConfirm",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["firstName:", "isConfirmed:", "updateCanConfirm"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "ensureModal",
protocol: 'actions',
fn: function (){
var self=this;
function $ConfirmNameController(){return $globals.ConfirmNameController||(typeof ConfirmNameController=="undefined"?nil:ConfirmNameController)}
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
self._ifAbsentAt_put_("nameModal",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ConfirmNameController())._for_on_appendingTo_($recv($recv($Flow())._session())._visitor(),self,"#confirmName"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._controllerAt_("nameModal");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["controllerAt:"]=1;
//>>excludeEnd("ctx");
$recv($1)._acceptBlock_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@model"])._isConfirmed_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isConfirmed:"]=1;
//>>excludeEnd("ctx");
$2=self._controllerAt_("nameModal");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["controllerAt:"]=2;
//>>excludeEnd("ctx");
return $recv($2)._close();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["close"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($1)._rejectBlock_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@model"])._isConfirmed_(false);
return $recv(self._controllerAt_("nameModal"))._close();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$3=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureModal",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureModal\x0a\x0a\x09self ifAbsentAt: #nameModal put: [\x0a\x09\x09ConfirmNameController \x0a\x09\x09\x09for: Flow session visitor\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#confirmName' asJQuery ].\x0a\x09\x09\x09\x0a\x09(self controllerAt: #nameModal) \x0a\x09\x09acceptBlock: [ \x0a\x09\x09\x09model isConfirmed: true.\x0a\x09\x09\x09(self controllerAt: #nameModal) close ];\x0a\x09\x09rejectBlock: [ \x0a\x09\x09\x09model isConfirmed: false.\x0a\x09\x09\x09(self controllerAt: #nameModal) close ];\x0a\x09\x09refresh",
referencedClasses: ["ConfirmNameController", "Flow"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "visitor", "session", "asJQuery", "acceptBlock:", "controllerAt:", "isConfirmed:", "close", "rejectBlock:", "refresh"]
}),
$globals.Example2Controller);

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
$globals.Example2Controller.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._updateCanConfirm();
self._ensureModal();
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView \x0a\x09\x09do: [ \x0a\x09\x09\x09self updateCanConfirm.\x0a\x09\x09\x09self ensureModal.\x0a\x09\x09\x09self observeEvents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "updateCanConfirm", "ensureModal", "observeEvents"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
function $BindingController(){return $globals.BindingController||(typeof BindingController=="undefined"?nil:BindingController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self["@view"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._find_("a#inspect-example2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["find:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv(self["@view"])._asJQuery())._find_("a#browse-binding"))._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($BindingController())._browse();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#inspect-example2') on: 'click' do: [ self inspect ].\x0a\x09(view asJQuery find: 'a#browse-binding') on: 'click' do: [ BindingController browse ]",
referencedClasses: ["BindingController"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "find:", "asJQuery", "inspect", "browse"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "onFirstNameBlur",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._updateCanConfirm();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onFirstNameBlur",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onFirstNameBlur\x0a\x0a\x09self updateCanConfirm",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateCanConfirm"]
}),
$globals.Example2Controller);

$core.addMethod(
$core.method({
selector: "updateCanConfirm",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=self._hasModel();
if(!$core.assert($1)){
return self;
};
$4=$recv(self["@model"])._firstName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["firstName"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._notNil();
$2=$recv($3)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self["@model"])._firstName())._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._basicAt_put_("canConfirm",$2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateCanConfirm",{},$globals.Example2Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateCanConfirm\x0a\x09\x09\x0a\x09self hasModel ifFalse: [ ^ self ].\x0a\x09\x0a\x09self \x0a\x09\x09basicAt: #canConfirm \x0a\x09\x09put: (model firstName notNil and: [\x0a\x09\x09\x09\x09model firstName notEmpty ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "hasModel", "basicAt:put:", "and:", "notNil", "firstName", "notEmpty"]
}),
$globals.Example2Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Thing())._new();
$recv($2)._firstName_("Dude");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example2Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ Thing new \x0a\x09\x09firstName: 'Dude';\x0a\x09\x09yourself",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["firstName:", "new", "yourself"]
}),
$globals.Example2Controller.klass);

$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anURI)._match_("^example2$");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anURI:anURI},$globals.Example2Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09^ anURI match: '^example2$'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["match:"]
}),
$globals.Example2Controller.klass);


$core.addClass('Example3Controller', $globals.TemplateController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Example3Controller.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "ensureSubControllers",
protocol: 'actions',
fn: function (){
var self=this;
function $Example1Controller(){return $globals.Example1Controller||(typeof Example1Controller=="undefined"?nil:Example1Controller)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._ifAbsentAt_put_("subexample",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Example1Controller())._for_on_appendingTo_(nil,self,"#subexample-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_("subexample"))._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureSubControllers",{},$globals.Example3Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureSubControllers\x0a\x0a\x09self ifAbsentAt: #subexample put: [\x0a\x09\x09Example1Controller \x0a\x09\x09\x09for: nil \x22We don't need to set any particular model for it\x22\x0a\x09\x09\x09on: self  \x22with this we are saying 'self is going to be your parent controller' (check implementors of #for:on:appendingTo:)\x22\x0a\x09\x09\x09appendingTo: '#subexample-wrapper' asJQuery ].\x0a\x09\x09\x09\x0a\x09(self controllerAt: #subexample) refresh",
referencedClasses: ["Example1Controller"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "for:on:appendingTo:", "asJQuery", "refresh", "controllerAt:"]
}),
$globals.Example3Controller);

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
$globals.Example3Controller.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._ensureSubControllers();
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Example3Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView \x0a\x09\x09do: [ \x0a\x09\x09\x09self ensureSubControllers.\x0a\x09\x09\x09self observeEvents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "ensureSubControllers", "observeEvents"]
}),
$globals.Example3Controller);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($recv(self["@view"])._asJQuery())._find_("a#inspect-this"))._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.Example3Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#inspect-this') on: 'click' do: [ self inspect ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:do:", "find:", "asJQuery", "inspect"]
}),
$globals.Example3Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'testing',
fn: function (){
var self=this;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Thing())._new();
$recv($2)._firstName_("Visitor");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example3Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ Thing new \x0a\x09\x09firstName: 'Visitor';\x0a\x09\x09yourself",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["firstName:", "new", "yourself"]
}),
$globals.Example3Controller.klass);

$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anURI)._match_("^example3$");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anURI:anURI},$globals.Example3Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09^ anURI match: '^example3$'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["match:"]
}),
$globals.Example3Controller.klass);


$core.addClass('Example4Controller', $globals.BindingController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Example4Controller.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addThing",
protocol: 'actions',
fn: function (){
var self=this;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($Thing())._new();
$recv($1)._name_(["Wave", "Particle", "Entanglement", "Superposition"]._atRandom());
$2=$recv($1)._yourself();
$recv($recv(self._controllerAt_("things"))._model())._add_($2);
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addThing",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addThing\x0a\x0a\x09(self controllerAt: #things) model add: (Thing new name: #( Wave Particle Entanglement Superposition ) atRandom; yourself).\x0a\x09\x0a\x09self updateNotEmpty",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["add:", "model", "controllerAt:", "name:", "new", "atRandom", "yourself", "updateNotEmpty"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "ensureDetails",
protocol: 'actions',
fn: function (){
var self=this;
function $ThingDetailsController(){return $globals.ThingDetailsController||(typeof ThingDetailsController=="undefined"?nil:ThingDetailsController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._ifAbsentAt_put_("details",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ThingDetailsController())._on_appendingTo_(self,"#details-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._controllerAt_("details"))._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureDetails",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureDetails\x0a\x09\x22Makes sure we have a controller for #details and \x0a\x09make it fresh and visible with a refresh\x22\x0a\x09\x0a\x09self ifAbsentAt: #details put: [\x0a\x09\x09ThingDetailsController\x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#details-wrapper' asJQuery ].\x0a\x09\x0a\x09(self controllerAt: #details) refresh",
referencedClasses: ["ThingDetailsController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "on:appendingTo:", "asJQuery", "refresh", "controllerAt:"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "ensureList",
protocol: 'actions',
fn: function (){
var self=this;
function $ListController(){return $globals.ListController||(typeof ListController=="undefined"?nil:ListController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._ifAbsentAt_put_("things",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($ListController())._on_appendingTo_(self,"#things-wrapper"._asJQuery());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._controllerAt_("things");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["controllerAt:"]=1;
//>>excludeEnd("ctx");
$recv($1)._newItemControllerBlock_((function(item){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._newItemControllerFor_for_(item,self._controllerAt_("things"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($1)._model_(self._getListModel());
$2=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ensureList",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ensureList\x0a\x09\x22Makes sure we have a controller for #things and \x0a\x09make it fresh and visible with a refresh\x22\x0a\x09\x0a\x09self ifAbsentAt: #things put: [\x0a\x09\x09ListController \x0a\x09\x09\x09on: self\x0a\x09\x09\x09appendingTo: '#things-wrapper' asJQuery ].\x0a\x09\x0a\x09(self controllerAt: #things) \x0a\x09\x09newItemControllerBlock: [ :item | \x0a\x09\x09\x09self newItemControllerFor: item for: (self controllerAt: #things) ];\x0a\x09\x09model: self getListModel;\x0a\x09\x09refresh",
referencedClasses: ["ListController"],
//>>excludeEnd("ide");
messageSends: ["ifAbsentAt:put:", "on:appendingTo:", "asJQuery", "newItemControllerBlock:", "controllerAt:", "newItemControllerFor:for:", "model:", "getListModel", "refresh"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "getListModel",
protocol: 'actions',
fn: function (){
var self=this;
var things;
function $ListModel(){return $globals.ListModel||(typeof ListModel=="undefined"?nil:ListModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
things=$recv($ListModel())._localFindId_("samples");
$1=things;
if(($receiver = $1) == null || $receiver.isNil){
things=self._newListModel();
things;
$recv(things)._do_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localSave"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(things)._localSave();
} else {
$1;
};
$2=things;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getListModel",{things:things},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getListModel\x0a\x09\x22Answers the list model of things\x22\x0a\x0a\x09| things |\x0a\x09 \x0a\x09\x22Load them from the local storage\x22\x0a\x09things := ListModel localFindId: 'samples'.\x0a\x09\x0a\x09things ifNil: [ \x0a\x09\x09\x22Oh, not found? then create and save some...\x22\x0a\x09\x09things := self newListModel.\x0a\x09\x09things do: [ :e | e localSave ].\x0a\x09\x09things localSave ].\x0a\x09\x0a\x09^ things",
referencedClasses: ["ListModel"],
//>>excludeEnd("ide");
messageSends: ["localFindId:", "ifNil:", "newListModel", "do:", "localSave"]
}),
$globals.Example4Controller);

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
$globals.Example4Controller.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._basicAt_put_("hasDetails",false);
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._ensureDetails();
self._ensureList();
self._updateNotEmpty();
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self basicAt: #hasDetails put: false.\x0a\x09\x0a\x09self when: #onAfterView do: [ \x0a\x09\x09self ensureDetails.\x0a\x09\x09self ensureList.\x0a\x09\x09self updateNotEmpty.\x0a\x09\x09self observeEvents ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "basicAt:put:", "when:do:", "ensureDetails", "ensureList", "updateNotEmpty", "observeEvents"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "newItemControllerFor:for:",
protocol: 'actions',
fn: function (aModel,aListController){
var self=this;
var row;
function $ThingRowController(){return $globals.ThingRowController||(typeof ThingRowController=="undefined"?nil:ThingRowController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
row=$recv($ThingRowController())._for_on_appendingTo_(aModel,aListController,$recv(aListController)._view());
$1=row;
$recv($1)._when_do_("removeThing",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onRemove_(aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["when:do:"]=1;
//>>excludeEnd("ctx");
$recv($1)._when_do_("viewDetails",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onDetails_(aModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._yourself();
$3=row;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newItemControllerFor:for:",{aModel:aModel,aListController:aListController,row:row},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel", "aListController"],
source: "newItemControllerFor: aModel for: aListController\x0a\x09\x22Returns a new controller for aModel to be handled by aListController.\x22\x0a\x0a\x09| row |\x0a\x0a\x09row := ThingRowController \x0a\x09\x09\x09\x09for: aModel\x0a\x09\x09\x09\x09on: aListController\x0a\x09\x09\x09\x09appendingTo: aListController view.\x0a\x09\x09\x09\x09\x0a\x09row\x0a\x09\x09when: #removeThing do: [ self onRemove: aModel ];\x0a\x09\x09when: #viewDetails do: [ self onDetails: aModel ];\x0a\x09\x09yourself.\x0a\x0a\x09^ row",
referencedClasses: ["ThingRowController"],
//>>excludeEnd("ide");
messageSends: ["for:on:appendingTo:", "view", "when:do:", "onRemove:", "onDetails:", "yourself"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "newListModel",
protocol: 'actions',
fn: function (){
var self=this;
function $ListModel(){return $globals.ListModel||(typeof ListModel=="undefined"?nil:ListModel)}
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1;
$2=$recv($ListModel())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($2)._list_($recv($recv(self._potentialNames())._shuffled())._collect_((function(aName){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($Thing())._new();
$recv($3)._name_(aName);
$4=$recv($3)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aName:aName},$ctx1,1)});
//>>excludeEnd("ctx");
})));
$5=$recv($2)._yourself();
$1=$5;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newListModel",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newListModel\x0a\x09\x22Answers a newly created list model of things (Thing sample instances).\x22\x0a\x09\x0a\x09^ ListModel new\x0a\x09\x09list: (self potentialNames shuffled collect: [ :aName |  \x0a\x09\x09\x09\x09Thing new \x0a\x09\x09\x09\x09\x09name: aName;\x0a\x09\x09\x09\x09\x09yourself ]);\x0a\x09\x09yourself",
referencedClasses: ["ListModel", "Thing"],
//>>excludeEnd("ide");
messageSends: ["list:", "new", "collect:", "shuffled", "potentialNames", "name:", "yourself"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv("#inspect-this"._asJQuery())._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09'#inspect-this' asJQuery on: 'click' do: [ self inspect ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:do:", "asJQuery", "inspect"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "onDetails:",
protocol: 'reactions',
fn: function (aThing){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._basicAt_put_("hasDetails",true);
$1=self._controllerAt_("details");
$recv($1)._model_(aThing);
$2=$recv($1)._refresh();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onDetails:",{aThing:aThing},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "onDetails: aThing\x0a\x0a\x09self basicAt: #hasDetails put: true.\x0a\x09\x0a\x09(self controllerAt: #details) model: aThing; refresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "model:", "controllerAt:", "refresh"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "onRemove:",
protocol: 'reactions',
fn: function (aThing){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._controllerAt_("things"))._model())._remove_(aThing);
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onRemove:",{aThing:aThing},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "onRemove: aThing\x0a\x0a\x09(self controllerAt: #things) model remove: aThing.\x0a\x0a\x09self updateNotEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "model", "controllerAt:", "updateNotEmpty"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "potentialNames",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["Galileo", "Newton", "Einstein", "Heisemberg", "Bohr", "Schrodinger", "Plank", "Neumann", "DeBroglie", "Feynman"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "potentialNames\x0a\x0a\x09^ #(\x0a\x09Galileo\x0a\x09Newton\x0a\x09Einstein\x0a\x09Heisemberg\x0a\x09Bohr\x0a\x09Schrodinger\x0a\x09Plank\x0a\x09Neumann\x0a\x09DeBroglie\x0a\x09Feynman\x0a\x09)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "removeThing",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self._controllerAt_("things"))._model())._removeLast();
self._updateNotEmpty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeThing",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeThing\x0a\x0a\x09(self controllerAt: #things) model removeLast.\x0a\x09\x0a\x09self updateNotEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeLast", "model", "controllerAt:", "updateNotEmpty"]
}),
$globals.Example4Controller);

$core.addMethod(
$core.method({
selector: "updateNotEmpty",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicAt_put_("notEmpty",$recv($recv(self._controllerAt_("things"))._model())._notEmpty());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateNotEmpty",{},$globals.Example4Controller)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateNotEmpty\x0a\x0a\x09self \x0a\x09\x09basicAt: #notEmpty \x0a\x09\x09put: (self controllerAt: #things) model notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicAt:put:", "notEmpty", "model", "controllerAt:"]
}),
$globals.Example4Controller);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Flow())._session();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.Example4Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x0a\x09^ Flow session",
referencedClasses: ["Flow"],
//>>excludeEnd("ide");
messageSends: ["session"]
}),
$globals.Example4Controller.klass);

$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anURI)._match_("^example4$");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anURI:anURI},$globals.Example4Controller.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09^ anURI match: '^example4$'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["match:"]
}),
$globals.Example4Controller.klass);


$core.addClass('MainController', $globals.TemplateController, [], 'App');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MainController.comment="##AppController\x0a\x0aThe AppController is the main/root controller of your flow-based application.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "highlightTitle",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($recv(self["@view"])._asJQuery())._find_("h1"))._effect_("highlight");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"highlightTitle",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "highlightTitle\x0a\x0a\x09(view asJQuery find: 'h1') effect: 'highlight'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["effect:", "find:", "asJQuery"]
}),
$globals.MainController);

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
$globals.MainController.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._when_do_("onAfterView",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._highlightTitle();
return self._observeEvents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._yourself();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09self \x0a\x09\x09when: #onAfterView do: [ \x0a\x09\x09\x09self highlightTitle.\x0a\x09\x09\x09self observeEvents ];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "when:do:", "highlightTitle", "observeEvents", "yourself"]
}),
$globals.MainController);

$core.addMethod(
$core.method({
selector: "observeEvents",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv($recv(self["@view"])._asJQuery())._find_("a#inspect-main"))._on_do_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._inspect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"observeEvents",{},$globals.MainController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "observeEvents\x0a\x0a\x09(view asJQuery find: 'a#inspect-main') on: 'click' do: [ self inspect ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:do:", "find:", "asJQuery", "inspect"]
}),
$globals.MainController);


$core.addMethod(
$core.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv(anURI)._match_("^/$");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["match:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(anURI)._match_("^home&");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["match:"]=2;
//>>excludeEnd("ctx");
return $recv($3)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(anURI)._match_("^$");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["or:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anURI:anURI},$globals.MainController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09^ (anURI match: '^/$') or: [\x0a\x09(anURI match: '^home&') or: [\x0a\x09(anURI match: '^$')]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "match:"]
}),
$globals.MainController.klass);


$core.addClass('ThingDetailsController', $globals.BindingController, [], 'App');


$core.addClass('ThingRowController', $globals.BindingController, [], 'App');
$core.addMethod(
$core.method({
selector: "removeThing",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("removeThing");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeThing",{},$globals.ThingRowController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeThing\x0a\x0a\x09self trigger: #removeThing",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.ThingRowController);

$core.addMethod(
$core.method({
selector: "viewDetails",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._trigger_("viewDetails");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"viewDetails",{},$globals.ThingRowController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewDetails\x0a\x0a\x09self trigger: #viewDetails",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:"]
}),
$globals.ThingRowController);


});
