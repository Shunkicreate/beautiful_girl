<template>
  <div class="bootstrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4 align-self-end">
          <h1>こちらは美女を検索することのできるページです．</h1>
        </div>
        <!-- <div class="col-4 align-self-left">
          <img
            alt="Vue logo"
            class="img-fluid d-block mx-auto"
            v-bind:src="img"
          />
        </div> -->
        <div class="col-4 align-self-left">
          <img
            alt="Vue logo"
            class="img-fluid d-block mx-auto"
            v-bind:src="imgs[num % 2]"
          />
        </div>
        <div class="col-4 align-self-end">
          <h1>こちらは美女を検索することのできるページです．</h1>
        </div>
        <!-- <div class="col-4">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="change_img()"
          >
            検索
          </button>
        </div> -->
        <div class="col-4">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="num++"
          >
            検索
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "@vue/runtime-core";

export default defineComponent({
  name: "bootstrap",
  setup() {
    const img = ref(
      "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg"
    );
    const change_img = () => {
      img.value =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SqPTzj0qk7nQI8NXHMOILGHLvSJrytRXw&usqp=CAU";
    };
    const num = ref(0);
    const imgs = reactive({
      0: "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg",
      1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SqPTzj0qk7nQI8NXHMOILGHLvSJrytRXw&usqp=CAU",
    });
    // const change_imgs = (imput_num) => {
    //   console.log("before", imput_num);
    //   if (imput_num == 0) {
    //     imput_num = 1;
    //   } else if (imput_num == 1) {
    //     imput_num = 0;
    //   }
    //   console.log("after", imput_num);
    // };
    return {
      img,
      change_img,
      num,
      imgs,
      // change_imgs,
    };
  },
});
</script>

<style>
</style>