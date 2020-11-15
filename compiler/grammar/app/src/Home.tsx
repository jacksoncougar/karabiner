import "./Home.css";

import { LayerSynthesisVisitor, myKLLVisitor } from "./KLLVisitor";

import { CharStreams } from "antlr4ts/CharStreams";
import { CommonTokenStream } from "antlr4ts/CommonTokenStream";
import { KLLLexer } from "./antlr/KLLLexer";
import { KLLParser } from "./antlr/KLLParser";
import { KarabinerCompiler } from "./Compiler";
import React from "react";

class Home extends React.Component {
  render() {
    const input = `
    caps_lock toggles layer1
    up_arrow is nothing
    left_arrow is nothing
    down_arrow is nothing
    right_arrow is nothing

    create layer named layer2
      extends layer1
      has numpad set
    done
    
    create layer named layer1
      has nav set
      tab toggles layer2
    done
    
    create layer named numpad
      extends nothing
      has numpad set
    done
    
    create set named nav
      i is up_arrow
      j is left_arrow
      k is down_arrow
      l is right_arrow
      a is left_shift
      s is left_control
    done

    create set named numpad
      b is 0
      n is 1
      m is 2
      comma is 3
      h is 4
      j is 5
      k is 6
      y is 7
      u is 8
      i is 9
    done
    `;
    const chars = CharStreams.fromString(input);
    const lexer = new KLLLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new KLLParser(tokens);
    const visitor = new myKLLVisitor();
    parser.buildParseTree = true;

    const tree = parser.config();
    const table = visitor.visit(tree);
    const layers = new LayerSynthesisVisitor(table).visit(tree);
    const output = new KarabinerCompiler().compile(layers);

    return (
      <div className="compiler">
        <pre>{input}</pre>
        <pre>{output}</pre>
      </div>
    );
  }
}

export default Home;
