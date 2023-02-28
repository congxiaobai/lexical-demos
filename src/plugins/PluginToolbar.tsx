import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import * as React from "react";

import "../styles.css";

import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";

export default function ToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();

  return (
    <div className="toolbar">
      <button
        onClick={() => {
          editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
        }}
        className={"toolbar-item spaced "}
      >
        <span className="text">Insert Horizontal Rule</span>
      </button>
    </div>
  );
}
