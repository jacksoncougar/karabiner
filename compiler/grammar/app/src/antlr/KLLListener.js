// Generated from KLL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4');

// This class defines a complete listener for a parse tree produced by KLLParser.
function KLLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

KLLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
KLLListener.prototype.constructor = KLLListener;

// Enter a parse tree produced by KLLParser#config.
KLLListener.prototype.enterConfig = function(ctx) {
};

// Exit a parse tree produced by KLLParser#config.
KLLListener.prototype.exitConfig = function(ctx) {
};


// Enter a parse tree produced by KLLParser#global_statement.
KLLListener.prototype.enterGlobal_statement = function(ctx) {
};

// Exit a parse tree produced by KLLParser#global_statement.
KLLListener.prototype.exitGlobal_statement = function(ctx) {
};


// Enter a parse tree produced by KLLParser#is_statement.
KLLListener.prototype.enterIs_statement = function(ctx) {
};

// Exit a parse tree produced by KLLParser#is_statement.
KLLListener.prototype.exitIs_statement = function(ctx) {
};


// Enter a parse tree produced by KLLParser#extends_statement.
KLLListener.prototype.enterExtends_statement = function(ctx) {
};

// Exit a parse tree produced by KLLParser#extends_statement.
KLLListener.prototype.exitExtends_statement = function(ctx) {
};


// Enter a parse tree produced by KLLParser#has_statement.
KLLListener.prototype.enterHas_statement = function(ctx) {
};

// Exit a parse tree produced by KLLParser#has_statement.
KLLListener.prototype.exitHas_statement = function(ctx) {
};


// Enter a parse tree produced by KLLParser#toggle_statement.
KLLListener.prototype.enterToggle_statement = function(ctx) {
};

// Exit a parse tree produced by KLLParser#toggle_statement.
KLLListener.prototype.exitToggle_statement = function(ctx) {
};


// Enter a parse tree produced by KLLParser#set_statement.
KLLListener.prototype.enterSet_statement = function(ctx) {
};

// Exit a parse tree produced by KLLParser#set_statement.
KLLListener.prototype.exitSet_statement = function(ctx) {
};


// Enter a parse tree produced by KLLParser#layer_statement.
KLLListener.prototype.enterLayer_statement = function(ctx) {
};

// Exit a parse tree produced by KLLParser#layer_statement.
KLLListener.prototype.exitLayer_statement = function(ctx) {
};


// Enter a parse tree produced by KLLParser#layer_statements.
KLLListener.prototype.enterLayer_statements = function(ctx) {
};

// Exit a parse tree produced by KLLParser#layer_statements.
KLLListener.prototype.exitLayer_statements = function(ctx) {
};


// Enter a parse tree produced by KLLParser#set_statements.
KLLListener.prototype.enterSet_statements = function(ctx) {
};

// Exit a parse tree produced by KLLParser#set_statements.
KLLListener.prototype.exitSet_statements = function(ctx) {
};


// Enter a parse tree produced by KLLParser#create_named_layer.
KLLListener.prototype.enterCreate_named_layer = function(ctx) {
};

// Exit a parse tree produced by KLLParser#create_named_layer.
KLLListener.prototype.exitCreate_named_layer = function(ctx) {
};


// Enter a parse tree produced by KLLParser#create_named_set.
KLLListener.prototype.enterCreate_named_set = function(ctx) {
};

// Exit a parse tree produced by KLLParser#create_named_set.
KLLListener.prototype.exitCreate_named_set = function(ctx) {
};


// Enter a parse tree produced by KLLParser#layer_block.
KLLListener.prototype.enterLayer_block = function(ctx) {
};

// Exit a parse tree produced by KLLParser#layer_block.
KLLListener.prototype.exitLayer_block = function(ctx) {
};


// Enter a parse tree produced by KLLParser#set_block.
KLLListener.prototype.enterSet_block = function(ctx) {
};

// Exit a parse tree produced by KLLParser#set_block.
KLLListener.prototype.exitSet_block = function(ctx) {
};



exports.KLLListener = KLLListener;