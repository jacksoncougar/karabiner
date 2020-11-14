// Generated from src/antlr/KLL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ConfigContext } from "./KLLParser";
import { Global_statementContext } from "./KLLParser";
import { Is_statementContext } from "./KLLParser";
import { Extends_statementContext } from "./KLLParser";
import { Has_statementContext } from "./KLLParser";
import { Toggle_statementContext } from "./KLLParser";
import { Set_statementContext } from "./KLLParser";
import { Layer_statementContext } from "./KLLParser";
import { Layer_statementsContext } from "./KLLParser";
import { Set_statementsContext } from "./KLLParser";
import { Create_named_layerContext } from "./KLLParser";
import { Create_named_setContext } from "./KLLParser";
import { Layer_blockContext } from "./KLLParser";
import { Set_blockContext } from "./KLLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `KLLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface KLLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `KLLParser.config`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConfig?: (ctx: ConfigContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.global_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_statement?: (ctx: Global_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.is_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIs_statement?: (ctx: Is_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.extends_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtends_statement?: (ctx: Extends_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.has_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHas_statement?: (ctx: Has_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.toggle_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToggle_statement?: (ctx: Toggle_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.set_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_statement?: (ctx: Set_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.layer_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayer_statement?: (ctx: Layer_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.layer_statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayer_statements?: (ctx: Layer_statementsContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.set_statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_statements?: (ctx: Set_statementsContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.create_named_layer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_named_layer?: (ctx: Create_named_layerContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.create_named_set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_named_set?: (ctx: Create_named_setContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.layer_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayer_block?: (ctx: Layer_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `KLLParser.set_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_block?: (ctx: Set_blockContext) => Result;
}

