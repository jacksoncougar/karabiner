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
    
toggle navigation with caps_lock

up_arrow is nothing
left_arrow is nothing
down_arrow is nothing
right_arrow is nothing

navigation layer 
    i is up_arrow
    j is left_arrow
    k is down_arrow
    l is right_arrow
    h is home
    n is end
    s is left_shift
    a is left_control
    open_bracket is delete_forward
    quote is delete_or_backspace

    toggle numpad with tab

done

numpad layer extends navigation
    b is keypad_0
    n is keypad_1
    m is keypad_2
    comma is keypad_3
    h is keypad_4
    j is keypad_5
    k is keypad_6
    y is keypad_7
    u is keypad_8
    i is keypad_9
    t is keypad_slash
    g is keypad_asterisk
    o is keypad_hyphen
    l is keypad_plus
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
