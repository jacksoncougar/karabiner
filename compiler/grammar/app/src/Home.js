import React from "react";
import logo from "./react.svg";
import "./Home.css";

import antlr4 from "antlr4";
import KLLLexer from "./antlr/KLLLexer.js";
import KLLParser from "./antlr/KLLParser.js";
import { KLLVisitor } from "./KLLVisitor.js";

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
      has numpad2 set
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
    const chars = new antlr4.InputStream(input);
    const lexer = new KLLLexer.KLLLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new KLLParser.KLLParser(tokens);
    const visitor = new KLLVisitor();
    parser.buildParseTrees = true;
    const tree = parser.config();
    console.log(tree);

    class Visitor {
      visitChildren(ctx) {
        if (!ctx) {
          return;
        }

        if (ctx.children) {
          return ctx.children.map((child) => {
            if (child.children && child.children.length !== 0) {
              return child.accept(this);
            } else {
              return child.getText();
            }
          });
        }
      }
    }

    console.log(tree.accept(visitor));

    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{" "}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
