grammar MiniJS;

program: simpleStatement EOF;

simpleStatement: assignmentStatement | outputStatement;

assignmentStatement: Identifier '=' constant;

outputStatement: 'output' '(' TextLiteral ')';

constant: Number | TextLiteral;

TextLiteral: '"' (~["\r\n])* '"';

Identifier: [a-zA-Z][a-zA-Z0-9]*;

Number: [0-9]+;

WS: [ \t\r\n]+ -> skip; 