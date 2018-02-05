<template>
<div>
  <div class="block"  style="width: 80%;">
    <span class="demonstration">基本情况</span>
    <code>
    </code>
    <vue-tabs active-key="2">
      <vue-tab-pane label="设备详情" pane-key="1">设备详情</vue-tab-pane>
      <vue-tab-pane label="设备分布" pane-key="2">设备分布</vue-tab-pane>
      <vue-tab-pane label="设备类型" pane-key="3">设备类型</vue-tab-pane>
    </vue-tabs>
  </div>
  <div class="block"  style="width: 80%;">
    <span class="demonstration">禁用某一页</span>
    <code>
    </code>
    <vue-tabs active-key="2">
      <vue-tab-pane label="设备详情" pane-key="1">设备详情</vue-tab-pane>
      <vue-tab-pane label="设备分布" pane-key="2">设备分布</vue-tab-pane>
      <vue-tab-pane label="设备类型" pane-key="3"  :disabled="disabled">设备类型</vue-tab-pane>
    </vue-tabs>
  </div>
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
<style>
a {
  color: #5b9bd1;
  text-shadow: none;
  text-decoration: none;
  cursor: pointer;
}
a:hover{
  color: #3175af;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
.block {
    padding: 30px 0;
    text-align: center;
    -ms-flex: 1;
    flex: 1;
}
.block .vue-tab-pane-wrap{
  text-align: left;
}
</style>
