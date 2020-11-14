// Generated from KLL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4');

// This class defines a complete generic visitor for a parse tree produced by KLLParser.

function KLLVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

let context = [];

KLLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
KLLVisitor.prototype.constructor = KLLVisitor;

// Visit a parse tree produced by KLLParser#config.
KLLVisitor.prototype.visitConfig = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#global_statement.
KLLVisitor.prototype.visitGlobal_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#is_statement.
KLLVisitor.prototype.visitIs_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#extends_statement.
KLLVisitor.prototype.visitExtends_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#has_statement.
KLLVisitor.prototype.visitHas_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#toggle_statement.
KLLVisitor.prototype.visitToggle_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#set_statement.
KLLVisitor.prototype.visitSet_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#layer_statement.
KLLVisitor.prototype.visitLayer_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#layer_statements.
KLLVisitor.prototype.visitLayer_statements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#set_statements.
KLLVisitor.prototype.visitSet_statements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#create_named_layer.
KLLVisitor.prototype.visitCreate_named_layer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#create_named_set.
KLLVisitor.prototype.visitCreate_named_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#layer_block.
KLLVisitor.prototype.visitLayer_block = function(ctx) {
  // console.log(ctx);
  // const isExtending = ctx.children[1].children.find(node => node.ruleIndex === KLLParser.);
  console.log(ctx);
  const name = ctx.children[0].children[3].symbol.text;
  context.push({
    layer: {
      name,
      sets: [],
    },
  });
  console.log(context);
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KLLParser#set_block.
KLLVisitor.prototype.visitSet_block = function(ctx) {
  return this.visitChildren(ctx);
};



exports.KLLVisitor = KLLVisitor;