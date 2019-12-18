function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import message from 'antd/es/message';
import Popconfirm from 'antd/es/popconfirm';
import Card from 'antd/es/card';
import ALinkAuth from '../auth-a-link';
import { isNotEmpty } from '../_util/utils';
import CreateSystemSetForm from './CreateSystemSetForm';
import { apiConfig, defaultHeader } from './setting';
import { getTabPaneData, parseThemes, request } from '../utils';
import SystemTenants from './SystemTenants';
import SystemOrganization from './SystemOrganization';
import StandardTable from '../ext-table';
import SearchForm from './SearchForm';
import AuthButton from '../auth-button';
import SystemLogin from './SystemLogin';

var SystemSetting =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SystemSetting, _React$Component);

  function SystemSetting(props) {
    var _this;

    _classCallCheck(this, SystemSetting);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SystemSetting).call(this, props));
    _this.columns = [{
      title: '操作',
      width: 250,
      dataIndex: 'process',
      align: 'center',
      render: function render(_, record) {
        return [React.createElement(ALinkAuth, {
          key: "org",
          isNeedDivider: "true" // authCode="6EA4148EF2A64024A01EDD2ED10B7202"
          ,
          onClick: function onClick() {
            return _this.handleSetOrg(record);
          }
        }, "\u7EC4\u7EC7\u673A\u6784"), React.createElement(ALinkAuth, {
          key: "tenant",
          isNeedDivider: "true" // authCode="7EA4148EF2A64024A01EDD2ED10B7123"
          ,
          onClick: function onClick() {
            return _this.handleSetTenant(record);
          }
        }, "\u79DF\u6237"), React.createElement(ALinkAuth, {
          key: "edit",
          isNeedDivider: "true" // authCode="F64E917D88374312B8D696534B2AFF31"
          ,
          onClick: function onClick() {
            return _this.handleEdit(record);
          }
        }, "\u7F16\u8F91"), !record.disabled && React.createElement(Popconfirm, {
          className: "seid-link-line",
          key: "delete",
          title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417?",
          onConfirm: function onConfirm() {
            return _this.handleDelete(record);
          },
          okText: "\u662F",
          cancelText: "\u5426"
        }, React.createElement(ALinkAuth, null, "\u5220\u9664"))];
      }
    }, {
      title: '系统名称',
      dataIndex: 'sysName'
    }, {
      title: '版本号',
      dataIndex: 'sysVersion'
    }, {
      title: '首页地址',
      dataIndex: 'sysHome',
      width: 300
    }, {
      title: '应用基地址',
      dataIndex: 'appBasic'
    }, {
      title: '主题风格',
      align: 'center',
      dataIndex: 'sysSkin',
      className: 'sysSkinCls',
      render: function render(sysSkin) {
        var style = {};

        if (isNotEmpty(sysSkin)) {
          style = isNotEmpty(parseThemes(sysSkin)['@head-back_color']) ? {
            backgroundColor: parseThemes(sysSkin)['@head-back_color']
          } : {};
        }

        return isNotEmpty(sysSkin) && React.createElement("div", {
          style: _extends(_extends({}, style), {
            margin: 'auto',
            width: '48px',
            height: '48px'
          })
        });
      }
    }, {
      align: 'center',
      title: 'logo图标',
      dataIndex: 'sysLogo',
      className: 'sysLogoCls',
      render: function render(sysLogo) {
        return isNotEmpty(sysLogo) && React.createElement("img", {
          alt: "",
          src: sysLogo
        });
      }
    }, {
      align: 'center',
      title: '登录背景',
      dataIndex: 'sysLogin',
      className: 'sysLoginCls',
      render: function render(sysLogin) {
        return React.createElement(SystemLogin, {
          src: sysLogin
        });
      }
    }, {
      align: 'center',
      title: '单处登录',
      dataIndex: 'sysAlone',
      className: 'sysAloneCls',
      render: function render(sysAlone) {
        return sysAlone ? React.createElement("span", null, "\u662F") : React.createElement("span", null, "\u5426");
      }
    }, {
      align: 'center',
      title: '全局设置',
      dataIndex: 'sysGlobal',
      className: 'sysGlobalCls',
      render: function render(sysGlobal) {
        return sysGlobal ? React.createElement("span", null, "\u662F") : React.createElement("span", null, "\u5426");
      }
    }];

    _this.fetch = function (params) {
      _this.setState({
        loading: true
      });

      var pagination = _this.state.data.pagination;

      var _ref = pagination || {
        current: 0,
        pageSize: 15
      },
          current = _ref.current,
          pageSize = _ref.pageSize;

      var keyword = _this.state.searchInitValue.keyword;

      if (params) {
        if (params.pagination) {
          current = params.pagination.current || 0;
          pageSize = params.pagination.pageSize || pageSize;
        }

        if (!params.keyword) {
          keyword = '';
        } else {
          keyword = params.keyword || '';
        }
      }

      var queryParams = {
        pageIndex: current,
        pageSize: pageSize,
        keyword: keyword
      };
      request({
        url: apiConfig.rui.setting.list,
        params: queryParams,
        headers: _extends({}, defaultHeader)
      }).then(function (res) {
        if (res.success) {
          var _res$data = res.data,
              data = _res$data === void 0 ? {} : _res$data;
          var _data$list = data.list,
              list = _data$list === void 0 ? [] : _data$list,
              pageNum = data.pageNum,
              size = data.pageSize;
          var content = list.map(function (item) {
            return _extends(_extends({}, item), {
              disabled: !!item.sysGlobal
            });
          });

          _this.setState({
            loading: false,
            data: {
              list: content,
              pagination: {
                current: pageNum,
                pageSize: size,
                total: data.total
              }
            },
            searchInitValue: {
              keyword: queryParams.keyword
            }
          });
        } else {
          _this.setState({
            loading: false
          });
        }
      })["catch"](function () {
        _this.setState({
          loading: false
        });
      });
    };

    _this.handleSetOrg = function (systemSet) {
      var _this$props = _this.props,
          selectedMenuKey = _this$props.selectedMenuKey,
          updateTabPane = _this$props.updateTabPane,
          removeTabPane = _this$props.removeTabPane;
      var paneKey = 'ser-systemSetorgs-pane';
      var addPane = getTabPaneData({
        key: paneKey,
        title: '设置系统设置的组织机构',
        content: React.createElement(SystemOrganization, {
          removeTabPane: removeTabPane,
          systemSet: systemSet,
          paneKey: paneKey
        }),
        isWebDefault: false,
        closable: true,
        isMenu: false,
        refKey: selectedMenuKey,
        isExternal: false
      });

      if (updateTabPane) {
        updateTabPane(addPane);
      }
    };

    _this.handleSetTenant = function (systemSet) {
      var _this$props2 = _this.props,
          selectedMenuKey = _this$props2.selectedMenuKey,
          updateTabPane = _this$props2.updateTabPane,
          removeTabPane = _this$props2.removeTabPane;
      var paneKey = 'ser-systemSettenants-pane';
      var addPane = getTabPaneData({
        key: paneKey,
        title: '设置系统设置的租户',
        content: React.createElement(SystemTenants, {
          removeTabPane: removeTabPane,
          systemSet: systemSet,
          paneKey: paneKey
        }),
        isWebDefault: false,
        closable: true,
        isMenu: false,
        refKey: selectedMenuKey,
        isExternal: false
      });

      if (updateTabPane) {
        updateTabPane(addPane);
      }
    };

    _this.handleSelectRows = function (selectedRows) {
      _this.setState({
        selectedRows: selectedRows
      });
    };

    _this.handleStandardTableChange = function (_ref2) {
      var current = _ref2.current,
          pageSize = _ref2.pageSize;
      var params = {
        pagination: {
          pageIndex: (current || 0) - 1,
          pageSize: pageSize
        }
      };

      _this.fetch(params);
    };

    _this.handleSearch = function (searchValues) {
      var params;

      if (searchValues) {
        params = {
          pagination: {
            pageIndex: 0
          },
          keyword: searchValues.keyword
        };
      } else {
        params = {
          pagination: {
            pageIndex: 0
          },
          keyword: ''
        };
      }

      _this.fetch(params);
    };

    _this.handleEdit = function (systemSet) {
      var _this$props3 = _this.props,
          selectedMenuKey = _this$props3.selectedMenuKey,
          updateTabPane = _this$props3.updateTabPane,
          removeTabPane = _this$props3.removeTabPane;
      var paneKey = 'edit-systemSet-pane';
      var addPane = getTabPaneData({
        key: paneKey,
        title: '编辑系统设置',
        content: React.createElement(CreateSystemSetForm, {
          removeTabPane: removeTabPane,
          editSystemSet: systemSet,
          paneKey: paneKey
        }),
        isWebDefault: false,
        closable: true,
        isMenu: false,
        refKey: selectedMenuKey,
        isExternal: false
      });

      if (updateTabPane) {
        updateTabPane(addPane);
      }
    };

    _this.handleAdd = function () {
      var _this$props4 = _this.props,
          selectedMenuKey = _this$props4.selectedMenuKey,
          updateTabPane = _this$props4.updateTabPane,
          removeTabPane = _this$props4.removeTabPane;
      var paneKey = 'add-systemSet-pane';
      var addPane = getTabPaneData({
        key: paneKey,
        title: '新增系统设置',
        content: React.createElement(CreateSystemSetForm, {
          removeTabPane: removeTabPane,
          paneKey: paneKey
        }),
        isWebDefault: false,
        closable: true,
        isMenu: false,
        refKey: selectedMenuKey,
        isExternal: false
      });

      if (updateTabPane) {
        updateTabPane(addPane);
      }
    };

    _this.handleDelete = function (systemSet) {
      _this.setState({
        loading: true
      });

      request({
        method: 'delete',
        url: apiConfig.rui.setting["delete"],
        params: {
          settingId: systemSet.settingId
        }
      }).then(function () {
        var params = {
          pagination: {
            pageIndex: 0
          }
        };

        _this.fetch(params);
      });
    };

    _this.handleDeleteAll = function () {
      var selectedRows = _this.state.selectedRows;

      if (selectedRows.length === 0) {
        message.info('请选择要删除的系统设置');
        return;
      }

      var settingIds = selectedRows.map(function (s) {
        return s.settingId;
      }).join(',');

      _this.setState({
        loading: true
      });

      request({
        method: 'delete',
        url: apiConfig.rui.setting.deleteAll,
        params: {
          settingIds: settingIds
        }
      }).then(function () {
        _this.setState({
          selectedRows: []
        }, function () {
          var params = {
            pagination: {
              pageIndex: 0
            }
          };

          _this.fetch(params);
        });
      })["catch"](function () {
        _this.setState({
          loading: false
        });
      });
    };

    _this.state = {
      loading: false,
      selectedRows: [],
      data: {
        list: [],
        pagination: {
          current: 0,
          pageSize: 15,
          total: 0
        }
      },
      searchInitValue: {
        keyword: ''
      }
    };
    return _this;
  }

  _createClass(SystemSetting, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetch({});
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.reloadState && nextProps.reloadState !== this.props.reloadState) {
        var params = {
          pagination: {
            pageIndex: 0
          }
        };
        this.fetch(params);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          selectedRows = _this$state.selectedRows,
          loading = _this$state.loading,
          data = _this$state.data,
          searchInitValue = _this$state.searchInitValue;
      return React.createElement(Card, {
        bordered: false
      }, React.createElement("div", {
        className: "tableSearchForm"
      }, React.createElement(SearchForm, {
        handleSearch: this.handleSearch,
        searchInitValue: searchInitValue
      })), React.createElement("div", {
        className: "tableAction"
      }, React.createElement(AuthButton, {
        icon: "plus",
        type: "primary",
        dataaction: "create",
        onClick: function onClick() {
          return _this2.handleAdd();
        }
      }, "\u65B0\u589E"), React.createElement(Popconfirm, {
        title: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u7CFB\u7EDF\u8BBE\u7F6E\u5417?",
        onConfirm: function onConfirm() {
          return _this2.handleDeleteAll();
        },
        okText: "\u662F",
        cancelText: "\u5426"
      }, React.createElement(AuthButton, {
        icon: "delete",
        type: "primary",
        dataaction: "create",
        loading: loading
      }, "\u6279\u91CF\u5220\u9664"))), React.createElement("div", {
        className: "SystemSetList"
      }, React.createElement(StandardTable // autoHeight={false}
      , {
        selectedRows: selectedRows,
        rowSelection: false,
        loading: loading,
        rowKey: "settingId",
        data: data,
        columns: this.columns // onSelectRow={this.handleSelectRows}
        ,
        onChange: this.handleStandardTableChange
      })));
    }
  }]);

  return SystemSetting;
}(React.Component);

export default SystemSetting;
//# sourceMappingURL=index.js.map
