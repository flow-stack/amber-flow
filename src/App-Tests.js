define("amber-flow/App-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('App-Tests');
$core.packages["App-Tests"].transport = {"type":"amd","amdNamespace":"amber-flow"};

$core.addClass('AppTest', $globals.TestCase, [], 'App-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AppTest.comment="Nicely tested App!";
//>>excludeEnd("ide");

});
