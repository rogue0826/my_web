<template>
  <div class="nav-bar">
    <div class="type-area">
      <div class="left" @click="pageJumps(1)">Zhao He Hui - Web</div>
      <div class="center">
        <a
          :class="item.value===rollValue ? 'active' : ''"
          href="javascript:;"
          @click="clickNavItem(item.value)"
          v-for="(item,index) in navList"
          :key="index"
        >{{item.text}}</a>
      </div>
      <div class="right" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <span class="iconfont">&#xe600;</span>
        <img v-show="WeiXinIconShow" src="../../assets/weixinerweima.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  // 组件名称
  name: 'NavBar',
  // 局部注册的组件
  components: {},
  // 组件参数 接收来自父组件的数据
  props: {},
  // 组件状态值
  data () {
    return {
      navList: [
        { text: '首页', value: 1 },
        { text: '基本信息', value: 2 },
        { text: '技能', value: 3 },
        { text: '工作经历', value: 4 },
        { text: '项目经验', value: 5 }
      ],// 导航栏列表
      WeiXinIconShow: false // 微信二维码显示状态
    }
  },
  // 计算属性
  computed: {
    ...mapState(['rollValue'])
  },
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
    ...mapMutations(['pageJumps']),
    //点击导航栏项
    clickNavItem (value) {
      this.pageJumps(value)
    },
    //鼠标移入移出微信图标
    mouseOver () {
      this.WeiXinIconShow = true
    },
    mouseLeave () {
      this.WeiXinIconShow = false
    }
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  background-color: rgba(251, 248, 204, 0.9);
  z-index: 999;
  .type-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 38px;
    margin: 0 auto;
    width: 1240px;
    height: 34px;
    .left {
      font-size: 24px;
      font-weight: 700;
      color: #03045e;
      cursor: pointer;
    }
    .center {
      a {
        padding: 0 10px 6px;
        margin-right: 50px;
        font-size: 18px;
        color: #03045e;
        text-decoration: none;
        &:hover {
          color: #6d6fda;
          border-bottom: 2px solid #6d6fda;
        }
      }
      .active {
        color: #6d6fda;
        border-bottom: 2px solid #6d6fda;
      }
    }
    .right {
      position: relative;
      width: 40px;
      height: 40px;
      cursor: pointer;
      .iconfont {
        text-align: center;
        line-height: 40px;
        font-size: 26px;
        color: #03045e;
      }
      img {
        position: absolute;
        top: 38px;
        left: -92px;
        width: 210px;
      }
    }
  }
}
</style>
