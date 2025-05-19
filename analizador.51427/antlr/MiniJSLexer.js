// Generated from MiniJS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,58,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,
1,3,1,3,1,4,1,4,5,4,33,8,4,10,4,12,4,36,9,4,1,4,1,4,1,5,1,5,5,5,42,8,5,10,
5,12,5,45,9,5,1,6,4,6,48,8,6,11,6,12,6,49,1,7,4,7,53,8,7,11,7,12,7,54,1,
7,1,7,0,0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,5,3,0,10,10,13,13,34,
34,2,0,65,90,97,122,3,0,48,57,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,
61,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,1,0,0,0,3,19,1,0,0,0,5,26,1,0,0,0,7,28,
1,0,0,0,9,30,1,0,0,0,11,39,1,0,0,0,13,47,1,0,0,0,15,52,1,0,0,0,17,18,5,61,
0,0,18,2,1,0,0,0,19,20,5,111,0,0,20,21,5,117,0,0,21,22,5,116,0,0,22,23,5,
112,0,0,23,24,5,117,0,0,24,25,5,116,0,0,25,4,1,0,0,0,26,27,5,40,0,0,27,6,
1,0,0,0,28,29,5,41,0,0,29,8,1,0,0,0,30,34,5,34,0,0,31,33,8,0,0,0,32,31,1,
0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,34,1,0,
0,0,37,38,5,34,0,0,38,10,1,0,0,0,39,43,7,1,0,0,40,42,7,2,0,0,41,40,1,0,0,
0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,12,1,0,0,0,45,43,1,0,0,0,
46,48,7,3,0,0,47,46,1,0,0,0,48,49,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,
14,1,0,0,0,51,53,7,4,0,0,52,51,1,0,0,0,53,54,1,0,0,0,54,52,1,0,0,0,54,55,
1,0,0,0,55,56,1,0,0,0,56,57,6,7,0,0,57,16,1,0,0,0,5,0,34,43,49,54,1,6,0,
0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MiniJSLexer extends antlr4.Lexer {

    static grammarFileName = "MiniJS.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "'output'", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, "TextLiteral", "Identifier", 
                          "Number", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "TextLiteral", "Identifier", 
                      "Number", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MiniJSLexer.EOF = antlr4.Token.EOF;
MiniJSLexer.T__0 = 1;
MiniJSLexer.T__1 = 2;
MiniJSLexer.T__2 = 3;
MiniJSLexer.T__3 = 4;
MiniJSLexer.TextLiteral = 5;
MiniJSLexer.Identifier = 6;
MiniJSLexer.Number = 7;
MiniJSLexer.WS = 8;



