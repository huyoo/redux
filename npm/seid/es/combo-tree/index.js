function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import * as React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'react-fast-compare';
import cls from 'classnames';
import Select from 'antd/es/select';
import Input from 'antd/es/input';
import Skeleton from 'antd/es/skeleton';
import Empty from 'antd/es/empty';
import Tree from 'antd/es/tree';
import ScrollBar from '../scroll-bar';
import { objectAssignAppend, request, setCursorPosition } from '../utils';
var Search = Input.Search;
var TreeNode = Tree.TreeNode;
var childFieldKey = 'children';

var ComboTree =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComboTree, _React$Component);

  function ComboTree(props) {
    var _this;

    _classCallCheck(this, ComboTree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboTree).call(this, props));
    _this.loaded = false;
    _this.data = [];
    _this.quickSearchValue = "";

    _this.hideComboList = function (e) {
      if (_this.comboList && !_this.comboList.contains(e.target)) {
        _this.setState({
          showTree: false
        });
      }
    };

    _this.showComboList = function (showTree) {
      if (showTree) {
        var store = _this.props.store;

        if (store) {
          _this.getData();
        }

        _this.setState({
          showTree: showTree
        });
      }
    };

    _this.getReaderData = function (obj) {
      var reader = _this.props.reader;
      var data = [];

      if (reader.data) {
        data = _this.getReader(reader.data, obj) || [];
      }

      return data;
    };

    _this.getReader = function (readerField, obj) {
      var data = null;

      if (obj && _typeof(obj) === 'object' && readerField) {
        var s = readerField.split('.');
        var d = obj[s[0]];

        for (var i = 1; i < s.length; i++) {
          d = d[s[i]];

          if (d instanceof Array && d.length > 0 && i < s.length - 1) {
            d = d[0];
          }
        }

        if (d) {
          data = d;
        }
      }

      return data;
    };

    _this.getData = function () {
      var _this$props = _this.props,
          cascadeParams = _this$props.cascadeParams,
          store = _this$props.store;

      var _ref = store || {},
          params = _ref.params;

      var superParams = _extends({}, params || {});

      if (cascadeParams) {
        _this.loaded = false;
        objectAssignAppend(superParams, cascadeParams);
      }

      if (!_this.loaded) {
        _this.loadData(superParams);
      }
    };

    _this.loadData = function (params) {
      var _this$props2 = _this.props,
          store = _this$props2.store,
          afterLoaded = _this$props2.afterLoaded,
          reader = _this$props2.reader;

      var _ref2 = store || {},
          url = _ref2.url,
          type = _ref2.type;

      var methodType = type || 'GET';

      _this.setState({
        loading: true
      });

      if (url) {
        request({
          method: methodType,
          url: url,
          data: params
        }).then(function (res) {
          if (res.success) {
            var resultData = res.data || [];
            var ds = [];

            if (reader && reader.data) {
              ds = _this.getReaderData(resultData);
            } else if (resultData instanceof Array) {
              ds = resultData;
            }

            _this.data = ds;

            _this.setState({
              treeData: _toConsumableArray(ds)
            });

            if (afterLoaded && afterLoaded instanceof Function) {
              afterLoaded(ds);
            }
          }
        })["finally"](function () {
          _this.loaded = true;

          _this.setState({
            loading: false
          });
        });
      }
    };

    _this.onClearValue = function () {
      var _this$props3 = _this.props,
          afterClear = _this$props3.afterClear,
          form = _this$props3.form,
          name = _this$props3.name,
          reader = _this$props3.reader,
          _this$props3$field = _this$props3.field,
          field = _this$props3$field === void 0 ? [] : _this$props3$field;

      _this.setState({
        value: undefined
      }, function () {
        var data = _defineProperty({}, name, null);

        if (reader && reader.field && field.length === reader.field.length) {
          field.forEach(function (f) {
            data[f] = null;
          });
        }

        if (form) {
          form.setFieldsValue(data);
        }

        if (afterClear && afterClear instanceof Function) {
          afterClear();
        }
      });
    };

    _this.filterNodes = function (filterName, valueKey, treeData, expandedKeys) {
      var reader = _this.props.reader;
      var childKey = reader.childKey;
      var newArr = [];
      treeData.forEach(function (treeNode) {
        var nodeChildren = treeNode[childKey || childFieldKey];

        var fieldValue = _this.getReader(filterName, treeNode);

        if (fieldValue.toLowerCase().indexOf(valueKey) > -1) {
          newArr.push(treeNode);
          expandedKeys.push(_this.getRowKey(treeNode));
        } else if (nodeChildren && nodeChildren.length > 0) {
          var ab = _this.filterNodes(filterName, valueKey, nodeChildren, expandedKeys);

          var obj = _extends(_extends({}, treeNode), _defineProperty({}, childKey || childFieldKey, ab));

          if (ab && ab.length > 0) {
            newArr.push(obj);
          }
        }
      });
      return newArr;
    };

    _this.getLocalFilterData = function () {
      var expKeys = _this.state.expandedKeys;
      var _this$props4 = _this.props,
          reader = _this$props4.reader,
          name = _this$props4.name;

      var newData = _toConsumableArray(_this.data);

      var expandedKeys = _toConsumableArray(expKeys);

      var searchValue = _this.quickSearchValue;

      if (searchValue) {
        var filterName = name;

        if (reader && reader.name) {
          filterName = reader.name;
        }

        newData = _this.filterNodes(filterName, searchValue.toLowerCase(), newData, expandedKeys);
      }

      return {
        treeData: newData,
        expandedKeys: expandedKeys
      };
    };

    _this.onExpand = function (expandedKeys) {
      _this.setState({
        expandedKeys: expandedKeys,
        autoExpandParent: false
      });
    };

    _this.onSearchChange = function (e) {
      _this.quickSearchValue = e.target.value;
    };

    _this.focus = function () {
      if (_this.searchInput && _this.searchInput.input) {
        setCursorPosition(_this.searchInput.input.input, _this.quickSearchValue.length);
      }
    };

    _this.onSearch = function () {
      var _this$getLocalFilterD = _this.getLocalFilterData(),
          treeData = _this$getLocalFilterD.treeData,
          expandedKeys = _this$getLocalFilterD.expandedKeys;

      _this.setState({
        treeData: treeData,
        expandedKeys: expandedKeys
      }, _this.focus);
    };

    _this.initComboList = function (ref) {
      if (ref) {
        var width = _this.props.width;
        _this.comboList = ref;

        if (width && width > 0) {
          ref.parentNode.style.width = "".concat(width, "px");
        }
      }
    };

    _this.getRowKey = function (item) {
      var rowKey = _this.props.rowKey;
      var key;

      if (typeof rowKey === 'function') {
        key = rowKey(item);
      } else if (typeof rowKey === 'string') {
        key = item[rowKey];
      } else {
        key = item.key;
      }

      if (!key) {
        throw new Error('rowKey is empty');
      }

      return key;
    };

    _this.getItemBySelectedKeys = function (selectedKeys) {
      var nodeData = [];

      for (var i = 0; i < selectedKeys.length; i++) {
        _this.getTreeNodeByKey(_this.data, nodeData, selectedKeys[i]);
      }

      return nodeData;
    };

    _this.getTreeNodeByKey = function (treeNodes, nodeData, key) {
      var reader = _this.props.reader;
      var childKey = reader.childKey;

      for (var i = 0; i < treeNodes.length; i += 1) {
        var node = treeNodes[i];

        var rowKey = _this.getRowKey(node);

        var nodeChildren = node[childKey || childFieldKey];

        if (rowKey === key) {
          nodeData.push(node);
        }

        if (nodeChildren && nodeChildren.length > 0) {
          _this.getTreeNodeByKey(nodeChildren, nodeData, key);
        }
      }
    };

    _this.onSelect = function (selectedKeys, e) {
      var _this$props5 = _this.props,
          afterSelect = _this$props5.afterSelect,
          reader = _this$props5.reader,
          form = _this$props5.form,
          name = _this$props5.name,
          _this$props5$field = _this$props5.field,
          field = _this$props5$field === void 0 ? [] : _this$props5$field;

      if (e.selected) {
        var selectNodes = _this.getItemBySelectedKeys(selectedKeys);

        var item = selectNodes.length > 0 ? selectNodes[0] : null;

        _this.setState({
          showTree: false,
          value: _this.getReader(reader.name, item)
        }, function () {
          var data = _defineProperty({}, name, _this.getReader(reader.name, item));

          var formData = form ? form.getFieldsValue() : {};

          if (reader && reader.field && field.length > 0 && field.length === reader.field.length) {
            field.forEach(function (f, idx) {
              data[f] = _this.getReader(reader.field ? reader.field[idx] : '', item);
            });
          }

          _extends(formData, data);

          if (form) {
            form.setFieldsValue(formData);
          }

          if (afterSelect) {
            afterSelect(item);
          }
        });
      }
    };

    _this.renderTreeNodes = function (data) {
      var reader = _this.props.reader;
      var searchValue = _this.quickSearchValue;
      return data.map(function (item) {
        var readerName = reader.name,
            childKey = reader.childKey;
        var readerValue = item[readerName];
        var readerChildren = item[childKey || childFieldKey];
        var i = readerValue.toLowerCase().indexOf(searchValue.toLowerCase());
        var beforeStr = readerValue.substr(0, i);
        var afterStr = readerValue.substr(i + searchValue.length);
        var title = i > -1 ? React.createElement("span", null, beforeStr, React.createElement("span", {
          style: {
            color: '#f50'
          }
        }, searchValue), afterStr) : React.createElement("span", null, readerValue);

        if (readerChildren && readerChildren.length > 0) {
          return React.createElement(TreeNode, {
            title: title,
            key: _this.getRowKey(item)
          }, _this.renderTreeNodes(readerChildren));
        }

        return React.createElement(TreeNode, {
          title: title,
          key: _this.getRowKey(item)
        });
      });
    };

    var defaultValue = props.defaultValue,
        value = props.value,
        _props$dataSource = props.dataSource,
        dataSource = _props$dataSource === void 0 ? [] : _props$dataSource;
    var defaultV = value || defaultValue || undefined;
    _this.loaded = false;
    _this.data = _toConsumableArray(dataSource);
    _this.state = {
      value: defaultV,
      loading: false,
      showTree: false,
      treeData: dataSource,
      autoExpandParent: true,
      defaultSelectedKeys: [],
      expandedKeys: []
    };
    return _this;
  }

  _createClass(ComboTree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.hideComboList, false);
      var store = this.props.store;

      if (store && store.autoLoad === true) {
        this.getData();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.hideComboList);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!isEqual(prevProps.cascadeParams, this.props.cascadeParams) || !isEqual(prevProps.value, this.props.value)) {
        var _this$props6 = this.props,
            defaultValue = _this$props6.defaultValue,
            value = _this$props6.value;
        var defaultV = value || defaultValue || undefined;
        this.setState({
          value: defaultV
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          treeData = _this$state.treeData,
          loading = _this$state.loading,
          value = _this$state.value,
          showTree = _this$state.showTree,
          expandedKeys = _this$state.expandedKeys,
          autoExpandParent = _this$state.autoExpandParent,
          defaultSelectedKeys = _this$state.defaultSelectedKeys;
      var _this$props7 = this.props,
          allowClear = _this$props7.allowClear,
          disabled = _this$props7.disabled,
          showSearch = _this$props7.showSearch,
          searchPlaceHolder = _this$props7.searchPlaceHolder,
          placeholder = _this$props7.placeholder,
          _this$props7$style = _this$props7.style,
          style = _this$props7$style === void 0 ? {} : _this$props7$style,
          className = _this$props7.className;
      var selectRestProps = {
        style: style,
        className: className
      };

      _extends(selectRestProps, {
        value: value
      });

      return React.createElement(Select, _extends({
        ref: function ref(ele) {
          return _this2.select = ele;
        },
        onDropdownVisibleChange: this.showComboList,
        open: showTree,
        allowClear: allowClear,
        placeholder: placeholder,
        onChange: this.onClearValue,
        disabled: disabled
      }, selectRestProps, {
        dropdownRender: function dropdownRender() {
          return React.createElement("div", {
            className: cls('seid-combo-tree'),
            ref: function ref(_ref3) {
              return _this2.initComboList(_ref3);
            }
          }, showSearch ? React.createElement("div", {
            className: "action-bar"
          }, React.createElement(Search, {
            ref: function ref(node) {
              return _this2.searchInput = node;
            },
            placeholder: searchPlaceHolder,
            onChange: _this2.onSearchChange,
            onSearch: _this2.onSearch,
            onPressEnter: _this2.onSearch
          })) : null, React.createElement("div", {
            className: "list-body"
          }, React.createElement(Skeleton, {
            loading: loading,
            active: true
          }, React.createElement(ScrollBar, null, treeData && treeData.length === 0 ? React.createElement(Empty, {
            image: Empty.PRESENTED_IMAGE_SIMPLE
          }) : React.createElement(Tree, {
            autoExpandParent: autoExpandParent,
            expandedKeys: expandedKeys,
            defaultSelectedKeys: defaultSelectedKeys,
            onExpand: _this2.onExpand,
            onSelect: _this2.onSelect
          }, _this2.renderTreeNodes(treeData))))));
        }
      }));
    }
  }]);

  return ComboTree;
}(React.Component);

