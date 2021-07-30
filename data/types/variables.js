const Variable = require("../lib/variable");

module.exports = [
  new Variable("A_AhkPath")
    .setDescription("The full path and name of the EXE file that is actually running the current script."),
  new Variable("A_AhkVersion")
    .setDescription("the version of AutoHotkey that is running the script"),
  new Variable("A_AppData")
    .setDescription("The full path and name of the folder containing the current user's application-specific data."),
  new Variable("A_AppDataCommon")
    .setDescription("The full path and name of the folder containing the all-users application-specific data."),
  new Variable("A_Args")
    .setDescription("Contains an array of command line parameters."),
  new Variable("A_AutoTrim")
    .setDescription("The current mode (On or Off) set by AutoTrim."),
  new Variable("A_BatchLines")
    .setDescription("The current value as set by SetBatchLines."),
  new Variable("A_CaretX")
    .setDescription("The current X and Y coordinates of the caret (text insertion point). The coordinates are relative to the active window unless CoordMode is used to make them relative to the entire screen. If there is no active window or the caret position cannot be determined, these variables are blank."),
  new Variable("A_CaretY")
    .setDescription("The current X and Y coordinates of the caret (text insertion point). The coordinates are relative to the active window unless CoordMode is used to make them relative to the entire screen. If there is no active window or the caret position cannot be determined, these variables are blank."),
  new Variable("A_ComputerName")
    .setDescription("The name of the computer as seen on the network."),
  new Variable("A_ComSpec")
    .setDescription("Contains the same string as the environment's ComSpec variable."),
  new Variable("A_ControlDelay")
    .setDescription("The current delay set by SetControlDelay (always decimal, not hex)."),
  new Variable("A_CoordModeCaret")
    .setDescription("The current mode (Window, Client or Screen) set by CoordMode."),
  new Variable("A_CoordModeMenu")
    .setDescription("The current mode (Window, Client or Screen) set by CoordMode."),
  new Variable("A_CoordModeMouse")
    .setDescription("The current mode (Window, Client or Screen) set by CoordMode."),
  new Variable("A_CoordModePixel")
    .setDescription("The current mode (Window, Client or Screen) set by CoordMode."),
  new Variable("A_CoordModeToolTip")
    .setDescription("The current mode (Window, Client or Screen) set by CoordMode."),
  new Variable("A_Cursor")
    .setDescription("The type of mouse cursor currently being displayed. It will be one of the following words: AppStarting, Arrow, Cross, Help, IBeam, Icon, No, Size, SizeAll, SizeNESW, SizeNS, SizeNWSE, SizeWE, UpArrow, Wait, Unknown. The acronyms used with the size-type cursors are compass directions, e.g. NESW = NorthEast+SouthWest. The hand-shaped cursors (pointing and grabbing) are classified as Unknown."),
  new Variable("A_DD")
    .setDescription("Current 2-digit day of the month (01-31)."),
  new Variable("A_DDDD")
    .setDescription("Current day of the week's full name in the current user's language, e.g. Sunday"),
  new Variable("A_DDD")
    .setDescription("Current day of the week's abbreviation in the current user's language, e.g. Sun"),
  new Variable("A_DefaultGui")
    .setDescription("The name or number of the current thread's default GUI."),
  new Variable("A_DefaultListView")
    .setDescription("The variable name or HWND of the ListView control upon which the ListView functions operate. If the default GUI lacks a ListView, this variable is blank."),
  new Variable("A_DefaultMouseSpeed")
    .setDescription("The current speed set by SetDefaultMouseSpeed (always decimal, not hex)."),
  new Variable("A_DefaultTreeView")
    .setDescription("The variable name or HWND of the TreeView control upon which the TreeView functions operate. If the default GUI lacks a TreeView, this variable is blank."),
  new Variable("A_Desktop")
    .setDescription("The full path and name of the folder containing the current user's desktop files."),
  new Variable("A_DesktopCommon")
    .setDescription("The full path and name of the folder containing the all-users desktop files."),
  new Variable("A_DetectHiddenText")
    .setDescription("The current mode (On or Off) set by DetectHiddenText."),
  new Variable("A_DetectHiddenWindows")
    .setDescription("The current mode (On or Off) set by DetectHiddenWindows."),
  new Variable("A_EndChar")
    .setDescription("The ending character that was pressed by the user to trigger the most recent non-auto-replace hotstring. If no ending character was required (due to the * option), this variable will be blank."),
  new Variable("A_EventInfo")
    .setDescription("Contains additional information about the certain events."),
  new Variable("A_ExitReason")
    .setDescription("The most recent reason the script was asked to terminate. This variable is blank unless the script has an OnExit subroutine and that subroutine is currently running or has been called at least once by an exit attempt."),
  new Variable("A_FileEncoding")
    .setDescription("Contains the default encoding for various commands."),
  new Variable("A_FormatFloat")
    .setDescription("The current floating point number format set by SetFormat."),
  new Variable("A_FormatInteger")
    .setDescription("The current integer format (H or D) set by SetFormat. [v1.0.90+]: This may also contain lower-case h."),
  new Variable("A_Gui")
    .setDescription("The name or number of the GUI that launched the current thread. This variable is blank unless a Gui control, menu bar item, or event such as GuiClose/GuiEscape launched the current thread."),
  new Variable("A_GuiControl")
    .setDescription("The name of the variable associated with the GUI control that launched the current thread."),
  new Variable("A_GuiControlEvent")
    .setDescription("The type of event that launched the current thread. If the thread was not launched via GUI action, this variable is blank."),
  new Variable("A_GuiEvent")
    .setDescription("The type of event that launched the current thread. If the thread was not launched via GUI action, this variable is blank."),
  new Variable("A_GuiHeight")
    .setDescription("These contain the GUI window's width and height when referenced in a GuiSize subroutine. They apply to the window's client area, which is the area excluding title bar, menu bar, and borders."),
  new Variable("A_GuiWidth")
    .setDescription("These contain the GUI window's width and height when referenced in a GuiSize subroutine. They apply to the window's client area, which is the area excluding title bar, menu bar, and borders."),
  new Variable("A_GuiX")
    .setDescription("These contain the X and Y coordinates for GuiContextMenu and GuiDropFiles events. Coordinates are relative to the upper-left corner of the window."),
  new Variable("A_GuiY")
    .setDescription("These contain the X and Y coordinates for GuiContextMenu and GuiDropFiles events. Coordinates are relative to the upper-left corner of the window."),
  new Variable("A_Hour")
    .setDescription("Current 2-digit hour (00-23) in 24-hour time (for example, 17 is 5pm)."),
  new Variable("A_IconFile")
    .setDescription("Blank unless a custom tray icon has been specified via Menu, tray, icon -- in which case it's the full path and name of the icon's file."),
  new Variable("A_IconHidden")
    .setDescription("Contains 1 if the tray icon is currently hidden or 0 otherwise. The icon can be hidden via #NoTrayIcon or the Menu command."),
  new Variable("A_IconNumber")
    .setDescription("Blank if A_IconFile is blank. Otherwise, it's the number of the icon in A_IconFile (typically 1)."),
  new Variable("A_IconTip")
    .setDescription("Blank unless a custom tooltip for the tray icon has been specified via Menu, Tray, Tip -- in which case it's the text of the tip."),
  new Variable("A_Index")
    .setDescription("Contains the number of the current loop iteration."),
  new Variable("A_IPAddress1")
    .setDescription("The IP addresses of the first 4 network adapters in the computer."),
  new Variable("A_IPAddress2")
    .setDescription("The IP addresses of the first 4 network adapters in the computer."),
  new Variable("A_IPAddress3")
    .setDescription("The IP addresses of the first 4 network adapters in the computer."),
  new Variable("A_IPAddress4")
    .setDescription("The IP addresses of the first 4 network adapters in the computer."),
  new Variable("A_Is64bitOS")
    .setDescription("Contains 1 (true) if the OS is 64-bit or 0 (false) if it is 32-bit."),
  new Variable("A_IsAdmin")
    .setDescription("If the current user has admin rights, this variable contains 1. Otherwise, it contains 0."),
  new Variable("A_IsCompiled")
    .setDescription("Contains 1 if the script is running as a compiled EXE and an empty string (which is considered false) if it is not."),
  new Variable("A_IsCritical")
    .setDescription("Contains 0 if Critical is off for the current thread. Otherwise it contains an integer greater than zero, namely the message-check frequency being used by Critical."),
  new Variable("A_IsPaused")
    .setDescription("Contains 1 if the thread immediately underneath the current thread is paused. Otherwise it contains 0."),
  new Variable("A_IsSuspended")
    .setDescription("Contains 1 if the script is suspended and 0 otherwise."),
  new Variable("A_IsUnicode")
    .setDescription("Contains 1 if strings are Unicode (16-bit) and an empty string (which is considered false) if strings are ANSI (8-bit). The format of strings depends on the version of AutoHotkey.exe which is used to run the script, or if it is compiled, which bin file was used to compile it."),
  new Variable("A_KeyDelay")
    .setDescription("The current delay or duration set by SetKeyDelay (always decimal, not hex)."),
  new Variable("A_KeyDelayPlay")
    .setDescription("The current delay or duration set by SetKeyDelay for the SendPlay mode (always decimal, not hex). "),
  new Variable("A_KeyDuration")
    .setDescription("The current delay or duration set by SetKeyDelay (always decimal, not hex)."),
  new Variable("A_KeyDurationPlay")
    .setDescription("The current delay or duration set by SetKeyDelay for the SendPlay mode (always decimal, not hex). "),
  new Variable("A_Language")
    .setDescription("The system's default language."),
  new Variable("A_LastError")
    .setDescription("The result from the OS's GetLastError() function or the last COM object invocation."),
  new Variable("A_LineFile")
    .setDescription("The full path and name of the file to which A_LineNumber belongs. If the script was loaded from an external file, this is the same as A_ScriptFullPath unless the line belongs to one of the script's #Include files.\nIf the script was compiled based on a .bin file, this is the full path and name of the current executable file, the same as A_ScriptFullPath."),
  new Variable("A_LineNumber")
    .setDescription("The number of the currently executing line within the script (or one of its #Include files)."),
  new Variable("A_ListLines")
    .setDescription("Contains 1 if ListLines is enabled. Otherwise it contains 0."),
  new Variable("A_LoopField")
    .setDescription("contains the contents of the current substring (field) from InputVar."),
  new Variable("A_LoopFileAttrib")
    .setDescription("The attributes of the file currently retrieved."),
  new Variable("A_LoopFileDir")
    .setDescription("The path of the directory in which A_LoopFileName resides. If FilePattern contains a relative path rather than an absolute path, the path here will also be relative. A root directory will not contain a trailing backslash."),
  new Variable("A_LoopFileExt")
    .setDescription("The file's extension (e.g. TXT, DOC, or EXE). The period (.) is not included."),
  new Variable("A_LoopFileFullPath")
    .setDescription("The path and name of the file/folder currently retrieved. If FilePattern contains a relative path rather than an absolute path, the path here will also be relative. In addition, any short (8.3) folder names in FilePattern will still be short (see next item to get the long version)."),
  new Variable("A_LoopFileLongPath")
    .setDescription("This is different than A_LoopFileFullPath in the following ways: 1) It always contains the absolute/complete path of the file even if FilePattern contains a relative path; 2) Any short (8.3) folder names in FilePattern itself are converted to their long names; 3) Characters in FilePattern are converted to uppercase or lowercase to match the case stored in the file system. This is useful for converting file names -- such as those passed into a script as command line parameters -- to their exact path names as shown by Explorer."),
  new Variable("A_LoopFileName")
    .setDescription("The name of the file or folder currently retrieved (without the path)."),
  new Variable("A_LoopFilePath")
    .setDescription("The path and name of the file/folder currently retrieved. If FilePattern contains a relative path rather than an absolute path, the path here will also be relative. In addition, any short (8.3) folder names in FilePattern will still be short (see next item to get the long version)."),
  new Variable("A_LoopFileShortName")
    .setDescription("The 8.3 short name, or alternate name of the file."),
  new Variable("A_LoopFileShortPath")
    .setDescription("The 8.3 short path and name of the file/folder currently retrieved."),
  new Variable("A_LoopFileSize")
    .setDescription("The size in bytes of the file currently retrieved. Files larger than 4 gigabytes are also supported."),
  new Variable("A_LoopFileSizeKB")
    .setDescription("The size in Kbytes of the file currently retrieved, rounded down to the nearest integer."),
  new Variable("A_LoopFileSizeMB")
    .setDescription("The size in Mbytes of the file currently retrieved, rounded down to the nearest integer."),
  new Variable("A_LoopFileTimeAccessed")
    .setDescription("The time the file was last accessed. Format YYYYMMDDHH24MISS."),
  new Variable("A_LoopFileTimeCreated")
    .setDescription("The time the file was created. Format YYYYMMDDHH24MISS."),
  new Variable("A_LoopFileTimeModified")
    .setDescription("The time the file was last modified. Format YYYYMMDDHH24MISS."),
  new Variable("A_LoopReadLine")
    .setDescription("Contains the contents of the current line excluding the carriage return and linefeed (`r`n) that marks the end of the line."),
  new Variable("A_LoopRegKey")
    .setDescription("The name of the root key being accessed."),
  new Variable("A_LoopRegName")
    .setDescription("Name of the currently retrieved item, which can be either a value name or the name of a subkey."),
  new Variable("A_LoopRegSubKey")
    .setDescription("Name of the current subkey."),
  new Variable("A_LoopRegTimeModified")
    .setDescription("The time the current subkey or any of its values was last modified. Format YYYYMMDDHH24MISS."),
  new Variable("A_LoopRegType")
    .setDescription("The type of the currently retrieved item."),
  new Variable("A_MDay")
    .setDescription("Current 2-digit day of the month (01-31)."),
  new Variable("A_Min")
    .setDescription("Current 2-digit minute (00-59)."),
  new Variable("A_MM")
    .setDescription("Current 2-digit month (01-12)."),
  new Variable("A_MMM")
    .setDescription("Current month's abbreviation in the current user's language, e.g. Jul"),
  new Variable("A_MMMM")
    .setDescription("Current month's full name in the current user's language, e.g. July"),
  new Variable("A_Mon")
    .setDescription("Current 2-digit month (01-12)."),
  new Variable("A_MouseDelay")
    .setDescription("The current delay set by SetMouseDelay (always decimal, not hex)."),
  new Variable("A_MouseDelayPlay")
    .setDescription("The current delay set by SetMouseDelay (always decimal, not hex)."),
  new Variable("A_MSec")
    .setDescription("Current 3-digit millisecond (000-999)."),
  new Variable("A_MyDocuments")
    .setDescription("The full path and name of the current user's \"My Documents\" folder."),
  new Variable("A_Now")
    .setDescription("The current local time in YYYYMMDDHH24MISS format."),
  new Variable("A_NowUTC")
    .setDescription("The current Coordinated Universal Time (UTC) in YYYYMMDDHH24MISS format."),
  new Variable("A_NumBatchLines")
    .setDescription("The current value as set by SetBatchLines."),
  new Variable("A_OSType")
    .setDescription("The type of operating system being run."),
  new Variable("A_OSVersion")
    .setDescription("The version of the OS"),
  new Variable("A_PriorHotkey")
    .setDescription("The most recently executed hotkey or non-auto-replace hotstring except, it's the previous hotkey. It will be blank if none."),
  new Variable("A_PriorKey")
    .setDescription("The name of the last key which was pressed prior to the most recent key-press or key-release, or blank if no applicable key-press can be found in the key history."),
  new Variable("A_ProgramFiles")
    .setDescription("The Program Files directory (e.g. C:\Program Files or C:\Program Files (x86)). This is usually the same as the ProgramFiles environment variable."),
  new Variable("A_Programs")
    .setDescription("The full path and name of the Programs folder in the current user's Start Menu."),
  new Variable("A_ProgramsCommon")
    .setDescription("The full path and name of the Programs folder in the all-users Start Menu."),
  new Variable("A_PtrSize")
    .setDescription("Contains the size of a pointer, in bytes."),
  new Variable("A_RegView")
    .setDescription("The current registry view as set by SetRegView."),
  new Variable("A_ScreenDPI")
    .setDescription("Number of pixels per logical inch along the screen width. In a system with multiple display monitors, this value is the same for all monitors."),
  new Variable("A_ScreenHeight")
    .setDescription("The width and height of the primary monitor, in pixels"),
  new Variable("A_ScreenWidth")
    .setDescription("The width and height of the primary monitor, in pixels"),
  new Variable("A_ScriptDir")
    .setDescription("The full path of the directory where the current script is located."),
  new Variable("A_ScriptFullPath")
    .setDescription("The full path of the current script."),
  new Variable("A_ScriptHwnd")
    .setDescription("The unique ID (HWND/handle) of the script's hidden main window."),
  new Variable("A_ScriptName")
    .setDescription("The file name of the current script, without its path, e.g. MyScript.ahk"),
  new Variable("A_Sec")
    .setDescription("Current 2-digit second (00-59)."),
  new Variable("A_SendLevel")
    .setDescription("The current SendLevel setting (an integer between 0 and 100, inclusive)."),
  new Variable("A_SendMode")
    .setDescription("The current mode (Event, Input, Play or InputThenPlay) set by SendMode."),
  new Variable("A_Space")
    .setDescription("This variable contains a single space character."),
  new Variable("A_StartMenu")
    .setDescription("The full path and name of the current user's Start Menu folder."),
  new Variable("A_StartMenuCommon")
    .setDescription("The full path and name of the all-users Start Menu folder."),
  new Variable("A_Startup")
    .setDescription("The full path and name of the Startup folder in the current user's Start Menu."),
  new Variable("A_StartupCommon")
    .setDescription("The full path and name of the Startup folder in the all-users Start Menu."),
  new Variable("A_StoreCapsLockMode")
    .setDescription("The current mode (On or Off) set by SetStoreCapsLockMode."),
  new Variable("A_StringCaseSense")
    .setDescription("The current mode (On, Off, or Locale) set by StringCaseSense."),
  new Variable("A_Tab")
    .setDescription("This variable contains a single tab character. See AutoTrim for details."),
  new Variable("A_Temp")
    .setDescription("The full path and name of the folder designated to hold temporary files."),
  new Variable("A_ThisFunc")
    .setDescription("The name of the user-defined function that is currently executing (blank if none)."),
  new Variable("A_ThisHotkey")
    .setDescription("The most recently executed hotkey or non-auto-replace hotstring (blank if none), e.g. #z."),
  new Variable("A_ThisLabel")
    .setDescription("The name of the label (subroutine) that is currently executing (blank if none)"),
  new Variable("A_ThisMenu")
    .setDescription("The name of the menu from which A_ThisMenuItem was selected."),
  new Variable("A_ThisMenuItem")
    .setDescription("The name of the most recently selected custom menu item (blank if none)."),
  new Variable("A_ThisMenuItemPos")
    .setDescription("A number indicating the current position of A_ThisMenuItem within A_ThisMenu. The first item in the menu is 1, the second is 2, and so on. Menu separator lines are counted. This variable is blank if A_ThisMenuItem is blank or no longer exists within A_ThisMenu. It is also blank if A_ThisMenu itself no longer exists."),
  new Variable("A_TickCount")
    .setDescription("The number of milliseconds that have elapsed since the system was started, up to 49.7 days."),
  new Variable("A_TimeIdle")
    .setDescription("The number of milliseconds that have elapsed since the system last received keyboard, mouse, or other input."),
  new Variable("A_TimeIdleKeyboard")
    .setDescription("If the keyboard hook is installed, this is the number of milliseconds that have elapsed since the system last received physical keyboard input. Otherwise, this variable is equivalent to A_TimeIdle."),
  new Variable("A_TimeIdleMouse")
    .setDescription("If the mouse hook is installed, this is the number of milliseconds that have elapsed since the system last received physical mouse input. Otherwise, this variable is equivalent to A_TimeIdle."),
  new Variable("A_TimeIdlePhysical")
    .setDescription("Similar to above but ignores artificial keystrokes and/or mouse clicks whenever the corresponding hook (keyboard or mouse) is installed; that is, it responds only to physical events."),
  new Variable("A_TimeSincePriorHotkey")
    .setDescription("The number of milliseconds that have elapsed since A_PriorHotkey was pressed. It will be -1 whenever A_PriorHotkey is blank."),
  new Variable("A_TimeSinceThisHotkey")
    .setDescription("The number of milliseconds that have elapsed since A_ThisHotkey was pressed. It will be -1 whenever A_ThisHotkey is blank."),
  new Variable("A_TitleMatchMode")
    .setDescription("The current mode set by SetTitleMatchMode: 1, 2, 3, or RegEx."),
  new Variable("A_TitleMatchModeSpeed")
    .setDescription("The current match speed (fast or slow) set by SetTitleMatchMode."),
  new Variable("A_UserName")
    .setDescription("The logon name of the user who launched this script."),
  new Variable("A_WDay")
    .setDescription("Current 1-digit day of the week (1-7). 1 is Sunday in all locales."),
  new Variable("A_WinDelay")
    .setDescription("The current delay set by SetWinDelay (always decimal, not hex)."),
  new Variable("A_WinDir")
    .setDescription("The Windows directory."),
  new Variable("A_WorkingDir")
    .setDescription("The script's current working directory, which is where files will be accessed by default. The final backslash is not included unless it is the root directory."),
  new Variable("A_YDay")
    .setDescription("Current day of the year (1-366)."),
  new Variable("A_Year")
    .setDescription("Current 4-digit year (e.g. 2004)."),
  new Variable("A_YWeek")
    .setDescription("Current year and week number (e.g. 200453) according to ISO 8601."),
  new Variable("A_YYYY")
    .setDescription("Current 4-digit year (e.g. 2004)."),
  new Variable("Clipboard")
    .setDescription("Clipboard is a built-in variable that reflects the current contents of the Windows clipboard if those contents can be expressed as text."),
  new Variable("ClipboardAll")
    .setDescription("contains everything on the clipboard, such as pictures and formatting."),
  new Variable("ComSpec")
    .setDescription("Contains the same string as the environment's ComSpec variable."),
  new Variable("ErrorLevel")
    .setDescription("This is a built-in variable that is set to indicate the success or failure of some of the commands (not all commands change the value of ErrorLevel). A value of 0 usually indicates success, and any other value usually indicates failure. You can also set the value of ErrorLevel yourself."),
  new Variable("ProgramFiles")
    .setDescription("The Program Files directory.")
];
