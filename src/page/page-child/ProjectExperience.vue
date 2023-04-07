<template>
  <div class="project-experience">
    <div style="background: red;">项目111</div>
    <div style="background: red;">项目222</div>
    <div style="background: red;">项目333</div>
    <div style="background: red;">项目444</div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'ProjectExperience',
  // 局部注册的组件
  components: {},
  // 组件参数 接收来自父组件的数据
  props: {},
  // 组件状态值
  data () {
    return {

    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 生命周期钩子   注：没用到的钩子请自行删除
  /**
  * 组件实例创建完成，属性已绑定，但DOM还未生成，el属性还不存在
  */
  created () { },
  /**
  * el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
  * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.el 也在文档内。
  */
  mounted () { },
  // 组件方法
  methods: {
  }
}
</script>

<style scoped lang="less">
.project-experience {
  width: 100%;
  height: 4320px;
  background: #fbf8cc;
  div {
    height: 1080px;
    color: #fff;
  }
}
</style>
