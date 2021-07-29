const Func = require("../lib/function");

module.exports = [
  new Func("Abs(${1:Number})")
    .setDescription("Returns the absolute value of Number."),
  new Func("ACos(${1:Number})")
    .setDescription("Returns the arccosine (the number whose cosine is Number) in radians."),
  new Func("Array($1)")
    .setDescription("Creates an array."),
  new Func("Asc(${1:String})")
    .setDescription("Returns the numeric value of the first byte or UTF-16 code unit in the specified string."),
  new Func("ASin(${1:Number})")
    .setDescription("Returns the arcsine (the number whose sine is Number) in radians."),
  new Func("ATan(${1:Number})")
    .setDescription("Returns the arctangent (the number whose tangent is Number) in radians."),
  new Func("Ceil(${1:Number})")
    .setDescription("Returns Number rounded up to the nearest integer (without any .00 suffix)."),
  new Func("Chr(${1:Number})")
    .setDescription("Returns the string (usually a single character) corresponding to the character code indicated by the specified number."),
  new Func("ComObjActive(${1:CLSID})")
    .setDescription("Retrieves a running object that has been registered with OLE."),
  new Func("ComObjArray(${1:VarType}, ${2:Count1})")
    .setDescription("Creates a SafeArray for use with COM."),
  new Func("ComObjConnect(${1:Prefix})")
    .setDescription("Connects a COM object's event sources to functions with a given prefix."),
  new Func("ComObjCreate(${1:CLSID})")
    .setDescription("Creates a COM object."),
  new Func("ComObjActive(${1:CLSID})")
    .setDescription("Retrieves a running object that has been registered with OLE."),
  new Func("ComObjError($1)")
    .setDescription("Enables or disables notification of COM errors."),
  new Func("ComObjFlags(${1:ComObject})")
    .setDescription("Retrieves or changes flags which control a COM wrapper object's behaviour."),
  new Func("ComObjGet(${1:Name})")
    .setDescription("Returns a reference to an object provided by a COM component."),
  new Func("ComObjQuery(${1:ComObject})")
    .setDescription("Queries a COM object for an interface or service."),
  new Func("ComObjType(${1:ComObject})")
    .setDescription("Retrieves type information from a COM object."),
  new Func("ComObjValue(${1:ComObject})")
    .setDescription("Retrieves the value or pointer stored in a COM wrapper object."),
  new Func("Abs(${1:Number})")
    .setDescription("Functions for performing various mathematical operations such as rounding, exponentiation, squaring, etc."),
  new Func("DllCall($1)")
    .setDescription("Calls a function inside a DLL, such as a standard Windows API function."),
  new Func("Throw(${1:Expression})")
    .setDescription("Signals the occurrence of an error. This signal can be caught by a try-catch statement."),
  new Func("Abs(${1:Number})")
    .setDescription("Functions for performing various mathematical operations such as rounding, exponentiation, squaring, etc."),
  new Func("FileExist(${1:FilePattern})")
    .setDescription("Checks for the existence of a file or folder and returns its attributes."),
  new Func("FileOpen(${1:Filename}, ${2:Flags})")
    .setDescription("Opens a file to read specific content from it and/or to write new content into it."),
  new Func("Cos(${1:Number})")
    .setDescription("Returns the trigonometric cosine of Number."),
  new Func("Format(${1:FormatStr})")
    .setDescription("Formats a variable number of input values according to a format string."),
  new Func("Func(${1:FunctionName})")
    .setDescription("Retrieves a reference to a function."),
  new Func("GetKeyName(${1:Key}, ${2:Number})")
    .setDescription("Retrieves the name/text, virtual key code or scan code of a key."),
  new Func("GetKeyName(${1:Key}, ${2:Number})")
    .setDescription("Retrieves the name/text, virtual key code or scan code of a key."),
  new Func("GetKeyState(${1:KeyName})")
    .setDescription("Checks if a keyboard key or mouse/joystick button is down or up. Also retrieves joystick status."),
  new Func("GetKeyName(${1:Key}, ${2:Number})")
    .setDescription("Retrieves the name/text, virtual key code or scan code of a key."),
  new Func("Hotstring(${1:Replacement}, ${2:OnOffToggle})")
    .setDescription("Creates, modifies, enables, or disables a hotstring while the script is running."),
  new Func("IL_Add($1)")
    .setDescription("Adds an icon or picture to the specified ImageListID and returns the new icon's index (1 is the first icon, 2 is the second, and so on)."),
  new Func("IL_Create($1)")
    .setDescription("Creates a new ImageList, initially empty, and returns the unique ID of the ImageList (or 0 upon failure)."),
  new Func("IL_Destroy($1)")
    .setDescription("Deletes the specified ImageList and returns 1 upon success and 0 upon failure."),
  new Func("InputHook($1)")
    .setDescription("Creates an object which can be used to collect or intercept keyboard input."),
  new Func("InStr(${1:Haystack}, ${2:Needle})")
    .setDescription("Searches for a given occurrence of a string, from the left or the right."),
  new Func("IsByRef(${1:ParameterVar})")
    .setDescription("Returns a non-zero number if the specified ByRef parameter was supplied with a variable."),
  new Func("IsFunc(${1:FunctionName})")
    .setDescription("Returns a non-zero number if the specified function exists in the script."),
  new Func("IsLabel(${1:LabelName})")
    .setDescription("Returns a non-zero number if the specified label exists in the script."),
  new Func("IsObject(${1:ObjectValue})")
    .setDescription("Returns a non-zero number if the specified value is an object."),
  new Func("Ln(${1:Number})")
    .setDescription("Returns the natural logarithm (base e) of Number."),
  new Func("LoadPicture(${1:Filename})")
    .setDescription("Loads a picture from file and returns a bitmap or icon handle."),
  new Func("Log(${1:Number})")
    .setDescription("Returns the logarithm (base 10) of Number."),
  new Func("Trim(${1:String}, ${2:OmitChars}, ${3:t}, ${4:Result})")
    .setDescription("Trims characters from the beginning and/or end of a string."),
  new Func("LV_Add($1)")
    .setDescription("Adds a new row to the bottom of the list."),
  new Func("LV_Delete($1)")
    .setDescription("Deletes the specified row or all rows."),
  new Func("LV_DeleteCol($1)")
    .setDescription("Deletes the specified column and all of the contents beneath it."),
  new Func("LV_GetCount($1)")
    .setDescription("Returns the total number of rows or columns, or the number of selected rows only."),
  new Func("LV_GetNext($1)")
    .setDescription("Returns the row number of the next selected, checked, or focused row."),
  new Func("LV_Insert($1)")
    .setDescription("Inserts a new row at the specified row number."),
  new Func("LV_InsertCol($1)")
    .setDescription("Inserts a new column at the specified column number."),
  new Func("LV_Modify($1)")
    .setDescription("Modifies the attributes and/or text of a row."),
  new Func("LV_ModifyCol($1)")
    .setDescription("Modifies the attributes and/or text of the specified column and its header."),
  new Func("LV_SetImageList($1)")
    .setDescription("Sets or replaces an ImageList for displaying icons."),
  new Func("LV_GetText($1)")
    .setDescription("Retrieves the text at the specified RowNumber and ColumnNumber and stores it in OutputVar."),
  new Func("Max(${1:Number})")
    .setDescription("Returns the highest value of one or more numbers."),
  new Func("MenuGetHandle(${1:MenuName})")
    .setDescription("Retrieves the Win32 menu handle of a menu."),
  new Func("MenuGetName(${1:Handle})")
    .setDescription("Retrieves the name of a menu given a handle to its underlying Win32 menu."),
  new Func("Min(${1:Number})")
    .setDescription("Returns the lowest value of one or more numbers."),
  new Func("Mod(${1:Number})")
    .setDescription("Modulo. Returns the remainder when Dividend is divided by Divisor."),
  new Func("NumGet(${1:VarOrAddress})")
    .setDescription("Returns the binary number stored at the specified address+offset."),
  new Func("NumPut(${1:Offset}, ${2:0})")
    .setDescription("Stores a number in binary format at the specified address+offset."),
  new Func("ObjAddRef(${1:ObjRelease})")
    .setDescription("Increments or decrements an object's reference count."),
  new Func("ObjBindMethod(${1:Obj}, ${2:Method})")
    .setDescription("Creates a BoundFunc object which calls a method of a given object."),
  new Func("ObjAddRef(${1:ObjRelease})")
    .setDescription("Increments or decrements an object's reference count."),
  new Func("OnClipboardChange(${1:AddRemove})")
    .setDescription("Registers a function or function object to run whenever the clipboard's content changes."),
  new Func("OnError(${1:AddRemove})")
    .setDescription("Specifies a function to run automatically when an unhandled error occurs."),
  new Func("OnExit(${1:AddRemove})")
    .setDescription("Specifies a callback function or subroutine to run automatically when the script exits."),
  new Func("OnMessage(${1:Function}, ${2:MaxThreads})")
    .setDescription("Specifies a function or function object to call automatically when the script receives the specified message."),
  new Func("Ord(${1:String})")
    .setDescription("Returns the ordinal value (numeric character code) of the first character in the specified string."),
  new Func("RegExMatch(${1:Haystack}, ${2:NeedleRegEx})")
    .setDescription("Determines whether a string contains a pattern (regular expression)."),
  new Func("RegExReplace(${1:Haystack}, ${2:NeedleRegEx})")
    .setDescription("Replaces occurrences of a pattern (regular expression) inside a string."),
  new Func("RegisterCallback(${1:FunctionName})")
    .setDescription("Creates a machine-code address that when called, redirects the call to a function in the script."),
  new Func("Round(${1:Number})")
    .setDescription("Returns Number rounded to N decimal places."),
  new Func("Trim(${1:String}, ${2:OmitChars}, ${3:t}, ${4:Result})")
    .setDescription("Trims characters from the beginning and/or end of a string."),
  new Func("SB_SetIcon($1)")
    .setDescription("Displays a small icon to the left of the text in the specified part."),
  new Func("SB_SetParts($1)")
    .setDescription("Divides the bar into multiple sections according to the specified widths (in pixels)."),
  new Func("SB_SetText($1)")
    .setDescription("Displays NewText in the specified part of the status bar."),
  new Func("Sin(${1:Number})")
    .setDescription("Returns the trigonometric sine of Number."),
  new Func("Sqrt(${1:Number})")
    .setDescription("Returns the square root of Number."),
  new Func("StrGet(${1:Source})")
    .setDescription("Copies a string from a memory address, optionally converting it from a given code page."),
  new Func("StrLen(${1:String})")
    .setDescription("Retrieves the count of how many characters are in a string."),
  new Func("StrPut(${1:Encoding}, ${2:None})")
    .setDescription("Copies a string to a memory address, optionally converting it to a given code page."),
  new Func("StrReplace(${1:Haystack}, ${2:Needle})")
    .setDescription("Replaces the specified substring with a new string."),
  new Func("StrSplit(${1:String})")
    .setDescription("Separates a string into an array of substrings using the specified delimiters."),
  new Func("SubStr(${1:String}, ${2:StartingPos})")
    .setDescription("Retrieves one or more characters from the specified position in a string."),
  new Func("Tan(${1:Number})")
    .setDescription("Returns the trigonometric tangent of Number."),
  new Func("Trim(${1:String}, ${2:OmitChars}, ${3:t}, ${4:Result})")
    .setDescription("Trims characters from the beginning and/or end of a string."),
  new Func("TV_Add($1)")
    .setDescription("Adds a new item to the TreeView and returns its unique Item ID number (or 0 upon failure)."),
  new Func("TV_Delete($1)")
    .setDescription("Deletes the specified item or all items."),
  new Func("TV_Get($1)")
    .setDescription("Returns the ID number of the specified item if it has the specified attribute."),
  new Func("TV_GetChild($1)")
    .setDescription("Returns the ID number of the specified item's first/top child (or 0 if none)."),
  new Func("TV_GetCount($1)")
    .setDescription("Returns the total number of items in the control."),
  new Func("TV_GetNext($1)")
    .setDescription("Returns the ID number of the next item below the specified item (or 0 if none)."),
  new Func("TV_GetParent($1)")
    .setDescription("Returns the specified item's parent as an item ID."),
  new Func("TV_GetPrev($1)")
    .setDescription("Returns the ID number of the sibling above the specified item (or 0 if none)."),
  new Func("TV_GetSelection($1)")
    .setDescription("Returns the selected item's ID number."),
  new Func("TV_GetText($1)")
    .setDescription("Retrieves the text/name of the specified ItemID and stores it in OutputVar."),
  new Func("TV_Modify($1)")
    .setDescription("Modifies the attributes and/or name of an item."),
  new Func("TV_SetImageList($1)")
    .setDescription("Sets or replaces an ImageList for displaying icons."),
  new Func("VarSetCapacity(${1:TargetVar})")
    .setDescription("Enlarges a variable's holding capacity or frees its memory. Normally, this is necessary only for unusual circumstances such as DllCall()."),
  new Func("WinActive($1)")
    .setDescription("Checks if the specified window is active and returns its unique ID (HWND)."),
  new Func("WinExist($1)")
    .setDescription("Checks if the specified window exists and returns the unique ID (HWND) of the first matching window.")
];
