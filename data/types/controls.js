const Control = require("../lib/control");

module.exports = [
  new Control("break", "break")
    .setDescription("Exits (terminates) any type of loop statement."),
  new Control("case", "case")
    .setSnippet("case ${1:CaseValue}:\n  $2")
    .setDescription("Executes one case from a list of mutually exclusive candidates."),
  new Control("try", "try")
    .setSnippet(`try {
  $1
} catch \${2:e} {
  $3
}`)
    .setDescription("Try code and catch errors."),
  new Control("continue", "continue")
    .setDescription("Skips the rest of a loop statement's current iteration and begins a new one."),
  new Control("default", "default")
    .setSnippet("default:\n  $1")
    .setDescription("Executes one case from a list of mutually exclusive candidates."),
  new Control("tryfin", "try...catch...finally")
    .setSnippet(`try {
  $1
} catch \${2:e} {
  $3
} finally {
  $4
}`)
    .setDescription("Try code, catch errors, run code regardless of errors"),
  new Control("forin", "for...in")
    .setSnippet(`for \${1:key}, \${2:value} in \${3:object}
  $4`)
    .setDescription("Repeats a series of commands once for each key-value pair in an object."),
  new Control("Gosub", "Gosub")
    .setSnippet("Gosub, ${1:Label}")
    .setDescription("Jumps to the specified label and continues execution until Return is encountered."),
  new Control("Goto", "Goto")
    .setSnippet("Goto, ${1:Label}")
    .setDescription("Jumps to the specified label and continues execution."),
  new Control("if", "if")
    .setSnippet(`if (\${1:condition}) {
  $2
}`)
    .setDescription("Specifies one or more statements to execute if an expression evaluates to true."),
  new Control("ifbetween", "if x between y and z")
    .setSnippet(`if \${1:var} between \${2:a} and \${3:b}
  $4`)
    .setDescription("Checks whether a variable's contents are numerically or alphabetically between two values (inclusive)."),
  new Control("ifcontains", "if ... contains")
    .setSnippet("if ${1:var} contains ${2:items}\n  $3")
    .setDescription("Checks whether a variable's contents match one of the items in a list."),
  new Control("ifin", "if ... in")
    .setSnippet("if ${1:var} in ${2:items}\n  $3")
    .setSnippet("Checks whether a variable's contents match one of the items in a list."),
  new Control("ifis", "if ... is")
    .setSnippet("if ${1:var} is ${2:type}\n  $3")
    .setDescription("Checks whether a variable's contents are numeric, uppercase, etc."),
  new Control("IfMsgBox", "IfMsgBox")
    .setSnippet("IfMsgBox, ${1:ButtonName}")
    .setDescription("Checks which button was pushed by the user during the most recent MsgBox command."),
  new Control("Loop", "Loop, n")
    .setSnippet(`Loop, \${1:n} {
  $2
}`)
    .setDescription("Performs a series of commands repeatedly: either the specified number of times or until break is encountered."),
  new Control("Loopfiles", "Loop, Files...")
    .setSnippet("Loop, Files, ${1:pattern}\n  $2")
    .setDescription("Retrieves the specified files or folders, one at a time."),
  new Control("Loopparse", "Loop, Parse...")
    .setSnippet("Loop, parse, ${1:InputVar}\n  $2")
    .setDescription("Retrieves substrings (fields) from a string, one at a time."),
  new Control("Loopread", "Loop, Read...")
    .setSnippet("Loop, read, ${1:file}\n  $2")
    .setDescription("Retrieves the lines in a text file, one at a time (performs better than FileReadLine)."),
  new Control("Loopreg", "Loop, Reg...")
    .setSnippet("Loop, Reg, ${1:RegVar}\n  $2")
    .setDescription("Retrieves the contents of the specified registry subkey, one item at a time."),
  new Control("ret", "return")
    .setSnippet("return $1")
    .setDescription("Returns from a subroutine to which execution had previously jumped via function-call, Gosub, Hotkey activation, GroupActivate, or other means."),
  new Control("switch", "switch")
    .setSnippet(`switch \${1:value} {
  case \${2:CaseValue}:
    $3
}`)
    .setDescription("Executes one case from a list of mutually exclusive candidates."),
  new Control("throw", "throw")
    .setSnippet("throw $1")
    .setDescription("Signals the occurrence of an error. This signal can be caught by a try-catch statement."),
  new Control("Loopuntil", "Loop...Until")
    .setSnippet(`Loop {
  $1
} Until \${2:condition}`)
    .setDescription("Applies a condition to the continuation of a Loop or For-loop."),
  new Control("while", "while")
    .setSnippet(`while (\${1:condition}) {
  $2
}`)
    .setDescription("Performs a series of commands repeatedly until the specified expression evaluates to false.")
];
