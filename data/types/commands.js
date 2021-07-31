const Command = require("../lib/command");

module.exports = [
  new Command("AutoTrim, ${1:OnOff}")
    .setDescription("Determines whether traditional assignments like Var1 = %Var2% omit spaces and tabs from the beginning and end of Var2."),
  new Command("BlockInput")
    .setDescription("Disables or enables the user's ability to interact with the computer via keyboard and mouse."),
  new Command("Click, ${1:Options}")
    .setDescription("Clicks a mouse button at the specified coordinates. It can also hold down a mouse button, turn the mouse wheel, or move the mouse."),
  new Command("ClipWait, ${1:Timeout}, ${2:WaitForAnyData}")
    .setDescription("Waits until the clipboard contains data."),
  new Command("Control, ${1:SubCommand}")
    .setDescription("Makes a variety of changes to a control."),
  new Command("ControlClick, ${1:Control}, ${2:or}, ${3:Pos}, ${4:WinTitle}, ${5:WinText}, ${6:WhichButton}, ${7:ClickCount}, ${8:Options}, ${9:ExcludeTitle}, ${10:ExcludeText}")
    .setDescription("Sends a mouse  button or mouse wheel event to a  control."),
  new Command("ControlFocus, ${1:Control}, ${2:WinTitle}, ${3:WinText}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Sets input focus to a given control on a window."),
  new Command("ControlGet, ${1:SubCommand}")
    .setDescription("Retrieves various types of information about a control."),
  new Command("ControlGetFocus, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Retrieves which control of the target window has input focus, if any."),
  new Command("ControlGetPos, ${1:X}, ${2:Y}, ${3:Width}, ${4:Height}, ${5:Control}, ${6:WinTitle}, ${7:WinText}, ${8:ExcludeTitle}, ${9:ExcludeText}")
    .setDescription("Retrieves the position and size of a control."),
  new Command("ControlGetText, ${1:Control}, ${2:WinTitle}, ${3:WinText}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Retrieves text from a control."),
  new Command("ControlMove, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Moves or resizes a control."),
  new Command("ControlSend, ${1:Control}, ${2:Keys}, ${3:WinTitle}, ${4:WinText}, ${5:ExcludeTitle}, ${6:ExcludeText}")
    .setDescription("Sends simulated keystrokes to a window or control."),
  new Command("ControlSendRaw, ${1:Control}, ${2:Keys}, ${3:WinTitle}, ${4:WinText}, ${5:ExcludeTitle}, ${6:ExcludeText}")
    .setDescription("Sends simulated keystrokes to a window or control."),
  new Command("ControlSetText, ${1:Control}, ${2:NewText}, ${3:WinTitle}, ${4:WinText}, ${5:ExcludeTitle}, ${6:ExcludeText}")
    .setDescription("Changes the text of a control."),
  new Command("CoordMode, ${1:RelativeTo}")
    .setDescription("Sets coordinate mode for various commands to be relative to either the active window or the screen."),
  new Command("Critical, ${1:OnOffNumeric}")
    .setDescription("Prevents the current thread from being interrupted by other threads, or enables it to be interrupted."),
  new Command("DetectHiddenText, ${1:OnOff}")
    .setDescription("Determines whether invisible text in a window is \"seen\" for the purpose of finding the window. This affects commands, built-in functions and control flow statements such as WinExist() and WinActivate."),
  new Command("DetectHiddenWindows, ${1:OnOff}")
    .setDescription("Determines whether invisible windows are \"seen\" by the script."),
  new Command("Drive, ${1:SubCommand}")
    .setDescription("Ejects/retracts the tray in a CD or DVD drive, or sets a drive's volume label."),
  new Command("DriveGet, ${1:SubCommand}")
    .setDescription("Retrieves various types of information about the computer's drive(s)."),
  new Command("DriveSpaceFree, ${1:OutputVar}, ${2:Path}")
    .setDescription("Retrieves the free disk space of a drive, in Megabytes."),
  new Command("Edit, $1")
    .setDescription("Opens the current script for editing in the associated editor."),
  new Command("EnvAdd, ${1:TimeUnits}")
    .setDescription("Sets a variable to the sum of itself plus the given value (can also add or subtract time from a date-time value). Synonymous with: Var += Value."),
  new Command("EnvDiv, ${1:Var}, ${2:Value}")
    .setDescription("Sets a variable to itself divided by the given value. Synonymous with: Var /= Value."),
  new Command("EnvGet, ${1:OutputVar}, ${2:EnvVarName}")
    .setDescription("Retrieves an environment variable."),
  new Command("EnvMult, ${1:Var}, ${2:Value}")
    .setDescription("Sets a variable to itself times the given value. Synonymous with: Var *= Value."),
  new Command("EnvSet, ${1:EnvVar}, ${2:Value}")
    .setDescription("Writes a value to a variable contained in the  environment."),
  new Command("EnvSub, ${1:TimeUnits}")
    .setDescription("Sets a variable to itself minus the given value (can also compare date-time values). Synonymous with: Var -= Value."),
  new Command("EnvUpdate, $1")
    .setDescription("Notifies the OS and all running applications that environment variable(s) have changed."),
  new Command("Exit, ${1:ExitCode}")
    .setDescription("Exits the current thread or (if the script is not persistent) the entire script."),
  new Command("ExitApp, ${1:ExitCode}")
    .setDescription("Terminates the script."),
  new Command("FileAppend, ${1:Text}, ${2:Filename}, ${3:Encoding}")
    .setDescription("Writes text to the end of a file (first creating the file, if necessary)."),
  new Command("FileCopy, ${1:Overwrite}")
    .setDescription("Copies one or more files."),
  new Command("FileCopyDir, ${1:Overwrite}")
    .setDescription("Copies a folder along with all its sub-folders and files (similar to xcopy)."),
  new Command("FileCreateDir, ${1:DirName}")
    .setDescription("Creates a folder."),
  new Command("FileCreateShortcut, ${1:WorkingDir}, ${2:Args}, ${3:Description}, ${4:IconFile}, ${5:ShortcutKey}, ${6:IconNumber}, ${7:RunState}")
    .setDescription("Creates a shortcut (.lnk) file."),
  new Command("FileDelete, ${1:FilePattern}")
    .setDescription("Deletes one or more files."),
  new Command("FileEncoding, ${1:Encoding}")
    .setDescription("Sets the default encoding for FileRead, FileReadLine, Loop Read, FileAppend, and FileOpen()."),
  new Command("FileGetAttrib, ${1:Filename}")
    .setDescription("Reports whether a file or folder is read-only, hidden, etc."),
  new Command("FileGetShortcut, ${1:OutTarget}, ${2:OutDir}, ${3:OutArgs}, ${4:OutDescription}, ${5:OutIcon}, ${6:OutIconNum}, ${7:OutRunState}")
    .setDescription("Retrieves information about a shortcut (.lnk) file, such as its target file."),
  new Command("FileGetSize, ${1:Filename}, ${2:Units}")
    .setDescription("Retrieves the size of a file."),
  new Command("FileGetTime, ${1:Filename}, ${2:WhichTime}")
    .setDescription("Retrieves the datetime stamp of a file or folder."),
  new Command("FileGetVersion, ${1:Filename}")
    .setDescription("Retrieves the version of a file."),
  new Command("FileInstall, ${1:Overwrite}")
    .setDescription("Includes the specified file inside the compiled version of the script."),
  new Command("FileMove, ${1:Overwrite}")
    .setDescription("Moves or renames one or more files."),
  new Command("FileMoveDir, ${1:Flag}")
    .setDescription("Moves a folder along with all its sub-folders and files. It can also rename a folder."),
  new Command("FileRead, ${1:OutputVar}, ${2:Filename}")
    .setDescription("Reads a file's contents into a variable."),
  new Command("FileReadLine, ${1:OutputVar}, ${2:Filename}, ${3:LineNum}")
    .setDescription("Reads the specified line  from a file and stores the text in a variable."),
  new Command("FileRecycle, ${1:FilePattern}")
    .setDescription("Sends a file or directory to the recycle bin if possible, or permanently deletes it."),
  new Command("FileRecycleEmpty, ${1:DriveLetter}")
    .setDescription("Empties the recycle bin."),
  new Command("FileRemoveDir, ${1:Recurse}")
    .setDescription("Deletes a folder."),
  new Command("FileSelectFile, ${1:Options}, ${2:RootDir}, ${3:Filename}, ${4:Title}, ${5:Filter}")
    .setDescription("Displays a standard dialog  that allows the user to open or save file(s)."),
  new Command("FileSelectFolder, ${1:StartingFolder}, ${2:Options}, ${3:Prompt}")
    .setDescription("Displays a standard dialog  that allows the user to select a folder."),
  new Command("FileSetAttrib, ${1:FilePattern}, ${2:OperateOnFolders}, ${3:Recurse}")
    .setDescription("Changes the attributes of one or more files or folders. Wildcards are supported."),
  new Command("FileSetTime, ${1:YYYYMMDDHH24MISS}, ${2:FilePattern}, ${3:WhichTime}, ${4:OperateOnFolders}, ${5:Recurse}")
    .setDescription("Changes the  datetime stamp of one or more files or folders. Wildcards are supported."),
  new Command("FormatTime, ${1:YYYYMMDDHH24MISS}, ${2:Format}")
    .setDescription("Transforms a YYYYMMDDHH24MISS timestamp into the specified date/time format."),
  new Command("GetKeyState, ${1:KeyName}")
    .setDescription("Checks if a keyboard key or mouse/joystick button is down or up. Also retrieves joystick status."),
  new Command("GroupActivate, ${1:Mode}")
    .setDescription("Activates the next window in a window group that was defined with GroupAdd."),
  new Command("GroupAdd, ${1:WinTitle}, ${2:WinText}, ${3:Label}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Adds a window specification to a window group, creating the group if necessary."),
  new Command("GroupClose, ${1:Mode}")
    .setDescription("Closes the active window if it was just activated by GroupActivate or GroupDeactivate. It then activates the next window in the series. It can also close all windows in a group."),
  new Command("GroupDeactivate, ${1:Mode}")
    .setDescription("Similar to GroupActivate except activates the next window not in the group."),
  new Command("Gui, ${1:SubCommand}")
    .setDescription("Creates and manages windows and controls. Such windows can be used as data entry forms or custom user interfaces."),
  new Command("GuiControl, ${1:SubCommand}")
    .setDescription("Makes a variety of changes to a control in a GUI window."),
  new Command("GuiControlGet, ${1:SubCommand}, ${2:ControlID}, ${3:Value}")
    .setDescription("Retrieves various types of information about a control in a GUI window."),
  new Command("Hotkey, ${1:Label}, ${2:Options}")
    .setDescription("Creates, modifies, enables, or disables a hotkey while the script is running."),
  new Command("ImageSearch, ${1:OutputVarX}, ${2:OutputVarY}, ${3:X1}, ${4:Y1}, ${5:X2}, ${6:Y2}, ${7:ImageFile}")
    .setDescription("Searches a region of the screen for an image."),
  new Command("IniDelete, ${1:Key}")
    .setDescription("Deletes a value from a standard format .ini file."),
  new Command("IniRead, ${1:Default}")
    .setDescription("Reads a value, section or list of section names from a standard format .ini file."),
  new Command("IniWrite, ${1:IniWrite}")
    .setDescription("Writes a value or section to a standard format .ini file."),
  new Command("Input, ${1:OutputVar}, ${2:Options}, ${3:EndKeys}, ${4:MatchList}")
    .setDescription("Waits for the user to type a string."),
  new Command("InputBox, ${1:Title}, ${2:Prompt}, ${3:HIDE}, ${4:Width}, ${5:Height}, ${6:X}, ${7:Y}, ${8:Locale}, ${9:Timeout}, ${10:Default}")
    .setDescription("Displays an input box to ask the user to enter a string."),
  new Command("KeyHistory, $1")
    .setDescription("Displays script info and a history of the most recent keystrokes and mouse clicks."),
  new Command("KeyWait, ${1:Options}")
    .setDescription("Waits for a key or mouse/joystick button to be released or pressed down."),
  new Command("ListHotkeys, $1")
    .setDescription("Displays the hotkeys in use by the current script, whether their subroutines are currently running, and whether or not they use the keyboard or mouse hook."),
  new Command("ListLines, ${1:OnOff}")
    .setDescription("Displays the script lines most recently executed."),
  new Command("ListVars, $1")
    .setDescription("Displays the script's variables: their names and current contents."),
  new Command("Menu, ${1:SubCommand}")
    .setDescription("Creates, deletes, modifies and displays menus and menu items. Changes the tray icon and its tooltip. Controls whether the main window of a compiled script can be opened."),
  new Command("MouseClick, ${1:WhichButton}, ${2:X}, ${3:Y}, ${4:ClickCount}, ${5:Speed}, ${6:DownOrUp}, ${7:Relative}")
    .setDescription("Clicks or holds down a mouse button, or turns the mouse wheel. NOTE: The Click command is generally more flexible and easier to use."),
  new Command("MouseClickDrag, ${1:Speed}, ${2:Relative}")
    .setDescription("Clicks and holds the specified mouse button, moves the mouse to the destination coordinates, then releases the button."),
  new Command("MouseGetPos, ${1:OutputVarX}, ${2:OutputVarY}, ${3:OutputVarWin}, ${4:OutputVarControl}, ${5:Flag}")
    .setDescription("Retrieves the current position of the mouse cursor, and optionally which window and control it is hovering over."),
  new Command("MouseMove, ${1:Speed}, ${2:Relative}")
    .setDescription("Moves the mouse cursor."),
  new Command("MsgBox, ${1:Text}")
    .setDescription("Displays the specified text in a small window containing one or more buttons (such as Yes and No)."),
  new Command("OnExit, ${1:AddRemove}")
    .setDescription("Specifies a callback function or subroutine to run automatically when the script exits."),
  new Command("OutputDebug, ${1:Text}")
    .setDescription("Sends a string to the debugger (if any) for display."),
  new Command("Pause, ${1:OnOffToggle}, ${2:OperateOnUnderlyingThread}")
    .setDescription("Pauses the script's current thread."),
  new Command("PixelGetColor, ${1:Mode}")
    .setDescription("Retrieves the color of the pixel at the specified x,y coordinates."),
  new Command("PixelSearch, ${1:Variation}, ${2:Mode}")
    .setDescription("Searches a region of the screen for a pixel of the specified color."),
  new Command("PostMessage, ${1:wParam}, ${2:lParam}, ${3:Control}, ${4:WinTitle}, ${5:WinText}, ${6:ExcludeTitle}, ${7:ExcludeText}")
    .setDescription("Sends a message to a window or control (SendMessage additionally waits for acknowledgement)."),
  new Command("Process, ${1:SubCommand}")
    .setDescription("Performs one of the following operations on a process: checks if it exists; changes its priority; closes it; waits for it to close."),
  new Command("Progress, ${1:ProgressParam1}")
    .setDescription("Creates or updates a window containing a progress bar or an image."),
  new Command("Random, ${1:Min}, ${2:Max}")
    .setDescription("Generates a pseudo-random number."),
  new Command("RegDelete, ${1:ValueName}")
    .setDescription("Deletes a subkey or value from the registry."),
  new Command("RegRead, ${1:ValueName}")
    .setDescription("Reads a value from the registry."),
  new Command("RegWrite, ${1:ValueName}, ${2:Value}")
    .setDescription("Writes a value to the registry."),
  new Command("Reload, $1")
    .setDescription("Replaces the currently running instance of the script with a new one."),
  new Command("Run, ${1:WorkingDir}, ${2:Options}, ${3:OutputVarPID}")
    .setDescription("Runs an external program. Unlike Run, RunWait will wait until the program finishes before continuing."),
  new Command("RunAs, ${1:User}, ${2:Password}, ${3:Domain}")
    .setDescription("Specifies a set of user credentials to use for all subsequent uses of Run and RunWait."),
  new Command("RunWait, ${1:WorkingDir}, ${2:Options}, ${3:OutputVarPID}")
    .setDescription("Runs an external program. Unlike Run, RunWait will wait until the program finishes before continuing."),
  new Command("Send, ${1:Keys}")
    .setDescription("Sends simulated keystrokes and mouse clicks to the active window."),
  new Command("SendEvent, ${1:Keys}")
    .setDescription("Sends simulated keystrokes and mouse clicks to the active window."),
  new Command("SendInput, ${1:Keys}")
    .setDescription("Sends simulated keystrokes and mouse clicks to the active window."),
  new Command("SendLevel, ${1:Level}")
    .setDescription("Controls which artificial keyboard and mouse events are ignored by hotkeys and hotstrings."),
  new Command("SendMessage, ${1:wParam}, ${2:lParam}, ${3:Control}, ${4:WinTitle}, ${5:WinText}, ${6:ExcludeTitle}, ${7:ExcludeText}, ${8:Timeout}")
    .setDescription("Sends a message to a window or control (SendMessage additionally waits for acknowledgement)."),
  new Command("SendMode, ${1:Mode}")
    .setDescription("Makes Send synonymous with SendInput or SendPlay rather than the default (SendEvent). Also makes Click and MouseMove/Click/Drag use the specified method."),
  new Command("SendPlay, ${1:Keys}")
    .setDescription("Sends simulated keystrokes and mouse clicks to the active window."),
  new Command("SendRaw, ${1:Keys}")
    .setDescription("Sends simulated keystrokes and mouse clicks to the active window."),
  new Command("SetBatchLines, ${1:SetBatchLines}")
    .setDescription("Determines how fast a script will run (affects CPU utilization)."),
  new Command("SetNumLockState, ${1:State}")
    .setDescription("Sets the state of CapsLock/NumLock/ScrollLock. Can also force the key to stay on or off."),
  new Command("SetControlDelay, ${1:Delay}")
    .setDescription("Sets the delay that will occur after each control-modifying command."),
  new Command("SetDefaultMouseSpeed, ${1:Speed}")
    .setDescription("Sets the mouse speed that will be used if unspecified in Click and MouseMove/Click/Drag."),
  new Command("SetEnv, ${1:Var}, ${2:Value}, ${1:Var}, ${2:Value}")
    .setDescription("Assigns the specified value to a variable."),
  new Command("SetFormat, ${1:NumberType}, ${2:Format}")
    .setDescription("Sets the format of integers and floating point numbers generated by math operations."),
  new Command("SetKeyDelay, ${1:Delay}, ${2:PressDuration}, ${3:Play}")
    .setDescription("Sets the delay that will occur after each keystroke sent by Send or ControlSend."),
  new Command("SetMouseDelay, ${1:Play}")
    .setDescription("Sets the delay that will occur after each mouse movement or click."),
  new Command("SetCapsLockState, ${1:State}")
    .setDescription("Sets the state of CapsLock/NumLock/ScrollLock. Can also force the key to stay on or off."),
  new Command("SetRegView, ${1:RegView}")
    .setDescription("Sets the registry view used by RegRead, RegWrite, RegDelete and registry loops, allowing them in a 32-bit script to access the 64-bit registry view and vice versa."),
  new Command("SetScrollLockState, ${1:State}")
    .setDescription("Sets the state of CapsLock/NumLock/ScrollLock. Can also force the key to stay on or off."),
  new Command("SetStoreCapsLockMode, ${1:OnOff}")
    .setDescription("Whether to restore the state of CapsLock after a Send."),
  new Command("SetTimer, ${1:Label}, ${2:PeriodOnOffDelete}, ${3:Priority}")
    .setDescription("Causes a subroutine to be launched automatically  and repeatedly at a specified time interval."),
  new Command("SetTitleMatchMode, ${1:SetTitleMatchMode}")
    .setDescription("Sets the matching behavior of the WinTitle parameter in commands such as WinWait."),
  new Command("SetWinDelay, ${1:Delay}")
    .setDescription("Sets the delay that will occur after each windowing command, such as WinActivate."),
  new Command("SetWorkingDir, ${1:DirName}")
    .setDescription("Changes the script's current working directory."),
  new Command("Shutdown, ${1:Flag}")
    .setDescription("Shuts down, restarts, or logs off the system."),
  new Command("Sleep, ${1:Delay}")
    .setDescription("Waits the specified amount of time before continuing."),
  new Command("Sort, ${1:Options}")
    .setDescription("Arranges a variable's contents in alphabetical, numerical, or random order (optionally removing duplicates)."),
  new Command("SoundBeep, ${1:Frequency}, ${2:Duration}")
    .setDescription("Emits a tone from the PC speaker."),
  new Command("SoundGet, ${1:ComponentType}, ${2:ControlType}, ${3:DeviceNumber}")
    .setDescription("Retrieves various settings of a sound device (master mute, master volume, etc.)"),
  new Command("SoundGetWaveVolume, ${1:DeviceNumber}")
    .setDescription("Retrieves the wave output volume of a sound device."),
  new Command("SoundPlay, ${1:Wait}")
    .setDescription("Plays a sound, video, or other supported file type."),
  new Command("SoundSet, ${1:ComponentType}, ${2:ControlType}, ${3:DeviceNumber}")
    .setDescription("Changes various settings of a sound device (master mute, master volume, etc.)"),
  new Command("SoundSetWaveVolume, ${1:DeviceNumber}")
    .setDescription("Changes the wave output volume of a sound device."),
  new Command("SplashImage, ${1:SplashImage}")
    .setDescription("Creates or updates a window containing a progress bar or an image."),
  new Command("SplashTextOn, ${1:Width}, ${2:Height}, ${3:Title}, ${4:Text}")
    .setDescription("Creates or removes a customizable text popup window."),
  new Command("SplashTextOff")
    .setDescription("Creates or removes a customizable text popup window."),
  new Command("SplitPath, ${1:OutFileName}, ${2:OutDir}, ${3:OutExtension}, ${4:OutNameNoExt}, ${5:OutDrive}")
    .setDescription("Separates a file name or URL into its name, directory, extension, and drive."),
  new Command("StatusBarGetText, ${1:Part}, ${2:WinTitle}, ${3:WinText}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Retrieves the text from a standard status bar control."),
  new Command("StatusBarWait, ${1:BarText}, ${2:Timeout}, ${3:Part}, ${4:WinTitle}, ${5:WinText}, ${6:Interval}, ${7:ExcludeTitle}, ${8:ExcludeText}")
    .setDescription("Waits until a window's status bar contains the specified string."),
  new Command("StringCaseSense, ${1:OnOffLocale}")
    .setDescription("Determines whether string comparisons are case sensitive (default is \"not case sensitive\")."),
  new Command("StringGetPos, ${1:Occurrence}, ${2:Offset}")
    .setDescription("Retrieves the position of the specified substring within a string."),
  new Command("StringLeft, ${1:OutputVar}, ${2:InputVar}, ${3:Count}")
    .setDescription("Retrieves a number of characters from the left or right-hand side of a string."),
  new Command("StringLen, ${1:OutputVar}, ${2:InputVar}")
    .setDescription("Retrieves the count of how many characters are in a string."),
  new Command("StringUpper, ${1:OutputVar}, ${2:InputVar}")
    .setDescription("Converts a string to lowercase or uppercase."),
  new Command("StringMid, ${1:Count}, ${2:L}")
    .setDescription("Retrieves one or more characters from the specified position in a string."),
  new Command("StringReplace, ${1:ReplaceText}, ${2:ReplaceAll}")
    .setDescription("Replaces the specified substring with a new string."),
  new Command("StringRight, ${1:OutputVar}, ${2:InputVar}, ${3:Count}")
    .setDescription("Retrieves a number of characters from the left or right-hand side of a string."),
  new Command("StringSplit, ${1:Delimiters}, ${2:OmitChars}")
    .setDescription("Separates a string into an array of substrings using the specified delimiters."),
  new Command("StringTrimLeft, ${1:OutputVar}, ${2:InputVar}, ${3:Count}")
    .setDescription("Removes a number of characters from the left or right-hand side of a string."),
  new Command("StringTrimRight, ${1:OutputVar}, ${2:InputVar}, ${3:Count}")
    .setDescription("Removes a number of characters from the left or right-hand side of a string."),
  new Command("StringLower, ${1:OutputVar}, ${2:InputVar}")
    .setDescription("Converts a string to lowercase or uppercase."),
  new Command("Suspend, ${1:Mode}")
    .setDescription("Disables or enables all or selected hotkeys and hotstrings."),
  new Command("SysGet, ${1:SubCommand}")
    .setDescription("Retrieves screen resolution, multi-monitor info, dimensions of system objects, and other system properties."),
  new Command("Thread, ${1:SubCommand}")
    .setDescription("Sets the priority or interruptibility of threads. It can also temporarily disable all timers."),
  new Command("ToolTip, ${1:Text}, ${2:X}, ${3:Y}, ${4:WhichToolTip}")
    .setDescription("Creates an always-on-top window anywhere on the screen."),
  new Command("Transform, ${1:SubCommand}")
    .setDescription("Performs miscellaneous math functions, bitwise operations, and tasks such as ASCII/Unicode conversion."),
  new Command("TrayTip, ${1:Title}, ${2:Text}, ${3:Seconds}, ${4:Options}")
    .setDescription("Creates a balloon message window near the tray icon. On Windows 10, a toast notification may be shown instead."),
  new Command("UrlDownloadToFile, ${1:URL}, ${2:Filename}")
    .setDescription("Downloads a file from the Internet."),
  new Command("WinActivate, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Activates the specified window."),
  new Command("WinActivateBottom, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Same as WinActivate except that it activates the bottommost matching window rather than the topmost."),
  new Command("WinClose, ${1:WinTitle}, ${2:WinText}, ${3:SecondsToWait}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Closes the specified  window."),
  new Command("WinGet, ${1:SubCommand}, ${2:WinTitle}, ${3:WinText}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Retrieves the specified window's unique ID, process ID, process name, or a list of its controls. It can also retrieve a list of all windows matching the specified criteria."),
  new Command("WinGetActiveStats, ${1:Title}, ${2:Width}, ${3:Height}, ${4:X}, ${5:Y}")
    .setDescription("Combines the functions of WinGetActiveTitle and WinGetPos into one command."),
  new Command("WinGetActiveTitle, ${1:OutputVar}")
    .setDescription("Retrieves the title of the active window."),
  new Command("WinGetClass, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Retrieves the specified window's class name."),
  new Command("WinGetPos, ${1:X}, ${2:Y}, ${3:Width}, ${4:Height}, ${5:WinTitle}, ${6:WinText}, ${7:ExcludeTitle}, ${8:ExcludeText}")
    .setDescription("Retrieves the position and size of the specified window."),
  new Command("WinGetText, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Retrieves the text from the specified window."),
  new Command("WinGetTitle, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Retrieves the title of the specified window."),
  new Command("WinHide, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Hides the specified window."),
  new Command("WinKill, ${1:WinTitle}, ${2:WinText}, ${3:SecondsToWait}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Forces the specified window to close."),
  new Command("WinMaximize, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Enlarges the specified window to its maximum size."),
  new Command("WinMenuSelectItem, ${1:SubMenu1}, ${2:SubMenu2}, ${3:SubMenu3}, ${4:SubMenu4}, ${5:SubMenu5}, ${6:SubMenu6}, ${7:ExcludeTitle}, ${8:ExcludeText}")
    .setDescription("Invokes a menu item from the menu bar of the specified window."),
  new Command("WinMinimize, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Collapses the specified window into a button on the task bar."),
  new Command("WinMinimizeAll")
    .setDescription("Minimizes or unminimizes all windows."),
  new Command("WinMinimizeAllUndo")
    .setDescription("Minimizes or unminimizes all windows."),
  new Command("WinMove, ${1:WinMove}")
    .setDescription("Changes the position and/or size of the specified window."),
  new Command("WinRestore, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Unminimizes or unmaximizes the specified window if it is minimized or maximized."),
  new Command("WinSet, ${1:SubCommand}")
    .setDescription("Makes a variety of changes to the specified window, such as \"always on top\" and transparency."),
  new Command("WinSetTitle, ${1:WinSetTitle}")
    .setDescription("Changes the title of the specified window."),
  new Command("WinShow, ${1:WinTitle}, ${2:WinText}, ${3:ExcludeTitle}, ${4:ExcludeText}")
    .setDescription("Unhides the specified window."),
  new Command("WinWait, ${1:WinTitle}, ${2:WinText}, ${3:Timeout}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Waits until the specified window exists."),
  new Command("WinWaitActive, ${1:WinTitle}, ${2:WinText}, ${3:Timeout}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Waits until the specified window is active or not active."),
  new Command("WinWaitClose, ${1:WinTitle}, ${2:WinText}, ${3:Timeout}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Waits until the specified window does not exist."),
  new Command("WinWaitNotActive, ${1:WinTitle}, ${2:WinText}, ${3:Timeout}, ${4:ExcludeTitle}, ${5:ExcludeText}")
    .setDescription("Waits until the specified window is active or not active.")
];
