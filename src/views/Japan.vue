<template>
  <div class="about">
    <District/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import District from '../components/District.vue'; // @ is an alias to /src

@Options({
  components: {
    District,
  },
})
export default class Home extends Vue {}

</script>