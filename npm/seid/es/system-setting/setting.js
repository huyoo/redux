var gatewayAddress = 'http://10.4.69.36:1100/basic-api/';
export var appConfig = {
  gatewayAddress: gatewayAddress,

  /** 系统名称 */
  sysName: 'SIP',

  /** 版本号 */
  sysVersion: 'v1.0',

  /** 首页地址 */
  sysHome: "".concat(window.location.protocol, "//").concat(window.location.host, "/#/welcome"),

  /** 主题皮肤 */
  sysSkin: '{"@header":"#364760","@sider":"#364760","@font":"#b0bcda","@button":"#4498ff","@table":"rgba(39,174,255,0.12)","@center":false}',

  /** 登录框居中 */
  loginCenter: false,

  /** 是否测试应用 */
  isTestApp: false,

  /** 首页默认标题 */
  webDefaultTabTitle: '首页',

  /** 首页对应的TabPaneKey */
  webDefaultTabPaneKey: 'web-welcome',

  /** 请求超时的毫秒数 */
  httpClientTimeout: 15000,

  /** 路由地址配置 */
  routeConfig: {
    /* 项目访问根地址 */
    webRoot: '/app',

    /* 项目访问根地址 */
    webDefault: 'index',

    /** 外部模块加载地址 */
    webModules: 'modules'
  },

  /** 判断是否手机端屏幕宽度 */
  isMobileWith: 992,

  /** 不需要分页时设置的最大值 */
  maxPageSize: 99999999,
  initMenu: {
    menuId: '0',
    menuUrl: '#',
    menuIcon: 'user',
    menuName: '平台根级菜单',
    menuOrder: 1,
    parentId: '-1',
    menuLevel: '-1',
    menuGroup: '',
    hasMenu: true
  },
  initOrg: {
    structureId: '0',
    structureName: '平台根级组织',
    parentId: '-1',
    pLevel: '-1'
  },
  initPost: {
    positionId: '0',
    positionName: '平台根级岗位',
    parentId: '-1',
    levelBy: '-1'
  },
  initRole: {
    roleId: '0',
    roleName: '平台根级角色',
    parentId: '-1',
    levelBy: '-1'
  }
};
export var defaultHeader = {
  ecmp_token: '0AJqVzAMozQ8T/ZHwcM9sxArTthe5/XupuquE5C2IIFK6XNgt+siNQ=='
};
var rewrite = {
  /* 本地后台调试 */
  // rui: process.env.NODE_ENV !== 'production' ? '/basic.api/' : appConfig.gatewayAddress

  /* 固定网关调试 */
  rui: appConfig.gatewayAddress
};
export var apiConfig = {
  rui: {
    // 注册功能
    register: {
      findAll: "".concat(rewrite.rui, "config-center-service/api/platform/findAll"),
      getOne: "".concat(rewrite.rui, "config-center-service/api/sayHello/getOne")
    },
    // 登录功能
    login: {
      loginOn: "".concat(rewrite.rui, "basic/login/security"),
      loginOut: "".concat(rewrite.rui, "basic/login/logout"),
      getMenus: "".concat(rewrite.rui, "basic/home/menu")
    },
    // 系统设置
    setting: {
      add: "".concat(rewrite.rui, "basic/setting/add"),
      edit: "".concat(rewrite.rui, "basic/setting/edit"),
      addByJson: "".concat(rewrite.rui, "basic/setting/add/json"),
      editByJson: "".concat(rewrite.rui, "basic/setting/edit/json"),
      list: "".concat(rewrite.rui, "basic/setting/list"),
      "delete": "".concat(rewrite.rui, "basic/setting/delete"),
      deleteAll: "".concat(rewrite.rui, "basic/setting/deleteAll"),
      findGlobalByOne: "".concat(rewrite.rui, "basic/setting/findGlobalByOne"),
      resetStructures: "".concat(rewrite.rui, "basic/setting/resetStructures"),
      resetTenants: "".concat(rewrite.rui, "basic/setting/resetTenants"),
      findById: "".concat(rewrite.rui, "basic/setting/findById")
    },
    basic: {
      // 监控管理
      monitor: {
        druidIndex: "".concat(rewrite.rui, "druid/index")
      },
      // 在线用户
      online: {
        list: "".concat(rewrite.rui, "basic/online/list"),
        logout: "".concat(rewrite.rui, "basic/online/logout")
      },
      // 租户管理
      tenant: {
        add: "".concat(rewrite.rui, "basic/tenant/add"),
        edit: "".concat(rewrite.rui, "basic/tenant/edit"),
        addByJson: "".concat(rewrite.rui, "basic/tenant/add/json"),
        editByJson: "".concat(rewrite.rui, "basic/tenant/edit/json"),
        list: "".concat(rewrite.rui, "basic/tenant/list"),
        "delete": "".concat(rewrite.rui, "basic/tenant/delete"),
        deleteAll: "".concat(rewrite.rui, "basic/tenant/deleteAll"),
        resetMenus: "".concat(rewrite.rui, "basic/tenant/resetMenus"),
        findById: "".concat(rewrite.rui, "basic/tenant/findById")
      },
      // 菜单管理
      menu: {
        getAllMenus: "".concat(rewrite.rui, "basic/menu/list"),
        getMenuById: "".concat(rewrite.rui, "basic/menu/findById"),
        getIndexMenus: "".concat(rewrite.rui, "basic/menu/index"),
        getSubMenus: "".concat(rewrite.rui, "basic/menu/getSub"),
        addMenu: "".concat(rewrite.rui, "basic/menu/add"),
        editMenu: "".concat(rewrite.rui, "basic/menu/edit"),
        deleteMenu: "".concat(rewrite.rui, "basic/menu/delete"),
        deleteAll: "".concat(rewrite.rui, "basic/menu/deleteAll"),
        addAuthorities: "".concat(rewrite.rui, "basic/menu/addAuthorities"),
        getAuthoritiesById: "".concat(rewrite.rui, "basic/menu/getAuthoritiesById"),
        deleteAuthorities: "".concat(rewrite.rui, "basic/menu/deleteAuthorities")
      },
      // 用户管理
      user: {
        getAllUsers: "".concat(rewrite.rui, "basic/user/list"),
        addUser: "".concat(rewrite.rui, "basic/user/add"),
        editUser: "".concat(rewrite.rui, "basic/user/edit"),
        addUserByJson: "".concat(rewrite.rui, "basic/user/add/json"),
        editUserByJson: "".concat(rewrite.rui, "basic/user/edit/json"),
        deleteUser: "".concat(rewrite.rui, "basic/user/delete"),
        addRoles: "".concat(rewrite.rui, "basic/user/addRoles"),
        addStructures: "".concat(rewrite.rui, "basic/user/addStructures"),
        addPositions: "".concat(rewrite.rui, "basic/user/addPositions"),
        resetRoles: "".concat(rewrite.rui, "basic/user/resetRoles"),
        resetStructures: "".concat(rewrite.rui, "basic/user/resetStructures"),
        resetPositions: "".concat(rewrite.rui, "basic/user/resetPositions"),
        findById: "".concat(rewrite.rui, "basic/user/findById"),
        deleteAll: "".concat(rewrite.rui, "basic/user/deleteAll"),
        forgotEmail: "".concat(rewrite.rui, "basic/user/forgotEmail"),
        forgotReset: "".concat(rewrite.rui, "basic/user/forgotReset")
      },
      // 组织机构
      organization: {
        getAllOrganizations: "".concat(rewrite.rui, "basic/structure/list"),
        getOrganizationById: "".concat(rewrite.rui, "basic/structure/findById"),
        getIndexOrganizations: "".concat(rewrite.rui, "basic/structure/index"),
        getSubOrganizations: "".concat(rewrite.rui, "basic/structure/getSub"),
        addOrganization: "".concat(rewrite.rui, "basic/structure/add"),
        editOrganization: "".concat(rewrite.rui, "basic/structure/edit"),
        deleteOrganization: "".concat(rewrite.rui, "basic/structure/delete"),
        deleteAll: "".concat(rewrite.rui, "basic/structure/deleteAll")
      },
      // 岗位管理
      post: {
        getAllPosts: "".concat(rewrite.rui, "basic/position/list"),
        getPostById: "".concat(rewrite.rui, "basic/position/findById"),
        getIndexPosts: "".concat(rewrite.rui, "basic/position/index"),
        getSubPosts: "".concat(rewrite.rui, "basic/position/getSub"),
        addPost: "".concat(rewrite.rui, "basic/position/add"),
        editPost: "".concat(rewrite.rui, "basic/position/edit"),
        deletePost: "".concat(rewrite.rui, "basic/position/delete"),
        deleteAll: "".concat(rewrite.rui, "basic/position/deleteAll")
      },
      // 角色管理
      role: {
        getAllRoles: "".concat(rewrite.rui, "basic/role/list"),
        getRoleById: "".concat(rewrite.rui, "basic/role/findById"),
        getIndexRoles: "".concat(rewrite.rui, "basic/role/index"),
        getSubRoles: "".concat(rewrite.rui, "basic/role/getSub"),
        addRole: "".concat(rewrite.rui, "basic/role/add"),
        editRole: "".concat(rewrite.rui, "basic/role/edit"),
        deleteRole: "".concat(rewrite.rui, "basic/role/delete"),
        deleteAll: "".concat(rewrite.rui, "basic/role/deleteAll"),
        getRightsAndAuthorities: "".concat(rewrite.rui, "basic/role/getRightsAndAuthorities"),
        setRightsAndAuthorities: "".concat(rewrite.rui, "basic/role/setRightsAndAuthorities")
      }
    }
  }
};
//# sourceMappingURL=setting.js.map
