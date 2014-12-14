define("amber-amberflow/Flow-Tests", ["amber/boot", "amber_core/SUnit", "amber-amberflow/Flow-API"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Flow-Tests');
$core.packages["Flow-Tests"].transport = {"type":"amd","amdNamespace":"amber-amberflow"};

$core.addClass('FlowTest', $globals.TestCase, [], 'Flow-Tests');
$core.addMethod(
$core.method({
selector: "testConnect",
protocol: 'tests',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$9,$8,$7,$6,$5,$14,$13,$12,$11,$10,$18,$17,$16,$15,$24,$23,$22,$21,$20,$29,$28,$27,$26,$25,$19;
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["app"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._session();
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
$9=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["app"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._hasSocket();
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$14=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["app"]=3;
//>>excludeEnd("ctx");
$13=$recv($14)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=3;
//>>excludeEnd("ctx");
$12=$recv($13)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["api"]=3;
//>>excludeEnd("ctx");
$11=$recv($12)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ws"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._isConnected();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isConnected"]=1;
//>>excludeEnd("ctx");
self._assert_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$18=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["app"]=4;
//>>excludeEnd("ctx");
$17=$recv($18)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["session"]=4;
//>>excludeEnd("ctx");
$16=$recv($17)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["api"]=4;
//>>excludeEnd("ctx");
$15=$recv($16)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["ws"]=4;
//>>excludeEnd("ctx");
return $recv($15)._connect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}),$Error());
$24=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["app"]=5;
//>>excludeEnd("ctx");
$23=$recv($24)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=5;
//>>excludeEnd("ctx");
$22=$recv($23)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["api"]=5;
//>>excludeEnd("ctx");
$21=$recv($22)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ws"]=5;
//>>excludeEnd("ctx");
$20=$recv($21)._socket();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["socket"]=1;
//>>excludeEnd("ctx");
$29=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["app"]=6;
//>>excludeEnd("ctx");
$28=$recv($29)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["session"]=6;
//>>excludeEnd("ctx");
$27=$recv($28)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["api"]=6;
//>>excludeEnd("ctx");
$26=$recv($27)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ws"]=6;
//>>excludeEnd("ctx");
$25=$recv($26)._socket();
$19=$recv($20).__eq_eq($25);
self._assert_($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
return self._assert_($recv($recv($recv($recv($recv(window)._app())._session())._api())._ws())._isConnected());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((1000));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testConnect",{},$globals.FlowTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testConnect\x0a\x0a\x09self shouldnt:[\x0a\x09\x09window app session api ws connect ] raise: Error.\x0a\x09\x0a\x09[\x22The >>valueWithTimeout: is there because connecting a ws takes time\x22 \x0a\x09self assert: window app session api ws hasSocket.\x0a\x09self assert: window app session api ws isConnected.\x0a\x0a\x09self shouldnt:[\x0a\x09\x09window app session api ws connect ] raise: Error.\x0a\x0a\x09self assert: window app session api ws socket == window app session api ws socket.\x0a\x09self assert: window app session api ws isConnected ] valueWithTimeout: 1000",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["shouldnt:raise:", "connect", "ws", "api", "session", "app", "valueWithTimeout:", "assert:", "hasSocket", "isConnected", "==", "socket"]
}),
$globals.FlowTest);

$core.addMethod(
$core.method({
selector: "testCustomEventWithNoArgument",
protocol: 'tests',
fn: function (){
var self=this;
var observed;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
observed=$recv($Dictionary())._new();
$recv(observed)._when_do_("something",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(observed)._at_put_("something","happen");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(observed)._trigger_assert_("something"._self(),$recv(observed)._includesKey_("something"));
self._assert_($recv($recv(observed)._at_("something")).__eq("happen"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCustomEventWithNoArgument",{observed:observed},$globals.FlowTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCustomEventWithNoArgument\x0a\x0a\x09| observed |\x0a\x0a\x09observed := Dictionary new.\x0a\x09\x0a\x09observed when: #something do:[ observed at: #something put: #happen ].\x0a\x09\x0a\x09observed trigger: #something\x0a\x09\x0a\x09self assert: (observed includesKey: #something).\x09\x0a\x09self assert: (observed at: #something) = #happen.",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "when:do:", "at:put:", "trigger:assert:", "self", "includesKey:", "assert:", "=", "at:"]
}),
$globals.FlowTest);

$core.addMethod(
$core.method({
selector: "testCustomEventWithOneArgument",
protocol: 'tests',
fn: function (){
var self=this;
var observed,thing;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $FlowTest(){return $globals.FlowTest||(typeof FlowTest=="undefined"?nil:FlowTest)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
observed=$recv($Dictionary())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
thing=$recv($FlowTest())._new();
$recv(observed)._when_do_("something:",(function(argument){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(observed)._at_put_("something:",argument);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({argument:argument},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(observed)._trigger_with_("something:",thing);
self._assert_($recv(observed)._includesKey_("something"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv(observed)._at_("something")).__eq_eq(thing));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCustomEventWithOneArgument",{observed:observed,thing:thing},$globals.FlowTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCustomEventWithOneArgument\x0a\x0a\x09| observed thing |\x0a\x0a\x09observed := Dictionary new.\x0a\x09thing := FlowTest new.\x0a\x09\x0a\x09observed when: #something: do:[ :argument | observed at: #something: put: argument ].\x0a\x09\x0a\x09observed trigger: #something: with: thing.\x0a\x09\x0a\x09self assert: (observed includesKey: #something).\x09\x0a\x09self assert: (observed at: #something) == thing.",
referencedClasses: ["Dictionary", "FlowTest"],
//>>excludeEnd("ide");
messageSends: ["new", "when:do:", "at:put:", "trigger:with:", "assert:", "includesKey:", "==", "at:"]
}),
$globals.FlowTest);

$core.addMethod(
$core.method({
selector: "testEcho",
protocol: 'tests',
fn: function (){
var self=this;
var echo;
function $Echo(){return $globals.Echo||(typeof Echo=="undefined"?nil:Echo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$10,$9,$8,$7,$6,$11,$13,$12,$15,$14,$18,$17,$16;
$5=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._session();
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
$10=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._isConnected();
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
echo=$recv($Echo())._for_("Do you follow?");
$11=$recv($recv(echo)._content()).__eq("Do you follow?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$13=$recv(echo)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$12=$recv($13)._isNil();
self._assert_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($recv(window)._app())._session())._api())._ws())._sendCommand_do_(echo,(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$15=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=2;
//>>excludeEnd("ctx");
$14=$recv($15)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
self._assert_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$18=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=3;
//>>excludeEnd("ctx");
$17=$recv($18)._echoes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["echoes"]=1;
//>>excludeEnd("ctx");
$16=$recv($17)._notNil();
self._assert_($16);
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
}, function($ctx1) {$ctx1.fill(self,"testEcho",{echo:echo},$globals.FlowTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testEcho\x0a\x0a\x09| echo |\x0a\x0a\x09self assert: window app session api ws hasSocket.\x0a\x09self assert: window app session api ws isConnected.\x0a\x0a\x09echo := Echo for: 'Do you follow?'.\x0a\x09\x0a\x09self assert: echo content = 'Do you follow?'.\x0a\x09self assert: echo answer isNil.\x0a\x09\x0a\x09window app session api ws \x0a\x09\x09sendCommand: echo\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer notNil.\x0a\x09\x09\x09self assert: ans answer echoes notNil.\x0a\x09\x09\x09self assert: ans answer echoes = 'Do you follow?' ]",
referencedClasses: ["Echo"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "app", "isConnected", "for:", "=", "content", "isNil", "answer", "sendCommand:do:", "notNil", "echoes"]
}),
$globals.FlowTest);

$core.addMethod(
$core.method({
selector: "testErrorHandlingAfterResponded",
protocol: 'tests',
fn: function (){
var self=this;
var faulty;
function $WillFailAfterResponded(){return $globals.WillFailAfterResponded||(typeof WillFailAfterResponded=="undefined"?nil:WillFailAfterResponded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$10,$9,$8,$7,$6,$12,$11,$14,$13;
$5=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._session();
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
$10=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._isConnected();
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
faulty=$recv($WillFailAfterResponded())._new();
$12=$recv(faulty)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$11=$recv($12)._isNil();
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($recv(window)._app())._session())._api())._ws())._sendCommand_do_onError_(faulty,(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$14=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=2;
//>>excludeEnd("ctx");
$13=$recv($14)._notNil();
self._assert_($13);
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
}, function($ctx1) {$ctx1.fill(self,"testErrorHandlingAfterResponded",{faulty:faulty},$globals.FlowTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testErrorHandlingAfterResponded\x0a\x0a\x09| faulty |\x0a\x0a\x09self assert: window app session api ws hasSocket.\x0a\x09self assert: window app session api ws isConnected.\x0a\x0a\x09faulty := WillFailAfterResponded new.\x0a\x09\x0a\x09self assert: faulty answer isNil.\x0a\x09\x0a\x09window app session api ws \x0a\x09\x09sendCommand: faulty\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer notNil.\x0a\x09\x09\x09self assert: ans answer ]\x0a\x09\x09onError:[ :x | \x0a\x09\x09\x09self assert: (x messageText = 'Failing just after the answer') ]",
referencedClasses: ["WillFailAfterResponded"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "app", "isConnected", "new", "isNil", "answer", "sendCommand:do:onError:", "notNil", "=", "messageText"]
}),
$globals.FlowTest);

$core.addMethod(
$core.method({
selector: "testErrorHandlingAfterSent",
protocol: 'tests',
fn: function (){
var self=this;
var faulty;
function $WillFailAfterSent(){return $globals.WillFailAfterSent||(typeof WillFailAfterSent=="undefined"?nil:WillFailAfterSent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$10,$9,$8,$7,$6,$12,$11,$14,$13;
$5=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._session();
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
$10=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._isConnected();
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
faulty=$recv($WillFailAfterSent())._new();
$12=$recv(faulty)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$11=$recv($12)._isNil();
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($recv(window)._app())._session())._api())._ws())._sendCommand_do_onError_(faulty,(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$14=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=2;
//>>excludeEnd("ctx");
$13=$recv($14)._notNil();
self._assert_($13);
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
}, function($ctx1) {$ctx1.fill(self,"testErrorHandlingAfterSent",{faulty:faulty},$globals.FlowTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testErrorHandlingAfterSent\x0a\x0a\x09| faulty |\x0a\x0a\x09self assert: window app session api ws hasSocket.\x0a\x09self assert: window app session api ws isConnected.\x0a\x0a\x09faulty := WillFailAfterSent new.\x0a\x09\x0a\x09self assert: faulty answer isNil.\x0a\x09\x0a\x09window app session api ws \x0a\x09\x09sendCommand: faulty\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer notNil.\x0a\x09\x09\x09self assert: ans answer ]\x0a\x09\x09onError:[ :x | self assert: (x messageText = 'Failing just after sent') ]",
referencedClasses: ["WillFailAfterSent"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "app", "isConnected", "new", "isNil", "answer", "sendCommand:do:onError:", "notNil", "=", "messageText"]
}),
$globals.FlowTest);

$core.addMethod(
$core.method({
selector: "testErrorHandlingBeforeSend",
protocol: 'tests',
fn: function (){
var self=this;
var faulty;
function $WillFailBeforeSend(){return $globals.WillFailBeforeSend||(typeof WillFailBeforeSend=="undefined"?nil:WillFailBeforeSend)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$10,$9,$8,$7,$6,$12,$11;
$5=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._session();
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
$10=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._isConnected();
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
faulty=$recv($WillFailBeforeSend())._new();
$12=$recv(faulty)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$11=$recv($12)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($recv(window)._app())._session())._api())._ws())._sendCommand_do_onError_(faulty,(function(ans){
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
}, function($ctx1) {$ctx1.fill(self,"testErrorHandlingBeforeSend",{faulty:faulty},$globals.FlowTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testErrorHandlingBeforeSend\x0a\x0a\x09| faulty |\x0a\x0a\x09self assert: window app session api ws hasSocket.\x0a\x09self assert: window app session api ws isConnected.\x0a\x0a\x09faulty := WillFailBeforeSend new.\x0a\x09\x0a\x09self assert: faulty answer isNil.\x0a\x09\x0a\x09\x0a\x09window app session api ws \x0a\x09\x09sendCommand: faulty\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer isNil ]\x0a\x09\x09onError:[ :x | self assert: (x messageText = 'Failing just before sending') ]",
referencedClasses: ["WillFailBeforeSend"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "app", "isConnected", "new", "isNil", "answer", "sendCommand:do:onError:", "=", "messageText"]
}),
$globals.FlowTest);

$core.addMethod(
$core.method({
selector: "testPing",
protocol: 'tests',
fn: function (){
var self=this;
var ping;
function $Ping(){return $globals.Ping||(typeof Ping=="undefined"?nil:Ping)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$10,$9,$8,$7,$6,$12,$11,$14,$13;
$5=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._session();
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
$10=$recv(window)._app();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["app"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._session();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["session"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._api();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["api"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._ws();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ws"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._isConnected();
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
ping=$recv($Ping())._new();
$12=$recv(ping)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["answer"]=1;
//>>excludeEnd("ctx");
$11=$recv($12)._isNil();
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$recv($recv($recv($recv($recv(window)._app())._session())._api())._ws())._sendCommand_do_(ping,(function(ans){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$14=$recv(ans)._answer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["answer"]=2;
//>>excludeEnd("ctx");
$13=$recv($14)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
self._assert_($13);
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
}, function($ctx1) {$ctx1.fill(self,"testPing",{ping:ping},$globals.FlowTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPing\x0a\x0a\x09| ping |\x0a\x0a\x09self assert: window app session api ws hasSocket.\x0a\x09self assert: window app session api ws isConnected.\x0a\x0a\x09ping := Ping new.\x0a\x09\x0a\x09self assert: ping answer isNil.\x0a\x09\x0a\x09window app session api ws \x0a\x09\x09sendCommand: ping\x0a\x09\x09do:[ :ans | \x0a\x09\x09\x09self assert: ans answer notNil.\x0a\x09\x09\x09self assert: ans answer pongOn notNil ]",
referencedClasses: ["Ping"],
//>>excludeEnd("ide");
messageSends: ["assert:", "hasSocket", "ws", "api", "session", "app", "isConnected", "new", "isNil", "answer", "sendCommand:do:", "notNil", "pongOn"]
}),
$globals.FlowTest);



$core.addClass('RemoteReferenceTest', $globals.TestCase, [], 'Flow-Tests');
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
}, function($ctx1) {$ctx1.fill(self,"testBoolean",{},$globals.RemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testBoolean\x0a\x0a\x09self deny: true asRemoteReference isRemoteReference.\x0a\x09self assert: true asRemoteReference.\x0a\x0a\x09self deny: false asRemoteReference isRemoteReference.\x0a\x09self assert: false asRemoteReference isBoolean.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "isRemoteReference", "asRemoteReference", "assert:", "isBoolean"]
}),
$globals.RemoteReferenceTest);

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
}, function($ctx1) {$ctx1.fill(self,"testClass",{},$globals.RemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testClass\x0a\x0a\x09self assert: Class asRemoteReference isRemoteReference.\x0a\x09self assert: #() class asRemoteReference isRemoteReference.\x0a\x09self assert: 42 class asRemoteReference isRemoteReference.",
referencedClasses: ["Class"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isRemoteReference", "asRemoteReference", "class"]
}),
$globals.RemoteReferenceTest);

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
}, function($ctx1) {$ctx1.fill(self,"testFloat",{},$globals.RemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFloat\x0a\x0a\x09self deny: 4.2 asRemoteReference isRemoteReference.\x0a\x09self assert: 4.2 asRemoteReference = 4.2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "isRemoteReference", "asRemoteReference", "assert:", "="]
}),
$globals.RemoteReferenceTest);

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
}, function($ctx1) {$ctx1.fill(self,"testInteger",{},$globals.RemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInteger\x0a\x0a\x09self deny: 42 asRemoteReference isRemoteReference.\x0a\x09self assert: 42 asRemoteReference = 42",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "isRemoteReference", "asRemoteReference", "assert:", "="]
}),
$globals.RemoteReferenceTest);

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
}, function($ctx1) {$ctx1.fill(self,"testMetaclass",{},$globals.RemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMetaclass \x0a\x0a\x09self assert: Metaclass asRemoteReference isRemoteReference",
referencedClasses: ["Metaclass"],
//>>excludeEnd("ide");
messageSends: ["assert:", "isRemoteReference", "asRemoteReference"]
}),
$globals.RemoteReferenceTest);

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
}, function($ctx1) {$ctx1.fill(self,"testUndefinedObject",{},$globals.RemoteReferenceTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUndefinedObject \x0a\x0a\x09self deny: nil asRemoteReference isRemoteReference.\x0a\x09self assert: nil asRemoteReference = nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deny:", "isRemoteReference", "asRemoteReference", "assert:", "="]
}),
$globals.RemoteReferenceTest);



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
