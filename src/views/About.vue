<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Relatedimg/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Relatedimg from '../components/Relatedimg.vue'; // @ is an alias to /src

@Options({
  components: {
    Relatedimg,
  },
})
export default class Home extends Vue {}

</script>