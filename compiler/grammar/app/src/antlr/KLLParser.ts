// Generated from src/antlr/KLL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { KLLListener } from "./KLLListener";
import { KLLVisitor } from "./KLLVisitor";


export class KLLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly IS_KEYWORD = 2;
	public static readonly EXTENDS_KEYWORD = 3;
	public static readonly TOGGLE_KEYWORD = 4;
	public static readonly LAYER_KEYWORD = 5;
	public static readonly WHEN_KEYWORD = 6;
	public static readonly WITH_KEYWORD = 7;
	public static readonly AND_KEYWORD = 8;
	public static readonly SWAP_KEYWORD = 9;
	public static readonly BUNDLE_KEYWORD = 10;
	public static readonly DONE_KEYWORD = 11;
	public static readonly NOTHING_KEYWORD = 12;
	public static readonly KEY_NAME = 13;
	public static readonly ID_NAME = 14;
	public static readonly EOL = 15;
	public static readonly STRING = 16;
	public static readonly WS = 17;
	public static readonly RULE_config = 0;
	public static readonly RULE_global_statement = 1;
	public static readonly RULE_empty = 2;
	public static readonly RULE_is_statement = 3;
	public static readonly RULE_extends_statement = 4;
	public static readonly RULE_toggle_statement = 5;
	public static readonly RULE_set_statement = 6;
	public static readonly RULE_layer_statement = 7;
	public static readonly RULE_layer_statements = 8;
	public static readonly RULE_when_statement = 9;
	public static readonly RULE_swap_statement = 10;
	public static readonly RULE_layer_header = 11;
	public static readonly RULE_layer_block = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"config", "global_statement", "empty", "is_statement", "extends_statement", 
		"toggle_statement", "set_statement", "layer_statement", "layer_statements", 
		"when_statement", "swap_statement", "layer_header", "layer_block",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'bundle is'", "'is'", "'extends'", "'toggle'", "'layer'", 
		"'when'", "'with'", "'and'", "'swap'", "'bundle'", "'done'", "'nothing'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "IS_KEYWORD", "EXTENDS_KEYWORD", "TOGGLE_KEYWORD", 
		"LAYER_KEYWORD", "WHEN_KEYWORD", "WITH_KEYWORD", "AND_KEYWORD", "SWAP_KEYWORD", 
		"BUNDLE_KEYWORD", "DONE_KEYWORD", "NOTHING_KEYWORD", "KEY_NAME", "ID_NAME", 
		"EOL", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(KLLParser._LITERAL_NAMES, KLLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return KLLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "KLL.g4"; }

	// @Override
	public get ruleNames(): string[] { return KLLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return KLLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(KLLParser._ATN, this);
	}
	// @RuleVersion(0)
	public config(): ConfigContext {
		let _localctx: ConfigContext = new ConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, KLLParser.RULE_config);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 26;
				this.global_statement();
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KLLParser.TOGGLE_KEYWORD) | (1 << KLLParser.SWAP_KEYWORD) | (1 << KLLParser.KEY_NAME) | (1 << KLLParser.ID_NAME) | (1 << KLLParser.EOL) | (1 << KLLParser.WS))) !== 0));
			this.state = 31;
			this.match(KLLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_statement(): Global_statementContext {
		let _localctx: Global_statementContext = new Global_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, KLLParser.RULE_global_statement);
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 33;
				this.empty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 34;
				this.swap_statement();
				this.state = 35;
				this.match(KLLParser.EOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 37;
				this.swap_statement();
				this.state = 38;
				this.match(KLLParser.EOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 40;
				this.is_statement();
				this.state = 41;
				this.match(KLLParser.EOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 43;
				this.toggle_statement();
				this.state = 44;
				this.match(KLLParser.EOL);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 46;
				this.layer_block();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public empty(): EmptyContext {
		let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KLLParser.RULE_empty);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 52;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KLLParser.WS) {
						{
						{
						this.state = 49;
						this.match(KLLParser.WS);
						}
						}
						this.state = 54;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 55;
					this.match(KLLParser.EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 58;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public is_statement(): Is_statementContext {
		let _localctx: Is_statementContext = new Is_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KLLParser.RULE_is_statement);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 60;
				this.match(KLLParser.KEY_NAME);
				this.state = 61;
				this.match(KLLParser.IS_KEYWORD);
				this.state = 62;
				this.match(KLLParser.KEY_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.match(KLLParser.KEY_NAME);
				this.state = 64;
				this.match(KLLParser.IS_KEYWORD);
				this.state = 65;
				this.match(KLLParser.NOTHING_KEYWORD);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extends_statement(): Extends_statementContext {
		let _localctx: Extends_statementContext = new Extends_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, KLLParser.RULE_extends_statement);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.match(KLLParser.EXTENDS_KEYWORD);
				this.state = 69;
				this.match(KLLParser.ID_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
				this.match(KLLParser.EXTENDS_KEYWORD);
				this.state = 71;
				this.match(KLLParser.NOTHING_KEYWORD);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public toggle_statement(): Toggle_statementContext {
		let _localctx: Toggle_statementContext = new Toggle_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, KLLParser.RULE_toggle_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(KLLParser.TOGGLE_KEYWORD);
			this.state = 75;
			this.match(KLLParser.ID_NAME);
			this.state = 76;
			this.match(KLLParser.WITH_KEYWORD);
			this.state = 77;
			this.match(KLLParser.KEY_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set_statement(): Set_statementContext {
		let _localctx: Set_statementContext = new Set_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, KLLParser.RULE_set_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.is_statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public layer_statement(): Layer_statementContext {
		let _localctx: Layer_statementContext = new Layer_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, KLLParser.RULE_layer_statement);
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.empty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.swap_statement();
				this.state = 83;
				this.match(KLLParser.EOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 85;
				this.swap_statement();
				this.state = 86;
				this.when_statement();
				this.state = 87;
				this.match(KLLParser.EOL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 89;
				this.toggle_statement();
				this.state = 90;
				this.match(KLLParser.EOL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 92;
				this.is_statement();
				this.state = 93;
				this.match(KLLParser.EOL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public layer_statements(): Layer_statementsContext {
		let _localctx: Layer_statementsContext = new Layer_statementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, KLLParser.RULE_layer_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 97;
				this.layer_statement();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KLLParser.TOGGLE_KEYWORD) | (1 << KLLParser.SWAP_KEYWORD) | (1 << KLLParser.KEY_NAME) | (1 << KLLParser.EOL) | (1 << KLLParser.WS))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public when_statement(): When_statementContext {
		let _localctx: When_statementContext = new When_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KLLParser.RULE_when_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(KLLParser.WHEN_KEYWORD);
			this.state = 103;
			this.match(KLLParser.T__0);
			this.state = 104;
			this.match(KLLParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public swap_statement(): Swap_statementContext {
		let _localctx: Swap_statementContext = new Swap_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, KLLParser.RULE_swap_statement);
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.match(KLLParser.SWAP_KEYWORD);
				this.state = 107;
				this.match(KLLParser.KEY_NAME);
				this.state = 108;
				this.match(KLLParser.AND_KEYWORD);
				this.state = 109;
				this.match(KLLParser.KEY_NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
				this.match(KLLParser.SWAP_KEYWORD);
				this.state = 111;
				this.match(KLLParser.KEY_NAME);
				this.state = 112;
				this.match(KLLParser.AND_KEYWORD);
				this.state = 113;
				this.match(KLLParser.KEY_NAME);
				this.state = 114;
				this.when_statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public layer_header(): Layer_headerContext {
		let _localctx: Layer_headerContext = new Layer_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, KLLParser.RULE_layer_header);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.match(KLLParser.ID_NAME);
				this.state = 118;
				this.match(KLLParser.LAYER_KEYWORD);
				this.state = 119;
				this.match(KLLParser.EOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.match(KLLParser.ID_NAME);
				this.state = 121;
				this.match(KLLParser.LAYER_KEYWORD);
				this.state = 122;
				this.extends_statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public layer_block(): Layer_blockContext {
		let _localctx: Layer_blockContext = new Layer_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, KLLParser.RULE_layer_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.layer_header();
			this.state = 126;
			this.layer_statements();
			this.state = 127;
			this.match(KLLParser.DONE_KEYWORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13\x84\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x06\x02\x1E\n\x02\r\x02\x0E\x02\x1F\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x032\n\x03\x03\x04\x07\x04" +
		"5\n\x04\f\x04\x0E\x048\v\x04\x03\x04\x06\x04;\n\x04\r\x04\x0E\x04<\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05E\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06K\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tb\n\t\x03\n\x06\ne\n\n\r\n\x0E\nf" +
		"\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\fv\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r~\n\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x02\x02\x02\x87\x02\x1D\x03\x02\x02\x02\x041\x03\x02\x02\x02" +
		"\x06:\x03\x02\x02\x02\bD\x03\x02\x02\x02\nJ\x03\x02\x02\x02\fL\x03\x02" +
		"\x02\x02\x0EQ\x03\x02\x02\x02\x10a\x03\x02\x02\x02\x12d\x03\x02\x02\x02" +
		"\x14h\x03\x02\x02\x02\x16u\x03\x02\x02\x02\x18}\x03\x02\x02\x02\x1A\x7F" +
		"\x03\x02\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1C\x03\x02\x02\x02\x1E\x1F" +
		"\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 !\x03\x02" +
		"\x02\x02!\"\x07\x02\x02\x03\"\x03\x03\x02\x02\x02#2\x05\x06\x04\x02$%" +
		"\x05\x16\f\x02%&\x07\x11\x02\x02&2\x03\x02\x02\x02\'(\x05\x16\f\x02()" +
		"\x07\x11\x02\x02)2\x03\x02\x02\x02*+\x05\b\x05\x02+,\x07\x11\x02\x02," +
		"2\x03\x02\x02\x02-.\x05\f\x07\x02./\x07\x11\x02\x02/2\x03\x02\x02\x02" +
		"02\x05\x1A\x0E\x021#\x03\x02\x02\x021$\x03\x02\x02\x021\'\x03\x02\x02" +
		"\x021*\x03\x02\x02\x021-\x03\x02\x02\x0210\x03\x02\x02\x022\x05\x03\x02" +
		"\x02\x0235\x07\x13\x02\x0243\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02" +
		"\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03\x02\x02\x029;\x07\x11" +
		"\x02\x02:6\x03\x02\x02\x02;<\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02" +
		"\x02\x02=\x07\x03\x02\x02\x02>?\x07\x0F\x02\x02?@\x07\x04\x02\x02@E\x07" +
		"\x0F\x02\x02AB\x07\x0F\x02\x02BC\x07\x04\x02\x02CE\x07\x0E\x02\x02D>\x03" +
		"\x02\x02\x02DA\x03\x02\x02\x02E\t\x03\x02\x02\x02FG\x07\x05\x02\x02GK" +
		"\x07\x10\x02\x02HI\x07\x05\x02\x02IK\x07\x0E\x02\x02JF\x03\x02\x02\x02" +
		"JH\x03\x02\x02\x02K\v\x03\x02\x02\x02LM\x07\x06\x02\x02MN\x07\x10\x02" +
		"\x02NO\x07\t\x02\x02OP\x07\x0F\x02\x02P\r\x03\x02\x02\x02QR\x05\b\x05" +
		"\x02R\x0F\x03\x02\x02\x02Sb\x05\x06\x04\x02TU\x05\x16\f\x02UV\x07\x11" +
		"\x02\x02Vb\x03\x02\x02\x02WX\x05\x16\f\x02XY\x05\x14\v\x02YZ\x07\x11\x02" +
		"\x02Zb\x03\x02\x02\x02[\\\x05\f\x07\x02\\]\x07\x11\x02\x02]b\x03\x02\x02" +
		"\x02^_\x05\b\x05\x02_`\x07\x11\x02\x02`b\x03\x02\x02\x02aS\x03\x02\x02" +
		"\x02aT\x03\x02\x02\x02aW\x03\x02\x02\x02a[\x03\x02\x02\x02a^\x03\x02\x02" +
		"\x02b\x11\x03\x02\x02\x02ce\x05\x10\t\x02dc\x03\x02\x02\x02ef\x03\x02" +
		"\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02g\x13\x03\x02\x02\x02hi\x07" +
		"\b\x02\x02ij\x07\x03\x02\x02jk\x07\x12\x02\x02k\x15\x03\x02\x02\x02lm" +
		"\x07\v\x02\x02mn\x07\x0F\x02\x02no\x07\n\x02\x02ov\x07\x0F\x02\x02pq\x07" +
		"\v\x02\x02qr\x07\x0F\x02\x02rs\x07\n\x02\x02st\x07\x0F\x02\x02tv\x05\x14" +
		"\v\x02ul\x03\x02\x02\x02up\x03\x02\x02\x02v\x17\x03\x02\x02\x02wx\x07" +
		"\x10\x02\x02xy\x07\x07\x02\x02y~\x07\x11\x02\x02z{\x07\x10\x02\x02{|\x07" +
		"\x07\x02\x02|~\x05\n\x06\x02}w\x03\x02\x02\x02}z\x03\x02\x02\x02~\x19" +
		"\x03\x02\x02\x02\x7F\x80\x05\x18\r\x02\x80\x81\x05\x12\n\x02\x81\x82\x07" +
		"\r\x02\x02\x82\x1B\x03\x02\x02\x02\f\x1F16<DJafu}";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KLLParser.__ATN) {
			KLLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KLLParser._serializedATN));
		}

		return KLLParser.__ATN;
	}

}

export class ConfigContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(KLLParser.EOF, 0); }
	public global_statement(): Global_statementContext[];
	public global_statement(i: number): Global_statementContext;
	public global_statement(i?: number): Global_statementContext | Global_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Global_statementContext);
		} else {
			return this.getRuleContext(i, Global_statementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_config; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterConfig) {
			listener.enterConfig(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitConfig) {
			listener.exitConfig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitConfig) {
			return visitor.visitConfig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_statementContext extends ParserRuleContext {
	public empty(): EmptyContext | undefined {
		return this.tryGetRuleContext(0, EmptyContext);
	}
	public swap_statement(): Swap_statementContext | undefined {
		return this.tryGetRuleContext(0, Swap_statementContext);
	}
	public EOL(): TerminalNode | undefined { return this.tryGetToken(KLLParser.EOL, 0); }
	public is_statement(): Is_statementContext | undefined {
		return this.tryGetRuleContext(0, Is_statementContext);
	}
	public toggle_statement(): Toggle_statementContext | undefined {
		return this.tryGetRuleContext(0, Toggle_statementContext);
	}
	public layer_block(): Layer_blockContext | undefined {
		return this.tryGetRuleContext(0, Layer_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_global_statement; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterGlobal_statement) {
			listener.enterGlobal_statement(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitGlobal_statement) {
			listener.exitGlobal_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitGlobal_statement) {
			return visitor.visitGlobal_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyContext extends ParserRuleContext {
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.WS);
		} else {
			return this.getToken(KLLParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_empty; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterEmpty) {
			listener.enterEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitEmpty) {
			listener.exitEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitEmpty) {
			return visitor.visitEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Is_statementContext extends ParserRuleContext {
	public KEY_NAME(): TerminalNode[];
	public KEY_NAME(i: number): TerminalNode;
	public KEY_NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.KEY_NAME);
		} else {
			return this.getToken(KLLParser.KEY_NAME, i);
		}
	}
	public IS_KEYWORD(): TerminalNode { return this.getToken(KLLParser.IS_KEYWORD, 0); }
	public NOTHING_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(KLLParser.NOTHING_KEYWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_is_statement; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterIs_statement) {
			listener.enterIs_statement(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitIs_statement) {
			listener.exitIs_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitIs_statement) {
			return visitor.visitIs_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extends_statementContext extends ParserRuleContext {
	public EXTENDS_KEYWORD(): TerminalNode { return this.getToken(KLLParser.EXTENDS_KEYWORD, 0); }
	public ID_NAME(): TerminalNode | undefined { return this.tryGetToken(KLLParser.ID_NAME, 0); }
	public NOTHING_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(KLLParser.NOTHING_KEYWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_extends_statement; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterExtends_statement) {
			listener.enterExtends_statement(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitExtends_statement) {
			listener.exitExtends_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitExtends_statement) {
			return visitor.visitExtends_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Toggle_statementContext extends ParserRuleContext {
	public TOGGLE_KEYWORD(): TerminalNode { return this.getToken(KLLParser.TOGGLE_KEYWORD, 0); }
	public ID_NAME(): TerminalNode { return this.getToken(KLLParser.ID_NAME, 0); }
	public WITH_KEYWORD(): TerminalNode { return this.getToken(KLLParser.WITH_KEYWORD, 0); }
	public KEY_NAME(): TerminalNode { return this.getToken(KLLParser.KEY_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_toggle_statement; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterToggle_statement) {
			listener.enterToggle_statement(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitToggle_statement) {
			listener.exitToggle_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitToggle_statement) {
			return visitor.visitToggle_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_statementContext extends ParserRuleContext {
	public is_statement(): Is_statementContext {
		return this.getRuleContext(0, Is_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_set_statement; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterSet_statement) {
			listener.enterSet_statement(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitSet_statement) {
			listener.exitSet_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitSet_statement) {
			return visitor.visitSet_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Layer_statementContext extends ParserRuleContext {
	public empty(): EmptyContext | undefined {
		return this.tryGetRuleContext(0, EmptyContext);
	}
	public swap_statement(): Swap_statementContext | undefined {
		return this.tryGetRuleContext(0, Swap_statementContext);
	}
	public EOL(): TerminalNode | undefined { return this.tryGetToken(KLLParser.EOL, 0); }
	public when_statement(): When_statementContext | undefined {
		return this.tryGetRuleContext(0, When_statementContext);
	}
	public toggle_statement(): Toggle_statementContext | undefined {
		return this.tryGetRuleContext(0, Toggle_statementContext);
	}
	public is_statement(): Is_statementContext | undefined {
		return this.tryGetRuleContext(0, Is_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_layer_statement; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterLayer_statement) {
			listener.enterLayer_statement(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitLayer_statement) {
			listener.exitLayer_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitLayer_statement) {
			return visitor.visitLayer_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Layer_statementsContext extends ParserRuleContext {
	public layer_statement(): Layer_statementContext[];
	public layer_statement(i: number): Layer_statementContext;
	public layer_statement(i?: number): Layer_statementContext | Layer_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Layer_statementContext);
		} else {
			return this.getRuleContext(i, Layer_statementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_layer_statements; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterLayer_statements) {
			listener.enterLayer_statements(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitLayer_statements) {
			listener.exitLayer_statements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitLayer_statements) {
			return visitor.visitLayer_statements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class When_statementContext extends ParserRuleContext {
	public WHEN_KEYWORD(): TerminalNode { return this.getToken(KLLParser.WHEN_KEYWORD, 0); }
	public STRING(): TerminalNode { return this.getToken(KLLParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_when_statement; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterWhen_statement) {
			listener.enterWhen_statement(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitWhen_statement) {
			listener.exitWhen_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitWhen_statement) {
			return visitor.visitWhen_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Swap_statementContext extends ParserRuleContext {
	public SWAP_KEYWORD(): TerminalNode { return this.getToken(KLLParser.SWAP_KEYWORD, 0); }
	public KEY_NAME(): TerminalNode[];
	public KEY_NAME(i: number): TerminalNode;
	public KEY_NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.KEY_NAME);
		} else {
			return this.getToken(KLLParser.KEY_NAME, i);
		}
	}
	public AND_KEYWORD(): TerminalNode { return this.getToken(KLLParser.AND_KEYWORD, 0); }
	public when_statement(): When_statementContext | undefined {
		return this.tryGetRuleContext(0, When_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_swap_statement; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterSwap_statement) {
			listener.enterSwap_statement(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitSwap_statement) {
			listener.exitSwap_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitSwap_statement) {
			return visitor.visitSwap_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Layer_headerContext extends ParserRuleContext {
	public ID_NAME(): TerminalNode { return this.getToken(KLLParser.ID_NAME, 0); }
	public LAYER_KEYWORD(): TerminalNode { return this.getToken(KLLParser.LAYER_KEYWORD, 0); }
	public EOL(): TerminalNode | undefined { return this.tryGetToken(KLLParser.EOL, 0); }
	public extends_statement(): Extends_statementContext | undefined {
		return this.tryGetRuleContext(0, Extends_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_layer_header; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterLayer_header) {
			listener.enterLayer_header(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitLayer_header) {
			listener.exitLayer_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitLayer_header) {
			return visitor.visitLayer_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Layer_blockContext extends ParserRuleContext {
	public layer_header(): Layer_headerContext {
		return this.getRuleContext(0, Layer_headerContext);
	}
	public layer_statements(): Layer_statementsContext {
		return this.getRuleContext(0, Layer_statementsContext);
	}
	public DONE_KEYWORD(): TerminalNode { return this.getToken(KLLParser.DONE_KEYWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_layer_block; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterLayer_block) {
			listener.enterLayer_block(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitLayer_block) {
			listener.exitLayer_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitLayer_block) {
			return visitor.visitLayer_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


