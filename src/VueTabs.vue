<template>
<div class="vue-tabs-wrap">
  <div class="vue-tab-wrap">
    <div class="vue-tab-item" ref="tabNav" v-for="item,index in tabItems" @click="tabClick($event,index,item.key,item.disabled)" :class="[item.disabled ? 'disabled':'',active ? (active==item.key?'active':'') : '']" v-text="item.name" ></div>
    <div class="vue-tab-active-bar" :style="'width:'+ activeBarWidth + 'px;transform:translateX('+ activeBarTransformX +'px)'"></div>
  </div>
  <div class="vue-tab-pane-wrap">
    <slot></slot>
  </div>
</div>
</template>

<script>
import componentTabPane from './VueTabPane.vue'
export default {
  name: 'vue-tabs',
  components:{
    'vue-tab-pane':componentTabPane
  },
  props: {
    activeKey:String
  },
  data () {
    console.log(this);
    return {
      activeBarWidth:0,
      activeBarTransformX:0,
      panes: [],
      active:this.activeKey || 0
    }
  },
  mounted () {
  },
  computed: {
    tabItems(){
      let items = [];
      this.panes.forEach((item)=>{
        items.push({name:item.label,key:item.paneKey,disabled:item.disabled});
      });
      return items;
    }
  },
  watch: {
    panes(){
      let key = this.active || this.panes[0].paneKey;
      let initIndex = 0;
      this.panes.forEach((item,index)=>{
        if(item.paneKey && (item.paneKey === key)){
          initIndex = index
        }
      });
      this.$nextTick(()=>{
        if(this.$refs.tabNav){
          this.tabClick(this.$refs.tabNav[initIndex],initIndex,this.panes[initIndex].paneKey);
        }
      });
    }
  },
  methods: {
    addPanes(item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      this.panes.splice(index, 0, item);
    },
    tabClick:function(el,id,key,disabled){
      if(disabled){
        return false;
      }
      this.active = key || 0;
      this.activeBarWidth = (el.target ? el.target.offsetWidth : el.offsetWidth);
      this.activeBarTransformX = (el.target ? el.target.offsetLeft : el.offsetLeft);
    }
  }
}
</script>

<style>
  .vue-tab-wrap{
    position:relative;
    overflow: hidden;
    padding-top:20px;
  }
  .vue-tab-wrap .vue-tab-item{
    float:left;
    padding: 0 10px;
    margin: 0 10px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    cursor: pointer;
  }
  .vue-tab-wrap .vue-tab-item.disabled{
    color: rgba(0,0,0,.25);
  }
  .vue-tab-wrap .vue-tab-item.active{
    color: #409eff;
  }
  .vue-tab-wrap .vue-tab-item:first-child{
    margin-left: 0px;
  }
  .vue-tab-wrap .vue-tab-item:last-child{
    margin-right: 0px;
  }
  .vue-tab-wrap:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
  }
  .vue-tab-wrap .vue-tab-active-bar{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #409eff;
    z-index: 2;
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
  }
</style>

