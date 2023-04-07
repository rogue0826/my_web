<template>
  <div class="home-page">
    <div class="type-area">
      <div class="left">
        <p>Hello,I'm Zhao Hehui</p>
        <p>Web</p>
        <p>Engineer</p>
        <p>赵贺辉 & 前端工程师</p>
        <div class="shadow"></div>
        <a
          target="_blank"
          class="download-resume-btn"
          href="https://pan.baidu.com/s/1ZFtFW_OPa_ckhPteAk064A?pwd=0000"
        >下载简历</a>
        <div class="web-url">
          <div class="title">本站地址:</div>
          <span
            @mousemove="mousemoveWebUrl"
            @mouseout="mouseoutWebUrl"
            class="text"
            v-clipboard:copy="'http://zhaohehui.top'"
            v-clipboard:success="copySuccess"
            v-clipboard:error="copyLose"
          >http://zhaohehui.top</span>
          <img v-show="titleShow" src="../../assets/dianjifuzhi.png" alt />
        </div>
      </div>
      <div class="right">
        <img class="img" src="../../assets/01.png" alt />
        <p>My cat - Mimi</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: 'HomePage',
  // 局部注册的组件
  components: {},
  // 组件参数 接收来自父组件的数据
  props: {},
  // 组件状态值
  data () {
    return {
      titleShow: false
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
    copyLose () {
      this.$message.error('复制网址失败，不应该呀！')
    },
    copySuccess () {
      this.$message.success('复制网址成功，快去粘贴吧！')
    },
    mousemoveWebUrl () {
      this.titleShow = true
    },
    mouseoutWebUrl () {
      this.titleShow = false
    }
  }
}
</script>

<style scoped lang="less">
.home-page {
  background-color: #fbf8cc;
  overflow: hidden;
  .type-area {
    display: flex;
    justify-content: space-between;
    margin: 120px auto 40px;
    width: 1240px;
    height: 777px;
    .left {
      padding-top: 114px;
      line-height: 1;
      & p:nth-child(1) {
        margin-bottom: 30px;
        font-size: 28px;
        color: #03045e;
      }
      & p:nth-child(2) {
        margin-bottom: 30px;
        font-size: 100px;
        font-weight: 700;
        color: #03045e;
      }
      & p:nth-child(3) {
        margin-bottom: 30px;
        font-size: 100px;
        font-weight: 700;
        color: #03045e;
      }
      & p:nth-child(4) {
        margin-bottom: 30px;
        padding-bottom: 26px;
        font-size: 28px;
        color: #03045e;
      }
      .download-resume-btn {
        display: block;
        position: relative;
        top: -61px;
        width: 158px;
        height: 61px;
        text-align: center;
        text-decoration: none;
        line-height: 61px;
        border-radius: 6px;
        border: 1px solid #474306;
        color: #474306;
        cursor: pointer;
        &:hover {
          color: #6d6fda;
          border: 1px solid #6d6fda;
        }
      }
      .shadow {
        position: relative;
        top: 7px;
        right: -7px;
        width: 158px;
        height: 61px;
        border-radius: 6px;
        background-color: #f5ee84;
      }
      .web-url {
        display: flex;
        position: relative;
        font-size: 14px;
        color: #03045e;
        .title {
          margin-right: 10px;
        }
        .text {
          margin-right: 10px;
          cursor: pointer;
          &:hover {
            color: #6d6fda;
          }
        }
        img {
          position: absolute;
          top: 15px;
          left: 70px;
          width: 120px;
        }
      }
    }
    .right {
      position: relative;
      margin-top: 80px;
      width: 514px;
      height: 526px;
      img {
        width: 514px;
        height: 526px;
      }
      p {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 24px;
        color: #ffa101;
      }
    }
  }
}
</style>
