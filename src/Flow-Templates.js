define("amber-amberflow/Flow-Templates", ["amber/boot", "amber-amberflow/Flow-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Flow-Templates');
$core.packages["Flow-Templates"].transport = {"type":"amd","amdNamespace":"amber-amberflow"};

$core.addClass('TemplateController', $globals.RouteableController, ['templateUri'], 'Flow-Templates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TemplateController.comment="## TemplateController is an abstraction\x0aThe concrete subclasses of TemplateController follow the convention of loading html from the server.\x0aThis convention uses the name of the controller without the \x22Controller\x22 suffix as the name of the template (in lowercase) to be found as a html file in the views/ directory.\x0a\x0aA typical interesting moment for this controllers is when they are actually finished loading and with the view set. You can observe the #onAfterView event to make it do things after it has the view loaded and set.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "flush",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
window.require.undef(self._templateUri());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flush",{},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flush\x0a\x09\x22Tells require to flush the potentially cached template (or do nothing if not loaded yet)\x22\x0a\x09<window.require.undef(self._templateUri())>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "initializeTemplateUri",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._viewPath();
$2=$recv($3).__comma($recv(self._class())._keyword());
self["@templateUri"]=$recv($2).__comma(".html");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=self["@templateUri"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeTemplateUri",{},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeTemplateUri\x0a\x09\x22Initilizes the templateUri on the convention that uses the first part of the controller name.\x22\x0a\x09^ templateUri := self class viewPath, self class keyword,'.html'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "viewPath", "class", "keyword"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(require)._value_value_($recv($Array())._with_(self._templateUri()),(function(template){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._setTemplate_(template);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({template:template},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09\x0a\x09require \x0a\x09\x09value: (Array with: self templateUri)\x0a\x09\x09value: [ :template | self setTemplate: template ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["value:value:", "with:", "templateUri", "setTemplate:"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "setTemplate:",
protocol: 'actions',
fn: function (htmlString){
var self=this;
var appended;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
appended=$recv(self._parentElement())._append_(htmlString);
self._view_($recv($recv(appended)._children())._last());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setTemplate:",{htmlString:htmlString,appended:appended},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["htmlString"],
source: "setTemplate: htmlString\x0a\x09\x22Receives the template's htmlString after requirejs \x0a\x09have received it from the server (or cache).\x22\x0a\x0a\x09| appended |\x0a\x0a\x09\x22Make it to be the contents of this controllers parent element\x22\x0a\x09appended := self parentElement append: htmlString.\x0a\x09\x0a\x09\x22And follow the convention that all templates are wrapped\x0a\x09in one element which is the view of this controller.\x22\x0a\x09self view: appended children last.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "parentElement", "view:", "last", "children"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "silentRenderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(require)._value_value_($recv($Array())._with_(self._templateUri()),(function(template){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._silentSetTemplate_(template);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({template:template},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentRenderOn:",{html:html},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "silentRenderOn: html\x0a\x0a\x09require \x0a\x09\x09value: (Array with: self templateUri)\x0a\x09\x09value: [ :template | self silentSetTemplate: template ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["value:value:", "with:", "templateUri", "silentSetTemplate:"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "silentSetTemplate:",
protocol: 'actions',
fn: function (htmlString){
var self=this;
var appended;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
appended=$recv(self._parentElement())._append_(htmlString);
self._silentView_($recv($recv(appended)._children())._last());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"silentSetTemplate:",{htmlString:htmlString,appended:appended},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["htmlString"],
source: "silentSetTemplate: htmlString\x0a\x09\x22Receives the template's htmlString after requirejs \x0a\x09have received it from the server (or cache).\x22\x0a\x0a\x09| appended |\x0a\x0a\x09\x22Make it to be the contents of this controllers parent element\x22\x0a\x09appended := self parentElement append: htmlString.\x0a\x09\x0a\x09\x22And follow the convention that all templates are wrapped\x0a\x09in one element which is the view of this controller.\x22\x0a\x09self silentView: appended children last.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "parentElement", "silentView:", "last", "children"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "templateName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._class())._viewPath()).__comma(aString)).__comma(".html");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._templateUri_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"templateName:",{aString:aString},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "templateName: aString\x0a\x0a\x09self templateUri: (self class viewPath, aString,'.html')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["templateUri:", ",", "viewPath", "class"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "templateUri",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@templateUri"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeTemplateUri();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"templateUri",{},$globals.TemplateController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "templateUri\x0a\x0a\x09^ templateUri ifNil:[ self initializeTemplateUri ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeTemplateUri"]
}),
$globals.TemplateController);

$core.addMethod(
$core.method({
selector: "templateUri:",
protocol: 'accessing',
fn: function (anUri){
var self=this;
self["@templateUri"]=anUri;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUri"],
source: "templateUri: anUri\x0a\x0a\x09templateUri := anUri",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TemplateController);


$core.addMethod(
$core.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $TemplateController(){return $globals.TemplateController||(typeof TemplateController=="undefined"?nil:TemplateController)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self.__eq($TemplateController());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},$globals.TemplateController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = TemplateController",
referencedClasses: ["TemplateController"],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.TemplateController.klass);

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
$1=$recv($recv(self._isAbstract())._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(anURI)._notEmpty())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(anURI).__eq(self._keyword());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anURI:anURI},$globals.TemplateController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09^ self isAbstract not and:[\x0a\x09anURI notEmpty and:[\x0a\x09anURI = self keyword ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "not", "isAbstract", "notEmpty", "=", "keyword"]
}),
$globals.TemplateController.klass);

$core.addMethod(
$core.method({
selector: "viewPath",
protocol: 'accessing',
fn: function (){
var self=this;
return "text!views/";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewPath\x0a\x09\x22Returns the path where the template of the view should be found\x22\x0a\x09\x0a\x09^ 'text!views/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TemplateController.klass);

});
