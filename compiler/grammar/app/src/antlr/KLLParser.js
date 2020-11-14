// Generated from KLL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4');
var KLLListener = require('./KLLListener').KLLListener;
var KLLVisitor = require('./KLLVisitor').KLLVisitor;

var grammarFileName = "KLL.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010\u0097\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0007",
    "\u0002 \n\u0002\f\u0002\u000e\u0002#\u000b\u0002\u0003\u0002\u0006\u0002",
    "&\n\u0002\r\u0002\u000e\u0002\'\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00030\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u00046\n\u0004\r\u0004\u000e",
    "\u00047\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004",
    ">\n\u0004\r\u0004\u000e\u0004?\u0005\u0004B\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0006\u0005G\n\u0005\r\u0005\u000e\u0005H\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0006\u0005N\n\u0005\r\u0005\u000e\u0005O\u0005",
    "\u0005R\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0006",
    "\u0006X\n\u0006\r\u0006\u000e\u0006Y\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0006\u0007`\n\u0007\r\u0007\u000e\u0007a\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0005\ti\n\t\u0003\n\u0006\nl\n\n\r\n\u000e",
    "\nm\u0003\u000b\u0006\u000bq\n\u000b\r\u000b\u000e\u000br\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0006\fz\n\f\r\f\u000e\f{\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0006\r\u0083\n\r\r\r\u000e\r\u0084\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0006\u000e\u008b\n\u000e\r\u000e",
    "\u000e\u000e\u008c\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0006",
    "\u000f\u0093\n\u000f\r\u000f\u000e\u000f\u0094\u0003\u000f\u0002\u0002",
    "\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u0002\u0002\u0002\u009d\u0002!\u0003\u0002\u0002\u0002\u0004",
    "/\u0003\u0002\u0002\u0002\u0006A\u0003\u0002\u0002\u0002\bQ\u0003\u0002",
    "\u0002\u0002\nS\u0003\u0002\u0002\u0002\f[\u0003\u0002\u0002\u0002\u000e",
    "c\u0003\u0002\u0002\u0002\u0010h\u0003\u0002\u0002\u0002\u0012k\u0003",
    "\u0002\u0002\u0002\u0014p\u0003\u0002\u0002\u0002\u0016t\u0003\u0002",
    "\u0002\u0002\u0018}\u0003\u0002\u0002\u0002\u001a\u0086\u0003\u0002",
    "\u0002\u0002\u001c\u008e\u0003\u0002\u0002\u0002\u001e \u0007\u000f",
    "\u0002\u0002\u001f\u001e\u0003\u0002\u0002\u0002 #\u0003\u0002\u0002",
    "\u0002!\u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\"%",
    "\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002$&\u0005\u0004\u0003",
    "\u0002%$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'%\u0003",
    "\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002",
    ")*\u0007\u0002\u0002\u0003*\u0003\u0003\u0002\u0002\u0002+0\u0005\u0006",
    "\u0004\u0002,0\u0005\f\u0007\u0002-0\u0005\u001a\u000e\u0002.0\u0005",
    "\u001c\u000f\u0002/+\u0003\u0002\u0002\u0002/,\u0003\u0002\u0002\u0002",
    "/-\u0003\u0002\u0002\u0002/.\u0003\u0002\u0002\u00020\u0005\u0003\u0002",
    "\u0002\u000212\u0007\r\u0002\u000223\u0007\u0003\u0002\u000235\u0007",
    "\r\u0002\u000246\u0007\u000f\u0002\u000254\u0003\u0002\u0002\u00026",
    "7\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002",
    "\u00028B\u0003\u0002\u0002\u00029:\u0007\r\u0002\u0002:;\u0007\u0003",
    "\u0002\u0002;=\u0007\f\u0002\u0002<>\u0007\u000f\u0002\u0002=<\u0003",
    "\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002",
    "?@\u0003\u0002\u0002\u0002@B\u0003\u0002\u0002\u0002A1\u0003\u0002\u0002",
    "\u0002A9\u0003\u0002\u0002\u0002B\u0007\u0003\u0002\u0002\u0002CD\u0007",
    "\u0004\u0002\u0002DF\u0007\u000e\u0002\u0002EG\u0007\u000f\u0002\u0002",
    "FE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002",
    "\u0002HI\u0003\u0002\u0002\u0002IR\u0003\u0002\u0002\u0002JK\u0007\u0004",
    "\u0002\u0002KM\u0007\f\u0002\u0002LN\u0007\u000f\u0002\u0002ML\u0003",
    "\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002",
    "OP\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002\u0002QC\u0003\u0002\u0002",
    "\u0002QJ\u0003\u0002\u0002\u0002R\t\u0003\u0002\u0002\u0002ST\u0007",
    "\u0005\u0002\u0002TU\u0007\u000e\u0002\u0002UW\u0007\u0006\u0002\u0002",
    "VX\u0007\u000f\u0002\u0002WV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002",
    "\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\u000b\u0003",
    "\u0002\u0002\u0002[\\\u0007\r\u0002\u0002\\]\u0007\u0007\u0002\u0002",
    "]_\u0007\u000e\u0002\u0002^`\u0007\u000f\u0002\u0002_^\u0003\u0002\u0002",
    "\u0002`a\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002",
    "\u0002\u0002b\r\u0003\u0002\u0002\u0002cd\u0005\u0006\u0004\u0002d\u000f",
    "\u0003\u0002\u0002\u0002ei\u0005\n\u0006\u0002fi\u0005\b\u0005\u0002",
    "gi\u0005\f\u0007\u0002he\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002",
    "\u0002hg\u0003\u0002\u0002\u0002i\u0011\u0003\u0002\u0002\u0002jl\u0005",
    "\u0010\t\u0002kj\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002m",
    "k\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002n\u0013\u0003\u0002",
    "\u0002\u0002oq\u0005\u000e\b\u0002po\u0003\u0002\u0002\u0002qr\u0003",
    "\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002",
    "s\u0015\u0003\u0002\u0002\u0002tu\u0007\b\u0002\u0002uv\u0007\t\u0002",
    "\u0002vw\u0007\n\u0002\u0002wy\u0007\u000e\u0002\u0002xz\u0007\u000f",
    "\u0002\u0002yx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{y\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0017\u0003\u0002\u0002",
    "\u0002}~\u0007\b\u0002\u0002~\u007f\u0007\u0006\u0002\u0002\u007f\u0080",
    "\u0007\n\u0002\u0002\u0080\u0082\u0007\u000e\u0002\u0002\u0081\u0083",
    "\u0007\u000f\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u0084",
    "\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085",
    "\u0003\u0002\u0002\u0002\u0085\u0019\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0005\u0016\f\u0002\u0087\u0088\u0005\u0012\n\u0002\u0088\u008a\u0007",
    "\u000b\u0002\u0002\u0089\u008b\u0007\u000f\u0002\u0002\u008a\u0089\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008a\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u001b\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0005\u0018\r\u0002\u008f\u0090\u0005",
    "\u0014\u000b\u0002\u0090\u0092\u0007\u000b\u0002\u0002\u0091\u0093\u0007",
    "\u000f\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0094\u0003",
    "\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003",
    "\u0002\u0002\u0002\u0095\u001d\u0003\u0002\u0002\u0002\u0014!\'/7?A",
    "HOQYahmr{\u0084\u008c\u0094"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'is'", "'extends'", "'has'", "'set'", "'toggles'", 
                     "'create'", "'layer'", "'named'", "'done'", "'nothing'" ];

