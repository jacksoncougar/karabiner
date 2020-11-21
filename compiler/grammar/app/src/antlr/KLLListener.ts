// Generated from src/antlr/KLL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ConfigContext } from "./KLLParser";
import { Global_statementContext } from "./KLLParser";
import { EmptyContext } from "./KLLParser";
import { Is_statementContext } from "./KLLParser";
import { Extends_statementContext } from "./KLLParser";
import { Toggle_statementContext } from "./KLLParser";
import { Set_statementContext } from "./KLLParser";
import { Layer_statementContext } from "./KLLParser";
import { Layer_statementsContext } from "./KLLParser";
import { When_statementContext } from "./KLLParser";
import { Swap_statementContext } from "./KLLParser";
import { Layer_headerContext } from "./KLLParser";
import { Layer_blockContext } from "./KLLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `KLLParser`.
 */
export interface KLLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `KLLParser.config`.
	 * @param ctx the parse tree
	 */
	enterConfig?: (ctx: ConfigContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.config`.
	 * @param ctx the parse tree
	 */
	exitConfig?: (ctx: ConfigContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.global_statement`.
	 * @param ctx the parse tree
	 */
	enterGlobal_statement?: (ctx: Global_statementContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.global_statement`.
	 * @param ctx the parse tree
	 */
	exitGlobal_statement?: (ctx: Global_statementContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.empty`.
	 * @param ctx the parse tree
	 */
	enterEmpty?: (ctx: EmptyContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.empty`.
	 * @param ctx the parse tree
	 */
	exitEmpty?: (ctx: EmptyContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.is_statement`.
	 * @param ctx the parse tree
	 */
	enterIs_statement?: (ctx: Is_statementContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.is_statement`.
	 * @param ctx the parse tree
	 */
	exitIs_statement?: (ctx: Is_statementContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.extends_statement`.
	 * @param ctx the parse tree
	 */
	enterExtends_statement?: (ctx: Extends_statementContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.extends_statement`.
	 * @param ctx the parse tree
	 */
	exitExtends_statement?: (ctx: Extends_statementContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.toggle_statement`.
	 * @param ctx the parse tree
	 */
	enterToggle_statement?: (ctx: Toggle_statementContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.toggle_statement`.
	 * @param ctx the parse tree
	 */
	exitToggle_statement?: (ctx: Toggle_statementContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.set_statement`.
	 * @param ctx the parse tree
	 */
	enterSet_statement?: (ctx: Set_statementContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.set_statement`.
	 * @param ctx the parse tree
	 */
	exitSet_statement?: (ctx: Set_statementContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.layer_statement`.
	 * @param ctx the parse tree
	 */
	enterLayer_statement?: (ctx: Layer_statementContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.layer_statement`.
	 * @param ctx the parse tree
	 */
	exitLayer_statement?: (ctx: Layer_statementContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.layer_statements`.
	 * @param ctx the parse tree
	 */
	enterLayer_statements?: (ctx: Layer_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.layer_statements`.
	 * @param ctx the parse tree
	 */
	exitLayer_statements?: (ctx: Layer_statementsContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.when_statement`.
	 * @param ctx the parse tree
	 */
	enterWhen_statement?: (ctx: When_statementContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.when_statement`.
	 * @param ctx the parse tree
	 */
	exitWhen_statement?: (ctx: When_statementContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.swap_statement`.
	 * @param ctx the parse tree
	 */
	enterSwap_statement?: (ctx: Swap_statementContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.swap_statement`.
	 * @param ctx the parse tree
	 */
	exitSwap_statement?: (ctx: Swap_statementContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.layer_header`.
	 * @param ctx the parse tree
	 */
	enterLayer_header?: (ctx: Layer_headerContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.layer_header`.
	 * @param ctx the parse tree
	 */
	exitLayer_header?: (ctx: Layer_headerContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.layer_block`.
	 * @param ctx the parse tree
	 */
	enterLayer_block?: (ctx: Layer_blockContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.layer_block`.
	 * @param ctx the parse tree
	 */
	exitLayer_block?: (ctx: Layer_blockContext) => void;
}

