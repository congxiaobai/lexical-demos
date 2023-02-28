import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import ToolbarPlugin from "./plugins/CollapsibleToolbar";
import CollapsiblePlugin from "./plugins/CollapsiblePlugin";
import ExampleTheme from "./themes/ExampleTheme";
import { CollapsibleContainerNode } from "./nodes/CollapsibleContainerNode";
import { CollapsibleContentNode } from "./nodes/CollapsibleContentNode";
import { CollapsibleTitleNode } from "./nodes/CollapsibleTitleNode";

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [
    CollapsibleContainerNode,
    CollapsibleContentNode,
    CollapsibleTitleNode
  ]
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />

        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
        />
        <CollapsiblePlugin />
      </div>
    </LexicalComposer>
  );
}

function Placeholder() {
  return (
    <div className="editor-placeholder">
      Play around with the collapsible container plugin...
    </div>
  );
}