var symbolicNames = [ null, "IS_KEYWORD", "EXTENDS_KEYWORD", "HAS_KEYWORD", 
                      "SET_KEYWORD", "TOGGLES_KEYWORD", "CREATE_KEYWORD", 
                      "LAYER_KEYWORD", "NAMED_KEYWORD", "DONE_KEYWORD", 
                      "NOTHING_KEYWORD", "KEY_NAME", "ID_NAME", "EOL", "WS" ];

var ruleNames =  [ "config", "global_statement", "is_statement", "extends_statement", 
                   "has_statement", "toggle_statement", "set_statement", 
                   "layer_statement", "layer_statements", "set_statements", 
                   "create_named_layer", "create_named_set", "layer_block", 
                   "set_block" ];

function KLLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

KLLParser.prototype = Object.create(antlr4.Parser.prototype);
KLLParser.prototype.constructor = KLLParser;

Object.defineProperty(KLLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

KLLParser.EOF = antlr4.Token.EOF;
KLLParser.IS_KEYWORD = 1;
KLLParser.EXTENDS_KEYWORD = 2;
KLLParser.HAS_KEYWORD = 3;
KLLParser.SET_KEYWORD = 4;
KLLParser.TOGGLES_KEYWORD = 5;
KLLParser.CREATE_KEYWORD = 6;
KLLParser.LAYER_KEYWORD = 7;
KLLParser.NAMED_KEYWORD = 8;
KLLParser.DONE_KEYWORD = 9;
KLLParser.NOTHING_KEYWORD = 10;
KLLParser.KEY_NAME = 11;
KLLParser.ID_NAME = 12;
KLLParser.EOL = 13;
KLLParser.WS = 14;

KLLParser.RULE_config = 0;
KLLParser.RULE_global_statement = 1;
KLLParser.RULE_is_statement = 2;
KLLParser.RULE_extends_statement = 3;
KLLParser.RULE_has_statement = 4;
KLLParser.RULE_toggle_statement = 5;
KLLParser.RULE_set_statement = 6;
KLLParser.RULE_layer_statement = 7;
KLLParser.RULE_layer_statements = 8;
KLLParser.RULE_set_statements = 9;
KLLParser.RULE_create_named_layer = 10;
KLLParser.RULE_create_named_set = 11;
KLLParser.RULE_layer_block = 12;
KLLParser.RULE_set_block = 13;


function ConfigContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_config;
    return this;
}

ConfigContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConfigContext.prototype.constructor = ConfigContext;

ConfigContext.prototype.EOF = function() {
    return this.getToken(KLLParser.EOF, 0);
};

ConfigContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.EOL);
    } else {
        return this.getToken(KLLParser.EOL, i);
    }
};


ConfigContext.prototype.global_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Global_statementContext);
    } else {
        return this.getTypedRuleContext(Global_statementContext,i);
    }
};

ConfigContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterConfig(this);
	}
};

ConfigContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitConfig(this);
	}
};

ConfigContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitConfig(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.ConfigContext = ConfigContext;

KLLParser.prototype.config = function() {

    var localctx = new ConfigContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, KLLParser.RULE_config);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===KLLParser.EOL) {
            this.state = 28;
            this.match(KLLParser.EOL);
            this.state = 33;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 35; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 34;
            this.global_statement();
            this.state = 37; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===KLLParser.CREATE_KEYWORD || _la===KLLParser.KEY_NAME);
        this.state = 39;
        this.match(KLLParser.EOF);
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
};


function Global_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_global_statement;
    return this;
}

Global_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Global_statementContext.prototype.constructor = Global_statementContext;

Global_statementContext.prototype.is_statement = function() {
    return this.getTypedRuleContext(Is_statementContext,0);
};

Global_statementContext.prototype.toggle_statement = function() {
    return this.getTypedRuleContext(Toggle_statementContext,0);
};

Global_statementContext.prototype.layer_block = function() {
    return this.getTypedRuleContext(Layer_blockContext,0);
};

Global_statementContext.prototype.set_block = function() {
    return this.getTypedRuleContext(Set_blockContext,0);
};

