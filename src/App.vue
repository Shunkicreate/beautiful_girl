<template>
  <div id="nav">
    <router-link to="/">美女検索</router-link> |
    <router-link to="/about">関連画像検索</router-link> |
    <router-link to="/japan">日本全国美女図鑑</router-link>
  </div>

  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #DF7373;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>

<script>
// import { defineComponent } from '@vue/composition-api'
// export default defineComponent({
//   // setup() {
    
//   // },
// })
// なんとなくここにgithubへのデプロイ方法をメモっとく
// yarn build
// yarn deploy

//ノートパソコンから入ったでー
//ロナウジーコ
</script>

