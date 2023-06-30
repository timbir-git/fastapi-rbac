<script setup>
import { reactive, ref, watch } from 'vue'
// import { addCertificate, putCertificate } from './conf'

import { addCertificate, putCertificate, getCertificate } from '@/service/certificate'
import { userStore } from '@/stores/user'
// import { getRoles } from '@/service/role'
import useModal from '@/hooks/useModal'
import { messageTip } from '@/utils'
import { message } from 'ant-design-vue'
import { integer, number } from 'vue-types'

const props = defineProps({
  modalTitle: {
    // modal 右上角显示的title
    type: String
  },
  modalType: {
    // create or update
    type: String,
    default: 'create'
  }
})


const { showModal, updateId, formRef } = useModal()

/** 页面数据 */

// create form
const certificateData = reactive({
  domain: '',
  duration: 0,
  watch: true,
  remain: 0,
  remark: '',
})

// 监听modal状态是否为打开 打开就请求数据
const roleOptions = ref([])
watch(showModal, async () => {
  if (showModal.value) {
    const res = await getCertificate({ limit: 100 })
    roleOptions.value = res.data.items.map((e) => ({ label: e.domain, value: e.id }))
  }
})

// 打开modal时的处理 - 更新
const openModal = async (record) => {
  // 打开编辑的modal
  showModal.value = true
  updateId.value = record.id
  certificateData.domain = record.domain
  certificateData.duration = record.duration
  certificateData.watch = record.watch
  certificateData.remark = record.remark
  certificateData.remain = record.remain
}

// 点击modal 确定
const onOk = () => {
  //新增
  formRef.value.validateFields().then(async () => {
    let res
    if (props.modalType === 'create') {
      res = await addCertificate(certificateData)
    } else {
      res = await putCertificate(updateId.value, certificateData)
    }
    messageTip(res)
    formRef.value.resetFields()
    showModal.value = !showModal.value
    userStore().isPush = true
  })
}

// 点击modal 取消
const onCancel = () => {
  formRef.value.resetFields()
}

defineExpose({ showModal, openModal })
</script>

<template>
  <div class="modal">
    <a-modal
      v-model:visible="showModal"
      :title="modalTitle"
      layout="inline"

      ok-text="确认"
      cancel-text="取消"
      @ok="onOk"
      @cancel="onCancel"
    >
      <!-- 新建 -->
      <template v-if="modalType === 'create'">
        <a-form ref="formRef" :model="certificateData" >
          <a-form-item name="domain" label="域名" :rules="[{ required: true }]" style="width: 100%">
            <a-input v-model:value="certificateData.domain" addon-before="https://" />
          </a-form-item>
          <a-form-item name="duration" label="有效期">
            <a-input v-model:value="certificateData.duration" placeholder="开启监测会自动更新" />
          </a-form-item>
          <a-form-item name="remain" label="剩余">
            <a-input v-model:value="certificateData.remain" placeholder="开启监测会自动更新"/>
          </a-form-item>
          <a-form-item name="watch" label="监测" >
            <a-switch v-model:checked="certificateData.watch" />
          </a-form-item>
          <a-form-item label="备注" style="width: 100%">
            <a-textarea name="remain" label="备注" v-model:value="certificateData.remark"
            placeholder="备注">            
            </a-textarea>
          </a-form-item>
        </a-form>
      </template>

      <!-- 编辑 -->
      <template v-else>
        <a-form ref="formRef" :model="certificateData" >
          <a-form-item name="domain" label="域名" :rules="[{ required: true }]" style="width: 100%">
            <a-input v-model:value="certificateData.domain" addon-before="https://" />
          </a-form-item>
          <a-form-item name="duration" label="有效期">
            <a-input v-model:value="certificateData.duration" />
          </a-form-item>
          <a-form-item name="remain" label="剩余">
            <a-input v-model:value="certificateData.remain" />
          </a-form-item>
          <a-form-item name="watch" label="监测" >
            <a-switch v-model:checked="certificateData.watch" />
          </a-form-item>
          <a-form-item label="备注" style="width: 100%">
            <a-textarea name="remain" label="备注" v-model:value="certificateData.remark"
            placeholder="备注">            
            </a-textarea>
          </a-form-item>
        </a-form>
      </template>
    </a-modal>
  </div>
</template>

<style scoped>
.ant-form {
  display: flex;
  justify-content: space-between; /* 横向中间自动空间 */
  align-content: space-between; /* 竖向中间自动空间 */
  flex-wrap: wrap; /* 换行 */
}
.ant-form-item:nth-child(0) {
  width: 100%;
}

.ant-form-item {
  width: 48%;
}
.item {
  width: 100%;
}
</style>
