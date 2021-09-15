<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Bootstrap/>
    <div>ホーム2だよ</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import Bootstrap from '../components/Beautiful_gitl.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Bootstrap,
  },
})
export default class Home2 extends Vue {}

</script>
