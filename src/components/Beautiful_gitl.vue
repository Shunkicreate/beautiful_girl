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
        <div class="col-4 align-self-left">
          <img
            alt="Vue logo"
            class="img-fluid d-block mx-auto"
            v-bind:src="img_url.data"
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
            v-bind:disabled="buttonstate"
          >
            検索
          </button>
        </div>
      </div>
      <div class="col-4">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="response_img()"
        >
          axios
        </button>
        <div>
        {{img_url}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref, reactive } from "@vue/runtime-core";
import axios from "axios";
export default defineComponent({
  name: "bootstrap",
  setup() {
    const API_URL = "https://hack-z-2021-9-prettygirl.azurewebsites.net/url";
    const img = ref(
      "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg"
    );
    const change_img = () => {
      img.value =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SqPTzj0qk7nQI8NXHMOILGHLvSJrytRXw&usqp=CAU";
    };
    const num = ref(0);
    const imgs = reactive({
      0: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45WpeeT5E0--ZNAmZkvrlAzAGc7BL7w1-GZsLkcnsUiiw483cr1u3zumxhg&s",
      1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SqPTzj0qk7nQI8NXHMOILGHLvSJrytRXw&usqp=CAU",
    });
    const buttonstate=ref(true)



    // const change_imgs = (imput_num) => {
    //   console.log("before", imput_num);
    //   if (imput_num == 0) {
    //     imput_num = 1;
    //   } else if (imput_num == 1) {
    //     imput_num = 0;
    //   }
    //   console.log("after", imput_num);
    // };



    const img_url = ref(
      "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg"
    );


  //  const img_url = ref(
  //    "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg"
  //  );

    const back_img_url=ref("")

    // axios.<method> will now provide autocomplete and parameter typings
    const instance = {
      // baseURL: "https://api.coindesk.com/v1/bpi/currentprice.json",
      // baseURL: "https://hakadorikun.herokuapp.com",
      // baseURL: "https://api.github.com",
      baseURL: "https://hack-z-2021-9-prettygirl.azurewebsites.net",
      timeout: 100000,
      headers: { 'Content-type': 'text/json' },
      // `withCredentials` indicates whether or not cross-site Access-Control requests
      // should be made using credentials
      withCredentials: false, // default
    };
    async function response_img() {
      // img_url.value = await axios.get(API_URL,withCredentials=false);
      // console.log(img_url.value);
      // img_url.value = await axios.get('/users/octocat/orgs/octokit/repos',instance);
      img_url.value = await axios.get('/url',instance).then(
      );
      
    }
    // onMounted(() => {
    //     getRate()
    // })




    return {
      img,
      change_img,

      num,
      imgs,
      // change_imgs,
      img_url,
      back_img_url,
      response_img,
      buttonstate,
    };
  },
});
</script>

<style>
</style>