Global_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterGlobal_statement(this);
	}
};

Global_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitGlobal_statement(this);
	}
};

Global_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitGlobal_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Global_statementContext = Global_statementContext;

KLLParser.prototype.global_statement = function() {

    var localctx = new Global_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, KLLParser.RULE_global_statement);
    try {
        this.state = 45;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.is_statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.toggle_statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 43;
            this.layer_block();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 44;
            this.set_block();
            break;

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
};


function Is_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_is_statement;
    return this;
}

Is_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Is_statementContext.prototype.constructor = Is_statementContext;

Is_statementContext.prototype.KEY_NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.KEY_NAME);
    } else {
        return this.getToken(KLLParser.KEY_NAME, i);
    }
};


Is_statementContext.prototype.IS_KEYWORD = function() {
    return this.getToken(KLLParser.IS_KEYWORD, 0);
};

Is_statementContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.EOL);
    } else {
        return this.getToken(KLLParser.EOL, i);
    }
};


Is_statementContext.prototype.NOTHING_KEYWORD = function() {
    return this.getToken(KLLParser.NOTHING_KEYWORD, 0);
};

Is_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterIs_statement(this);
	}
};

Is_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitIs_statement(this);
	}
};

Is_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitIs_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Is_statementContext = Is_statementContext;

KLLParser.prototype.is_statement = function() {

    var localctx = new Is_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, KLLParser.RULE_is_statement);
    var _la = 0; // Token type
    try {
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 47;
            this.match(KLLParser.KEY_NAME);
            this.state = 48;
            this.match(KLLParser.IS_KEYWORD);
            this.state = 49;
            this.match(KLLParser.KEY_NAME);
            this.state = 51; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 50;
                this.match(KLLParser.EOL);
                this.state = 53; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===KLLParser.EOL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 55;
            this.match(KLLParser.KEY_NAME);
            this.state = 56;
            this.match(KLLParser.IS_KEYWORD);
            this.state = 57;
            this.match(KLLParser.NOTHING_KEYWORD);
            this.state = 59; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 58;
                this.match(KLLParser.EOL);
                this.state = 61; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===KLLParser.EOL);
            break;

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
};


function Extends_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_extends_statement;
    return this;
}

Extends_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Extends_statementContext.prototype.constructor = Extends_statementContext;

Extends_statementContext.prototype.EXTENDS_KEYWORD = function() {
    return this.getToken(KLLParser.EXTENDS_KEYWORD, 0);
};

Extends_statementContext.prototype.ID_NAME = function() {
    return this.getToken(KLLParser.ID_NAME, 0);
};

Extends_statementContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.EOL);
    } else {
        return this.getToken(KLLParser.EOL, i);
    }
};


Extends_statementContext.prototype.NOTHING_KEYWORD = function() {
    return this.getToken(KLLParser.NOTHING_KEYWORD, 0);
};

Extends_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterExtends_statement(this);
	}
};

Extends_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitExtends_statement(this);
	}
};

Extends_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitExtends_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Extends_statementContext = Extends_statementContext;

KLLParser.prototype.extends_statement = function() {

    var localctx = new Extends_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, KLLParser.RULE_extends_statement);
    var _la = 0; // Token type
    try {
        this.state = 79;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.match(KLLParser.EXTENDS_KEYWORD);
            this.state = 66;
            this.match(KLLParser.ID_NAME);
            this.state = 68; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 67;
                this.match(KLLParser.EOL);
                this.state = 70; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===KLLParser.EOL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 72;
            this.match(KLLParser.EXTENDS_KEYWORD);
            this.state = 73;
            this.match(KLLParser.NOTHING_KEYWORD);
            this.state = 75; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 74;
                this.match(KLLParser.EOL);
                this.state = 77; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===KLLParser.EOL);
            break;

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
};


function Has_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_has_statement;
    return this;
}

Has_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Has_statementContext.prototype.constructor = Has_statementContext;

