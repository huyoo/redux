// @ts-nocheck

/* eslint-disable */
var transToCamelCase = function transToCamelCase(str) {
  var re = /-(\w)/g;
  return str.replace(re, function ($0, $1) {
    return $1.toUpperCase();
  });
};

var setPolyfill = function setPolyfill() {
  if (Object.getOwnPropertyNames(HTMLElement.prototype).indexOf('dataset') === -1) {
    Object.defineProperty(HTMLElement.prototype, 'dataset', {
      get: function get() {
        var attributes = this.attributes;
        var name = [];
        var value = [];
        var obj = {};

        for (var i = 0; i < attributes.length; i++) {
          if (attributes[i].nodeName.slice(0, 5) == 'data-') {
            name.push(attributes[i].nodeName.slice(5));
            value.push(attributes[i].nodeValue);
          }
        }

        for (var j = 0; j < name.length; j++) {
          obj[name[j]] = value[j];
          obj[transToCamelCase(name[j])] = value[j];
        }

        return obj;
      }
    });
  }
};

export default {
  dataSetPolyfill: function dataSetPolyfill() {
    setPolyfill();

    setPolyfill = function setPolyfill() {};
  }
};
//# sourceMappingURL=richEditorPolyfill.js.map
