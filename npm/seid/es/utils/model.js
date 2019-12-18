function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import modelExtend from 'dva-model-extend';
var model = {
  reducers: {
    updateState: function updateState(state, _ref) {
      var payload = _ref.payload;
      return _extends(_extends({}, state), payload);
    }
  }
};
var pageModel = modelExtend(model, {
  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: false,
      total: 0,
      current: 1,
      pageSize: 50
    }
  },
  reducers: {
    updateState: function updateState(state, _ref2) {
      var payload = _ref2.payload;
      var list = payload.list,
          pagination = payload.pagination;

      var _ref3 = state || {},
          _ref3$pagination = _ref3.pagination,
          originPagination = _ref3$pagination === void 0 ? {} : _ref3$pagination;

      return _extends(_extends({}, state), {
        list: list,
        pagination: _extends(_extends({}, originPagination), pagination)
      });
    }
  }
});
export default {
  modelExtend: modelExtend,
  model: model,
  pageModel: pageModel
};
//# sourceMappingURL=model.js.map
