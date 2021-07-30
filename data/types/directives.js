const Directive = require("../lib/directive");

module.exports = [
  new Directive("#ClipboardTimeout ${1:Milliseconds}")
    .setDescription("Changes how long the script keeps trying to access the clipboard when the first attempt fails."),
  new Directive("#CommentFlag ${1:NewString}")
    .setDescription("Changes the script's comment symbol from semicolon to some other string."),
  new Directive("#Delimiter ${1:NewChar}")
    .setDescription("Changes the script's delimiter character (e.g. accent vs. backslash)."),
  new Directive("#DerefChar ${1:NewChar}")
    .setDescription("Changes the script's dereference character (e.g. accent vs. backslash)."),
  new Directive("#ErrorStdOut ${1:Encoding}")
    .setDescription("Sends any syntax error that prevents a script from launching to the standard error stream (stderr) rather than displaying a dialog."),
  new Directive("#EscapeChar ${1:NewChar}")
    .setDescription("Changes the script's escape character (e.g. accent vs. backslash)."),
  new Directive("#HotkeyInterval ${1:Milliseconds}")
    .setDescription("Along with #MaxHotkeysPerInterval, specifies the rate of hotkey activations beyond which a warning dialog will be displayed."),
  new Directive("#HotkeyModifierTimeout ${1:Milliseconds}")
    .setDescription("Affects the behavior of hotkey modifiers: Ctrl, Alt, Win, and Shift."),
  new Directive("#Hotstring ${1:Hotstring}")
    .setDescription("Changes hotstring options or ending characters."),
  new Directive("#If ${1:Expression}")
    .setDescription("Creates context-sensitive hotkeys and hotstrings. Such hotkeys perform a different action (or none at all) depending on the result of an expression."),
  new Directive("#IfTimeout ${1:Timeout}")
    .setDescription("Sets the maximum time that may be spent evaluating a single #If expression."),
  new Directive("#IfWinActive ${1:WinTitle}, ${2:WinText}")
    .setDescription("Creates context-sensitive hotkeys and hotstrings. Such hotkeys perform a different action (or none at all) depending on the type of window that is active or exists."),
  new Directive("#IfWinActive ${1:WinTitle}, ${2:WinText}")
    .setDescription("Creates context-sensitive hotkeys and hotstrings. Such hotkeys perform a different action (or none at all) depending on the type of window that is active or exists."),
  new Directive("#IfWinActive ${1:WinTitle}, ${2:WinText}")
    .setDescription("Creates context-sensitive hotkeys and hotstrings. Such hotkeys perform a different action (or none at all) depending on the type of window that is active or exists."),
  new Directive("#IfWinActive ${1:WinTitle}, ${2:WinText}")
    .setDescription("Creates context-sensitive hotkeys and hotstrings. Such hotkeys perform a different action (or none at all) depending on the type of window that is active or exists."),
  new Directive("#Include ${1:Include}")
    .setDescription("Causes the script to behave as though the specified file's contents are present at this exact position."),
  new Directive("#Include ${1:Include}")
    .setDescription("Causes the script to behave as though the specified file's contents are present at this exact position."),
  new Directive("#InputLevel ${1:Level}")
    .setDescription("Controls which artificial keyboard and mouse events are ignored by hotkeys and hotstrings."),
  new Directive("#InstallKeybdHook $1")
    .setDescription("Forces the unconditional installation of the keyboard hook."),
  new Directive("#InstallMouseHook $1")
    .setDescription("Forces the unconditional installation of the mouse hook."),
  new Directive("#KeyHistory ${1:MaxEvents}")
    .setDescription("Sets the maximum number of keyboard and mouse events displayed by the KeyHistory window. You can set it to 0 to disable key history."),
  new Directive("#LTrim $1")
    .setDescription("Omits spaces and tabs at the beginning of each line. This is primarily used to allow the continuation section to be indented. Also, this option may be turned on for multiple continuation sections by specifying #LTrim on a line by itself. #LTrim is positional: it affects all continuation sections physically beneath it. The setting may be turned off via #LTrim Off."),
  new Directive("#MaxHotkeysPerInterval ${1:Value}")
    .setDescription("Along with #HotkeyInterval, specifies the rate of hotkey activations beyond which a warning dialog will be displayed."),
  new Directive("#MaxMem ${1:Megabytes}")
    .setDescription("Sets the maximum capacity of each variable to the specified number of megabytes."),
  new Directive("#MaxThreads ${1:Value}")
    .setDescription("Sets the maximum number of simultaneous threads."),
  new Directive("#MaxThreadsBuffer ${1:OnOff}")
    .setDescription("Causes some or all hotkeys to buffer rather than ignore keypresses when their #MaxThreadsPerHotkey limit has been reached."),
  new Directive("#MaxThreadsPerHotkey ${1:Value}")
    .setDescription("Sets the maximum number of simultaneous threads per hotkey or hotstring."),
  new Directive("#MenuMaskKey ${1:KeyName}")
    .setDescription("Changes which key is used to mask Win or Alt keyup events."),
  new Directive("#NoEnv $1")
    .setDescription("Avoids checking empty variables to see if they are environment variables (recommended for all new scripts)."),
  new Directive("#NoTrayIcon $1")
    .setDescription("Disables the showing of a tray icon."),
  new Directive("#Persistent $1")
    .setDescription("Keeps a script permanently running (that is, until the user closes it or ExitApp is encountered)."),
  new Directive("#Requires ${1:Requirement}")
    .setDescription("Displays an error and quits if a version requirement is not met."),
  new Directive("#SingleInstance ${1:ForceIgnorePromptOff}")
    .setDescription("Determines whether a script is allowed to run again when it is already running."),
  new Directive("#UseHook ${1:OnOff}")
    .setDescription("Forces the use of the  hook to implement all or some keyboard hotkeys."),
  new Directive("#Warn ${1:WarningType}, ${2:WarningMode}")
    .setDescription("Enables or disables warnings for specific conditions which may indicate an error, such as a typo or missing \"global\" declaration."),
  new Directive("#WinActivateForce $1")
    .setDescription("Skips the gentle method of activating a window and goes straight to the forceful method."),
];
