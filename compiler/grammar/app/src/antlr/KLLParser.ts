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
	public static readonly IS_KEYWORD = 1;
	public static readonly EXTENDS_KEYWORD = 2;
	public static readonly TOGGLE_KEYWORD = 3;
	public static readonly LAYER_KEYWORD = 4;
	public static readonly WHEN_KEYWORD = 5;
	public static readonly WITH_KEYWORD = 6;
	public static readonly AND_KEYWORD = 7;
	public static readonly SWAP_KEYWORD = 8;
	public static readonly BUNDLE_KEYWORD = 9;
	public static readonly DONE_KEYWORD = 10;
	public static readonly NOTHING_KEYWORD = 11;
	public static readonly KEY_NAME = 12;
	public static readonly ID_NAME = 13;
	public static readonly EOL = 14;
	public static readonly WS = 15;
	public static readonly RULE_config = 0;
	public static readonly RULE_global_statement = 1;
	public static readonly RULE_empty = 2;
	public static readonly RULE_is_statement = 3;
	public static readonly RULE_extends_statement = 4;
	public static readonly RULE_toggle_statement = 5;
	public static readonly RULE_set_statement = 6;
	public static readonly RULE_layer_statement = 7;
	public static readonly RULE_layer_statements = 8;
	public static readonly RULE_swap_statement = 9;
	public static readonly RULE_layer_header = 10;
	public static readonly RULE_layer_block = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"config", "global_statement", "empty", "is_statement", "extends_statement", 
		"toggle_statement", "set_statement", "layer_statement", "layer_statements", 
		"swap_statement", "layer_header", "layer_block",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'is'", "'extends'", "'toggle'", "'layer'", "'when'", "'with'", 
		"'and'", "'swap'", "'bundle'", "'done'", "'nothing'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "IS_KEYWORD", "EXTENDS_KEYWORD", "TOGGLE_KEYWORD", "LAYER_KEYWORD", 
		"WHEN_KEYWORD", "WITH_KEYWORD", "AND_KEYWORD", "SWAP_KEYWORD", "BUNDLE_KEYWORD", 
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
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 24;
				this.global_statement();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KLLParser.TOGGLE_KEYWORD) | (1 << KLLParser.SWAP_KEYWORD) | (1 << KLLParser.KEY_NAME) | (1 << KLLParser.ID_NAME) | (1 << KLLParser.EOL) | (1 << KLLParser.WS))) !== 0));
			this.state = 29;
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
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KLLParser.EOL:
			case KLLParser.WS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 31;
				this.empty();
				}
				break;
			case KLLParser.SWAP_KEYWORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 32;
				this.swap_statement();
				}
				break;
			case KLLParser.KEY_NAME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 33;
				this.is_statement();
				}
				break;
			case KLLParser.TOGGLE_KEYWORD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 34;
				this.toggle_statement();
				}
				break;
			case KLLParser.ID_NAME:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 35;
				this.layer_block();
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
	public empty(): EmptyContext {
		let _localctx: EmptyContext = new EmptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KLLParser.RULE_empty);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 41;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KLLParser.WS) {
						{
						{
						this.state = 38;
						this.match(KLLParser.WS);
						}
						}
						this.state = 43;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 44;
					this.match(KLLParser.EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 47;
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
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 49;
				this.match(KLLParser.KEY_NAME);
				this.state = 50;
				this.match(KLLParser.IS_KEYWORD);
				this.state = 51;
				this.match(KLLParser.KEY_NAME);
				this.state = 52;
				this.match(KLLParser.EOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 53;
				this.match(KLLParser.KEY_NAME);
				this.state = 54;
				this.match(KLLParser.IS_KEYWORD);
				this.state = 55;
				this.match(KLLParser.NOTHING_KEYWORD);
				this.state = 56;
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
	public extends_statement(): Extends_statementContext {
		let _localctx: Extends_statementContext = new Extends_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, KLLParser.RULE_extends_statement);
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.match(KLLParser.EXTENDS_KEYWORD);
				this.state = 60;
				this.match(KLLParser.ID_NAME);
				this.state = 61;
				this.match(KLLParser.EOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 62;
				this.match(KLLParser.EXTENDS_KEYWORD);
				this.state = 63;
				this.match(KLLParser.NOTHING_KEYWORD);
				this.state = 64;
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
	public toggle_statement(): Toggle_statementContext {
		let _localctx: Toggle_statementContext = new Toggle_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, KLLParser.RULE_toggle_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(KLLParser.TOGGLE_KEYWORD);
			this.state = 68;
			this.match(KLLParser.ID_NAME);
			this.state = 69;
			this.match(KLLParser.WITH_KEYWORD);
			this.state = 70;
			this.match(KLLParser.KEY_NAME);
			this.state = 71;
			this.match(KLLParser.EOL);
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
			this.state = 73;
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
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KLLParser.EOL:
			case KLLParser.WS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.empty();
				}
				break;
			case KLLParser.SWAP_KEYWORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.swap_statement();
				}
				break;
			case KLLParser.TOGGLE_KEYWORD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 77;
				this.toggle_statement();
				}
				break;
			case KLLParser.KEY_NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 78;
				this.is_statement();
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
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 81;
				this.layer_statement();
				}
				}
				this.state = 84;
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
	public swap_statement(): Swap_statementContext {
		let _localctx: Swap_statementContext = new Swap_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KLLParser.RULE_swap_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(KLLParser.SWAP_KEYWORD);
			this.state = 87;
			this.match(KLLParser.KEY_NAME);
			this.state = 88;
			this.match(KLLParser.AND_KEYWORD);
			this.state = 89;
			this.match(KLLParser.KEY_NAME);
			this.state = 90;
			this.match(KLLParser.EOL);
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
		this.enterRule(_localctx, 20, KLLParser.RULE_layer_header);
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 92;
				this.match(KLLParser.ID_NAME);
				this.state = 93;
				this.match(KLLParser.LAYER_KEYWORD);
				this.state = 94;
				this.match(KLLParser.EOL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.match(KLLParser.ID_NAME);
				this.state = 96;
				this.match(KLLParser.LAYER_KEYWORD);
				this.state = 97;
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
		this.enterRule(_localctx, 22, KLLParser.RULE_layer_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.layer_header();
			this.state = 101;
			this.layer_statements();
			this.state = 102;
			this.match(KLLParser.DONE_KEYWORD);
			this.state = 103;
			this.match(KLLParser.EOL);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11l\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x06\x02\x1C\n\x02\r\x02\x0E\x02\x1D\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\'\n\x03\x03\x04\x07\x04*\n\x04\f\x04" +
		"\x0E\x04-\v\x04\x03\x04\x06\x040\n\x04\r\x04\x0E\x041\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05<\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06D\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05" +
		"\tR\n\t\x03\n\x06\nU\n\n\r\n\x0E\nV\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fe\n\f\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x02\x02m\x02\x1B" +
		"\x03\x02\x02\x02\x04&\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b;\x03\x02" +
		"\x02\x02\nC\x03\x02\x02\x02\fE\x03\x02\x02\x02\x0EK\x03\x02\x02\x02\x10" +
		"Q\x03\x02\x02\x02\x12T\x03\x02\x02\x02\x14X\x03\x02\x02\x02\x16d\x03\x02" +
		"\x02\x02\x18f\x03\x02\x02\x02\x1A\x1C\x05\x04\x03\x02\x1B\x1A\x03\x02" +
		"\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02" +
		"\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F \x07\x02\x02\x03 \x03\x03\x02\x02" +
		"\x02!\'\x05\x06\x04\x02\"\'\x05\x14\v\x02#\'\x05\b\x05\x02$\'\x05\f\x07" +
		"\x02%\'\x05\x18\r\x02&!\x03\x02\x02\x02&\"\x03\x02\x02\x02&#\x03\x02\x02" +
		"\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02\'\x05\x03\x02\x02\x02(*\x07\x11" +
		"\x02\x02)(\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02" +
		"\x02\x02,.\x03\x02\x02\x02-+\x03\x02\x02\x02.0\x07\x10\x02\x02/+\x03\x02" +
		"\x02\x0201\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x07\x03" +
		"\x02\x02\x0234\x07\x0E\x02\x0245\x07\x03\x02\x0256\x07\x0E\x02\x026<\x07" +
		"\x10\x02\x0278\x07\x0E\x02\x0289\x07\x03\x02\x029:\x07\r\x02\x02:<\x07" +
		"\x10\x02\x02;3\x03\x02\x02\x02;7\x03\x02\x02\x02<\t\x03\x02\x02\x02=>" +
		"\x07\x04\x02\x02>?\x07\x0F\x02\x02?D\x07\x10\x02\x02@A\x07\x04\x02\x02" +
		"AB\x07\r\x02\x02BD\x07\x10\x02\x02C=\x03\x02\x02\x02C@\x03\x02\x02\x02" +
		"D\v\x03\x02\x02\x02EF\x07\x05\x02\x02FG\x07\x0F\x02\x02GH\x07\b\x02\x02" +
		"HI\x07\x0E\x02\x02IJ\x07\x10\x02\x02J\r\x03\x02\x02\x02KL\x05\b\x05\x02" +
		"L\x0F\x03\x02\x02\x02MR\x05\x06\x04\x02NR\x05\x14\v\x02OR\x05\f\x07\x02" +
		"PR\x05\b\x05\x02QM\x03\x02\x02\x02QN\x03\x02\x02\x02QO\x03\x02\x02\x02" +
		"QP\x03\x02\x02\x02R\x11\x03\x02\x02\x02SU\x05\x10\t\x02TS\x03\x02\x02" +
		"\x02UV\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W\x13\x03\x02" +
		"\x02\x02XY\x07\n\x02\x02YZ\x07\x0E\x02\x02Z[\x07\t\x02\x02[\\\x07\x0E" +
		"\x02\x02\\]\x07\x10\x02\x02]\x15\x03\x02\x02\x02^_\x07\x0F\x02\x02_`\x07" +
		"\x06\x02\x02`e\x07\x10\x02\x02ab\x07\x0F\x02\x02bc\x07\x06\x02\x02ce\x05" +
		"\n\x06\x02d^\x03\x02\x02\x02da\x03\x02\x02\x02e\x17\x03\x02\x02\x02fg" +
		"\x05\x16\f\x02gh\x05\x12\n\x02hi\x07\f\x02\x02ij\x07\x10\x02\x02j\x19" +
		"\x03\x02\x02\x02\v\x1D&+1;CQVd";
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
	public EOL(): TerminalNode { return this.getToken(KLLParser.EOL, 0); }
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
	public EOL(): TerminalNode { return this.getToken(KLLParser.EOL, 0); }
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
	public EOL(): TerminalNode { return this.getToken(KLLParser.EOL, 0); }
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
	public EOL(): TerminalNode { return this.getToken(KLLParser.EOL, 0); }
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
	public EOL(): TerminalNode { return this.getToken(KLLParser.EOL, 0); }
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