Has_statementContext.prototype.HAS_KEYWORD = function() {
    return this.getToken(KLLParser.HAS_KEYWORD, 0);
};

Has_statementContext.prototype.ID_NAME = function() {
    return this.getToken(KLLParser.ID_NAME, 0);
};

Has_statementContext.prototype.SET_KEYWORD = function() {
    return this.getToken(KLLParser.SET_KEYWORD, 0);
};

Has_statementContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.EOL);
    } else {
        return this.getToken(KLLParser.EOL, i);
    }
};


Has_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterHas_statement(this);
	}
};

Has_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitHas_statement(this);
	}
};

Has_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitHas_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Has_statementContext = Has_statementContext;

KLLParser.prototype.has_statement = function() {

    var localctx = new Has_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, KLLParser.RULE_has_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(KLLParser.HAS_KEYWORD);
        this.state = 82;
        this.match(KLLParser.ID_NAME);
        this.state = 83;
        this.match(KLLParser.SET_KEYWORD);
        this.state = 85; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 84;
            this.match(KLLParser.EOL);
            this.state = 87; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===KLLParser.EOL);
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
};


function Toggle_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_toggle_statement;
    return this;
}

Toggle_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Toggle_statementContext.prototype.constructor = Toggle_statementContext;

Toggle_statementContext.prototype.KEY_NAME = function() {
    return this.getToken(KLLParser.KEY_NAME, 0);
};

Toggle_statementContext.prototype.TOGGLES_KEYWORD = function() {
    return this.getToken(KLLParser.TOGGLES_KEYWORD, 0);
};

Toggle_statementContext.prototype.ID_NAME = function() {
    return this.getToken(KLLParser.ID_NAME, 0);
};

Toggle_statementContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.EOL);
    } else {
        return this.getToken(KLLParser.EOL, i);
    }
};


Toggle_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterToggle_statement(this);
	}
};

Toggle_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitToggle_statement(this);
	}
};

Toggle_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitToggle_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Toggle_statementContext = Toggle_statementContext;

KLLParser.prototype.toggle_statement = function() {

    var localctx = new Toggle_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, KLLParser.RULE_toggle_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this.match(KLLParser.KEY_NAME);
        this.state = 90;
        this.match(KLLParser.TOGGLES_KEYWORD);
        this.state = 91;
        this.match(KLLParser.ID_NAME);
        this.state = 93; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 92;
            this.match(KLLParser.EOL);
            this.state = 95; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===KLLParser.EOL);
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
};


function Set_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_set_statement;
    return this;
}

Set_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_statementContext.prototype.constructor = Set_statementContext;

Set_statementContext.prototype.is_statement = function() {
    return this.getTypedRuleContext(Is_statementContext,0);
};

Set_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterSet_statement(this);
	}
};

Set_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitSet_statement(this);
	}
};

Set_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitSet_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Set_statementContext = Set_statementContext;

KLLParser.prototype.set_statement = function() {

    var localctx = new Set_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, KLLParser.RULE_set_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.is_statement();
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
};


function Layer_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_layer_statement;
    return this;
}

Layer_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Layer_statementContext.prototype.constructor = Layer_statementContext;

Layer_statementContext.prototype.has_statement = function() {
    return this.getTypedRuleContext(Has_statementContext,0);
};

Layer_statementContext.prototype.extends_statement = function() {
    return this.getTypedRuleContext(Extends_statementContext,0);
};

Layer_statementContext.prototype.toggle_statement = function() {
    return this.getTypedRuleContext(Toggle_statementContext,0);
};

Layer_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterLayer_statement(this);
	}
};

Layer_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitLayer_statement(this);
	}
};

Layer_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitLayer_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Layer_statementContext = Layer_statementContext;

