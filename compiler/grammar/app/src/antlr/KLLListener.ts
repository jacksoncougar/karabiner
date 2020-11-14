// Generated from src/antlr/KLL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `KLLParser.has_statement`.
	 * @param ctx the parse tree
	 */
	enterHas_statement?: (ctx: Has_statementContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.has_statement`.
	 * @param ctx the parse tree
	 */
	exitHas_statement?: (ctx: Has_statementContext) => void;

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
	 * Enter a parse tree produced by `KLLParser.set_statements`.
	 * @param ctx the parse tree
	 */
	enterSet_statements?: (ctx: Set_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.set_statements`.
	 * @param ctx the parse tree
	 */
	exitSet_statements?: (ctx: Set_statementsContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.create_named_layer`.
	 * @param ctx the parse tree
	 */
	enterCreate_named_layer?: (ctx: Create_named_layerContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.create_named_layer`.
	 * @param ctx the parse tree
	 */
	exitCreate_named_layer?: (ctx: Create_named_layerContext) => void;

	/**
	 * Enter a parse tree produced by `KLLParser.create_named_set`.
	 * @param ctx the parse tree
	 */
	enterCreate_named_set?: (ctx: Create_named_setContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.create_named_set`.
	 * @param ctx the parse tree
	 */
	exitCreate_named_set?: (ctx: Create_named_setContext) => void;

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

	/**
	 * Enter a parse tree produced by `KLLParser.set_block`.
	 * @param ctx the parse tree
	 */
	enterSet_block?: (ctx: Set_blockContext) => void;
	/**
	 * Exit a parse tree produced by `KLLParser.set_block`.
	 * @param ctx the parse tree
	 */
	exitSet_block?: (ctx: Set_blockContext) => void;
}

