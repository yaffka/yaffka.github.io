Clazz.declarePackage("J.shapebio");
Clazz.load(["J.shapebio.Strands"], "J.shapebio.MeshRibbon", null, function(){
var c$ = Clazz.declareType(J.shapebio, "MeshRibbon", J.shapebio.Strands);
Clazz.overrideMethod(c$, "initShape", 
function(){
this.isMesh = true;
});
});
;//5.0.1-v7 Tue Jul 22 18:14:29 CDT 2025
