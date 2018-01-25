<template>
  <div class="vue-tab-pane" v-show="active"><slot></slot></div>
</template>

<script>
export default {
  name: 'vue-tab-pane',
  props: {
    label: String,
    paneKey:String,
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
    }
  },
  mounted () {
      this.$parent.addPanes(this);
  },
  computed: {
      active() {
        return this.$parent.active === this.paneKey;
      }
  },
  watch: {
      label() {
        this.$parent.$forceUpdate();
      }
  },
  methods: {
  }
}
</script>

<style>
.vue-tab-pane {
}
</style>

