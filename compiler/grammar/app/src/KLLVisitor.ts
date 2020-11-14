// @ts-nocheck
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ConfigContext, Global_statementContext, Is_statementContext, Extends_statementContext, Has_statementContext, Toggle_statementContext, Set_statementContext, Layer_statementContext, Layer_statementsContext, Set_statementsContext, Create_named_layerContext, Create_named_setContext, Layer_blockContext, Set_blockContext } from './antlr/KLLParser';
import {KLLVisitor} from './antlr/KLLVisitor'

export class myKLLVisitor extends AbstractParseTreeVisitor<string> implements KLLVisitor<string> {
  protected defaultResult(): string {
    return 'no'; //throw new Error('Method not implemented.');
  }
  visitConfig: (ctx: ConfigContext) => "hi";
}