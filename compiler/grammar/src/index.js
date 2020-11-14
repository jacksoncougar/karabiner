import antlr4 from 'antlr4';
import MyGrammarLexer from './KLLLexer.js';
import MyGrammarParser from './KLLParser.js';
import MyGrammarListener from './KLLListener.js';


const input = "field = 123 AND items in (1,2,3)"
const chars = new antlr4.InputStream(input);
const lexer = new MyGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
const tree = parser.query();

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

tree.accept(new Visitor());