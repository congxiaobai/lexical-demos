import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import HorizontalRulePlugin from "./plugins/HorizontalRulePlugin";
import ToolbarPlugin from "./plugins/PluginToolbar";
import ExampleTheme from "./themes/ExampleTheme";
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [HorizontalRuleNode]
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />

        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HorizontalRulePlugin />
      </div>
    </LexicalComposer>
  );
}

function Placeholder() {
  return (
    <div className="editor-placeholder">
      Play around with the horizontal rule plugin...
    </div>
  );
}
