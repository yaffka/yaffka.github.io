(function(){
var c$ = Clazz.decorateAsClass(function(){
this.source = null;
Clazz.instantialize(this, arguments);}, java.util, "EventObject", null, java.io.Serializable);
Clazz.makeConstructor(c$, 
function(source){
if (source != null) this.source = source;
 else throw  new IllegalArgumentException();
}, "~O");
Clazz.defineMethod(c$, "getSource", 
function(){
return this.source;
});
Clazz.overrideMethod(c$, "toString", 
function(){
return this.getClass().getName() + "[source=" + String.valueOf(this.source) + ']';
});
})();
;//5.0.1-v7 Mon May 12 23:42:45 CDT 2025
