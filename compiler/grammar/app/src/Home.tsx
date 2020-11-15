import "./Home.css";

import { LayerSynthesisVisitor, myKLLVisitor } from "./KLLVisitor";

import { CharStreams } from "antlr4ts/CharStreams";
import { CommonTokenStream } from "antlr4ts/CommonTokenStream";
import { KLLLexer } from "./antlr/KLLLexer";
import { KLLParser } from "./antlr/KLLParser";
import { KarabinerCompiler } from "./Compiler";
import React, { useRef, useState } from "react";
import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";

function Home(props) {
  let textareaRef = useRef(null);
  let [input, setInput] = useState(`
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
    `);
  const chars = CharStreams.fromString(input);
  let output = "";
  let statusGood = true;

  let listener: ANTLRErrorListener<string> = {
    syntaxError: (r, o, l, c, msg, e): void => {
      statusGood = false;
    },
  };
  const lexer = new KLLLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new KLLParser(tokens);
  const visitor = new myKLLVisitor();
  parser.addErrorListener(listener);
  parser.buildParseTree = true;

  const tree = parser.config();
  const table = visitor.visit(tree);
  const layers = new LayerSynthesisVisitor(table).visit(tree);
  output = new KarabinerCompiler().compile(layers);


  let onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab" && !e.shiftKey) {
      e.preventDefault();
      if (!textareaRef.current) return;
      const value = textareaRef.current!.value;
      const selectionStart = textareaRef.current!.selectionStart;
      const selectionEnd = textareaRef.current!.selectionEnd;
      textareaRef.current!.value =
        value.substring(0, selectionStart) +
        "  " +
        value.substring(selectionEnd);
      textareaRef.current!.selectionStart =
        selectionEnd + 2 - (selectionEnd - selectionStart);
      textareaRef.current!.selectionEnd =
        selectionEnd + 2 - (selectionEnd - selectionStart);
    }
    if (e.key === "Tab" && e.shiftKey) {
      e.preventDefault();
      const value = textareaRef.current!.value;
      const selectionStart = textareaRef.current!.selectionStart;
      const selectionEnd = textareaRef.current!.selectionEnd;

      const beforeStart = value
        .substring(0, selectionStart)
        .split("")
        .reverse()
        .join("");
      const indexOfTab = beforeStart.indexOf("  ");
      const indexOfNewline = beforeStart.indexOf("\n");

      if (indexOfTab !== -1 && indexOfTab < indexOfNewline) {
        textareaRef.current!.value =
          beforeStart
            .substring(indexOfTab + 2)
            .split("")
            .reverse()
            .join("") +
          beforeStart.substring(0, indexOfTab).split("").reverse().join("") +
          value.substring(selectionEnd);

        textareaRef.current!.selectionStart = selectionStart - 2;
        textareaRef.current!.selectionEnd = selectionEnd - 2;
      }
    }
  };

  return (
    <div className="compiler">
      <div>
        <textarea
          ref={textareaRef}
          onKeyDown={(e) => onKeyDown(e)}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div className={statusGood ? "good" : "bad"}>
        <button
          onClick={(e) => {
            navigator.clipboard.writeText(output);
          }}
        >
          Copy to clipboard
        </button>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default Home;
