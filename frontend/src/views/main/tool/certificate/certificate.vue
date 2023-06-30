<script setup>
import { ref, reactive, toRefs, onMounted, defineComponent } from 'vue'

import { columns } from './conf'
import { delCertificate, getCertificate, queryCertificate } from '@/service/certificate.js'
import CertificateSearch from './certificate-search.vue'

import Table from '@/components/table/table.vue'
import CertificateModal from './certificate-modal.vue'
import { userStore } from '@/stores/user'
import { messageTip } from '@/utils'

const store = userStore()

store.$subscribe((mutation, state) => {
  if (state.isPush) {
    getPageData()
    state.isPush = false
  }
})

// 是否查询
const isQuery = ref(false)

// 列表数据
const dataSource = ref([])

//分页响应式配置
const pagination = reactive({
  current: 1, //当前页
  pageSize: 10, // 每页数量
  showSizeChanger: true,
  total: 0,
  pageSizeOptions: ['5', '50', '100', '999'],
  // size: 'small',
  showTotal: (total) => `共 ${total} 条数据`,
  onChange: (page, pageSize) => {
    pagination.current = page
    pagination.pageSize = pageSize
    getPageData()
  }
})

// 获取页面数据
const getPageData = (form = null) => {
  let offset = pagination.current
  let limit = pagination.pageSize
  if (!isQuery.value) {
    getCertificate({ offset, limit }).then((res) => {
      dataSource.value = res.data.items
      pagination.total = res.data.total
    })
  } else {
    queryCertificate({ offset, limit, domain: form?.domain }).then((res) => {
      dataSource.value = res.data.items
      pagination.total = res.data.total
    })
  }
}

// 点击查询事件
const clickQuery = (form) => {
  isQuery.value = true
  getPageData(form)
}

onMounted(() => {
  getPageData()
})

const modalRef = ref()
const modalConf = reactive({
  title: '',
  type: ''
})
// 新增
const addClick = () => {
  modalConf.title = '新增域名'
  modalConf.type = 'create'
  modalRef.value.showModal = true
}

const putClick = (record) => {
  modalConf.title = '编辑域名'
  modalConf.type = 'update'
  modalRef.value.openModal(record)
}

const delClick = async (record) => {
  const res = await delCertificate(record.id)
  messageTip(res)
  getPageData()
}

const { title, type } = toRefs(modalConf)

</script>

<template>
  <div class="certificate">
    <!-- 查询 -->
    <CertificateSearch @query-click="clickQuery" @reset-click="resetQueryForm" />

    <Table
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      :scroll="{ y: 'calc(100vh - 450px)' }"
      page-name="certificate"
      list-title="域名列表"
      @create-click="addClick"
      @update-click="putClick"
      @delete-click="delClick"
    >
    </Table>
    <CertificateModal ref="modalRef" :modal-title="title" :modal-type="type"></CertificateModal>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  /* justify-content: center; */
  align-content: center;
  margin-bottom: 16px;
  padding: 24px;
  background: #fff;
}
.data {
  margin-top: 20px;
}
</style>
