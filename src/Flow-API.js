define("amber-flow/Flow-API", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Exceptions", "minimapless/MiniMapless"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Flow-API');
$core.packages["Flow-API"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('APIClient', $globals.Object, ['rest', 'ws'], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.APIClient.comment="## APIClient\x0a\x0aThis is a client to the backend API\x0a\x0aProvides access to the expected REST and WebSocket API at the backend side. \x0a\x0aThis client also has knows which objects are being published locally so they can be used remotely";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "answerLocallyFor:",
protocol: 'actions',
fn: function (aWebSocketCommand){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._ws())._answerLocallyFor_(aWebSocketCommand);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"answerLocallyFor:",{aWebSocketCommand:aWebSocketCommand},$globals.APIClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand"],
source: "answerLocallyFor: aWebSocketCommand\x0a\x0a\x09self ws answerLocallyFor: aWebSocketCommand",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["answerLocallyFor:", "ws"]
}),
$globals.APIClient);

$core.addMethod(
$core.method({
selector: "connect",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._ws())._connect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connect",{},$globals.APIClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "connect\x0a\x0a\x09self ws connect",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect", "ws"]
}),
$globals.APIClient);

$core.addMethod(
$core.method({
selector: "initializeWs",
protocol: 'initialization',
fn: function (){
var self=this;
function $WebSocketAPI(){return $globals.WebSocketAPI||(typeof WebSocketAPI=="undefined"?nil:WebSocketAPI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($WebSocketAPI())._new();
$recv($2)._when_do_("commandReceived:",(function(cmd){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onCommand_(cmd);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({cmd:cmd},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=$recv($2)._yourself();
self["@ws"]=$3;
$1=self["@ws"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWs",{},$globals.APIClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeWs\x0a\x09\x22Initializes the WebSocket API\x22\x0a\x0a\x09^ ws := WebSocketAPI new\x0a\x09\x09\x09\x09when: 'commandReceived:' do:[ :cmd | self onCommand: cmd ];\x0a\x09\x09\x09\x09yourself",
referencedClasses: ["WebSocketAPI"],
//>>excludeEnd("ide");
messageSends: ["when:do:", "new", "onCommand:", "yourself"]
}),
$globals.APIClient);

$core.addMethod(
$core.method({
selector: "onCommand:",
protocol: 'reactions',
fn: function (aCommand){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCommand"],
source: "onCommand: aCommand\x0a\x09\x22There is aCommand being received here.\x0a\x09It could be from a remote initiative or \x0a\x09a response of something sent from this end.\x22\x0a\x09\x0a\x09\x22no-op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.APIClient);

$core.addMethod(
$core.method({
selector: "remoteAnswerFor:",
protocol: 'actions',
fn: function (aWebSocketCommand){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._ws())._remoteAnswerFor_(aWebSocketCommand);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remoteAnswerFor:",{aWebSocketCommand:aWebSocketCommand},$globals.APIClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand"],
source: "remoteAnswerFor: aWebSocketCommand\x0a\x0a\x09self ws remoteAnswerFor: aWebSocketCommand",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remoteAnswerFor:", "ws"]
}),
$globals.APIClient);

$core.addMethod(
$core.method({
selector: "remoteExceptionFor:",
protocol: 'actions',
fn: function (aWebSocketCommand){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._ws())._remoteExceptionFor_(aWebSocketCommand);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remoteExceptionFor:",{aWebSocketCommand:aWebSocketCommand},$globals.APIClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand"],
source: "remoteExceptionFor: aWebSocketCommand\x0a\x09\x22Answers the local error handler for aWebSocketCommand\x22\x0a\x0a\x09^ self ws remoteExceptionFor: aWebSocketCommand",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remoteExceptionFor:", "ws"]
}),
$globals.APIClient);

$core.addMethod(
$core.method({
selector: "rest",
protocol: 'accessing',
fn: function (){
var self=this;
function $RESTfulAPI(){return $globals.RESTfulAPI||(typeof RESTfulAPI=="undefined"?nil:RESTfulAPI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@rest"];
if(($receiver = $2) == null || $receiver.isNil){
self["@rest"]=$recv($RESTfulAPI())._new();
$1=self["@rest"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rest",{},$globals.APIClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rest\x0a\x0a\x09^ rest ifNil:[ rest := RESTfulAPI new ]",
referencedClasses: ["RESTfulAPI"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.APIClient);

$core.addMethod(
$core.method({
selector: "ws",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@ws"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeWs();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ws",{},$globals.APIClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ws\x0a\x0a\x09^ ws ifNil:[ self initializeWs ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeWs"]
}),
$globals.APIClient);



$core.addClass('APIError', $globals.Error, ['subject'], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.APIError.comment="## APIError\x0a\x0aThis exception is used when flow finds issues while communicating with the backend";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initializeOn:",
protocol: 'initialization',
fn: function (anObject){
var self=this;
self["@subject"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "initializeOn: anObject\x0a\x0a\x09subject := anObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.APIError);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'actions',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.APIError.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv("(".__comma($recv(self["@subject"])._asString())).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.APIError)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: '(',subject asString,')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", ",", "asString"]
}),
$globals.APIError);

$core.addMethod(
$core.method({
selector: "subject",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@subject"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "subject\x0a\x0a\x09^ subject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.APIError);

$core.addMethod(
$core.method({
selector: "subject:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@subject"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "subject: anObject\x0a\x0a\x09subject := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.APIError);


$core.addMethod(
$core.method({
selector: "for:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._initializeOn_(anObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{anObject:anObject},$globals.APIError.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "for: anObject\x0a\x0a\x09^ self new\x0a\x09\x09initializeOn: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeOn:", "new", "yourself"]
}),
$globals.APIError.klass);


$core.addClass('APIRemoteException', $globals.APIError, [], 'Flow-API');


$core.addClass('APIStrategy', $globals.Object, ['uri', 'apiPath'], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.APIStrategy.comment="## APIStrategy is an abstraction\x0a\x0aSee concrete subclasses of API for concrete backend interaction";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "apiPath",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@apiPath"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeAPIPath();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"apiPath",{},$globals.APIStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "apiPath\x0a\x0a\x09^ apiPath ifNil:[ self initializeAPIPath ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeAPIPath"]
}),
$globals.APIStrategy);

$core.addMethod(
$core.method({
selector: "apiPath:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@apiPath"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "apiPath: aString\x0a\x0a\x09apiPath := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.APIStrategy);

$core.addMethod(
$core.method({
selector: "isSSL",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._isSSL();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSSL",{},$globals.APIStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSSL\x0a\x09\x22Answers true if all this is going over SSL.\x22\x0a\x09\x0a\x09^ self class isSSL",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isSSL", "class"]
}),
$globals.APIStrategy);

$core.addMethod(
$core.method({
selector: "uri",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@uri"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeURI();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uri",{},$globals.APIStrategy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uri\x0a\x0a\x09^ uri ifNil:[ self initializeURI ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeURI"]
}),
$globals.APIStrategy);

$core.addMethod(
$core.method({
selector: "uri:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@uri"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "uri: aString\x0a\x0a\x09uri := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.APIStrategy);


$core.addMethod(
$core.method({
selector: "isSSL",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(window)._location())._protocol()).__eq("https:");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSSL",{},$globals.APIStrategy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSSL\x0a\x09\x22Answers true if all this is going over SSL.\x22\x0a\x09\x0a\x09^ window location protocol = 'https:'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "protocol", "location"]
}),
$globals.APIStrategy.klass);


$core.addClass('RESTfulAPI', $globals.APIStrategy, [], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RESTfulAPI.comment="## RESTfulAPI\x0a\x0aThis API follows the typical REST on http style";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "delete:do:onError:",
protocol: 'actions',
fn: function (anURLString,aBlock,errorBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._trigger_("aboutToAJAX");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
$recv(jQuery)._ajax_options_(anURLString,$globals.HashedCollection._newFromPairs_(["type","DELETE","contentType","text/json","complete",(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._trigger_("afterAJAX");
$1=$recv($recv(res)._status()).__eq((200));
if($core.assert($1)){
return $recv(aBlock)._value_($recv(res)._responseText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(errorBlock)._value_(res);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"delete:do:onError:",{anURLString:anURLString,aBlock:aBlock,errorBlock:errorBlock},$globals.RESTfulAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURLString", "aBlock", "errorBlock"],
source: "delete: anURLString do: aBlock onError: errorBlock\x0a\x0a\x09self trigger: 'aboutToAJAX'.\x0a\x0a\x09jQuery ajax: anURLString options: #{\x0a\x09\x09'type' -> 'DELETE'.\x0a\x09\x09'contentType' -> 'text/json'.\x0a\x09\x09'complete' -> [:res |\x0a\x09\x09\x09self trigger: 'afterAJAX'.\x0a\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09ifTrue: [ aBlock value: res responseText ]\x0a\x09\x09\x09\x09ifFalse: [ errorBlock value: res ] ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:", "ajax:options:", "ifTrue:ifFalse:", "=", "status", "value:", "responseText"]
}),
$globals.RESTfulAPI);

$core.addMethod(
$core.method({
selector: "get:do:onError:",
protocol: 'actions',
fn: function (anURLString,aBlock,errorBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._trigger_("aboutToAJAX");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
$recv(jQuery)._ajax_options_(anURLString,$globals.HashedCollection._newFromPairs_(["type","GET","contentType","text/json","complete",(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._trigger_("afterAJAX");
$1=$recv($recv(res)._status()).__eq((200));
if($core.assert($1)){
$2=$recv(res)._responseText();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["responseText"]=1;
//>>excludeEnd("ctx");
return $recv(aBlock)._value_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(errorBlock)._value_($recv(res)._responseText());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"get:do:onError:",{anURLString:anURLString,aBlock:aBlock,errorBlock:errorBlock},$globals.RESTfulAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURLString", "aBlock", "errorBlock"],
source: "get: anURLString do: aBlock onError: errorBlock\x0a\x0a\x09self trigger: 'aboutToAJAX'.\x0a\x0a\x09jQuery ajax: anURLString options: #{\x0a\x09\x09'type' -> 'GET'.\x0a\x09\x09'contentType' -> 'text/json'.\x0a\x09\x09'complete' -> [:res |\x0a\x09\x09\x09self trigger: 'afterAJAX'.\x0a\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09ifTrue: [ aBlock value: res responseText ]\x0a\x09\x09\x09\x09ifFalse: [ errorBlock value: res responseText ] ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:", "ajax:options:", "ifTrue:ifFalse:", "=", "status", "value:", "responseText"]
}),
$globals.RESTfulAPI);

$core.addMethod(
$core.method({
selector: "initializeAPIPath",
protocol: 'initialization',
fn: function (){
var self=this;
var $1;
self["@apiPath"]="api/1.0";
$1=self["@apiPath"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeAPIPath\x0a\x0a\x09^ apiPath := 'api/1.0'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RESTfulAPI);

$core.addMethod(
$core.method({
selector: "initializeURI",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$11,$10,$9,$13,$12,$8,$7,$16,$15,$14,$6,$5,$17,$19,$18,$1;
$4=$recv(window)._location();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["location"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._hostname();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hostname"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq("localhost");
if($core.assert($2)){
$11=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$10=$recv($11)._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["protocol"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__comma("//");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$13=$recv(window)._location();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["location"]=2;
//>>excludeEnd("ctx");
$12=$recv($13)._hostname();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hostname"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$7=$recv($8).__comma(":");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$16=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$15=$recv($16)._port();
$14=$recv($15)._asString();
$6=$recv($7).__comma($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$17=self._apiPath();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["apiPath"]=1;
//>>excludeEnd("ctx");
self["@uri"]=$recv($5).__comma($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=self["@uri"];
} else {
$19=$recv($recv($recv(self._class())._protocol()).__comma("//")).__comma($recv($recv(window)._location())._hostname());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
$18=$recv($19).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
self["@uri"]=$recv($18).__comma(self._apiPath());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$1=self["@uri"];
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeURI",{},$globals.RESTfulAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeURI\x0a\x0a\x09^ window location hostname = 'localhost' \x0a\x09\x09ifTrue:[ uri := self class protocol,'//',window location hostname,':',self class port asString,'/', self apiPath]\x0a\x09\x09ifFalse:[ uri := self class protocol,'//',window location hostname, '/', self apiPath]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "hostname", "location", ",", "protocol", "class", "asString", "port", "apiPath"]
}),
$globals.RESTfulAPI);

$core.addMethod(
$core.method({
selector: "post:data:do:onError:",
protocol: 'actions',
fn: function (anURLString,aDataString,aBlock,errorBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._trigger_("aboutToAJAX");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
$recv(jQuery)._ajax_options_(anURLString,$globals.HashedCollection._newFromPairs_(["type","POST","contentType","text/json","data",aDataString,"complete",(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._trigger_("afterAJAX");
$1=$recv($recv(res)._status()).__eq((200));
if($core.assert($1)){
return $recv(aBlock)._value_($recv(res)._responseText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(errorBlock)._value_(res);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"post:data:do:onError:",{anURLString:anURLString,aDataString:aDataString,aBlock:aBlock,errorBlock:errorBlock},$globals.RESTfulAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURLString", "aDataString", "aBlock", "errorBlock"],
source: "post: anURLString data: aDataString do: aBlock onError: errorBlock\x0a\x0a\x09self trigger: 'aboutToAJAX'.\x0a\x0a\x09jQuery ajax: anURLString options: #{\x0a\x09\x09'type' -> 'POST'.\x0a\x09\x09'contentType' -> 'text/json'.\x0a\x09\x09'data' -> aDataString.\x0a\x09\x09'complete' -> [:res |\x0a\x09\x09\x09self trigger: 'afterAJAX'.\x0a\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09ifTrue: [ aBlock value: res responseText ]\x0a\x09\x09\x09\x09ifFalse: [ errorBlock value: res ] ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:", "ajax:options:", "ifTrue:ifFalse:", "=", "status", "value:", "responseText"]
}),
$globals.RESTfulAPI);

$core.addMethod(
$core.method({
selector: "put:data:do:onError:",
protocol: 'actions',
fn: function (anURLString,aDataString,aBlock,errorBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._trigger_("aboutToAJAX");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trigger:"]=1;
//>>excludeEnd("ctx");
$recv(jQuery)._ajax_options_(anURLString,$globals.HashedCollection._newFromPairs_(["type","PUT","contentType","text/json","data",aDataString,"complete",(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._trigger_("afterAJAX");
$1=$recv($recv(res)._status()).__eq((200));
if($core.assert($1)){
return $recv(aBlock)._value_($recv(res)._responseText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(errorBlock)._value_(res);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"put:data:do:onError:",{anURLString:anURLString,aDataString:aDataString,aBlock:aBlock,errorBlock:errorBlock},$globals.RESTfulAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anURLString", "aDataString", "aBlock", "errorBlock"],
source: "put: anURLString data: aDataString do: aBlock onError: errorBlock\x0a\x0a\x09self trigger: 'aboutToAJAX'.\x0a\x0a\x09jQuery ajax: anURLString options: #{\x0a\x09\x09'type' -> 'PUT'.\x0a\x09\x09'contentType' -> 'text/json'.\x0a\x09\x09'data' -> aDataString.\x0a\x09\x09'complete' -> [:res |\x0a\x09\x09\x09self trigger: 'afterAJAX'.\x0a\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09ifTrue: [ aBlock value: res responseText ]\x0a\x09\x09\x09\x09ifFalse: [ errorBlock value: res ] ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trigger:", "ajax:options:", "ifTrue:ifFalse:", "=", "status", "value:", "responseText"]
}),
$globals.RESTfulAPI);


$core.addMethod(
$core.method({
selector: "protocol",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._isSSL();
if($core.assert($2)){
$1="https:";
} else {
$1="http:";
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocol",{},$globals.RESTfulAPI.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocol\x0a\x0a\x09^ self isSSL\x0a\x09\x09ifTrue:[ 'https:' ]\x0a\x09\x09ifFalse:[ 'http:' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isSSL"]
}),
$globals.RESTfulAPI.klass);


$core.addClass('WebSocketAPI', $globals.APIStrategy, ['socket', 'onOpenBlock', 'onCloseBlock', 'onMessageBlock', 'onErrorBlock', 'counter', 'localAnswers', 'localErrors', 'published'], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.WebSocketAPI.comment="## WebSocketAPI\x0a\x0aThis API is WebSockets based (so is full-duplex)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "answerLocallyFor:",
protocol: 'actions',
fn: function (aWebSocketCommand){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._basicAnswerLocallyFor_(aWebSocketCommand);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onError_for_(x,aWebSocketCommand);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"answerLocallyFor:",{aWebSocketCommand:aWebSocketCommand},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand"],
source: "answerLocallyFor: aWebSocketCommand\x0a\x09\x22Executes the callback waiting for this command's answer.\x0a\x09Or, executes the error handler if an exception happens.\x22\x0a\x09\x09\x0a\x09[ self basicAnswerLocallyFor: aWebSocketCommand ]\x0a\x09\x09on: Error\x0a\x09\x09do:[ :x | self onError: x for: aWebSocketCommand ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "basicAnswerLocallyFor:", "onError:for:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "basicAnswerLocallyFor:",
protocol: 'actions',
fn: function (aWebSocketCommand){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
var $early={};
try {
$recv(aWebSocketCommand)._onAboutToAnswer();
$2=self._localAnswers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localAnswers"]=1;
//>>excludeEnd("ctx");
$3=$recv(aWebSocketCommand)._fId();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fId"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_ifAbsent_($3,(function(){
throw $early=[nil];

}));
$recv($1)._value_(aWebSocketCommand);
$recv(self._localAnswers())._removeKey_ifAbsent_($recv(aWebSocketCommand)._fId(),(function(){

}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicAnswerLocallyFor:",{aWebSocketCommand:aWebSocketCommand},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand"],
source: "basicAnswerLocallyFor: aWebSocketCommand\x0a\x09\x22Executes the callback waiting for this command's answer.\x0a\x09It's done by evaluating the callback waiting for aWebSocketCommand.\x0a\x09It also removes it from the dictionary because is not pending for it anymore.\x22\x0a\x09\x09\x0a\x09aWebSocketCommand onAboutToAnswer.\x0a\x09\x0a\x09(self localAnswers \x0a\x09\x09at: aWebSocketCommand fId\x0a\x09\x09ifAbsent:[ ^ nil ]) value: aWebSocketCommand.\x0a\x0a\x09self localAnswers \x0a\x09\x09removeKey: aWebSocketCommand fId\x0a\x09\x09ifAbsent:[ ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAboutToAnswer", "value:", "at:ifAbsent:", "localAnswers", "fId", "removeKey:ifAbsent:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "connect",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isConnected();
if($core.assert($1)){
return self;
};
self._initializeSocket();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connect",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "connect\x0a\x09\x22Makes a connection.\x0a\x09Remarks:\x0a\x091. if connected already, it will do nothing\x0a\x092. it will disconnect if there is an unconnected socket.\x22\x0a\x0a\x09self isConnected ifTrue:[ ^self ].\x0a\x09\x0a\x09self initializeSocket.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isConnected", "initializeSocket"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "counter",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@counter"];
if(($receiver = $2) == null || $receiver.isNil){
self["@counter"]=(1);
$1=self["@counter"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"counter",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "counter\x0a\x09\x22Answers the counter used in the ids the commands (instead of less compact UUIDs)\x22\x0a\x0a\x09^ counter ifNil:[ counter := 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "disconnect",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._hasSocket();
if($core.assert($1)){
$recv(self["@socket"])._close();
self._reset();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"disconnect",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "disconnect\x0a\x09\x22Disconnects the web socket.\x0a\x09No fail if there is none\x22\x0a\x09\x0a\x09self hasSocket ifTrue:[\x0a\x09\x09socket close.\x0a\x09\x09self reset]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "hasSocket", "close", "reset"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "errorAbout:",
protocol: 'actions',
fn: function (anException){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(anException)._signal();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorAbout:",{anException:anException},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anException"],
source: "errorAbout: anException\x0a\x0a\x09^ anException signal",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["signal"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "hasSocket",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@socket"])._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasSocket",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasSocket\x0a\x0a\x09^ socket notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "initializeAPIPath",
protocol: 'initialization',
fn: function (){
var self=this;
var $1;
self["@apiPath"]="ws";
$1=self["@apiPath"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeAPIPath\x0a\x0a\x09^ apiPath := 'ws'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "initializeSocket",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._newWebSocketOn_(self._uri());
$recv($2)._onopen_(self._onOpenBlock());
$recv($2)._onclose_(self._onCloseBlock());
$recv($2)._onmessage_(self._onMessageBlock());
$recv($2)._onerror_(self._onErrorBlock());
$3=$recv($2)._yourself();
self["@socket"]=$3;
$1=self["@socket"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSocket",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeSocket\x0a\x09\x0a\x09^ socket := (self newWebSocketOn: self uri)\x0a\x09\x09\x09\x09\x09onopen: self onOpenBlock;\x0a\x09\x09\x09\x09\x09onclose: self onCloseBlock;\x0a\x09\x09\x09\x09\x09onmessage: self onMessageBlock;\x0a\x09\x09\x09\x09\x09onerror: self onErrorBlock;\x0a\x09\x09\x09\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onopen:", "newWebSocketOn:", "uri", "onOpenBlock", "onclose:", "onCloseBlock", "onmessage:", "onMessageBlock", "onerror:", "onErrorBlock", "yourself"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "initializeURI",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$11,$10,$9,$13,$12,$8,$7,$16,$15,$14,$6,$5,$17,$19,$18,$1;
$4=$recv(window)._location();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["location"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._hostname();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hostname"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq("localhost");
if($core.assert($2)){
$11=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$10=$recv($11)._protocol();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["protocol"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__comma("//");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$13=$recv(window)._location();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["location"]=2;
//>>excludeEnd("ctx");
$12=$recv($13)._hostname();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["hostname"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$7=$recv($8).__comma(":");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$16=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$15=$recv($16)._port();
$14=$recv($15)._asString();
$6=$recv($7).__comma($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$17=self._apiPath();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["apiPath"]=1;
//>>excludeEnd("ctx");
self["@uri"]=$recv($5).__comma($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=self["@uri"];
} else {
$19=$recv($recv($recv(self._class())._protocol()).__comma("//")).__comma($recv($recv(window)._location())._hostname());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
$18=$recv($19).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
self["@uri"]=$recv($18).__comma(self._apiPath());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$1=self["@uri"];
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeURI",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeURI\x0a\x0a\x09^ window location hostname = 'localhost' \x0a\x09\x09ifTrue:[ uri := self class protocol,'//',window location hostname,':',self class port asString,'/',self apiPath ]\x0a\x09\x09ifFalse:[ uri := self class protocol,'//',window location hostname, '/',self apiPath ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "hostname", "location", ",", "protocol", "class", "asString", "port", "apiPath"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "isConnected",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._hasSocket())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self["@socket"])._readyState()).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isConnected",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isConnected\x0a\x0a\x09^ self hasSocket and:[\x0a\x09socket readyState = 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "hasSocket", "=", "readyState"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "isDisconnected",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._hasSocket())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self["@socket"])._readyState()).__tild_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDisconnected",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDisconnected\x0a\x0a\x09^ self hasSocket or:[\x0a\x09socket readyState ~= 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "hasSocket", "~=", "readyState"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "localAnswers",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@localAnswers"];
if(($receiver = $2) == null || $receiver.isNil){
self["@localAnswers"]=$recv($Dictionary())._new();
$1=self["@localAnswers"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAnswers",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "localAnswers\x0a\x09\x22Returns the dictionary of callbacks that are waiting for its commands' answer.\x0a\x09The convention is to use the ids provided by the counter in the keys\x0a\x09and the callbacks in the values.\x22\x0a\x09\x0a\x09^ localAnswers ifNil:[ localAnswers := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "localErrorFor:",
protocol: 'accessing',
fn: function (aWebSocketCommand){
var self=this;
var callback;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$1=self._localErrors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localErrors"]=1;
//>>excludeEnd("ctx");
$2=$recv(aWebSocketCommand)._fId();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fId"]=1;
//>>excludeEnd("ctx");
callback=$recv($1)._at_ifAbsent_($2,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv("No error callback found for \x22".__comma($recv(aWebSocketCommand)._asString())).__comma("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return self._error_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=self._localErrors();
$5=$recv(aWebSocketCommand)._fId();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fId"]=2;
//>>excludeEnd("ctx");
$recv($4)._removeKey_ifAbsent_($5,(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeKey:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$recv(self._localAnswers())._removeKey_ifAbsent_($recv(aWebSocketCommand)._fId(),(function(){
return nil;

}));
$6=callback;
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localErrorFor:",{aWebSocketCommand:aWebSocketCommand,callback:callback},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand"],
source: "localErrorFor: aWebSocketCommand\x0a\x09\x22Returns the local error handler (or complain about the lack of one).\x0a\x09Removes both, the error handler and the normal callback.\x22\x0a\x09\x0a\x09| callback |\x0a\x09\x0a\x09callback := self localErrors  \x0a\x09\x09at: aWebSocketCommand fId\x0a\x09\x09ifAbsent:[ self error: 'No error callback found for \x22', aWebSocketCommand asString,'\x22' ].\x0a\x0a\x09self localErrors \x0a\x09\x09removeKey: aWebSocketCommand fId\x0a\x09\x09ifAbsent:[ nil ].\x0a\x09\x09\x0a\x09self localAnswers \x0a\x09\x09removeKey: aWebSocketCommand fId\x0a\x09\x09ifAbsent:[ nil ].\x0a\x09\x09\x0a\x09^ callback",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "localErrors", "fId", "error:", ",", "asString", "removeKey:ifAbsent:", "localAnswers"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "localErrors",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@localErrors"];
if(($receiver = $2) == null || $receiver.isNil){
self["@localErrors"]=$recv($Dictionary())._new();
$1=self["@localErrors"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localErrors",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "localErrors\x0a\x09\x22Returns the dictionary of callbacks that are waiting for\x0a\x09its commands' answer reacting when (and if) they are an exception.\x0a\x09The convention is to use the ids provided by the counter in the keys\x0a\x09and the callbacks in the values.\x22\x0a\x09\x0a\x09^ localErrors ifNil:[ localErrors := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "newBadCommandOn:",
protocol: 'actions',
fn: function (aWebSocketEvent){
var self=this;
function $BadCommand(){return $globals.BadCommand||(typeof BadCommand=="undefined"?nil:BadCommand)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($BadCommand())._new();
$recv($2)._problematic_($recv(aWebSocketEvent)._data());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newBadCommandOn:",{aWebSocketEvent:aWebSocketEvent},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketEvent"],
source: "newBadCommandOn: aWebSocketEvent  \x0a\x09\x22Answers a new instance of BadCommand based on aWebSocketEvent.\x22\x0a\x0a\x09^ BadCommand new\x0a\x09\x09problematic: aWebSocketEvent data;\x0a\x09\x09yourself",
referencedClasses: ["BadCommand"],
//>>excludeEnd("ide");
messageSends: ["problematic:", "new", "data", "yourself"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "newWebSocketOn:",
protocol: 'actions',
fn: function (anUri){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new WebSocket(anUri);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWebSocketOn:",{anUri:anUri},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUri"],
source: "newWebSocketOn: anUri\x0a\x0a\x09<return new WebSocket(anUri)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "nextId",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@counter"]=$recv(self._counter()).__plus((1));
$1=self["@counter"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextId",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextId\x0a\x09\x22Increments the counter and answers the value.\x22\x0a\x09\x0a\x09^ counter := self counter + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "counter"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onCloseBlock",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@onCloseBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@onCloseBlock"]=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._reset();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
});
$1=self["@onCloseBlock"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onCloseBlock",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onCloseBlock\x0a\x0a\x09^ onCloseBlock ifNil:[ onCloseBlock := [ self reset ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "reset"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onCloseBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onCloseBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onCloseBlock: aBlock\x0a\x0a\x09onCloseBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onError:for:",
protocol: 'reactions',
fn: function (anException,aWebSocketCommand){
var self=this;
var callback;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=self._localErrors();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localErrors"]=1;
//>>excludeEnd("ctx");
$2=$recv(aWebSocketCommand)._fId();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fId"]=1;
//>>excludeEnd("ctx");
callback=$recv($1)._at_ifAbsent_($2,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv("No error callback found for \x22".__comma($recv(aWebSocketCommand)._asString())).__comma("\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return self._error_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=self._localErrors();
$5=$recv(aWebSocketCommand)._fId();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fId"]=2;
//>>excludeEnd("ctx");
$recv($4)._removeKey_ifAbsent_($5,(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["removeKey:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$recv(self._localAnswers())._removeKey_ifAbsent_($recv(aWebSocketCommand)._fId(),(function(){
return nil;

}));
$recv(callback)._value_(anException);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onError:for:",{anException:anException,aWebSocketCommand:aWebSocketCommand,callback:callback},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anException", "aWebSocketCommand"],
source: "onError: anException for: aWebSocketCommand\x0a\x09\x22Reacts to anException with the callback that is \x0a\x09registered for aWebSocketCommand.\x22\x0a\x0a\x09| callback |\x0a\x09\x0a\x09callback := self localErrors  \x0a\x09\x09at: aWebSocketCommand fId\x0a\x09\x09ifAbsent:[ self error: 'No error callback found for \x22', aWebSocketCommand asString,'\x22' ].\x0a\x0a\x09self localErrors \x0a\x09\x09removeKey: aWebSocketCommand fId\x0a\x09\x09ifAbsent:[ nil ].\x0a\x09\x09\x0a\x09self localAnswers \x0a\x09\x09removeKey: aWebSocketCommand fId\x0a\x09\x09ifAbsent:[ nil ].\x0a\x0a\x09callback value: anException",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "localErrors", "fId", "error:", ",", "asString", "removeKey:ifAbsent:", "localAnswers", "value:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onErrorBlock",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@onErrorBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@onErrorBlock"]=(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
});
$1=self["@onErrorBlock"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onErrorBlock",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onErrorBlock\x0a\x0a\x09^ onErrorBlock ifNil:[ onErrorBlock := [ :x | x signal ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "signal"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onErrorBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onErrorBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onErrorBlock: aBlock\x0a\x0a\x09onErrorBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onMessage:",
protocol: 'reactions',
fn: function (anEvent){
var self=this;
var command;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $WebSocketCommand(){return $globals.WebSocketCommand||(typeof WebSocketCommand=="undefined"?nil:WebSocketCommand)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$recv($Transcript())._cr();
$1=$recv($Transcript())._show_($recv(anEvent)._data());
command=$recv($WebSocketCommand())._for_(anEvent);
$2=command;
if(($receiver = $2) == null || $receiver.isNil){
command=self._newBadCommandOn_(anEvent);
command;
} else {
$2;
};
self._trigger_with_("commandReceived:",command);
$recv(command)._receivedOn_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMessage:",{anEvent:anEvent,command:command},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "onMessage: anEvent\x0a\x0a\x09| command |\x0a\x0a\x09Transcript cr; show: anEvent data.\x0a\x09command := WebSocketCommand for: anEvent.\x0a\x09command ifNil:[ command := self newBadCommandOn: anEvent ].\x0a\x0a\x09self trigger: 'commandReceived:' with: command.\x0a\x09command receivedOn: self",
referencedClasses: ["Transcript", "WebSocketCommand"],
//>>excludeEnd("ide");
messageSends: ["cr", "show:", "data", "for:", "ifNil:", "newBadCommandOn:", "trigger:with:", "receivedOn:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onMessageBlock",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@onMessageBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@onMessageBlock"]=(function(anEvent){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onMessage_(anEvent);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({anEvent:anEvent},$ctx1,2)});
//>>excludeEnd("ctx");
});
$1=self["@onMessageBlock"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMessageBlock",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onMessageBlock\x0a\x0a\x09^ onMessageBlock ifNil:[ onMessageBlock := [:anEvent | self onMessage: anEvent ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "onMessage:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onMessageBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onMessageBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMessageBlock: aBlock\x0a\x0a\x09onMessageBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onOpenBlock",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@onOpenBlock"];
if(($receiver = $2) == null || $receiver.isNil){
self["@onOpenBlock"]=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._trigger_("webSocketConnected");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
});
$1=self["@onOpenBlock"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onOpenBlock",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onOpenBlock\x0a\x0a\x09^ onOpenBlock ifNil:[ onOpenBlock := [ self trigger: 'webSocketConnected' ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "trigger:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "onOpenBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onOpenBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onOpenBlock: aBlock\x0a\x0a\x09onOpenBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "publish:",
protocol: 'actions',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._publish_at_(anObject,$recv(anObject)._id());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"publish:",{anObject:anObject},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "publish: anObject \x0a\x09\x22Holds anObject among those exposed to receive remote messages.\x22\x0a\x09^ self publish: anObject at: anObject id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["publish:at:", "id"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "publish:at:",
protocol: 'actions',
fn: function (anObject,anId){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._published())._at_put_(anId,anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"publish:at:",{anObject:anObject,anId:anId},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anId"],
source: "publish: anObject at: anId\x0a\x09\x22Holds anObject among those exposed to receive remote messages.\x22\x0a\x09^ self published at: anId put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "published"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "published",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@published"];
if(($receiver = $2) == null || $receiver.isNil){
self["@published"]=$recv($Dictionary())._new();
$1=self["@published"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"published",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "published\x0a\x09\x22Answers the dictionary holding the published objects \x0a\x09in 'this smalltalk' environment.\x0a\x09Keys can be the instance's hash, a Mapless UUID, etc.\x0a\x09Values are the instances receiving messages from remote.\x22\x0a\x09^ published ifNil:[ published := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "remoteAnswerFor:",
protocol: 'actions',
fn: function (aWebSocketCommand){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._sendCommand_(aWebSocketCommand);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remoteAnswerFor:",{aWebSocketCommand:aWebSocketCommand},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand"],
source: "remoteAnswerFor: aWebSocketCommand\x0a\x09\x22Sends aWebSocketCommand to the other end.\x22\x0a\x09\x0a\x09self sendCommand: aWebSocketCommand",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sendCommand:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "remoteAnswerFor:onError:",
protocol: 'actions',
fn: function (aWebSocketCommand,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._sendCommand_onError_(aWebSocketCommand,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remoteAnswerFor:onError:",{aWebSocketCommand:aWebSocketCommand,aBlock:aBlock},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand", "aBlock"],
source: "remoteAnswerFor: aWebSocketCommand onError: aBlock\x0a\x09\x22Sends aWebSocketCommand to the other end.\x22\x0a\x09\x0a\x09self sendCommand: aWebSocketCommand onError: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sendCommand:onError:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "remoteReferenceFor:",
protocol: 'actions',
fn: function (anObject){
var self=this;
var ref;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
self._nextId();
ref=$recv(anObject)._asRemoteReference();
$1=$recv(ref)._isRemoteReference();
if($core.assert($1)){
var anId;
anId=$recv(self._published())._keyAtValue_ifAbsent_(anObject,(function(){
return nil;

}));
anId;
$2=$recv(anId)._isNil();
if($core.assert($2)){
$recv(ref)._id_(self._counter());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=1;
//>>excludeEnd("ctx");
self._publish_at_(anObject,$recv(ref)._id());
} else {
$recv(ref)._id_(anId);
};
};
$3=ref;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remoteReferenceFor:",{anObject:anObject,ref:ref},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "remoteReferenceFor: anObject\x0a\x09\x22Answers a remote reference for anObject in this API or\x0a\x09a copy if the object is simple enough to travel as copy.\x0a\x09If reference, it'll keep it among those published.\x22\x0a\x0a\x09| ref |\x09\x0a\x0a\x09self nextId.\x0a\x09\x0a\x09ref := anObject asRemoteReference.\x0a\x09ref isRemoteReference ifTrue:[ | anId |\x0a\x09\x09anId := self published keyAtValue: anObject ifAbsent: [ nil ].\x0a\x09\x09anId isNil \x0a\x09\x09\x09ifTrue:[\x0a\x09\x09\x09\x09ref id: self counter.\x09\x09\x0a\x09\x09\x09\x09self publish: anObject at: ref id ]\x0a\x09\x09\x09ifFalse:[ ref id: anId ] ].\x0a\x09\x09\x0a\x09^ ref",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextId", "asRemoteReference", "ifTrue:", "isRemoteReference", "keyAtValue:ifAbsent:", "published", "ifTrue:ifFalse:", "isNil", "id:", "counter", "publish:at:", "id"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'actions',
fn: function (){
var self=this;
self["@socket"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09\x09\x0a\x09socket := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "sendCommand:",
protocol: 'actions',
fn: function (aWebSocketCommand){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._sendCommand_onError_(aWebSocketCommand,(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._errorAbout_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommand:",{aWebSocketCommand:aWebSocketCommand},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand"],
source: "sendCommand: aWebSocketCommand\x0a\x09\x22Sends aWebSocketCommand to the other side of the wire.\x0a\x09Will throw an APIError if an exception happens\x22\x0a\x09\x0a\x09^ self \x0a\x09\x09sendCommand: aWebSocketCommand\x0a\x09\x09onError:[ :x | self errorAbout: x ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sendCommand:onError:", "errorAbout:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "sendCommand:do:",
protocol: 'actions',
fn: function (aCommand,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._sendCommand_do_onError_(aCommand,aBlock,(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._errorAbout_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommand:do:",{aCommand:aCommand,aBlock:aBlock},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCommand", "aBlock"],
source: "sendCommand: aCommand do: aBlock\x0a\x09\x22Sends aCommand to the other side of the wire.\x0a\x09Evaluates aBlock when the answer arrives.\x22\x0a\x09\x0a\x09^ self \x0a\x09\x09sendCommand: aCommand \x0a\x09\x09do: aBlock\x0a\x09\x09onError: [ :x | self errorAbout: x ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sendCommand:do:onError:", "errorAbout:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "sendCommand:do:onError:",
protocol: 'actions',
fn: function (aWebSocketCommand,anAnswerBlock,aBlock){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(aWebSocketCommand)._isFromBackend();
if(!$core.assert($1)){
self._nextId();
$2=self._counter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["counter"]=1;
//>>excludeEnd("ctx");
$recv(aWebSocketCommand)._fId_($2);
$3=self._localAnswers();
$4=self._counter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["counter"]=2;
//>>excludeEnd("ctx");
$recv($3)._at_put_($4,anAnswerBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(self._localErrors())._at_put_(self._counter(),aBlock);
};
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(aWebSocketCommand)._onAboutToSend();
$recv(self._socket())._send_($recv(aWebSocketCommand)._asJSONString());
return $recv(aWebSocketCommand)._onAfterSent();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onError_for_(x,aWebSocketCommand);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommand:do:onError:",{aWebSocketCommand:aWebSocketCommand,anAnswerBlock:anAnswerBlock,aBlock:aBlock},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWebSocketCommand", "anAnswerBlock", "aBlock"],
source: "sendCommand: aWebSocketCommand do: anAnswerBlock onError: aBlock\x0a\x09\x22Sends aWebSocketCommand to the other side of the wire.\x0a\x09Registers anAnswerBlock to be evaluated later when the answer arrives.\x0a\x09Evaluates aBlock if there is an exception while doing it.\x22\x0a\x09\x0a\x09aWebSocketCommand isFromBackend ifFalse:[ \x0a\x09\x09self nextId.\x0a\x09\x09\x22Marks the commandwith a frontend's id.\x22\x0a\x09\x09aWebSocketCommand fId: self counter.\x0a\x09\x09self localAnswers at: self counter put: anAnswerBlock.\x0a\x09\x09self localErrors at: self counter put: aBlock ].\x0a\x09\x0a\x09[ aWebSocketCommand onAboutToSend.\x0a\x09self socket send: aWebSocketCommand asJSONString.\x0a\x09aWebSocketCommand onAfterSent ]\x0a\x09\x09on: Error\x0a\x09\x09do:[ :x | self onError: x for: aWebSocketCommand ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isFromBackend", "nextId", "fId:", "counter", "at:put:", "localAnswers", "localErrors", "on:do:", "onAboutToSend", "send:", "socket", "asJSONString", "onAfterSent", "onError:for:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "sendCommand:onError:",
protocol: 'actions',
fn: function (aCommand,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._sendCommand_do_onError_(aCommand,(function(){

}),aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendCommand:onError:",{aCommand:aCommand,aBlock:aBlock},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCommand", "aBlock"],
source: "sendCommand: aCommand onError: aBlock\x0a\x09\x22Sends aCommand to the other side of the wire.\x0a\x09Evaluates aBlock if there is an exception while doing it.\x22\x0a\x09\x0a\x09^ self \x0a\x09\x09sendCommand: aCommand \x0a\x09\x09do: [ \x22ignoring answer\x22 ] \x0a\x09\x09onError: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sendCommand:do:onError:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "sendMessage:on:",
protocol: 'actions',
fn: function (aMessage,aRemoteObject){
var self=this;
function $RMS(){return $globals.RMS||(typeof RMS=="undefined"?nil:RMS)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._sendCommand_do_onError_($recv($RMS())._to_send_withAll_($recv(aRemoteObject)._id(),$recv(aMessage)._selector(),$recv(aMessage)._arguments()),(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(aRemoteObject)._future();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["future"]=1;
//>>excludeEnd("ctx");
return $recv($1)._resolve_(ans);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ans:ans},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(aRemoteObject)._future())._at_("fail"))._value_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return aRemoteObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendMessage:on:",{aMessage:aMessage,aRemoteObject:aRemoteObject},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage", "aRemoteObject"],
source: "sendMessage: aMessage on: aRemoteObject\x0a\x09\x22Sends aMessage to aRemoteObject.\x22\x0a\x0a\x09self \x0a\x09\x09sendCommand: (RMS to: aRemoteObject id send: aMessage selector withAll: aMessage arguments)\x0a\x09\x09do: [ :ans | aRemoteObject future resolve: ans ]\x0a\x09\x09onError: [ :x | (aRemoteObject future at: 'fail') value: x ].\x0a\x09\x09\x0a\x09^ aRemoteObject",
referencedClasses: ["RMS"],
//>>excludeEnd("ide");
messageSends: ["sendCommand:do:onError:", "to:send:withAll:", "id", "selector", "arguments", "resolve:", "future", "value:", "at:"]
}),
$globals.WebSocketAPI);

$core.addMethod(
$core.method({
selector: "socket",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@socket"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeSocket();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"socket",{},$globals.WebSocketAPI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "socket\x0a\x0a\x09^ socket ifNil:[ self initializeSocket ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeSocket"]
}),
$globals.WebSocketAPI);


$core.addMethod(
$core.method({
selector: "port",
protocol: 'accessing',
fn: function (){
var self=this;
return (3333);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "port\x0a\x0a\x09^ 3333",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketAPI.klass);

$core.addMethod(
$core.method({
selector: "protocol",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._isSSL();
if($core.assert($2)){
$1="wss:";
} else {
$1="ws:";
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"protocol",{},$globals.WebSocketAPI.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "protocol\x0a\x0a\x09^ self isSSL\x0a\x09\x09ifTrue:[ 'wss:' ]\x0a\x09\x09ifFalse:[ 'ws:' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isSSL"]
}),
$globals.WebSocketAPI.klass);


$core.addClass('RR', $globals.Mapless, [], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RR.comment="##RR alias of RemoteReference \x0a\x0aInstances of RemoteReference are used when you cannot send as copy an object that is the answer of some remote command.\x0a\x0aThe remote end will be able to use aRemoteReference asRemote and send a message remotely to it.\x0a\x0aThe reason for the short name instead of the long explicit one is merely bandwith optimization";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isRemoteReference",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRemoteReference\x0a\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RR);



$core.addClass('Remote', $globals.ProtoObject, ['id', 'future'], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Remote.comment="## RemoteObject\x0a\x0aIs a Proxy to an instance in the other side of the wire\x0a\x0aInstances of RemoteObject route messages and answers to the instance at the destination";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'actions',
fn: function (aMessage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@future"];
if(($receiver = $1) == null || $receiver.isNil){
self._initializeFuture();
} else {
$1;
};
$2=$recv($recv(self._class())._client())._sendMessage_on_(aMessage,self);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.Remote)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09\x22Route aMessage to the client so it gets sent to the receiver in the other end.\x0a\x09It assumes that all reactions (like done, onError, etc) are properly pre-set\x22\x0a\x09\x0a\x09future ifNil:[ self initializeFuture ].\x0a\x09\x0a\x09^ self class client sendMessage: aMessage on: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeFuture", "sendMessage:on:", "client", "class"]
}),
$globals.Remote);

$core.addMethod(
$core.method({
selector: "future",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@future"];
if(($receiver = $2) == null || $receiver.isNil){
self["@future"]=$recv(jQuery)._Deferred();
$1=self["@future"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"future",{},$globals.Remote)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "future\x0a\x09\x22Answers the jQuery future\x0a\x09http://api.jquery.com/category/deferred-object/\x22\x0a\x09\x0a\x09^ future ifNil:[ future := jQuery Deferred ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "Deferred"]
}),
$globals.Remote);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@id"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x0a\x09^ id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Remote);

$core.addMethod(
$core.method({
selector: "initializeFuture",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@future"]=$recv(jQuery)._Deferred();
$recv(self["@future"])._fail_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._signal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self["@future"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFuture",{},$globals.Remote)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeFuture\x0a\x09\x0a\x09future := jQuery Deferred.\x0a\x09\x0a\x09future fail: [ :x | x signal ].\x0a\x09\x0a\x09^ future",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["Deferred", "fail:", "signal"]
}),
$globals.Remote);

$core.addMethod(
$core.method({
selector: "initializeOn:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@id"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "initializeOn: aString\x0a\x0a\x09id := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Remote);

$core.addMethod(
$core.method({
selector: "inspectOn:",
protocol: 'actions',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
variables=$recv($Dictionary())._new();
$recv(variables)._at_put_("#self",self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($recv(self._class())._allInstanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(variables)._at_put_(each,self._instVarAt_(each));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(anInspector)._setLabel_(self._printString());
$1=$recv(anInspector)._setVariables_(variables);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},$globals.Remote)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self class allInstanceVariableNames do: [ :each |\x0a\x09\x09variables at: each put: (self instVarAt: each) ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "do:", "allInstanceVariableNames", "class", "instVarAt:", "setLabel:", "printString", "setVariables:"]
}),
$globals.Remote);

$core.addMethod(
$core.method({
selector: "isRemote",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isRemote\x0a\x09\x22Answers true if this object is remote\x22\x0a\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Remote);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'actions',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Remote.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv("(".__comma($recv(self["@id"])._asString())).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Remote)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: '(',id asString,')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "nextPutAll:", ",", "asString"]
}),
$globals.Remote);


$globals.Remote.klass.iVarNames = ['client'];
$core.addMethod(
$core.method({
selector: "client",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@client"];
if(($receiver = $2) == null || $receiver.isNil){
self["@client"]="app session api ws";
$1=self["@client"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"client",{},$globals.Remote.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "client\x0a\x09\x22Answers the client that RemoteObject instances should use for \x0a\x09accessing the destination instances in the other end.\x22\x0a\x0a\x09^ client ifNil:[ client := 'app session api ws' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Remote.klass);

$core.addMethod(
$core.method({
selector: "client:",
protocol: 'accessing',
fn: function (aClient){
var self=this;
self["@client"]=aClient;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClient"],
source: "client: aClient\x0a\x0a\x09client := aClient",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Remote.klass);

$core.addMethod(
$core.method({
selector: "for:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._initializeOn_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},$globals.Remote.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "for: aString\x0a\x09\x22Answer a new RemoteObject instance based on the id aString\x22\x0a\x09\x0a\x09^ self new\x0a\x09\x09initializeOn: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeOn:", "new", "yourself"]
}),
$globals.Remote.klass);


$core.addClass('WebSocketCommand', $globals.Mapless, [], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.WebSocketCommand.comment="## A WebSocketCommand is an abstraction.\x0a\x0aSubclasses are concrete objects that easily travel \x0a\x0a1. from the frontend to the backend and/or \x0a\x0a2. come from the backend to the frontend.\x0a\x0aThey have the concrete knowledge of how to react or who to delegate behaviour.\x0a\x0aThey also carry any information necessary to achieve some reaction at their destination.\x0a\x0aIt's a convention that commands without @answer are yet to be executed, and all executed commands have an answer set (they're an exception if they need to)\x0a\x0aNote: they are Mapless only as convenience for traveling over the wire. You can if you like to but, originally, they are not meant to be persisted.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "executeOn:",
protocol: 'actions',
fn: function (anAPIClient){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._processOn_(anAPIClient);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._isException_(true);
$1=self._answer_($recv(x)._asString());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._remoteAnswerOn_(anAPIClient);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeOn:",{anAPIClient:anAPIClient},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "executeOn: anAPIClient\x0a\x09\x22Executes this command comming from anAPIClient\x0a\x09and performs the remote answer.\x22\x0a\x09\x0a\x09[ self processOn: anAPIClient ]\x0a\x09\x09on: Error \x0a\x09\x09do:[ :x | \x0a\x09\x09\x09\x09self\x0a\x09\x09\x09\x09\x09isException: true;\x0a\x09\x09\x09\x09\x09answer: x asString ].\x0a\x09\x09\x09\x09\x09\x0a\x09self remoteAnswerOn: anAPIClient",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "processOn:", "isException:", "answer:", "asString", "remoteAnswerOn:"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "hasAnswer",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._answer())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasAnswer",{},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasAnswer\x0a\x09\x22Answers true if this command has an answer at all.\x22\x0a\x0a\x09^ self answer notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "answer"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "isAnswer",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._hasAnswer();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isAnswer",{},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isAnswer\x0a\x09\x22Answers true if this command is an answer.\x22\x0a\x0a\x09^ self hasAnswer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hasAnswer"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "isFromBackend",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._bId())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFromBackend",{},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFromBackend\x0a\x09\x22Answers true if this command was originated at the backend side.\x22\x0a\x09\x0a\x09^ self bId notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "bId"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "localAnswerOn:",
protocol: 'actions',
fn: function (anAPIClient){
var self=this;
function $APIRemoteException(){return $globals.APIRemoteException||(typeof APIRemoteException=="undefined"?nil:APIRemoteException)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
$3=self._isException();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isException"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._notNil();
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._isException();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$4=$recv($recv(anAPIClient)._localErrorFor_(self))._value_($recv($APIRemoteException())._for_(self));
return $4;
};
$recv(anAPIClient)._answerLocallyFor_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAnswerOn:",{anAPIClient:anAPIClient},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "localAnswerOn:  anAPIClient\x0a\x09\x22Tells the API to perform whatever is pending\x0a\x09in the local answer of this command\x22\x0a\x09\x0a\x09(self isException notNil and:[\x0a\x09self isException ]) ifTrue:[\x0a\x09\x09^ (anAPIClient localErrorFor: self) value: (APIRemoteException for: self) ].\x0a\x09\x0a\x09anAPIClient answerLocallyFor: self",
referencedClasses: ["APIRemoteException"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "and:", "notNil", "isException", "value:", "localErrorFor:", "for:", "answerLocallyFor:"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "onAboutToAnswer",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToAnswer\x0a\x09\x22This command is about to execute its answer callback.\x22\x0a\x09\x0a\x09\x22no-op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "onAboutToSend",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToSend\x0a\x09\x22This command is about to be sent to the remote end.\x22\x0a\x09\x0a\x09\x22no-op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "onAfterSent",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAfterSent\x0a\x09\x22This command was just sent to the remote end.\x22\x0a\x09\x0a\x09\x22no-op\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "onAnsweredBy:",
protocol: 'reactions',
fn: function (anAPIClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._localAnswerOn_(anAPIClient);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAnsweredBy:",{anAPIClient:anAPIClient},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "onAnsweredBy: anAPIClient\x0a\x09\x22This command arrived with an answer\x22\x0a\x0a\x09self localAnswerOn: anAPIClient",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["localAnswerOn:"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "onCommandFrom:",
protocol: 'reactions',
fn: function (anAPIClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._executeOn_(anAPIClient);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onCommandFrom:",{anAPIClient:anAPIClient},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "onCommandFrom: anAPIClient\x0a\x09\x22This command arrived from anAPIClient, time to execute and answer it\x22\x0a\x09\x0a\x09self executeOn: anAPIClient",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["executeOn:"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'actions',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$4;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.WebSocketCommand.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$3=self._isException();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isException"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._notNil();
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._isException();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$4=$recv("(".__comma($recv(self._answer())._printString())).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($4);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09(self isException notNil and:[\x0a\x09self isException ]) ifTrue:[\x0a\x09\x09aStream nextPutAll: '(',self answer printString,')' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "ifTrue:", "and:", "notNil", "isException", "nextPutAll:", ",", "printString", "answer"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "processOn:",
protocol: 'actions',
fn: function (anAPIClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processOn:",{anAPIClient:anAPIClient},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "processOn: anAPIClient\x0a\x09\x22Executes this command comming from anAPIClient\x0a\x09loading the answer in it.\x22\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "receivedOn:",
protocol: 'actions',
fn: function (anAPIClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._isAnswer();
if($core.assert($1)){
self._onAnsweredBy_(anAPIClient);
} else {
self._onCommandFrom_(anAPIClient);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receivedOn:",{anAPIClient:anAPIClient},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "receivedOn: anAPIClient\x0a\x09\x22This command has been received by anAPIClient.\x0a\x09Time to react depending in this being an answer or not...\x22\x0a\x09\x0a\x09self isAnswer \x0a\x09\x09ifTrue:[ \x0a\x09\x09\x09\x22Is backend's answer of a previous command\x22\x0a\x09\x09\x09self onAnsweredBy: anAPIClient ]\x0a\x09\x09ifFalse:[ \x0a\x09\x09\x09\x22Is the backend taking initiative\x22\x0a\x09\x09\x09self onCommandFrom: anAPIClient ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isAnswer", "onAnsweredBy:", "onCommandFrom:"]
}),
$globals.WebSocketCommand);

$core.addMethod(
$core.method({
selector: "remoteAnswerOn:",
protocol: 'actions',
fn: function (anAPIClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(anAPIClient)._remoteAnswerFor_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remoteAnswerOn:",{anAPIClient:anAPIClient},$globals.WebSocketCommand)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "remoteAnswerOn:  anAPIClient\x0a\x09\x22Tells the API to respond to the backend \x0a\x09with this command (assumes it's loading the answer already)\x22\x0a\x09\x0a\x09anAPIClient remoteAnswerFor: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remoteAnswerFor:"]
}),
$globals.WebSocketCommand);


$core.addMethod(
$core.method({
selector: "for:",
protocol: 'actions',
fn: function (anEvent){
var self=this;
var parsed;
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
parsed=$recv($Mapless())._fromJSONString_($recv(anEvent)._data());
return parsed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(x){
parsed=nil;
return parsed;

}));
$1=parsed;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{anEvent:anEvent,parsed:parsed},$globals.WebSocketCommand.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "for: anEvent\x0a\x09\x22Answers a new instance of a command corresponding to\x0a\x09the message comming in anEvent or nil.\x22\x0a\x0a\x09| parsed |\x0a\x0a\x09[ parsed := Mapless fromJSONString: anEvent data ]\x0a\x09\x09on: Error\x0a\x09\x09do:[ :x | parsed := nil ].\x0a\x09^ parsed",
referencedClasses: ["Mapless", "Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "fromJSONString:", "data"]
}),
$globals.WebSocketCommand.klass);


$core.addClass('BadCommand', $globals.WebSocketCommand, [], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BadCommand.comment="## BadCommand \x0a\x0aThis command useful when there is trouble during the reception/processing of a remote command.\x0a\x0aMeant more for production than for development.";
//>>excludeEnd("ide");


$core.addClass('Echo', $globals.WebSocketCommand, [], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Echo.comment="##Echo\x0a\x0aIs a command that will send content to the server and the server will send back (in @echoes)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "processOn:",
protocol: 'actions',
fn: function (anAPIClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._answer_($globals.HashedCollection._newFromPairs_(["echoes",self._content()]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processOn:",{anAPIClient:anAPIClient},$globals.Echo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "processOn: anAPIClient\x0a\x09\x22Executes this command comming from anAPIClient\x0a\x09loading the answer in it.\x22\x0a\x09\x0a\x09self answer: #{ #echoes -> self content }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["answer:", "content"]
}),
$globals.Echo);


$core.addMethod(
$core.method({
selector: "for:",
protocol: 'actions',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._content_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"for:",{aString:aString},$globals.Echo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "for: aString\x0a\x0a\x09^ self new\x0a\x09\x09content: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["content:", "new", "yourself"]
}),
$globals.Echo.klass);


$core.addClass('Ping', $globals.WebSocketCommand, [], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Ping.comment="##Ping\x0a\x0aIs a command that, when all goes smooth, will receive a Date set by the server @pongOn";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "processOn:",
protocol: 'actions',
fn: function (anAPIClient){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._answer_($globals.HashedCollection._newFromPairs_(["pongOn",$recv($Date())._now()]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processOn:",{anAPIClient:anAPIClient},$globals.Ping)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "processOn: anAPIClient\x0a\x09\x22Executes this command comming from anAPIClient\x0a\x09loading the answer in it.\x22\x0a\x09\x0a\x09self answer: #{ #pongOn -> Date now }",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["answer:", "now"]
}),
$globals.Ping);



$core.addClass('RMS', $globals.WebSocketCommand, [], 'Flow-API');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RMS.comment="##RMS alias RemoteMessageSend\x0a\x0aIs a command to send a message to a remote object published in the backend.\x0a\x0aOr..\x0a\x0aThe command received from the backend to send a message to an object published here in the frontend.\x0a\x0aRemoteMessageSends have @answer set before responding to the sender side and if an exception happens they set @isException in true and a print of the exception.\x0a\x0aThe reason for the short name instead of the long explicit one is merely bandwith optimization";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "getReceiverOn:",
protocol: 'actions',
fn: function (anAPIClient){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(anAPIClient)._published())._at_ifAbsent_(self._receiverId(),(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getReceiverOn:",{anAPIClient:anAPIClient},$globals.RMS)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "getReceiverOn: anAPIClient\x0a\x09\x22Returns the published at anAPIClient corresponding to the receiver of this message send.\x22\x0a\x09\x0a\x09^ anAPIClient published \x0a\x09\x09at:\x09self receiverId\x0a\x09\x09ifAbsent:[ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "published", "receiverId"]
}),
$globals.RMS);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'actions',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$7,$6,$5,$9,$8,$4,$3,$10;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.RMS.superclass.fn.prototype._printOn_.apply($recv(self), [aStream]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=self._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
if($core.assert($1)){
$7=$recv(self._answer())._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$6="(".__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$5=$recv($6).__comma(" #");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$9=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
} else {
$10=$recv("(#".__comma($recv(self._selector())._asString())).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($10);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.RMS)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x0a\x09super printOn: aStream.\x0a\x09\x0a\x09self answer notNil\x0a\x09\x09ifTrue:[ aStream nextPutAll: '(',self answer asString,' #',self selector asString,')' ]\x0a\x09\x09ifFalse:[ aStream nextPutAll: '(#',self selector asString,')' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printOn:", "ifTrue:ifFalse:", "notNil", "answer", "nextPutAll:", ",", "asString", "selector"]
}),
$globals.RMS);

$core.addMethod(
$core.method({
selector: "processOn:",
protocol: 'actions',
fn: function (anAPIClient){
var self=this;
var ans;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
ans=$recv(self._getReceiverOn_(anAPIClient))._perform_withArguments_(self._selector(),self._arguments());
self._answer_($recv(anAPIClient)._remoteReferenceFor_(ans));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processOn:",{anAPIClient:anAPIClient,ans:ans},$globals.RMS)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAPIClient"],
source: "processOn: anAPIClient\x0a\x09\x22Executes this command comming from anAPIClient\x0a\x09loading the answer in it.\x22\x0a\x09\x0a\x09| ans |\x0a\x09\x0a\x09ans := (self getReceiverOn: anAPIClient)\x0a\x09\x09\x09\x09\x09perform: self selector\x0a\x09\x09\x09\x09\x09withArguments: self arguments.\x0a\x0a\x09self answer: (anAPIClient remoteReferenceFor: ans)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:", "getReceiverOn:", "selector", "arguments", "answer:", "remoteReferenceFor:"]
}),
$globals.RMS);


$core.addMethod(
$core.method({
selector: "to:send:withAll:",
protocol: 'actions',
fn: function (aReceiverId,aSelector,someArguments){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._receiverId_(aReceiverId);
$recv($2)._selector_(aSelector);
$recv($2)._arguments_($recv(someArguments)._asArray());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"to:send:withAll:",{aReceiverId:aReceiverId,aSelector:aSelector,someArguments:someArguments},$globals.RMS.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReceiverId", "aSelector", "someArguments"],
source: "to: aReceiverId send: aSelector withAll: someArguments\x0a\x09\x22Answers a new instance of a RemoteMessageSend so it's\x0a\x09ready to be sent to the remote object reachable with aReceiverId\x0a\x09with the message aSelector with someArguments.\x22\x0a\x09\x0a\x09^ self new\x0a\x09\x09receiverId: aReceiverId;\x0a\x09\x09selector: aSelector;\x0a\x09\x09arguments: someArguments asArray;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["receiverId:", "new", "selector:", "arguments:", "asArray", "yourself"]
}),
$globals.RMS.klass);

});
