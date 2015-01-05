define("amber-flow-app/MVC-Binding-Tests", ["amber/boot", "minimapless/MiniMapless", "amber-flow-app/MVC-Binding"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('MVC-Binding-Tests');
$core.packages["MVC-Binding-Tests"].transport = {"type":"amd","amdNamespace":"amber-flow-app"};

$core.addClass('MockPerson', $globals.MaplessModel, [], 'MVC-Binding-Tests');


$core.addClass('RivetsJSTestsController', $globals.BindingController, [], 'MVC-Binding-Tests');
$core.addMethod(
$core.method({
selector: "onAha",
protocol: 'reactions',
fn: function (){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($Transcript())._cr();
$1=$recv($Transcript())._show_("Woha! it was you who clicked that?");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAha",{},$globals.RivetsJSTestsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAha\x0a\x0a\x09Transcript cr; show: 'Woha! it was you who clicked that?'",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["cr", "show:"]
}),
$globals.RivetsJSTestsController);

$core.addMethod(
$core.method({
selector: "onMhm",
protocol: 'reactions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._alert_("Nicely clicked!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMhm",{},$globals.RivetsJSTestsController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onMhm\x0a\x0a\x09window alert: 'Nicely clicked!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:"]
}),
$globals.RivetsJSTestsController);


$core.addMethod(
$core.method({
selector: "defaultModel",
protocol: 'accessing',
fn: function (){
var self=this;
function $MockPerson(){return $globals.MockPerson||(typeof MockPerson=="undefined"?nil:MockPerson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($MockPerson())._new();
$recv($2)._name_("John Galt");
$recv($2)._age_((42));
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultModel",{},$globals.RivetsJSTestsController.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultModel\x0a\x09\x22Answers the default model that is going to be set in the instance of this controller.\x22\x0a\x0a\x09^ MockPerson new\x0a\x09\x09name: 'John Galt';\x0a\x09\x09age: 42;\x0a\x09\x09yourself",
referencedClasses: ["MockPerson"],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "age:", "yourself"]
}),
$globals.RivetsJSTestsController.klass);

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
$globals.RivetsJSTestsController.klass);

});
