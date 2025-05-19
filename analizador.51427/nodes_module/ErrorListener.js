const antlr4 = require('antlr4');

class MiniJSErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`Error en línea ${line}:${column} - ${msg}`);
    }
}

module.exports = MiniJSErrorListener; 