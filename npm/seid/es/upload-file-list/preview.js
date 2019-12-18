import React from 'react';

var Preview = function Preview(_ref) {
  var url = _ref.url,
      title = _ref.title;
  return React.createElement("iframe", {
    title: title,
    width: "100%",
    height: "1000px",
    src: url
  });
};

export default Preview;
//# sourceMappingURL=preview.js.map
