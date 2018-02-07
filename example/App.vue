<template>
<div>
  <div class="block"  style="width: 300px;">
    <span class="demonstration">基本情况</span>
    <code>
    </code>
    <vue-tabs active-key="2">
      <vue-tab-pane label="设备详情" pane-key="1">设备详情</vue-tab-pane>
      <vue-tab-pane label="设备分布" pane-key="2">设备分布</vue-tab-pane>
      <vue-tab-pane label="设备类型" pane-key="3">设备类型</vue-tab-pane>
    </vue-tabs>
  </div>
  <div class="block"  style="width: 300px;">
    <span class="demonstration">禁用某一页</span>
    <code>
    </code>
    <vue-tabs active-key="2">
      <vue-tab-pane label="设备详情" pane-key="1">设备详情</vue-tab-pane>
      <vue-tab-pane label="设备分布" pane-key="2">设备分布</vue-tab-pane>
      <vue-tab-pane label="设备类型" pane-key="3"  :disabled="disabled">设备类型</vue-tab-pane>
    </vue-tabs>
  </div>
  <div class="block"  style="width: 300px;">
    <span class="demonstration">超过最大宽度时，出现滚动</span>
    <code>
    </code>
    <vue-tabs active-key="2">
      <vue-tab-pane label="设备详情" pane-key="1">设备详情</vue-tab-pane>
      <vue-tab-pane label="设备分布" pane-key="2">设备分布</vue-tab-pane>
      <vue-tab-pane label="设备类型3" pane-key="3">设备类型3</vue-tab-pane>
      <vue-tab-pane label="设备类型4" pane-key="4">设备类型4</vue-tab-pane>
      <vue-tab-pane label="设备类型5" pane-key="5">设备类型5</vue-tab-pane>
      <vue-tab-pane label="设备类型6" pane-key="6">设备类型6</vue-tab-pane>
      <vue-tab-pane label="设备类型7" pane-key="7">设备类型7</vue-tab-pane>
      <vue-tab-pane label="设备类型8" pane-key="8">设备类型8</vue-tab-pane>
      <vue-tab-pane label="设备类型9" pane-key="9">设备类型9</vue-tab-pane>
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