ComboTree.defaultProps = {
  disabled: false,
  showSearch: true,
  store: null,
  dataSource: [],
  allowClear: false,
  placeholder: '',
  searchPlaceHolder: '',
  searchProperties: ['code', 'name'],
  rowKey: 'id',
  name: '',
  field: []
};
ComboTree.propTypes = {
  cascadeParams: PropTypes.object,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  allowClear: PropTypes.bool,
  classNames: PropTypes.string,
  placeholder: PropTypes.string,
  store: PropTypes.shape({
    type: PropTypes.oneOf(['GET', 'POST']),
    url: PropTypes.string,
    params: PropTypes.object,
    autoLoad: PropTypes.bool
  }),
  reader: PropTypes.shape({
    data: PropTypes.string,
    name: PropTypes.string,
    field: PropTypes.array,
    childKey: PropTypes.string
  }).isRequired,
  showSearch: PropTypes.bool,
  width: PropTypes.number,
  searchPlaceHolder: PropTypes.string,
  searchProperties: PropTypes.array,
  dataSource: PropTypes.array,
  afterLoaded: PropTypes.func,
  afterSelect: PropTypes.func,
  afterClear: PropTypes.func,
  rowKey: PropTypes.string,
  name: PropTypes.string.isRequired,
  field: PropTypes.array
};
export default ComboTree;
//# sourceMappingURL=index.js.map
