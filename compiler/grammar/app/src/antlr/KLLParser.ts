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
	public static readonly RULE_blank = 2;
	public static readonly RULE_is_statement = 3;
	public static readonly RULE_extends_statement = 4;
	public static readonly RULE_has_statement = 5;
	public static readonly RULE_toggle_statement = 6;
	public static readonly RULE_set_statement = 7;
	public static readonly RULE_layer_statement = 8;
	public static readonly RULE_layer_statements = 9;
	public static readonly RULE_set_statements = 10;
	public static readonly RULE_create_named_layer = 11;
	public static readonly RULE_create_named_set = 12;
	public static readonly RULE_layer_block = 13;
	public static readonly RULE_set_block = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"config", "global_statement", "blank", "is_statement", "extends_statement", 
		"has_statement", "toggle_statement", "set_statement", "layer_statement", 
		"layer_statements", "set_statements", "create_named_layer", "create_named_set", 
		"layer_block", "set_block",
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
			do {
				{
				{
				this.state = 30;
				this.global_statement();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KLLParser.CREATE_KEYWORD) | (1 << KLLParser.KEY_NAME) | (1 << KLLParser.EOL) | (1 << KLLParser.WS))) !== 0));
			this.state = 35;
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
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 37;
				this.blank();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 38;
				this.is_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 39;
				this.toggle_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 40;
				this.layer_block();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 41;
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
	public blank(): BlankContext {
		let _localctx: BlankContext = new BlankContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KLLParser.RULE_blank);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KLLParser.WS) {
				{
				{
				this.state = 44;
				this.match(KLLParser.WS);
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 51;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 50;
					this.match(KLLParser.EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 53;
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
			let _alt: number;
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				this.match(KLLParser.KEY_NAME);
				this.state = 56;
				this.match(KLLParser.IS_KEYWORD);
				this.state = 57;
				this.match(KLLParser.KEY_NAME);
				this.state = 59;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 58;
						this.match(KLLParser.EOL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 61;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
				this.state = 67;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 66;
						this.match(KLLParser.EOL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 69;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		let _la: number;
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.match(KLLParser.EXTENDS_KEYWORD);
				this.state = 74;
				this.match(KLLParser.ID_NAME);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 75;
					this.match(KLLParser.EOL);
					}
					}
					this.state = 78;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KLLParser.EOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 80;
				this.match(KLLParser.EXTENDS_KEYWORD);
				this.state = 81;
				this.match(KLLParser.NOTHING_KEYWORD);
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 82;
					this.match(KLLParser.EOL);
					}
					}
					this.state = 85;
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
		this.enterRule(_localctx, 10, KLLParser.RULE_has_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(KLLParser.HAS_KEYWORD);
			this.state = 90;
			this.match(KLLParser.ID_NAME);
			this.state = 91;
			this.match(KLLParser.SET_KEYWORD);
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
	public toggle_statement(): Toggle_statementContext {
		let _localctx: Toggle_statementContext = new Toggle_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, KLLParser.RULE_toggle_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(KLLParser.KEY_NAME);
			this.state = 98;
			this.match(KLLParser.TOGGLES_KEYWORD);
			this.state = 99;
			this.match(KLLParser.ID_NAME);
			this.state = 101;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 100;
					this.match(KLLParser.EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 103;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
	public set_statement(): Set_statementContext {
		let _localctx: Set_statementContext = new Set_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, KLLParser.RULE_set_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
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
		this.enterRule(_localctx, 16, KLLParser.RULE_layer_statement);
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KLLParser.HAS_KEYWORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.has_statement();
				}
				break;
			case KLLParser.EXTENDS_KEYWORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.extends_statement();
				}
				break;
			case KLLParser.KEY_NAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 109;
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
		this.enterRule(_localctx, 18, KLLParser.RULE_layer_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 112;
				this.layer_statement();
				}
				}
				this.state = 115;
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
		this.enterRule(_localctx, 20, KLLParser.RULE_set_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 117;
				this.set_statement();
				}
				}
				this.state = 120;
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
		this.enterRule(_localctx, 22, KLLParser.RULE_create_named_layer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(KLLParser.CREATE_KEYWORD);
			this.state = 123;
			this.match(KLLParser.LAYER_KEYWORD);
			this.state = 124;
			this.match(KLLParser.NAMED_KEYWORD);
			this.state = 125;
			this.match(KLLParser.ID_NAME);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 126;
				this.match(KLLParser.EOL);
				}
				}
				this.state = 129;
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
		this.enterRule(_localctx, 24, KLLParser.RULE_create_named_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(KLLParser.CREATE_KEYWORD);
			this.state = 132;
			this.match(KLLParser.SET_KEYWORD);
			this.state = 133;
			this.match(KLLParser.NAMED_KEYWORD);
			this.state = 134;
			this.match(KLLParser.ID_NAME);
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
	public layer_block(): Layer_blockContext {
		let _localctx: Layer_blockContext = new Layer_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, KLLParser.RULE_layer_block);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.create_named_layer();
			this.state = 141;
			this.layer_statements();
			this.state = 142;
			this.match(KLLParser.DONE_KEYWORD);
			this.state = 144;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 143;
					this.match(KLLParser.EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 146;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
	public set_block(): Set_blockContext {
		let _localctx: Set_blockContext = new Set_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, KLLParser.RULE_set_block);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.create_named_set();
			this.state = 149;
			this.set_statements();
			this.state = 150;
			this.match(KLLParser.DONE_KEYWORD);
			this.state = 152;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 151;
					this.match(KLLParser.EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 154;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10\x9F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x06\x02\"\n\x02\r\x02\x0E" +
		"\x02#\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"-\n\x03\x03\x04\x07\x040\n\x04\f\x04\x0E\x043\v\x04\x03\x04\x06\x046\n" +
		"\x04\r\x04\x0E\x047\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05>\n\x05\r\x05" +
		"\x0E\x05?\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05F\n\x05\r\x05\x0E\x05" +
		"G\x05\x05J\n\x05\x03\x06\x03\x06\x03\x06\x06\x06O\n\x06\r\x06\x0E\x06" +
		"P\x03\x06\x03\x06\x03\x06\x06\x06V\n\x06\r\x06\x0E\x06W\x05\x06Z\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07`\n\x07\r\x07\x0E\x07a\x03\b\x03" +
		"\b\x03\b\x03\b\x06\bh\n\b\r\b\x0E\bi\x03\t\x03\t\x03\n\x03\n\x03\n\x05" +
		"\nq\n\n\x03\v\x06\vt\n\v\r\v\x0E\vu\x03\f\x06\fy\n\f\r\f\x0E\fz\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x06\r\x82\n\r\r\r\x0E\r\x83\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x06\x0E\x8B\n\x0E\r\x0E\x0E\x0E\x8C\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x06\x0F\x93\n\x0F\r\x0F\x0E\x0F\x94\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x06\x10\x9B\n\x10\r\x10\x0E\x10\x9C\x03\x10\x02\x02\x02\x11" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02\x02\x02\x02\xA6\x02!\x03" +
		"\x02\x02\x02\x04,\x03\x02\x02\x02\x061\x03\x02\x02\x02\bI\x03\x02\x02" +
		"\x02\nY\x03\x02\x02\x02\f[\x03\x02\x02\x02\x0Ec\x03\x02\x02\x02\x10k\x03" +
		"\x02\x02\x02\x12p\x03\x02\x02\x02\x14s\x03\x02\x02\x02\x16x\x03\x02\x02" +
		"\x02\x18|\x03\x02\x02\x02\x1A\x85\x03\x02\x02\x02\x1C\x8E\x03\x02\x02" +
		"\x02\x1E\x96\x03\x02\x02\x02 \"\x05\x04\x03\x02! \x03\x02\x02\x02\"#\x03" +
		"\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%&\x07" +
		"\x02\x02\x03&\x03\x03\x02\x02\x02\'-\x05\x06\x04\x02(-\x05\b\x05\x02)" +
		"-\x05\x0E\b\x02*-\x05\x1C\x0F\x02+-\x05\x1E\x10\x02,\'\x03\x02\x02\x02" +
		",(\x03\x02\x02\x02,)\x03\x02\x02\x02,*\x03\x02\x02\x02,+\x03\x02\x02\x02" +
		"-\x05\x03\x02\x02\x02.0\x07\x10\x02\x02/.\x03\x02\x02\x0203\x03\x02\x02" +
		"\x021/\x03\x02\x02\x0212\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02" +
		"\x0246\x07\x0F\x02\x0254\x03\x02\x02\x0267\x03\x02\x02\x0275\x03\x02\x02" +
		"\x0278\x03\x02\x02\x028\x07\x03\x02\x02\x029:\x07\r\x02\x02:;\x07\x03" +
		"\x02\x02;=\x07\r\x02\x02<>\x07\x0F\x02\x02=<\x03\x02\x02\x02>?\x03\x02" +
		"\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@J\x03\x02\x02\x02AB\x07\r" +
		"\x02\x02BC\x07\x03\x02\x02CE\x07\f\x02\x02DF\x07\x0F\x02\x02ED\x03\x02" +
		"\x02\x02FG\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x03\x02" +
		"\x02\x02I9\x03\x02\x02\x02IA\x03\x02\x02\x02J\t\x03\x02\x02\x02KL\x07" +
		"\x04\x02\x02LN\x07\x0E\x02\x02MO\x07\x0F\x02\x02NM\x03\x02\x02\x02OP\x03" +
		"\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QZ\x03\x02\x02\x02RS\x07" +
		"\x04\x02\x02SU\x07\f\x02\x02TV\x07\x0F\x02\x02UT\x03\x02\x02\x02VW\x03" +
		"\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02XZ\x03\x02\x02\x02YK\x03" +
		"\x02\x02\x02YR\x03\x02\x02\x02Z\v\x03\x02\x02\x02[\\\x07\x05\x02\x02\\" +
		"]\x07\x0E\x02\x02]_\x07\x06\x02\x02^`\x07\x0F\x02\x02_^\x03\x02\x02\x02" +
		"`a\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\r\x03\x02\x02" +
		"\x02cd\x07\r\x02\x02de\x07\x07\x02\x02eg\x07\x0E\x02\x02fh\x07\x0F\x02" +
		"\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02" +
		"\x02j\x0F\x03\x02\x02\x02kl\x05\b\x05\x02l\x11\x03\x02\x02\x02mq\x05\f" +
		"\x07\x02nq\x05\n\x06\x02oq\x05\x0E\b\x02pm\x03\x02\x02\x02pn\x03\x02\x02" +
		"\x02po\x03\x02\x02\x02q\x13\x03\x02\x02\x02rt\x05\x12\n\x02sr\x03\x02" +
		"\x02\x02tu\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02v\x15\x03" +
		"\x02\x02\x02wy\x05\x10\t\x02xw\x03\x02\x02\x02yz\x03\x02\x02\x02zx\x03" +
		"\x02\x02\x02z{\x03\x02\x02\x02{\x17\x03\x02\x02\x02|}\x07\b\x02\x02}~" +
		"\x07\t\x02\x02~\x7F\x07\n\x02\x02\x7F\x81\x07\x0E\x02\x02\x80\x82\x07" +
		"\x0F\x02\x02\x81\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x81\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x19\x03\x02\x02\x02\x85\x86\x07" +
		"\b\x02\x02\x86\x87\x07\x06\x02\x02\x87\x88\x07\n\x02\x02\x88\x8A\x07\x0E" +
		"\x02\x02\x89\x8B\x07\x0F\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x8C\x03\x02" +
		"\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x1B\x03\x02" +
		"\x02\x02\x8E\x8F\x05\x18\r\x02\x8F\x90\x05\x14\v\x02\x90\x92\x07\v\x02" +
		"\x02\x91\x93\x07\x0F\x02\x02\x92\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02" +
		"\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x1D\x03\x02\x02" +
		"\x02\x96\x97\x05\x1A\x0E\x02\x97\x98\x05\x16\f\x02\x98\x9A\x07\v\x02\x02" +
		"\x99\x9B\x07\x0F\x02\x02\x9A\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02" +
		"\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x1F\x03\x02\x02\x02" +
		"\x15#,17?GIPWYaipuz\x83\x8C\x94\x9C";
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
	public blank(): BlankContext | undefined {
		return this.tryGetRuleContext(0, BlankContext);
	}
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


export class BlankContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KLLParser.WS);
		} else {
			return this.getToken(KLLParser.WS, i);
		}
	}
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
	public get ruleIndex(): number { return KLLParser.RULE_blank; }
	// @Override
	public enterRule(listener: KLLListener): void {
		if (listener.enterBlank) {
			listener.enterBlank(this);
		}
	}
	// @Override
	public exitRule(listener: KLLListener): void {
		if (listener.exitBlank) {
			listener.exitBlank(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KLLVisitor<Result>): Result {
		if (visitor.visitBlank) {
			return visitor.visitBlank(this);
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


