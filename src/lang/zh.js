export default {
  route: {
    dashboard: '首页',
    introduction: '简述',
    documentation: '文档',
    guide: '引导页',
    permission: '权限测试页',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    componentIndex: '介绍',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    dragDialog: '拖拽 Dialog',
    dragKanban: '可拖拽看板',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    menu1: '菜单1',
    'menu1-1': '菜单1-1',
    'menu1-2': '菜单1-2',
    'menu1-2-1': '菜单1-2-1',
    'menu1-2-2': '菜单1-2-2',
    'menu1-3': '菜单1-3',
    menu2: '菜单2',
    Table: 'Table',
    dynamicTable: '动态Table',
    dragTable: '拖拽Table',
    inlineEditTable: 'Table内编辑',
    complexTable: '综合Table',
    treeTable: '树形表格',
    customTreeTable: '自定义树表',
    tab: 'Tab',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化',
    externalLink: '外链',

    // extend
    propertyOwner: '物业业主',
    content: '内容',
    serviceAndContent: '服务 & 内容',
    service: '服务',
    contentManagement: '内容管理',
    areasWeServeManagement: '服务地区管理',
    housing: '房屋管理',
    companyInfo: '公司信息',
    rentalHousing: '租赁房屋',
    lease: '租赁',
    rental: '租赁',
    sale: '出售',
    customer: '客户',
    userComment: '用户留言',
    landlordSupport: '房东支持',
    prospectiveTenants: '意向租户',
    currentTenants: '当前租户',
    areasWeServe: '服务领域',
    projectMarketing: '项目营销',
    projectLeasing: '项目租赁',
    pastSuccess: '过去的成功',
    commercial: '广告',
    sell: '销售',
    headquarters: '总部',
    industryUpdates: '行业更新',
    careers: '职业',
    articleList: '文章列表',
    saleHouse: '出售房屋',
    members: '成员',
    information: '信息',
    // companyContactInfo: '公司联系信息',
    projects: '项目',
    departmentsAndPositions: '部门 & 职位'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    screenfull: '全屏',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    title: 'MGPG后台管理系统登录',
    logIn: '登录',
    email: '邮箱',
    username: '账号',
    password: '密码',
    any: '任意',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    roles: '你的权限',
    switchRoles: '切换权限'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。',
    // extend
    newUniqueVisits: '最新唯一访问量',
    newPageVisits: '最新页面访问量',
    messages: '信息',
    turnover: '营业额'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定',
    name: '名字',
    surname: '姓',
    phone: '手机号',
    email: '邮箱',
    source: '来源',
    identity: '身份',
    comments: '留言',
    lastComments: '最新留言',
    todoList: '代办项列表',
    unfinished: '未完成的',
    all: '全部',
    active: '进行中的',
    completed: '已完成的'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  house: {
    houseManagement: '房屋管理',
    confirm: '确定',
    id: '序号',
    edit: '编辑',
    details: '详情',
    actions: '操作',
    rentalHousingList: '租赁房屋列表',
    houseList: '房屋列表',
    name: '名称',
    briefIntroduction: '简短介绍',
    suburbName: '郊区名称',
    streetName: '街道名称',
    streetCode: '街道编码',
    postCode: '邮编',
    houseNumber: '门牌号',
    mapCoordinates: '地图坐标',
    addressDescription: '地址描述',
    beds: '床位数',
    bedrooms: '卧室数',
    bathrooms: '卫生间数',
    carSpaces: '车位数',
    lockupGarages: '车库数',
    showers: '淋浴数',
    propertyTypes: '物业类型',
    suburb: '郊区名称',
    rent: '租金',
    dailyRent: '每日租金',
    weeklyRent: '每周租金',
    monthlyRent: '每月租金',
    agent: '代理人',
    availableDate: '可用时间',
    availableStartDate: '可用开始时间',
    availableEndDate: '可用结束时间',
    inspectionDatetime: '预约时间',
    createdAt: '创建于',
    updatedAt: '修改于',
    owner: '物主',
    detailsOfRentalHousing: '租赁房屋详情',
    detailsOfSaleHousing: '销售房屋详情',
    floorSpace: '房屋面积',
    basicInformation: '基本信息',
    housingBasicInformation: '房屋基本信息',
    introduction: '介绍',
    pictureAndVideo: '图片 & 视频',
    introToHousingPicturesAndVideos: '房屋图片与视频介绍',
    housingIntroduction: '房屋介绍',
    rentalRecords: '租赁记录',
    aState: '国家/州',
    upcomingInspection: '即将到来的检查',
    upcomingInspectionDatetime: '即将到来的检查日期时间',
    dataCreator: '数据创建者',
    currState: '目前状态',
    reserved: '已预订',
    house: '房屋',
    studio: '工作室',
    unit: '单位',
    apartment: '公寓',
    townHouse: '城市住房',
    terrace: '阶地',
    villa: '别墅',
    semi: '半独立式住宅',
    duplex: '复式住宅',
    penthouse: '阁楼',
    constructedIn: '修建时间',
    builtIn: '建成于',
    preciseCoordinates: '精确坐标',
    coordinateHints: '（用于谷歌地图显示）',
    conditionalFiltering: '条件筛选',
    query: '查询',
    startDate: '开始日期',
    endDate: '结束日期',
    regionSelection: '地区选择',
    regionSelectionPlaceholder: '请选择一个或多个区域',
    minimumRent: '最小租金',
    maximumRent: '最大租金',
    relatedAttributes: '相关属性',
    reset: '重置',
    active: '招租中',
    already: '已入住',
    address: '地址',
    update: '更新',
    price: '价格',
    infomationStatement: '信息陈述文件（pdf）',
    uploadImgTip: '点击此处上传照片',
    stateSelectionPlaceholder: '请选择当前状态',
    createRentalHousingData: '创建租赁房屋数据',
    editRentalHousingData: '编辑租赁房屋数据',
    createSaleHousingData: '创建销售房屋数据',
    editSaleHousingData: '编辑出售房屋数据',
    housingPicture: '房屋图片',
    housingPictureUpload: '房屋图片（可拖动图片改变展示顺序）',
    isNewDevelopment: '是否为最新开发房产？',
    notFillSomeFieldTips: '如果你不填写某些字段，前台不会显示它们。',
    videoEmbeddedCode: '视频嵌入代码',
    inspections: '预约检查',
    saleOut: '售罄',
    preferredInspectionDatetime: '期待检查时间',
    preferredMoveInDate: '期待搬入时间',
    followUpState: '跟进状态',
    comment: '留言',
    belongTo: '属于'
  },
  addressList: {
    australia: '澳大利亚',
    melbourne: '墨尔本',
    vic: '维多利亚',
    mooneePonds: '月光池塘',
    margaretStreet: '玛格丽特街'
  },
  owner: {
    id: '序号',
    name: '名',
    surname: '姓氏',
    phoneNumber: '手机号码',
    photoThumbnail: '照片缩略图',
    email: '邮箱',
    idCardNum: '身份证号',
    wechat: '微信',
    propertyOwnersList: '物业业主列表',
    identity: '身份',
    landlord: '房东',
    vendor: '供应商',
    other: '其他',
    tenant: '租户',
    purchaser: '购买者',
    isSignContract: '是否签署合同',
    address: '住址',
    notSigned: '未签订',
    alreadySigned: '已签订',
    followUpState: '跟进状态',
    followUpTime: '跟进时间',
    intentionalCustomers: '意向户',
    noIntention: '无意向',
    iSuccess: '成交',
    actions: '操作',
    details: '详情',
    edit: '编辑',
    agent: '代理',
    conditionalFiltering: '条件筛选',
    phone: '手机号码',
    startDate: '开始时间',
    endDate: '结束时间',
    createdDate: '创建日期',
    updatedDate: '修改时间',
    reset: '重置',
    query: '查询',
    create: '创建',
    // placeholder
    searchBySurnamePlaceholder: '输入姓氏的部分字符',
    searchByNamePlaceholder: '输入名的部分字符',
    searchByPhonePlaceholder: '输入部分手机号码',
    searchByEmailPlaceholder: '输入邮箱部分字符',
    searchByIdCardNumPlaceholder: '输入身份证号码部分字符',
    searchByWeChatPlaceholder: '输入微信部分号码',
    searchByAddressPlaceholder: '输入地址部分信息',
    selectByIdentityPlaceholder: '选择客户身份',
    searchByAgentNamePlaceholder: '输入代理名称部分字符',

    // input validation messages
    illegalEmailAddress: '非法邮箱地址。',
    illegalWechat: '非法微信号码。',
    requiredWechat: '当电话号码和邮箱地址未输入时，微信必须输入。',
    requiredPhone: '当Wechat和邮箱地址未输入时，手机号码必须输入。',
    requiredEmail: '当微信和手机号码未输入时，邮箱地址必须输入。',
    requiredSurname: '当名未输入时，姓氏必须输入'

  },
  userComment: {
    id: '序号',
    userCommentsList: '用户留言列表',
    surname: '姓',
    name: '名字',
    email: '邮箱',
    phone: '手机号',
    wechat: '微信',
    identity: '身份',
    landlord: '房东',
    vendor: '供应商',
    comments: '留言',
    comment: '留言',
    createdAt: '创建时间',
    conditionalFiltering: '条件筛选',
    comeFrom: '来自于',
    confirmDeleteTip: '你确定要删除此条留言吗？',
    page: '页面'
  },
  contentMGT: {
    historicalContent: '历史内容',
    confirmUpdateTips: '你确认要更新内容吗？房东支持页面将会应用您最新修改的内容。',
    editImage: '编辑轮播图数据',
    editMainContent: '编辑主体内容',
    mainContent: '主体内容',
    editServiceAreas: '编辑服务地区',
    editServiceAreaDetails: '编辑服务地区详情',
    createServiceArea: '创建服务地区',
    areaName: '区域名称',
    selectContacts: '选择联系人',
    searchContacts: '搜索联系人',
    searchAgents: '搜索代理',
    firstPicture: '首图',
    topPicture: '顶部图片',
    detailsOfServiceArea: '服务地区详情',
    introduction: '介绍'
  },
  industryUpdates: {
    articleList: '文章列表',
    contentFragment: '内容片段',
    publisher: '发表者',
    title: '标题',
    createArticle: '创建文章',
    mainPicture: '主图',
    content: '内容',
    editArticle: '编辑文章',
    confirmDeleteTips: '你确定要删除这篇文章吗？',
    createArticleTitle: '创建文章',
    editArticleTitle: '编辑文章',
    firstPicture: '首图',
    topPicture: '头图',
    requiredArticlePicture: '请选择要上传的图片',
    conditionalFiltering: '条件筛选'
  },
  company: {
    memberList: '成员列表',
    branch: '部门',
    position: '职位',
    positions: '职位',
    positionName: '职位名称',
    description: '介绍',
    googlePlusHomePage: 'Google+ 主页',
    linkinHomePage: 'Linkin 主页',
    youtubeHomePaeg: 'Youtube 主页',
    facebookHomePage: 'Facebook 主页',
    twitterHomePage: 'Twitter 主页',
    instagram: 'Instagram 主页',
    createMembersData: '创建成员数据',
    editMembersData: '编辑成员数据',
    department: '部门',
    departmentName: '部门名称',
    confirmDeleteMemberTips: '您确定要删除此成员的数据吗？',
    conditionalFiltering: '条件筛选',
    companyInformationEditor: '公司信息编辑',
    socialNetworkingSiteHomepage: '社交网站主页',
    socialNetworkingSiteHomepageFormTips: '如果您不填写输入框，网站前台将不显示。',
    companyContactInfo: '公司联系信息',
    detailedAddress: '详细地址',
    introduction: '介绍',
    departmentList: '部门列表',
    positionsCount: '职位数量',
    membersCount: '成员数量',
    createDepartment: '创建公司部门',
    departmentDetails: '部门详情',
    editDepartment: '编辑部门',
    editDepartmentName: '编辑部门名称',
    editPositions: '编辑职位',
    deletePositionTips: '该职位下包含的成员将会被清除职位关系。',
    deleteDepartmentTips: '您确认要删除该部门吗？删除后该部门对应职位以及职位与成员之间的关系也将会被删除。',
    inputPositionNameTips: '请输入职位名称',
    createPosition: '创建职位'
  },
  project: {
    list: '项目列表',
    name: '项目名称',
    location: '位置',
    address: '地址',
    introduction: '介绍',
    description: '描述',
    yearBuilt: '建造年份',
    minPrice: '最少价格',
    maxPrice: '最高价格',
    price: '价格',
    isNewDevelopment: '是否最新开发',
    isPastSuccess: '是否过去的成功',
    agents: '代理',
    productType: '产品类别',
    creator: '创建者',
    createProject: '创建项目',
    editProject: '编辑项目',
    owner: '业主',
    pictures: '图片',
    status: '状态',
    details: '项目详情',
    basicInformation: '基本信息',
    conditionalFiltering: '条件筛选'
  },
  projectStatus: {
    soldOut: '已售罄'
  },
  all: '全部',
  id: '编号',
  submit: '提交',
  reset: '重置',
  create: '创建',
  update: '更新',
  query: '查询',
  close: '关闭',
  edit: '编辑',
  delete: '删除',
  tips: '提示',
  confirm: '确认',
  cancel: '取消',
  details: '详情',
  apply: '应用',
  preview: '预览',
  add: '添加',
  actions: '操作',
  createdAt: '创建于',
  updatedAt: '修改于',
  publish: '发表',
  surname: '姓',
  photo: '照片',
  phone: '手机号码',
  email: '邮箱',
  name: '名',
  uploadPhoto: '上传照片',
  telephone: '电话',
  facsimile: '传真',
  address: '地址',
  openingHours: '营业时间',
  monday: '周一',
  tuesday: '周二',
  wednesday: '周三',
  thursday: '周四',
  friday: '周五',
  saturday: '周六',
  sunday: '周日',
  postCode: '邮政编码',
  createSuccess: '创建成功',
  updateSuccess: '修改成功',
  deleteSuccess: '删除成功',
  createFailed: '创建失败',
  updateFailed: '更新失败',
  deleteFailed: '删除失败',
  uploadFailed: '上传失败',
  searchFailed: '搜索失败',
  pullingDataFailed: '数据拉取失败',
  noData: '无数据',
  deleteDataTips: '您确定要删除此条数据吗？',
  landlords: '房东',
  prospectiveTenants: '潜在租户',
  currentTenants: '当前租户',
  projectMarketing: '项目营销',
  projectLeasing: '项目租赁',
  commercial: '商业/广告',
  sell: '出售',
  careers: '招纳贤士',
  areasWeServe: '服务领域',
  headquarters: '总部介绍',
  startDate: '开始日期',
  endDate: '结束日期',
  // 身份相关
  landlord: '业主',
  vendor: '卖主',
  imgCropper: '图片裁剪器',
  show: '展示',
  hide: '隐藏',
  whetherToDisplay: '是否显示',
  displayState: '显示状态',
  creator: '创建者',
  nothing: '无',
  yes: '是',
  no: '否',
  selectFile: '选择文件',
  currentFile: '当前文件',
  to: '至',
  mobile: '联系方式',
  getDataError: '数据获取失败',
  selectPage: '选择页面',
  noPicture: '无图片'
}