KLLParser.prototype.layer_statement = function() {

    var localctx = new Layer_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, KLLParser.RULE_layer_statement);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case KLLParser.HAS_KEYWORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.has_statement();
            break;
        case KLLParser.EXTENDS_KEYWORD:
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
            this.extends_statement();
            break;
        case KLLParser.KEY_NAME:
            this.enterOuterAlt(localctx, 3);
            this.state = 101;
            this.toggle_statement();
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
};


function Layer_statementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_layer_statements;
    return this;
}

Layer_statementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Layer_statementsContext.prototype.constructor = Layer_statementsContext;

Layer_statementsContext.prototype.layer_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Layer_statementContext);
    } else {
        return this.getTypedRuleContext(Layer_statementContext,i);
    }
};

Layer_statementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterLayer_statements(this);
	}
};

Layer_statementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitLayer_statements(this);
	}
};

Layer_statementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitLayer_statements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Layer_statementsContext = Layer_statementsContext;

KLLParser.prototype.layer_statements = function() {

    var localctx = new Layer_statementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, KLLParser.RULE_layer_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 104;
            this.layer_statement();
            this.state = 107; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KLLParser.EXTENDS_KEYWORD) | (1 << KLLParser.HAS_KEYWORD) | (1 << KLLParser.KEY_NAME))) !== 0));
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
};


function Set_statementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_set_statements;
    return this;
}

Set_statementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_statementsContext.prototype.constructor = Set_statementsContext;

Set_statementsContext.prototype.set_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Set_statementContext);
    } else {
        return this.getTypedRuleContext(Set_statementContext,i);
    }
};

Set_statementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterSet_statements(this);
	}
};

Set_statementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitSet_statements(this);
	}
};

Set_statementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitSet_statements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Set_statementsContext = Set_statementsContext;

KLLParser.prototype.set_statements = function() {

    var localctx = new Set_statementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, KLLParser.RULE_set_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 109;
            this.set_statement();
            this.state = 112; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===KLLParser.KEY_NAME);
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
};


function Create_named_layerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_create_named_layer;
    return this;
}

Create_named_layerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Create_named_layerContext.prototype.constructor = Create_named_layerContext;

Create_named_layerContext.prototype.CREATE_KEYWORD = function() {
    return this.getToken(KLLParser.CREATE_KEYWORD, 0);
};

Create_named_layerContext.prototype.LAYER_KEYWORD = function() {
    return this.getToken(KLLParser.LAYER_KEYWORD, 0);
};

Create_named_layerContext.prototype.NAMED_KEYWORD = function() {
    return this.getToken(KLLParser.NAMED_KEYWORD, 0);
};

Create_named_layerContext.prototype.ID_NAME = function() {
    return this.getToken(KLLParser.ID_NAME, 0);
};

Create_named_layerContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.EOL);
    } else {
        return this.getToken(KLLParser.EOL, i);
    }
};


Create_named_layerContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterCreate_named_layer(this);
	}
};

Create_named_layerContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitCreate_named_layer(this);
	}
};

Create_named_layerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitCreate_named_layer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Create_named_layerContext = Create_named_layerContext;

KLLParser.prototype.create_named_layer = function() {

    var localctx = new Create_named_layerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, KLLParser.RULE_create_named_layer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(KLLParser.CREATE_KEYWORD);
        this.state = 115;
        this.match(KLLParser.LAYER_KEYWORD);
        this.state = 116;
        this.match(KLLParser.NAMED_KEYWORD);
        this.state = 117;
        this.match(KLLParser.ID_NAME);
        this.state = 119; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 118;
            this.match(KLLParser.EOL);
            this.state = 121; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===KLLParser.EOL);
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
};


function Create_named_setContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_create_named_set;
    return this;
}

Create_named_setContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Create_named_setContext.prototype.constructor = Create_named_setContext;

Create_named_setContext.prototype.CREATE_KEYWORD = function() {
    return this.getToken(KLLParser.CREATE_KEYWORD, 0);
};

