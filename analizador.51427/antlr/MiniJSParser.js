// Generated from MiniJS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniJSListener from './MiniJSListener.js';
const serializedATN = [4,1,8,29,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,1,1,1,3,1,16,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,0,0,5,0,2,4,6,8,0,1,2,0,5,5,7,7,24,0,10,1,0,0,0,2,15,1,0,0,0,4,17,
1,0,0,0,6,21,1,0,0,0,8,26,1,0,0,0,10,11,3,2,1,0,11,12,5,0,0,1,12,1,1,0,0,
0,13,16,3,4,2,0,14,16,3,6,3,0,15,13,1,0,0,0,15,14,1,0,0,0,16,3,1,0,0,0,17,
18,5,6,0,0,18,19,5,1,0,0,19,20,3,8,4,0,20,5,1,0,0,0,21,22,5,2,0,0,22,23,
5,3,0,0,23,24,5,5,0,0,24,25,5,4,0,0,25,7,1,0,0,0,26,27,7,0,0,0,27,9,1,0,
0,0,1,15];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniJSParser extends antlr4.Parser {

    static grammarFileName = "MiniJS.g4";
    static literalNames = [ null, "'='", "'output'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, "TextLiteral", 
                             "Identifier", "Number", "WS" ];
    static ruleNames = [ "program", "simpleStatement", "assignmentStatement", 
                         "outputStatement", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniJSParser.ruleNames;
        this.literalNames = MiniJSParser.literalNames;
        this.symbolicNames = MiniJSParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniJSParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.simpleStatement();
	        this.state = 11;
	        this.match(MiniJSParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniJSParser.RULE_simpleStatement);
	    try {
	        this.state = 15;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 13;
	            this.assignmentStatement();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 14;
	            this.outputStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniJSParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(MiniJSParser.Identifier);
	        this.state = 18;
	        this.match(MiniJSParser.T__0);
	        this.state = 19;
	        this.constant();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputStatement() {
	    let localctx = new OutputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniJSParser.RULE_outputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(MiniJSParser.T__1);
	        this.state = 22;
	        this.match(MiniJSParser.T__2);
	        this.state = 23;
	        this.match(MiniJSParser.TextLiteral);
	        this.state = 24;
	        this.match(MiniJSParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniJSParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniJSParser.EOF = antlr4.Token.EOF;
MiniJSParser.T__0 = 1;
MiniJSParser.T__1 = 2;
MiniJSParser.T__2 = 3;
MiniJSParser.T__3 = 4;
MiniJSParser.TextLiteral = 5;
MiniJSParser.Identifier = 6;
MiniJSParser.Number = 7;
MiniJSParser.WS = 8;

MiniJSParser.RULE_program = 0;
MiniJSParser.RULE_simpleStatement = 1;
MiniJSParser.RULE_assignmentStatement = 2;
MiniJSParser.RULE_outputStatement = 3;
MiniJSParser.RULE_constant = 4;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_program;
    }

	simpleStatement() {
	    return this.getTypedRuleContext(SimpleStatementContext,0);
	};

	EOF() {
	    return this.getToken(MiniJSParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitProgram(this);
		}
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_simpleStatement;
    }

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	outputStatement() {
	    return this.getTypedRuleContext(OutputStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitSimpleStatement(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(MiniJSParser.Identifier, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}


}



class OutputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_outputStatement;
    }

	TextLiteral() {
	    return this.getToken(MiniJSParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterOutputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitOutputStatement(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_constant;
    }

	Number() {
	    return this.getToken(MiniJSParser.Number, 0);
	};

	TextLiteral() {
	    return this.getToken(MiniJSParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitConstant(this);
		}
	}


}




MiniJSParser.ProgramContext = ProgramContext; 
MiniJSParser.SimpleStatementContext = SimpleStatementContext; 
MiniJSParser.AssignmentStatementContext = AssignmentStatementContext; 
MiniJSParser.OutputStatementContext = OutputStatementContext; 
MiniJSParser.ConstantContext = ConstantContext; 
