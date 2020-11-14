// Generated from src/antlr/KLL.g4 by ANTLR 4.7.3-SNAPSHOT
// @ts-nocheck

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
	public static readonly IS_KEYWORD = 1;
	public static readonly EXTENDS_KEYWORD = 2;
	public static readonly HAS_KEYWORD = 3;
	public static readonly SET_KEYWORD = 4;
	public static readonly TOGGLES_KEYWORD = 5;
	public static readonly CREATE_KEYWORD = 6;
	public static readonly LAYER_KEYWORD = 7;
	public static readonly NAMED_KEYWORD = 8;
	public static readonly DONE_KEYWORD = 9;
	public static readonly NOTHING_KEYWORD = 10;
	public static readonly KEY_NAME = 11;
	public static readonly ID_NAME = 12;
	public static readonly EOL = 13;
	public static readonly WS = 14;
	public static readonly RULE_config = 0;
	public static readonly RULE_global_statement = 1;
	public static readonly RULE_is_statement = 2;
	public static readonly RULE_extends_statement = 3;
	public static readonly RULE_has_statement = 4;
	public static readonly RULE_toggle_statement = 5;
	public static readonly RULE_set_statement = 6;
	public static readonly RULE_layer_statement = 7;
	public static readonly RULE_layer_statements = 8;
	public static readonly RULE_set_statements = 9;
	public static readonly RULE_create_named_layer = 10;
	public static readonly RULE_create_named_set = 11;
	public static readonly RULE_layer_block = 12;
	public static readonly RULE_set_block = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"config", "global_statement", "is_statement", "extends_statement", "has_statement", 
		"toggle_statement", "set_statement", "layer_statement", "layer_statements", 
		"set_statements", "create_named_layer", "create_named_set", "layer_block", 
		"set_block",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'is'", "'extends'", "'has'", "'set'", "'toggles'", "'create'", 
		"'layer'", "'named'", "'done'", "'nothing'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IS_KEYWORD", "EXTENDS_KEYWORD", "HAS_KEYWORD", "SET_KEYWORD", 
		"TOGGLES_KEYWORD", "CREATE_KEYWORD", "LAYER_KEYWORD", "NAMED_KEYWORD", 
		"DONE_KEYWORD", "NOTHING_KEYWORD", "KEY_NAME", "ID_NAME", "EOL", "WS",
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
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KLLParser.EOL) {
				{
				{
				this.state = 28;
				this.match(KLLParser.EOL);
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 34;
				this.global_statement();
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KLLParser.CREATE_KEYWORD || _la === KLLParser.KEY_NAME);
			this.state = 39;
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
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 41;
				this.is_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 42;
				this.toggle_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 43;
				this.layer_block();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 44;
				this.set_block();
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
	public is_statement(): Is_statementContext {
		let _localctx: Is_statementContext = new Is_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KLLParser.RULE_is_statement);
		let _la: number;
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
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
					{
					{
					this.state = 50;
					this.match(KLLParser.EOL);
					}
					}
					this.state = 53;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KLLParser.EOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
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
					{
					{
					this.state = 58;
					this.match(KLLParser.EOL);
					}
					}
					this.state = 61;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KLLParser.EOL);
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
		this.enterRule(_localctx, 6, KLLParser.RULE_extends_statement);
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.match(KLLParser.EXTENDS_KEYWORD);
				this.state = 66;
				this.match(KLLParser.ID_NAME);
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 67;
					this.match(KLLParser.EOL);
					}
					}
					this.state = 70;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KLLParser.EOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.match(KLLParser.EXTENDS_KEYWORD);
				this.state = 73;
				this.match(KLLParser.NOTHING_KEYWORD);
				this.state = 75;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 74;
					this.match(KLLParser.EOL);
					}
					}
					this.state = 77;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KLLParser.EOL);
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
	public has_statement(): Has_statementContext {
		let _localctx: Has_statementContext = new Has_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, KLLParser.RULE_has_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
				{
				{
				this.state = 84;
				this.match(KLLParser.EOL);
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KLLParser.EOL);
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
				{
				{
				this.state = 92;
				this.match(KLLParser.EOL);
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KLLParser.EOL);
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
			this.state = 97;
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
			this.state = 102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KLLParser.HAS_KEYWORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.has_statement();
				}
				break;
			case KLLParser.EXTENDS_KEYWORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this.extends_statement();
				}
				break;
			case KLLParser.KEY_NAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 101;
				this.toggle_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 104;
				this.layer_statement();
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KLLParser.EXTENDS_KEYWORD) | (1 << KLLParser.HAS_KEYWORD) | (1 << KLLParser.KEY_NAME))) !== 0));
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
	public set_statements(): Set_statementsContext {
		let _localctx: Set_statementsContext = new Set_statementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KLLParser.RULE_set_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 109;
				this.set_statement();
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KLLParser.KEY_NAME);
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
	public create_named_layer(): Create_named_layerContext {
		let _localctx: Create_named_layerContext = new Create_named_layerContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, KLLParser.RULE_create_named_layer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
				{
				{
				this.state = 118;
				this.match(KLLParser.EOL);
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KLLParser.EOL);
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
	public create_named_set(): Create_named_setContext {
		let _localctx: Create_named_setContext = new Create_named_setContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, KLLParser.RULE_create_named_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
				{
				{
				this.state = 127;
				this.match(KLLParser.EOL);
				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KLLParser.EOL);
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
				{
				{
				this.state = 135;
				this.match(KLLParser.EOL);
				}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KLLParser.EOL);
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
	public set_block(): Set_blockContext {
		let _localctx: Set_blockContext = new Set_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, KLLParser.RULE_set_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
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
				{
				{
				this.state = 143;
				this.match(KLLParser.EOL);
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KLLParser.EOL);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10\x97\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02\x03" +
		"\x02\x06\x02&\n\x02\r\x02\x0E\x02\'\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x030\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x06\x046\n" +
		"\x04\r\x04\x0E\x047\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04>\n\x04\r\x04" +
		"\x0E\x04?\x05\x04B\n\x04\x03\x05\x03\x05\x03\x05\x06\x05G\n\x05\r\x05" +
		"\x0E\x05H\x03\x05\x03\x05\x03\x05\x06\x05N\n\x05\r\x05\x0E\x05O\x05\x05" +
		"R\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06X\n\x06\r\x06\x0E\x06Y" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07`\n\x07\r\x07\x0E\x07a\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x05\ti\n\t\x03\n\x06\nl\n\n\r\n\x0E\nm\x03\v\x06" +
		"\vq\n\v\r\v\x0E\vr\x03\f\x03\f\x03\f\x03\f\x03\f\x06\fz\n\f\r\f\x0E\f" +
		"{\x03\r\x03\r\x03\r\x03\r\x03\r\x06\r\x83\n\r\r\r\x0E\r\x84\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x06\x0E\x8B\n\x0E\r\x0E\x0E\x0E\x8C\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x06\x0F\x93\n\x0F\r\x0F\x0E\x0F\x94\x03\x0F\x02\x02\x02" +
		"\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x02\x02\x9D\x02!\x03\x02" +
		"\x02\x02\x04/\x03\x02\x02\x02\x06A\x03\x02\x02\x02\bQ\x03\x02\x02\x02" +
		"\nS\x03\x02\x02\x02\f[\x03\x02\x02\x02\x0Ec\x03\x02\x02\x02\x10h\x03\x02" +
		"\x02\x02\x12k\x03\x02\x02\x02\x14p\x03\x02\x02\x02\x16t\x03\x02\x02\x02" +
		"\x18}\x03\x02\x02\x02\x1A\x86\x03\x02\x02\x02\x1C\x8E\x03\x02\x02\x02" +
		"\x1E \x07\x0F\x02\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03" +
		"\x02\x02\x02!\"\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02$" +
		"&\x05\x04\x03\x02%$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'%\x03\x02\x02" +
		"\x02\'(\x03\x02\x02\x02()\x03\x02\x02\x02)*\x07\x02\x02\x03*\x03\x03\x02" +
		"\x02\x02+0\x05\x06\x04\x02,0\x05\f\x07\x02-0\x05\x1A\x0E\x02.0\x05\x1C" +
		"\x0F\x02/+\x03\x02\x02\x02/,\x03\x02\x02\x02/-\x03\x02\x02\x02/.\x03\x02" +
		"\x02\x020\x05\x03\x02\x02\x0212\x07\r\x02\x0223\x07\x03\x02\x0235\x07" +
		"\r\x02\x0246\x07\x0F\x02\x0254\x03\x02\x02\x0267\x03\x02\x02\x0275\x03" +
		"\x02\x02\x0278\x03\x02\x02\x028B\x03\x02\x02\x029:\x07\r\x02\x02:;\x07" +
		"\x03\x02\x02;=\x07\f\x02\x02<>\x07\x0F\x02\x02=<\x03\x02\x02\x02>?\x03" +
		"\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03\x02\x02\x02A1\x03" +
		"\x02\x02\x02A9\x03\x02\x02\x02B\x07\x03\x02\x02\x02CD\x07\x04\x02\x02" +
		"DF\x07\x0E\x02\x02EG\x07\x0F\x02\x02FE\x03\x02\x02\x02GH\x03\x02\x02\x02" +
		"HF\x03\x02\x02\x02HI\x03\x02\x02\x02IR\x03\x02\x02\x02JK\x07\x04\x02\x02" +
		"KM\x07\f\x02\x02LN\x07\x0F\x02\x02ML\x03\x02\x02\x02NO\x03\x02\x02\x02" +
		"OM\x03\x02\x02\x02OP\x03\x02\x02\x02PR\x03\x02\x02\x02QC\x03\x02\x02\x02" +
		"QJ\x03\x02\x02\x02R\t\x03\x02\x02\x02ST\x07\x05\x02\x02TU\x07\x0E\x02" +
		"\x02UW\x07\x06\x02\x02VX\x07\x0F\x02\x02WV\x03\x02\x02\x02XY\x03\x02\x02" +
		"\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\v\x03\x02\x02\x02[\\\x07\r\x02" +
		"\x02\\]\x07\x07\x02\x02]_\x07\x0E\x02\x02^`\x07\x0F\x02\x02_^\x03\x02" +
		"\x02\x02`a\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\r\x03" +
		"\x02\x02\x02cd\x05\x06\x04\x02d\x0F\x03\x02\x02\x02ei\x05\n\x06\x02fi" +
		"\x05\b\x05\x02gi\x05\f\x07\x02he\x03\x02\x02\x02hf\x03\x02\x02\x02hg\x03" +
		"\x02\x02\x02i\x11\x03\x02\x02\x02jl\x05\x10\t\x02kj\x03\x02\x02\x02lm" +
		"\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02n\x13\x03\x02\x02" +
		"\x02oq\x05\x0E\b\x02po\x03\x02\x02\x02qr\x03\x02\x02\x02rp\x03\x02\x02" +
		"\x02rs\x03\x02\x02\x02s\x15\x03\x02\x02\x02tu\x07\b\x02\x02uv\x07\t\x02" +
		"\x02vw\x07\n\x02\x02wy\x07\x0E\x02\x02xz\x07\x0F\x02\x02yx\x03\x02\x02" +
		"\x02z{\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x17\x03\x02" +
		"\x02\x02}~\x07\b\x02\x02~\x7F\x07\x06\x02\x02\x7F\x80\x07\n\x02\x02\x80" +
		"\x82\x07\x0E\x02\x02\x81\x83\x07\x0F\x02\x02\x82\x81\x03\x02\x02\x02\x83" +
		"\x84\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85" +
		"\x19\x03\x02\x02\x02\x86\x87\x05\x16\f\x02\x87\x88\x05\x12\n\x02\x88\x8A" +
		"\x07\v\x02\x02\x89\x8B\x07\x0F\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x8C" +
		"\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x1B" +
		"\x03\x02\x02\x02\x8E\x8F\x05\x18\r\x02\x8F\x90\x05\x14\v\x02\x90\x92\x07" +
		"\v\x02\x02\x91\x93\x07\x0F\x02\x02\x92\x91\x03\x02\x02\x02\x93\x94\x03" +
		"\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x1D\x03" +
		"\x02\x02\x02\x14!\'/7?AHOQYahmr{\x84\x8C\x94";
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
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
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
	public is_statement(): Is_statementContext | undefined {
		return this.tryGetRuleContext(0, Is_statementContext);
	}
	public toggle_statement(): Toggle_statementContext | undefined {
		return this.tryGetRuleContext(0, Toggle_statementContext);
	}
	public layer_block(): Layer_blockContext | undefined {
		return this.tryGetRuleContext(0, Layer_blockContext);
	}
	public set_block(): Set_blockContext | undefined {
		return this.tryGetRuleContext(0, Set_blockContext);
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
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
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
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
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


export class Has_statementContext extends ParserRuleContext {
	public HAS_KEYWORD(): TerminalNode { return this.getToken(KLLParser.HAS_KEYWORD, 0); }
	public ID_NAME(): TerminalNode { return this.getToken(KLLParser.ID_NAME, 0); }
	public SET_KEYWORD(): TerminalNode { return this.getToken(KLLParser.SET_KEYWORD, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_has_statement; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterHas_statement) {
			listener.enterHas_statement(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitHas_statement) {
			listener.exitHas_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitHas_statement) {
			return visitor.visitHas_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Toggle_statementContext extends ParserRuleContext {
	public KEY_NAME(): TerminalNode { return this.getToken(KLLParser.KEY_NAME, 0); }
	public TOGGLES_KEYWORD(): TerminalNode { return this.getToken(KLLParser.TOGGLES_KEYWORD, 0); }
	public ID_NAME(): TerminalNode { return this.getToken(KLLParser.ID_NAME, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
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
	public has_statement(): Has_statementContext | undefined {
		return this.tryGetRuleContext(0, Has_statementContext);
	}
	public extends_statement(): Extends_statementContext | undefined {
		return this.tryGetRuleContext(0, Extends_statementContext);
	}
	public toggle_statement(): Toggle_statementContext | undefined {
		return this.tryGetRuleContext(0, Toggle_statementContext);
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


export class Set_statementsContext extends ParserRuleContext {
	public set_statement(): Set_statementContext[];
	public set_statement(i: number): Set_statementContext;
	public set_statement(i?: number): Set_statementContext | Set_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Set_statementContext);
		} else {
			return this.getRuleContext(i, Set_statementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_set_statements; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterSet_statements) {
			listener.enterSet_statements(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitSet_statements) {
			listener.exitSet_statements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitSet_statements) {
			return visitor.visitSet_statements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_named_layerContext extends ParserRuleContext {
	public CREATE_KEYWORD(): TerminalNode { return this.getToken(KLLParser.CREATE_KEYWORD, 0); }
	public LAYER_KEYWORD(): TerminalNode { return this.getToken(KLLParser.LAYER_KEYWORD, 0); }
	public NAMED_KEYWORD(): TerminalNode { return this.getToken(KLLParser.NAMED_KEYWORD, 0); }
	public ID_NAME(): TerminalNode { return this.getToken(KLLParser.ID_NAME, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_create_named_layer; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterCreate_named_layer) {
			listener.enterCreate_named_layer(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitCreate_named_layer) {
			listener.exitCreate_named_layer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitCreate_named_layer) {
			return visitor.visitCreate_named_layer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_named_setContext extends ParserRuleContext {
	public CREATE_KEYWORD(): TerminalNode { return this.getToken(KLLParser.CREATE_KEYWORD, 0); }
	public SET_KEYWORD(): TerminalNode { return this.getToken(KLLParser.SET_KEYWORD, 0); }
	public NAMED_KEYWORD(): TerminalNode { return this.getToken(KLLParser.NAMED_KEYWORD, 0); }
	public ID_NAME(): TerminalNode { return this.getToken(KLLParser.ID_NAME, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_create_named_set; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterCreate_named_set) {
			listener.enterCreate_named_set(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitCreate_named_set) {
			listener.exitCreate_named_set(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitCreate_named_set) {
			return visitor.visitCreate_named_set(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Layer_blockContext extends ParserRuleContext {
	public create_named_layer(): Create_named_layerContext {
		return this.getRuleContext(0, Create_named_layerContext);
	}
	public layer_statements(): Layer_statementsContext {
		return this.getRuleContext(0, Layer_statementsContext);
	}
	public DONE_KEYWORD(): TerminalNode { return this.getToken(KLLParser.DONE_KEYWORD, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
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


export class Set_blockContext extends ParserRuleContext {
	public create_named_set(): Create_named_setContext {
		return this.getRuleContext(0, Create_named_setContext);
	}
	public set_statements(): Set_statementsContext {
		return this.getRuleContext(0, Set_statementsContext);
	}
	public DONE_KEYWORD(): TerminalNode { return this.getToken(KLLParser.DONE_KEYWORD, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.EOL);
		} else {
			return this.getToken(KLLParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KLLParser.RULE_set_block; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterSet_block) {
			listener.enterSet_block(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitSet_block) {
			listener.exitSet_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitSet_block) {
			return visitor.visitSet_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