Create_named_setContext.prototype.SET_KEYWORD = function() {
    return this.getToken(KLLParser.SET_KEYWORD, 0);
};

Create_named_setContext.prototype.NAMED_KEYWORD = function() {
    return this.getToken(KLLParser.NAMED_KEYWORD, 0);
};

Create_named_setContext.prototype.ID_NAME = function() {
    return this.getToken(KLLParser.ID_NAME, 0);
};

Create_named_setContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.EOL);
    } else {
        return this.getToken(KLLParser.EOL, i);
    }
};


Create_named_setContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterCreate_named_set(this);
	}
};

Create_named_setContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitCreate_named_set(this);
	}
};

Create_named_setContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitCreate_named_set(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Create_named_setContext = Create_named_setContext;

KLLParser.prototype.create_named_set = function() {

    var localctx = new Create_named_setContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, KLLParser.RULE_create_named_set);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(KLLParser.CREATE_KEYWORD);
        this.state = 124;
        this.match(KLLParser.SET_KEYWORD);
        this.state = 125;
        this.match(KLLParser.NAMED_KEYWORD);
        this.state = 126;
        this.match(KLLParser.ID_NAME);
        this.state = 128; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 127;
            this.match(KLLParser.EOL);
            this.state = 130; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===KLLParser.EOL);
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
};


function Layer_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_layer_block;
    return this;
}

Layer_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Layer_blockContext.prototype.constructor = Layer_blockContext;

Layer_blockContext.prototype.create_named_layer = function() {
    return this.getTypedRuleContext(Create_named_layerContext,0);
};

Layer_blockContext.prototype.layer_statements = function() {
    return this.getTypedRuleContext(Layer_statementsContext,0);
};

Layer_blockContext.prototype.DONE_KEYWORD = function() {
    return this.getToken(KLLParser.DONE_KEYWORD, 0);
};

Layer_blockContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.EOL);
    } else {
        return this.getToken(KLLParser.EOL, i);
    }
};


Layer_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterLayer_block(this);
	}
};

Layer_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitLayer_block(this);
	}
};

Layer_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitLayer_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Layer_blockContext = Layer_blockContext;

KLLParser.prototype.layer_block = function() {

    var localctx = new Layer_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, KLLParser.RULE_layer_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.create_named_layer();
        this.state = 133;
        this.layer_statements();
        this.state = 134;
        this.match(KLLParser.DONE_KEYWORD);
        this.state = 136; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 135;
            this.match(KLLParser.EOL);
            this.state = 138; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===KLLParser.EOL);
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
};


function Set_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KLLParser.RULE_set_block;
    return this;
}

Set_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_blockContext.prototype.constructor = Set_blockContext;

Set_blockContext.prototype.create_named_set = function() {
    return this.getTypedRuleContext(Create_named_setContext,0);
};

Set_blockContext.prototype.set_statements = function() {
    return this.getTypedRuleContext(Set_statementsContext,0);
};

Set_blockContext.prototype.DONE_KEYWORD = function() {
    return this.getToken(KLLParser.DONE_KEYWORD, 0);
};

Set_blockContext.prototype.EOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KLLParser.EOL);
    } else {
        return this.getToken(KLLParser.EOL, i);
    }
};


Set_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.enterSet_block(this);
	}
};

Set_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof KLLListener ) {
        listener.exitSet_block(this);
	}
};

Set_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KLLVisitor ) {
        return visitor.visitSet_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KLLParser.Set_blockContext = Set_blockContext;

KLLParser.prototype.set_block = function() {

    var localctx = new Set_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, KLLParser.RULE_set_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.create_named_set();
        this.state = 141;
        this.set_statements();
        this.state = 142;
        this.match(KLLParser.DONE_KEYWORD);
        this.state = 144; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 143;
            this.match(KLLParser.EOL);
            this.state = 146; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===KLLParser.EOL);
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
};


exports.KLLParser = KLLParser;
