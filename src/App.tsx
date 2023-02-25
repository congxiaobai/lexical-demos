import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import ExcalidrawPlugin from "./plugins/ExcalidrawPlugin";
import ToolbarPlugin from "./plugins/ExcalidrawToolbar";
import { ExcalidrawNode } from "./nodes/ExcalidrawNode";
import ExampleTheme from "./ExampleTheme";
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

const editorConfig = {
  theme: ExampleTheme,
  onError(error) {
    throw error;
  },
  nodes: [ExcalidrawNode]
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />

        <PlainTextPlugin
        ErrorBoundary={LexicalErrorBoundary}
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder />}
        />
        <ExcalidrawPlugin />
      </div>
    </LexicalComposer>
  );
}

function Placeholder() {
  return (
    <div className="editor-placeholder">
      Play around with the Excalidraw plugin...
    </div>
  );
}
