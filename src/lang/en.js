export default {
  route: {
    dashboard: 'Dashboard',
    introduction: 'Introduction',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    componentIndex: 'Introduction',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: 'Mixin',
    backToTop: 'BackToTop',
    dragDialog: 'Drag Dialog',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    treeTable: 'Tree Table',
    customTreeTable: 'Custom TreeTable',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',

    // extend
    propertyOwnerMGT: 'Property Owner MGT',
    propertyOwner: 'Property Owner',
    contentMGT: 'Content MGT',
    housingMGT: 'Housing MGT',
    companyInfoMGT: 'Company Info MGT',
    rentalHousing: 'Rental Housing',
    customerMGT: 'Customer MGT'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    screenfull: 'Screenfull',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'System Login',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    roles: 'Your roles',
    switchRoles: 'Switch roles'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.',
    // extend
    newUniqueVisits: 'New Unique Visits',
    newPageVisits: 'New Page Visits',
    messages: 'Messages',
    turnover: 'Turnover'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    name: 'Name',
    surname: 'Surname',
    phone: 'Phone',
    email: 'Email',
    source: 'source',
    identity: 'identity',
    comments: 'comments',
    lastComments: 'Last comments',
    todoList: 'Todo List',
    unfinished: 'Unfinished',
    all: 'All',
    active: 'Active',
    completed: 'Completed'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  house: {
    id: 'ID',
    edit: 'Edit',
    details: 'Details',
    actions: 'Actions',
    rentalHousingList: 'Rental housing list',
    streetName: 'Street Name',
    streetCode: 'Street Code',
    postCode: 'Post Code',
    beds: 'Beds',
    showers: 'Showers',
    propertyTypes: 'Property Types',
    carSpaces: 'Car Spaces',
    suburb: 'Suburb',
    rent: 'Rent',
    agent: 'Agent',
    availableDate: 'Available Date',
    createdAt: 'Created At',
    updatedAt: 'Updated At',
    owner: 'Owner',
    detailsOfRentalHousing: 'Details Of  Rental Housing',
    floorSpace: 'Floor space',
    basicInformation: 'Basic information',
    introduction: 'Introduction',
    housingBasicInformation: 'Housing basic information',
    pictureAndVideo: 'Picture & Video',
    introToHousingPicturesAndVideos: 'Introduction to housing pictures and videos',
    housingIntroduction: 'House introduction',
    rentalRecords: 'Rental records',
    aState: 'State',
    upcomingInspections: 'Upcoming Inspections',
    dataCreator: 'Date creator',
    currState: 'Current state',
    reserved: 'Reserved',
    hAlready: 'Already',
    house: 'House',
    studio: 'Studio',
    unit: 'Unit',
    apartment: 'Apartment',
    townHouse: 'Townhouse',
    terrace: 'Terrace',
    villa: 'Villa',
    semi: 'Semi',
    duplex: 'Duplex',
    penthouse: 'Penthouse',
    preciseCoordinates: 'Precise coordinates',
    coordinateHints: '(For Google map display)',
    conditionalFiltering: 'Conditional filtering',
    query: 'Query',
    startDate: 'Sqtart date',
    endDate: 'End date',
    regionSelection: 'Region selection',
    regionSelectionPlaceholder: 'Please select one or more regions',
    minimumRent: 'minimum rent',
    maximumRent: 'maximum rent',
    relatedAttributes: 'Related attributes',
    reset: 'Reset',
    active: 'Active',
    already: 'Already',
    address: 'Address',
    update: 'Update',
    uploadImgTip: 'Click here to upload pictures.',
    stateSelectionPlaceholder: 'Please select the current state'
  },
  address: {
    australia: 'Australia',
    melbourne: 'Aelbourne',
    vic: 'Vic',
    mooneePonds: 'Moonee Ponds',
    margaretStreet: 'Margaret Street'
  },
  owner: {
    id: 'ID',
    name: 'Name',
    surname: 'Surname',
    phoneNumber: 'Phone',
    photoThumbnail: 'Photo thumbnail',
    email: 'Email',
    idCardNum: 'ID Card',
    wechat: 'Wechat',
    propertyOwnersList: 'Property Owners List',
    identity: 'Identity',
    landlord: 'Landlord',
    vendor: 'Vendor',
    isSignContract: 'Sign Contract',
    address: 'Address',
    notSigned: 'Not signed',
    alreadySigned: 'Already signed',
    followUpState: 'Follow up state',
    followUpTime: 'Follow up time',
    intentionalCustomers: 'Intentional customers',
    noIntention: 'No intention',
    iSuccess: 'Success',
    actions: 'Action',
    details: 'Details',
    edit: 'Edit',
    agent: 'Agent',
    conditionalFiltering: 'Conditional filtering',
    phone: 'Phone',
    startDate: 'Start date',
    endDate: 'End date',
    createdDate: 'Created date',
    updatedDate: 'Updated date',
    reset: 'Reset',
    query: 'Query',
    create: 'Create',
    // placeholder
    searchByNamePlaceholder: 'Input name fragment',
    searchByPhonePlaceholder: 'Input phone fragment',
    searchByEmailPlaceholder: 'Input email fragment',
    searchByIdCardNumPlaceholder: 'Input ID Card number fragment',
    searchByWeChatPlaceholder: 'Input wechat number fragment',
    searchByAddressPlaceholder: 'Input address number fragment',
    selectByIdentityPlaceholder: 'Select customer identity',
    searchByAgentNamePlaceholder: 'Input agent name fragment'
  },
  submit: 'Submit',
  reset: 'Reset',
  create: 'Create',
  update: 'Update',
  allow: 'Allow',
  close: 'Close',
  edit: 'Edit'
}
