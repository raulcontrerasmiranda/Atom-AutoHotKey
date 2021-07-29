const Func = require("../lib/function");

module.exports = [
  new Func("Abs(${1:Number})")
    .setDescription("Returns the absolute value of Number."),
  new Func("ACos(${1:Number})")
    .setDescription("Returns the arccosine in radians"),
  new Func("Array($1)")
    .setDescription("Create an array")
  new Func("Asc(${1:String})")
    .setDescription("Returns the numeric value of the first byte or UTF-16 code unit in the specified string."),
  new Func("ASin(${1:Number})")
    .setDescription("Returns the arcsin in radians"),
  new Func("ATan(${1:Number})")
    .setDescription("Returns the arctan in radians"),
  new Func("Ceil(${1:Number})")
    .setDescription("Returns Number rounded up to the nearest integer (without any .00 suffix)"),
  new Func("Chr(${1:Number})")
    .setDescription("Returns the string (usually a single character) corresponding to the character code indicated by the specified number."),
  new Func("ComObjActive($1)")
    .setDescription("Retrieves a running object that has been registered with OLE."),
  new Func("ComObjArray($1)")
    .setDescription("Creates a SafeArray for use with COM."),
  new Func("ComObjConnect(${1:ComObject}, ${2:Prefix})")
    .setDescription("Connects a COM object's event sources to functions with a given prefix."),
  new Func("ComObjCreate(${1:CLSID}, ${2:IID})")
    .setDescription("Creates a COM object"),
  new Func("ComObject(${1:CLSID})")
    .setDescription("Retrieves a running object that has been registered with OLE."),
  new Func("ComObjError(${1:Enable})")
    .setDescription("Enables or disables notification of COM errors."),
  new Func("ComOBjFlags(${1:ComObject})")
    .setDescription("Retrieves or changes flags which control a COM wrapper object's behavior."),
  new Func("ComObjGet(${1:Name})")
    .setDescription("Returns a reference to an object provided by a COM component."),
  new Func("ComObjQuery(${1:ComObject})")
    .setDescription("Queries a COM object for an interface or service."),
  new Func("ComObjType(${1:ComObject})")
    .setDescription("Retrieves type information from a COM object"),
  new Func("ComObjValue(${1:ComObject})")
    .setDescription("Retrieves the value or pointer stored in a COM wrapper object.")
];
