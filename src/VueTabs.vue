<template>
<div class="vue-tabs-wrap">
  <div class="vue-tab-wrap" ref="tabWrap" :class="hasScroll?'vue-tabs-wrap-scrolling':''">
    <div class="vue-tab-container" ref="tabContainer">
      <div class="vue-tab-animated" ref="tabAnimated" :style="'transform: translate3d('+ (0-tabTranslateX) +'px, 0px, 0px);'">
        <div class="vue-tab-item" ref="tabNav" v-for="item,index in tabItems" @click="tabClick($event,index,item.key,item.disabled)" :class="[item.disabled ? 'disabled':'',active ? (active==item.key?'active':'') : '']" v-text="item.name" ></div>
        <div class="vue-tab-active-bar" :style="'width:'+ activeBarWidth + 'px;transform:translateX('+ activeBarTransformX +'px)'"></div>
      </div>
    </div>
    <span class="vue-tab-prev" v-if="hasScroll" @click="tabScroll('prev')" :class="disabledScroll == 1 ? 'vue-tab-scroll-disabled' : ''">
      <i class="vue-icon-arrow-left"></i>
    </span>
    <span class="vue-tab-next" v-if="hasScroll" @click="tabScroll('next')" :class="disabledScroll == 2 ? 'vue-tab-scroll-disabled' : ''">
      <i class="vue-icon-arrow-right"></i>
    </span>
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
    return {
      activeBarWidth:0,
      activeBarTransformX:0,
      panes: [],
      active:this.activeKey || 0,
      hasScroll: false,
      tabTranslateX: 0,
      disabledScroll: 1, //1：prev不能点击;2：next不能点击
      //tabWrapWidth: 'auto'
    }
  },
  mounted () {
    // this.tabWrapWidth = this.$refs.tabWrap.offsetWidth + 'px';
    // const that = this;
    // window.onresize = function temp() {
    //     that.tabWrapWidth = that.$refs.tabWrap.offsetWidth + 'px';
    // };
  },
  computed: {
    tabItems(){
      let items = [];
      this.panes.forEach((item)=>{
        items.push({name:item.label,key:item.paneKey,disabled:item.disabled});
      });
      return items;
    },
  },
  updated() {
    this.update();
  },
  watch: {
    // tabWrapWidth(){
    //   this.update();
    // },
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
    tabScroll(type){
      let tabWrapWidth = this.$refs.tabWrap.offsetWidth;
      let tabAnimatedWidth = this.$refs.tabAnimated.offsetWidth;
      let tabContainerWidth = this.$refs.tabContainer.offsetWidth;
      if(type === 'prev'){
        if(tabAnimatedWidth > tabContainerWidth && this.tabTranslateX > 0){
            if(this.tabTranslateX > tabContainerWidth){
              this.tabTranslateX = this.tabTranslateX - tabContainerWidth;
              this.disabledScroll = 0;
            }else{
              this.tabTranslateX = 0;
              this.disabledScroll = 1;
            }
        }
      }else if(type === 'next'){
        if(tabAnimatedWidth > tabContainerWidth && tabAnimatedWidth > (tabContainerWidth + this.tabTranslateX)){
          if(tabAnimatedWidth > (2 * tabContainerWidth + this.tabTranslateX)){
            this.tabTranslateX = tabContainerWidth + this.tabTranslateX;
            this.disabledScroll = 0;
          }else{
            this.tabTranslateX = tabAnimatedWidth - tabContainerWidth;
            this.disabledScroll = 2;
          }
        }
      }
    },
    update(){
      if(this.$refs.tabWrap.offsetWidth < this.$refs.tabAnimated.offsetWidth){
        this.hasScroll = true;
      }else{
        this.hasScroll = false;
      }
    },
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

<style scoped>
  .vue-icon-arrow-left,.vue-icon-arrow-right{ 
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
  }
  .vue-icon-arrow-left:before {
    width: 7px;
    height: 7px;
    border: 1px solid rgba(0, 0, 0, 0.45);
    content: " ";
    display: table;
    border-width: 1px 1px 0px 0px;
    transform: rotate(-135deg);

  }
  .vue-icon-arrow-right {
    
  }
  .vue-icon-arrow-right:before {
    width: 7px;
    height: 7px;
    border: 1px solid rgba(0, 0, 0, 0.65);
    content: " ";
    display: table;
    border-width: 1px 1px 0px 0px;
    transform: rotate(45deg);
  }
  .vue-tabs-wrap {
    text-align: left;
  }
  .vue-tabs-wrap .vue-tabs-wrap-scrolling{
    padding: 0 30px; 
  }
  .vue-tab-wrap{
    position: relative;
    overflow: hidden;
    display: inline-block;
    width: 100%;
  }
  .vue-tab-wrap .vue-tab-prev,.vue-tab-wrap .vue-tab-next{
    position: absolute;
    cursor: pointer;
    line-height: 38px;
    font-size: 12px;
    color: #909399;
    top: 0px;
    padding: 0 10px;
    left: 0px;
  }
  .vue-tab-wrap .vue-tab-next {
    right: 0px;
    left: auto;
  }
  .vue-tab-wrap .vue-tab-scroll-disabled .vue-icon-arrow-left:before,.vue-tab-wrap .vue-tab-scroll-disabled .vue-icon-arrow-right:before{
    border-color: rgba(0, 0, 0, 0.25);
  }
  .vue-tab-wrap .vue-tab-prev.vue-tab-scroll-disabled,.vue-tab-wrap .vue-tab-next.vue-tab-scroll-disabled {
    cursor: not-allowed;
  }
  .vue-tab-container {
    overflow: hidden;
  }
  .vue-tab-animated{
    white-space: nowrap;
    display: inline-block;
    position:relative;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .vue-tab-animated:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
  }
  .vue-tab-animated:after,.vue-tab-animated:before {
    display: table;
    content: " ";
  }
  .vue-tab-wrap .vue-tab-item{
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

