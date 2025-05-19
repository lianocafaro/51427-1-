const antlr4 = require('antlr4');
const fs = require('fs');
const MiniJSLexer = require('./MiniJSLexer').MiniJSLexer;
const MiniJSParser = require('./MiniJSParser').MiniJSParser;
const MiniJSErrorListener = require('./ErrorListener'); // ver más abajo

const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new MiniJSLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MiniJSParser(tokens);

// 1. Agregar listener de errores
parser.removeErrorListeners();
parser.addErrorListener(new MiniJSErrorListener());

// 2. Mostrar tokens
tokens.fill();
console.log('=== Tokens ===');
tokens.tokens.forEach(token => {
    console.log(`${token.text} -> ${MiniJSLexer.symbolicNames[token.type]}`);
});

// 3. Parsear
console.log('\n=== Árbol ===');
const tree = parser.program();
console.log(tree.toStringTree(parser)); 