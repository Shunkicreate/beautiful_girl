<template>
  <div class="bootstrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4 align-self-end">
          <h1>こちらは関連画像を検索することのできるページです．</h1>
        </div>

        <div class="col-4 align-self-left">
          <img
            alt="Vue logo"
            class="img-fluid d-block mx-auto"
            v-bind:src="imgs[num % 2]"
          />
        </div>
        <div class="col-4 align-self-end">
          <h1>こちらは関連画像を検索することのできるページです．</h1>
        </div>

        <div class="col-4">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="num++"
          >
            検索
          </button>
        </div>
        <div class="col-4">
          <input v-model="message" placeholder="edit me" />
          <p>Message is: {{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "@vue/runtime-core";

export default defineComponent({
  name: "related_img",
  setup() {
    const message=ref()
    const num = ref(0);
    const imgs = reactive({
      0: "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg",
      1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SqPTzj0qk7nQI8NXHMOILGHLvSJrytRXw&usqp=CAU",
    });

    return {
      num,
      imgs,
      message,
    };
  },
});
</script>

<style>
</style>