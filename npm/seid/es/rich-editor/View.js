import React from 'react';
import BraftEditor from 'braft-editor';

var View = function View(_ref) {
  var content = _ref.content;
  var editorState = BraftEditor.createEditorState(content);
  return React.createElement(BraftEditor, {
    value: editorState,
    readOnly: true,
    controls: []
  });
};

export default View;
//# sourceMappingURL=View.js.map
