define("amber-flow/MVC-Models", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('MVC-Models');
$core.packages["MVC-Models"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('Model', $globals.Object, [], 'MVC-Models');


$core.addClass('ListModel', $globals.Model, ['list'], 'MVC-Models');
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
selector: "list",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@list"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "list\x0a\x0a\x09^ list",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
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
self["@list"]=aCollection;
self._changed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"list:",{aCollection:aCollection},$globals.ListModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "list: aCollection\x0a\x0a\x09list := aCollection.\x0a\x09\x0a\x09self changed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["changed"]
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


});
