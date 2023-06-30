export const columns = [
  {
    title: 'ID',
    width: 60,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
    // sorter: (a, b) => a.id - b.id,
    // sortDirections: ['ascend'],
  },
  {
    title: '名称',
    sorter: true,
    dataIndex: 'domain',
    key: 'domain',
    fixed: 'left',
    sorter: (a, b) => a.domain.length - b.domain.length,

  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '有效期',
    width: 100,
    dataIndex: 'duration',
    key: 'duration'
  },
  {
    title: '剩余期限',
    width: 150,
    sorter: true,
    dataIndex: 'remain',
    key: 'remain',
    sorter: (a, b) => a.remain - b.remain,
  },
  {
    title: '监测',
    width: 100,
    dataIndex: 'watch',
    key: 'watch',
    filters: [{
      text: '开启',
      value: true,
    }, {
      text: '关闭',
      value: false,
    }],
    filterMultiple: false,
    filterMode: 'menu',
    onFilter: (value, record) => record.watch === value,
  },
  // {
  //   title: '创建时间',
  //   dataIndex: 'created',
  //   key: 'created'
  // },
  {
    title: '更新时间',
    dataIndex: 'modified',
    key: 'modified'
  },
  {
    title: '描述',
    dataIndex: 'remark',
    key: 'remark'
  },
  {
    title: '操作',
    key: 'action'
  }
]

export const rules = {
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
    { min: 3, max: 12, message: '3-12', trigger: 'blur' }
  ],
  remark: [
    { required: true, message: '请输入描述', trigger: 'blur' },
    { min: 1, max: 20, message: '1~20', trigger: 'blur' }
  ],
  menus: [{ required: true, message: '请选择菜单', trigger: 'blur' }]
}

// // a-tree组件 字段替换 适配接口返回数据
// export const treeFieldNames = {
//   key: 'id',
//   title: 'name',
//   children: 'children'
// }

