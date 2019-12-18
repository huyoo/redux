export var mergeKey = function mergeKey(key, prefix) {
  return "".concat(prefix || 'seid', "_").concat(key);
};

var getCacheHelper = function getCacheHelper(storageType) {
  return {
    /** base64加密存储 */
    set: function set(key, data) {
      var kvStr = JSON.stringify(data);
      var kv = window.btoa(window.encodeURIComponent(kvStr));
      window[storageType].setItem(key, kv);
    },
    setWithPrefix: function setWithPrefix(key, data, prefix) {
      var kvStr = JSON.stringify(data);
      var kv = window.btoa(window.encodeURIComponent(kvStr));
      window[storageType].setItem(mergeKey(key, prefix), kv);
    },

    /** 解密取出 */
    get: function get(key) {
      var kv = window[storageType].getItem(key);

      if (kv) {
        try {
          return JSON.parse(window.decodeURIComponent(window.atob(kv)));
        } catch (e) {
          return JSON.parse(kv);
        }
      }

      return null;
    },
    getWithPrefix: function getWithPrefix(key, prefix) {
      var kv = window[storageType].getItem(mergeKey(key, prefix));

      if (kv) {
        try {
          return JSON.parse(window.decodeURIComponent(window.atob(kv)));
        } catch (e) {
          return JSON.parse(kv);
        }
      }

      return null;
    },

    /** 非加密存储 */
    setNative: function setNative(key, data) {
      var kvStr = JSON.stringify(data);
      window[storageType].setItem(key, kvStr);
    },
    setNativeWithPrefix: function setNativeWithPrefix(key, data, prefix) {
      var kvStr = JSON.stringify(data);
      window[storageType].setItem(mergeKey(key, prefix), kvStr);
    },

    /** 取值 */
    getNative: function getNative(key) {
      var kv = window[storageType].getItem(key);

      if (kv) {
        try {
          return JSON.parse(kv);
        } catch (e) {
          return kv;
        }
      }

      return null;
    },
    getNativeWithPrefix: function getNativeWithPrefix(key, prefix) {
      var kv = window[storageType].getItem(mergeKey(key, prefix));

      if (kv) {
        try {
          return JSON.parse(kv);
        } catch (e) {
          return kv;
        }
      }

      return null;
    },
    clear: function clear(key) {
      if (key) {
        if (Array.isArray(key)) {
          key.forEach(function (k) {
            window[storageType].removeItem(k);
          });
        } else {
          window[storageType].removeItem(key);
        }
      } else {
        window[storageType].clear();
      }
    },
    clearWithPrefix: function clearWithPrefix(key, prefix) {
      if (key) {
        if (Array.isArray(key)) {
          key.forEach(function (k) {
            var keyTmp = mergeKey(k, prefix);
            window[storageType].removeItem(keyTmp);
          });
        } else {
          var keyTmp = mergeKey(key, prefix);
          window[storageType].removeItem(keyTmp);
        }
      } else {
        window[storageType].clear();
      }
    }
  };
};

export default {
  localStorage: getCacheHelper('localStorage'),
  sessionStorage: getCacheHelper('sessionStorage')
};
//# sourceMappingURL=storage.js.map
