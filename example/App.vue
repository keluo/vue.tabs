<template>
<div>
<vue-tabs active-key="2">
  <vue-tab-pane label="设备详情" pane-key="1">设备详情</vue-tab-pane>
  <vue-tab-pane label="设备分布" pane-key="2">设备分布</vue-tab-pane>
  <vue-tab-pane label="设备类型" pane-key="3">设备类型</vue-tab-pane>
  <vue-tab-pane label="审计插件" pane-key="4" :disabled="disabled">审计插件</vue-tab-pane>
</vue-tabs>

</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      disabled:true
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>
