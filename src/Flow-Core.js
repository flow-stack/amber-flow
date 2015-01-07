define("amber-flow/Flow-Core", ["amber/boot", "amber_core/Kernel-Objects", "minimapless/MiniMapless", "amber-flow/MVC-Models"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Flow-Core');
$core.packages["Flow-Core"].transport = {"type":"amd","amdNamespace":"amber-flow"};

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



$core.addClass('User', $globals.Model, [], 'Flow-Core');

});
