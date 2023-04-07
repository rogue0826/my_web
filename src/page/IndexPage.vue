<template>
  <div class="index-page" @mousewheel="mousewheel">
    <nav-bar></nav-bar>
    <div :class="pageClassName">
      <home-page></home-page>
      <basic-information-page></basic-information-page>
      <skill-page></skill-page>
      <work-page></work-page>
      <div>
        <project-experience></project-experience>
      </div>
    </div>
    <span
      @click="clickIconDown"
      class="iconfont"
      :class="iconDown==='1'? 'icon-down-one':'icon-down-two'"
    >&#xe648;</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import NavBar from '@/page/page-child/NavBar.vue'
import HomePage from '@/page/page-child/HomePage.vue'
import BasicInformationPage from '@/page/page-child/BasicInformationPage.vue'
import SkillPage from '@/page/page-child/SkillPage.vue'
import WorkPage from '@/page/page-child/WorkPage.vue'
import ProjectExperience from '@/page/page-child/ProjectExperience.vue'
export default {
  // 组件名称
  name: 'IndexPage',
  // 局部注册的组件
  components: {
    NavBar,
    HomePage,
    BasicInformationPage,
    SkillPage,
    WorkPage,
    ProjectExperience
  },
  // 组件参数 接收来自父组件的数据
  props: {},
  // 组件状态值
  data () {
    return {
      iconDown: '1',
      lock: true,
    }
  },
  // 计算属性
  computed: {
    ...mapState(['rollValue', 'pageClassName'])
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
  mounted () {
    setInterval(() => {
      if (this.iconDown === '1') {
        this.iconDown = '2'
      } else if (this.iconDown === '2') {
        this.iconDown = '1'
      }
    }, 450)
    document.body.parentNode.style.overflow = "hidden"
    window.addEventListener("keydown", this.KeyDown, true)
  },
  // 组件方法
  methods: {
    ...mapMutations(['pageDown', 'pageUp']),
    //点击键盘上下
    KeyDown (e) {
      if (e.key === 'ArrowDown' || e.keyCode === 40) {
        this.pageDown()
      } else if (e.key === 'ArrowUp' || e.keyCode === 38) {
        this.pageUp()
      }
    },
    // 点击向下按钮
    clickIconDown () {
      this.pageDown()
    },
    // 监听鼠标滚轮滚动
    mousewheel (e) {
      if (this.lock) {
        if (e.deltaY > 0) {
          this.pageDown()
        } else if (e.deltaY < 0) {
          this.pageUp()
        }
      }
      this.lock = false
      setTimeout(() => {
        this.lock = true
      }, 1000)
    }
  }
}
</script>

<style scoped lang="less">
.index-page {
  position: relative;
  .iconfont {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    text-align: center;
    cursor: pointer;
  }
  .icon-down-one {
    top: 846px;
    font-size: 30px;
    opacity: 0.6;
    transition: all 0.35s ease-in 0s;
  }
  .icon-down-two {
    top: 840px;
    font-size: 30px;
    opacity: 0.2;
    transition: all 0.45s ease-in 0s;
  }
  .class-name-1 {
    z-index: 2;
    transform: translate(0, 0);
    transition: all 0.5s ease-in-out 0s;
  }
  .class-name-2 {
    z-index: 2;
    transform: translate(0, -937px);
    transition: all 0.5s ease-in-out 0s;
  }
  .class-name-3 {
    z-index: 2;
    transform: translate(0, -2017px);
    transition: all 0.5s ease-in-out 0s;
  }
  .class-name-4 {
    z-index: 2;
    transform: translate(0, -3097px);
    transition: all 0.5s ease-in-out 0s;
  }
  .class-name-5 {
    z-index: 2;
    transform: translate(0, -4177px);
    transition: all 0.5s ease-in-out 0s;
  }
  .class-name-6 {
    z-index: 2;
    transform: translate(0, -5257px);
    transition: all 0.5s ease-in-out 0s;
  }
  .class-name-7 {
    z-index: 2;
    transform: translate(0, -6337px);
    transition: all 0.5s ease-in-out 0s;
  }
  .class-name-8 {
    z-index: 2;
    transform: translate(0, -7417px);
    transition: all 0.5s ease-in-out 0s;
  }
}
</style>
