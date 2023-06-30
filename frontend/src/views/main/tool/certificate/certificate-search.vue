<script setup>
import { reactive } from 'vue'
import useSearch from '@/hooks/useSearch'

const emits = defineEmits(['queryClick', 'resetClick'])

const queryForm = reactive({
  domain: ''
})
const { formRef, queryEvent, resetEvent } = useSearch(emits, queryForm)
</script>

<template>
  <div class="search">
    <a-form ref="formRef" layout="inline" :model="queryForm">
      <a-form-item label="域名" name="domain">
        <a-input placeholder="域名" v-model:value="queryForm.domain"> </a-input>
      </a-form-item>
      <a-form-item v-per="'role:query'">
        <a-button type="primary" @click="queryEvent">查询</a-button>
        <a-button style="margin-left: 10px" @click="resetEvent">重置</a-button>
      </a-form-item>
    </a-form>
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
</style>
