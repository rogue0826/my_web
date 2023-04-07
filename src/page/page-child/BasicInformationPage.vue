<template>
  <div class="basic-information-page">
    <div class="type-area">
      <div class="right">
        <img class="wazi" src="../../assets/wazi01.jpg" alt />
        <img class="experience" src="../../assets/Experience.png" alt />
      </div>
      <div class="left">
        <img src="../../assets/Icon-hi.png" alt />
        <p>Hello I'm ZhaoHehui</p>
        <p>基本信息</p>
        <p>一个受想法和热情驱动的前端工程师，我总是注意网站和应用程序的规范与高效，梦想自己开发的软件可以改善或者改变周围人们的生活。</p>
        <div class="info-row">
          <a-icon type="home" />
          <p>男</p>
        </div>
        <div class="info-row">
          <a-icon type="home" />
          <p>22岁</p>
        </div>
        <div class="info-row">
          <a-icon type="home" />
          <p>两年工作经验</p>
        </div>
        <div class="info-row">
          <a-icon type="home" />
          <p>郑州</p>
        </div>
        <div class="info-row">
          <a-icon type="home" />
          <p>17633883245（同微信）</p>
        </div>
        <div class="info-row">
          <a-icon type="home" />
          <p>508460199@qq.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'BasicInformationPage',
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
  methods: {}
}
</script>

<style scoped lang="less">
.basic-information-page {
  width: 100%;
  height: 1080px;
  background: #fbf8cc;
  .type-area {
    display: flex;
    margin: auto;
    padding: 146px 0 0 0;
    background-color: #fff;
    width: 1240px;
    height: 100%;
    .right {
      position: relative;
      .wazi {
        width: 400px;
      }
      .experience {
        position: absolute;
        top: 484px;
        left: 132px;
        width: 300px;
      }
    }
  }
}
</style>
