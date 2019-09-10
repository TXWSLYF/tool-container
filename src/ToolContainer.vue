<template>
  <div class="tool-container">
    <component :is="toolComponent" :api="api" />
  </div>
</template>

<script>
import Api from './Api';
import toolLoader from './ToolLoader';

export default {
  name: 'ToolContainer',
  props: {
    // 工具的唯一key值，用来唯一确定一个工具的接入方、版本等信息
    toolKey: {
      type: String,
    },
    // 设置当前模式，development | production
    mode: {
      type: String,
      default: 'production',
      validator: value => ['development', 'production'].includes(value),
    },
  },
  data() {
    const api = new Api(this.$props.mode);

    return {
      toolComponent: '',
      api,
    };
  },
  created() {
    toolLoader.load(this.$props.toolKey).then(res => {
      this.toolComponent = res;
    });
  },
};
</script>

<style lang="less">
</style>