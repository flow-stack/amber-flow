define("amber-flow/Flow-Tests", ["amber/boot", "amber_core/SUnit", "amber-flow/Flow-API"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Flow-Tests');
$core.packages["Flow-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Flow-Tests"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('FlowRemoteReferenceTest', $globals.TestCase, [], 'Flow-Tests');
$core.addMethod(
$core.method({
selector: "testBoolean",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$5,$4;
$2=true._asRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asRemoteReference"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isRemoteReference"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$3=true._asRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asRemoteReference"]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$5=false._asRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asRemoteReference"]=3;
//>>excludeEnd("ctx");
$4=$recv($5)._isRemoteReference();
self._deny_($4);
self._assert_($recv(false._asRemoteReference())._isBoolean());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testBoolean",{},$globals.FlowRemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBoolean\x0a\x0a\x09self deny: true asRemoteReference isRemoteReference.\x0a\x09self assert: true asRemoteReference.\x0a\x0a\x09self deny: false asRemoteReference isRemoteReference.\x0a\x09self assert: false asRemoteReference isBoolean.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "isRemoteReference", "asRemoteReference", "assert:", "isBoolean"]
}),
$globals.FlowRemoteReferenceTest);

$core.addMethod(
$core.method({
selector: "testClass",
protocol: 'tests',
fn: function (){
var self=this;
function $Class(){return $globals.Class||(typeof Class=="undefined"?nil:Class)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3;
$2=$recv($Class())._asRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asRemoteReference"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isRemoteReference"]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$5=[]._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._asRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asRemoteReference"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._isRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isRemoteReference"]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv($recv((42)._class())._asRemoteReference())._isRemoteReference());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testClass",{},$globals.FlowRemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClass\x0a\x0a\x09self assert: Class asRemoteReference isRemoteReference.\x0a\x09self assert: #() class asRemoteReference isRemoteReference.\x0a\x09self assert: 42 class asRemoteReference isRemoteReference.",
referencedClasses: ["Class"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isRemoteReference", "asRemoteReference", "class"]
}),
$globals.FlowRemoteReferenceTest);

$core.addMethod(
$core.method({
selector: "testFloat",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=(4.2)._asRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asRemoteReference"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isRemoteReference();
self._deny_($1);
self._assert_($recv((4.2)._asRemoteReference()).__eq((4.2)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFloat",{},$globals.FlowRemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFloat\x0a\x0a\x09self deny: 4.2 asRemoteReference isRemoteReference.\x0a\x09self assert: 4.2 asRemoteReference = 4.2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "isRemoteReference", "asRemoteReference", "assert:", "="]
}),
$globals.FlowRemoteReferenceTest);

$core.addMethod(
$core.method({
selector: "testInteger",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=(42)._asRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asRemoteReference"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isRemoteReference();
self._deny_($1);
self._assert_($recv((42)._asRemoteReference()).__eq((42)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInteger",{},$globals.FlowRemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInteger\x0a\x0a\x09self deny: 42 asRemoteReference isRemoteReference.\x0a\x09self assert: 42 asRemoteReference = 42",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "isRemoteReference", "asRemoteReference", "assert:", "="]
}),
$globals.FlowRemoteReferenceTest);

$core.addMethod(
$core.method({
selector: "testMetaclass",
protocol: 'tests',
fn: function (){
var self=this;
function $Metaclass(){return $globals.Metaclass||(typeof Metaclass=="undefined"?nil:Metaclass)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv($recv($Metaclass())._asRemoteReference())._isRemoteReference());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMetaclass",{},$globals.FlowRemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMetaclass \x0a\x0a\x09self assert: Metaclass asRemoteReference isRemoteReference",
referencedClasses: ["Metaclass"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isRemoteReference", "asRemoteReference"]
}),
$globals.FlowRemoteReferenceTest);

$core.addMethod(
$core.method({
selector: "testUndefinedObject",
protocol: 'tests',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=nil._asRemoteReference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asRemoteReference"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isRemoteReference();
self._deny_($1);
self._assert_($recv(nil._asRemoteReference()).__eq(nil));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUndefinedObject",{},$globals.FlowRemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUndefinedObject \x0a\x0a\x09self deny: nil asRemoteReference isRemoteReference.\x0a\x09self assert: nil asRemoteReference = nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "isRemoteReference", "asRemoteReference", "assert:", "="]
}),
$globals.FlowRemoteReferenceTest);



$core.addClass('FlowRemoteTest', $globals.TestCase, [], 'Flow-Tests');
$core.addMethod(
$core.method({
selector: "testConnect",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$7,$6,$5,$4,$11,$10,$9,$8,$14,$13,$12,$19,$18,$17,$16,$23,$22,$21,$20,$15;
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv($recv(window)._app())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["api"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ws"]=1;
//>>excludeEnd("ctx");
return $recv($1)._connect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["connect"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["shouldnt:raise:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._hasSocket();
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$11=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["api"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ws"]=3;
//>>excludeEnd("ctx");
$8=$recv($9)._isConnected();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isConnected"]=1;
//>>excludeEnd("ctx");
self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$14=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["session"]=4;
//>>excludeEnd("ctx");
$13=$recv($14)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["api"]=4;
//>>excludeEnd("ctx");
$12=$recv($13)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["ws"]=4;
//>>excludeEnd("ctx");
return $recv($12)._connect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}),$Error());
$19=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=5;
//>>excludeEnd("ctx");
$18=$recv($19)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["api"]=5;
//>>excludeEnd("ctx");
$17=$recv($18)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ws"]=5;
//>>excludeEnd("ctx");
$16=$recv($17)._socket();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["socket"]=1;
//>>excludeEnd("ctx");
$23=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=6;
//>>excludeEnd("ctx");
$22=$recv($23)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["api"]=6;
//>>excludeEnd("ctx");
$21=$recv($22)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ws"]=6;
//>>excludeEnd("ctx");
$20=$recv($21)._socket();
$15=$recv($16).__eq_eq($20);
self._assert_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
return self._assert_($recv($recv($recv($recv($Flow())._session())._api())._ws())._isConnected());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((1000));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testConnect",{},$globals.FlowRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testConnect\x0a\x0a\x09self shouldnt:[\x0a\x09\x09window app session api ws connect ] raise: Error.\x0a\x09\x0a\x09[\x22The >>valueWithTimeout: is there because connecting a ws takes time\x22 \x0a\x09self assert: Flow session  api ws hasSocket.\x0a\x09self assert: Flow session api ws isConnected.\x0a\x0a\x09self shouldnt:[\x0a\x09\x09Flow session api ws connect ] raise: Error.\x0a\x0a\x09self assert: Flow session api ws socket == Flow session api ws socket.\x0a\x09self assert: Flow session api ws isConnected ] valueWithTimeout: 1000",
referencedClasses: ["Error", "Flow"],
//>>excludeEnd("ide");
messageSends: ["shouldnt:raise:", "connect", "ws", "api", "session", "app", "valueWithTimeout:", "assert:", "hasSocket", "isConnected", "==", "socket"]
}),
$globals.FlowRemoteTest);

$core.addMethod(
$core.method({
selector: "testEcho",
protocol: 'tests',
fn: function (){
var self=this;
var echo;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $Echo(){return $globals.Echo||(typeof Echo=="undefined"?nil:Echo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$8,$7,$6,$5,$9,$11,$10,$13,$12,$16,$15,$14;
$4=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._hasSocket();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$8=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._isConnected();
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
echo=$recv($Echo())._for_("Do you follow?");
$9=$recv($recv(echo)._content()).__eq("Do you follow?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$11=$recv(echo)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$10=$recv($11)._isNil();
self._assert_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($recv(window)._app())._session())._api())._ws())._sendCommand_do_(echo,(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$13=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=2;
//>>excludeEnd("ctx");
$12=$recv($13)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
self._assert_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$16=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=3;
//>>excludeEnd("ctx");
$15=$recv($16)._echoes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["echoes"]=1;
//>>excludeEnd("ctx");
$14=$recv($15)._notNil();
self._assert_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
return self._assert_($recv($recv($recv(ans)._answer())._echoes()).__eq("Do you follow?"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ans:ans},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testEcho",{echo:echo},$globals.FlowRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEcho\x0a\x0a\x09| echo |\x0a\x0a\x09self assert: Flow session api ws hasSocket.\x0a\x09self assert: Flow session api ws isConnected.\x0a\x0a\x09echo := Echo for: 'Do you follow?'.\x0a\x09\x0a\x09self assert: echo content = 'Do you follow?'.\x0a\x09self assert: echo answer isNil.\x0a\x09\x0a\x09window app session api ws \x0a\x09\x09sendCommand: echo\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer notNil.\x0a\x09\x09\x09self assert: ans answer echoes notNil.\x0a\x09\x09\x09self assert: ans answer echoes = 'Do you follow?' ]",
referencedClasses: ["Flow", "Echo"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "isConnected", "for:", "=", "content", "isNil", "answer", "sendCommand:do:", "app", "notNil", "echoes"]
}),
$globals.FlowRemoteTest);

$core.addMethod(
$core.method({
selector: "testErrorHandlingAfterResponded",
protocol: 'tests',
fn: function (){
var self=this;
var faulty;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $WillFailAfterResponded(){return $globals.WillFailAfterResponded||(typeof WillFailAfterResponded=="undefined"?nil:WillFailAfterResponded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$8,$7,$6,$5,$10,$9,$12,$11;
$4=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._hasSocket();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$8=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._isConnected();
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
faulty=$recv($WillFailAfterResponded())._new();
$10=$recv(faulty)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._isNil();
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($Flow())._session())._api())._ws())._sendCommand_do_onError_(faulty,(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$12=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=2;
//>>excludeEnd("ctx");
$11=$recv($12)._notNil();
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
return self._assert_($recv(ans)._answer());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ans:ans},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_($recv($recv(x)._messageText()).__eq("Failing just after the answer"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testErrorHandlingAfterResponded",{faulty:faulty},$globals.FlowRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testErrorHandlingAfterResponded\x0a\x0a\x09| faulty |\x0a\x0a\x09self assert: Flow session api ws hasSocket.\x0a\x09self assert: Flow session api ws isConnected.\x0a\x0a\x09faulty := WillFailAfterResponded new.\x0a\x09\x0a\x09self assert: faulty answer isNil.\x0a\x09\x0a\x09Flow session api ws \x0a\x09\x09sendCommand: faulty\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer notNil.\x0a\x09\x09\x09self assert: ans answer ]\x0a\x09\x09onError:[ :x | \x0a\x09\x09\x09self assert: (x messageText = 'Failing just after the answer') ]",
referencedClasses: ["Flow", "WillFailAfterResponded"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "isConnected", "new", "isNil", "answer", "sendCommand:do:onError:", "notNil", "=", "messageText"]
}),
$globals.FlowRemoteTest);

$core.addMethod(
$core.method({
selector: "testErrorHandlingAfterSent",
protocol: 'tests',
fn: function (){
var self=this;
var faulty;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $WillFailAfterSent(){return $globals.WillFailAfterSent||(typeof WillFailAfterSent=="undefined"?nil:WillFailAfterSent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$8,$7,$6,$5,$10,$9,$12,$11;
$4=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._hasSocket();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$8=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._isConnected();
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
faulty=$recv($WillFailAfterSent())._new();
$10=$recv(faulty)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._isNil();
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($Flow())._session())._api())._ws())._sendCommand_do_onError_(faulty,(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$12=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=2;
//>>excludeEnd("ctx");
$11=$recv($12)._notNil();
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
return self._assert_($recv(ans)._answer());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ans:ans},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_($recv($recv(x)._messageText()).__eq("Failing just after sent"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testErrorHandlingAfterSent",{faulty:faulty},$globals.FlowRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testErrorHandlingAfterSent\x0a\x0a\x09| faulty |\x0a\x0a\x09self assert: Flow session api ws hasSocket.\x0a\x09self assert: Flow session api ws isConnected.\x0a\x0a\x09faulty := WillFailAfterSent new.\x0a\x09\x0a\x09self assert: faulty answer isNil.\x0a\x09\x0a\x09Flow session api ws \x0a\x09\x09sendCommand: faulty\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer notNil.\x0a\x09\x09\x09self assert: ans answer ]\x0a\x09\x09onError:[ :x | self assert: (x messageText = 'Failing just after sent') ]",
referencedClasses: ["Flow", "WillFailAfterSent"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "isConnected", "new", "isNil", "answer", "sendCommand:do:onError:", "notNil", "=", "messageText"]
}),
$globals.FlowRemoteTest);

$core.addMethod(
$core.method({
selector: "testErrorHandlingBeforeSend",
protocol: 'tests',
fn: function (){
var self=this;
var faulty;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $WillFailBeforeSend(){return $globals.WillFailBeforeSend||(typeof WillFailBeforeSend=="undefined"?nil:WillFailBeforeSend)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$8,$7,$6,$5,$10,$9;
$4=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._hasSocket();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$8=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._isConnected();
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
faulty=$recv($WillFailBeforeSend())._new();
$10=$recv(faulty)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($Flow())._session())._api())._ws())._sendCommand_do_onError_(faulty,(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_($recv($recv(ans)._answer())._isNil());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ans:ans},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._assert_($recv($recv(x)._messageText()).__eq("Failing just before sending"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testErrorHandlingBeforeSend",{faulty:faulty},$globals.FlowRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testErrorHandlingBeforeSend\x0a\x0a\x09| faulty |\x0a\x0a\x09self assert: Flow session api ws hasSocket.\x0a\x09self assert: Flow session api ws isConnected.\x0a\x0a\x09faulty := WillFailBeforeSend new.\x0a\x09\x0a\x09self assert: faulty answer isNil.\x0a\x09\x0a\x09\x0a\x09Flow session api ws \x0a\x09\x09sendCommand: faulty\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer isNil ]\x0a\x09\x09onError:[ :x | self assert: (x messageText = 'Failing just before sending') ]",
referencedClasses: ["Flow", "WillFailBeforeSend"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "isConnected", "new", "isNil", "answer", "sendCommand:do:onError:", "=", "messageText"]
}),
$globals.FlowRemoteTest);

$core.addMethod(
$core.method({
selector: "testPing",
protocol: 'tests',
fn: function (){
var self=this;
var ping;
function $Flow(){return $globals.Flow||(typeof Flow=="undefined"?nil:Flow)}
function $Ping(){return $globals.Ping||(typeof Ping=="undefined"?nil:Ping)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$8,$7,$6,$5,$10,$9,$12,$11;
$4=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._hasSocket();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$8=$recv($Flow())._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._isConnected();
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
ping=$recv($Ping())._new();
$10=$recv(ping)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._isNil();
self._assert_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($Flow())._session())._api())._ws())._sendCommand_do_(ping,(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$12=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=2;
//>>excludeEnd("ctx");
$11=$recv($12)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
return self._assert_($recv($recv($recv(ans)._answer())._pongOn())._notNil());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ans:ans},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPing",{ping:ping},$globals.FlowRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPing\x0a\x0a\x09| ping |\x0a\x0a\x09self assert: Flow session api ws hasSocket.\x0a\x09self assert: Flow session api ws isConnected.\x0a\x0a\x09ping := Ping new.\x0a\x09\x0a\x09self assert: ping answer isNil.\x0a\x09\x0a\x09Flow session api ws \x0a\x09\x09sendCommand: ping\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer notNil.\x0a\x09\x09\x09self assert: ans answer pongOn notNil ]",
referencedClasses: ["Flow", "Ping"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "isConnected", "new", "isNil", "answer", "sendCommand:do:", "notNil", "pongOn"]
}),
$globals.FlowRemoteTest);



$core.addClass('FlowTest', $globals.TestCase, [], 'Flow-Tests');


$core.addClass('WillFailAfterResponded', $globals.WebSocketCommand, [], 'Flow-Tests');
$core.addMethod(
$core.method({
selector: "onAboutToAnswer",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._error_("Failing just after the answer");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAboutToAnswer",{},$globals.WillFailAfterResponded)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToAnswer\x0a\x09\x22This command is about to execute its answer callback.\x22\x0a\x09\x09\x0a\x09self error: 'Failing just after the answer'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.WillFailAfterResponded);



$core.addClass('WillFailAfterSent', $globals.WebSocketCommand, [], 'Flow-Tests');
$core.addMethod(
$core.method({
selector: "onAfterSent",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._error_("Failing just after sent");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterSent",{},$globals.WillFailAfterSent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAfterSent\x0a\x09\x22This command was just sent to the remote end.\x22\x0a\x09\x0a\x09self error: 'Failing just after sent'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.WillFailAfterSent);



$core.addClass('WillFailBeforeSend', $globals.WebSocketCommand, [], 'Flow-Tests');
$core.addMethod(
$core.method({
selector: "onAboutToSend",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._error_("Failing just before sending");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAboutToSend",{},$globals.WillFailBeforeSend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToSend\x0a\x09\x22This command is about to be sent to the remote end.\x22\x0a\x09\x0a\x09self error: 'Failing just before sending'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.WillFailBeforeSend);



$core.addClass('WillFailRemotely', $globals.WebSocketCommand, [], 'Flow-Tests');

});
