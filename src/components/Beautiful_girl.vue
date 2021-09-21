<template>
  <div class="bootstrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto col-md-12">
          <h1>こちらは美女を検索することのできるページです．</h1>
        </div>
        <div class="col-4">
          <div v-if="girl_search.type === 'default'">
            <img
              alt="Vue logo"
              class="img-fluid d-block mx-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45WpeeT5E0--ZNAmZkvrlAzAGc7BL7w1-GZsLkcnsUiiw483cr1u3zumxhg"
            />
          </div>
          <div v-else-if="girl_search.type === 'api'">
            <img
              :alt="girl_search.img_urls[girl_search.show_num]['alt']"
              class="img-fluid d-block mx-auto"
              :src="girl_search.img_urls[girl_search.show_num]['url']"
            />
            <a :href="girl_search.img_urls[girl_search.show_num]['url']" target="_blank">画像のリンクはこちら</a>
          </div>
        </div>
        <div class="col-4">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="request_imgs()"
            :disabled="girl_search.buttonstates"
          >{{ girl_search.searching }}</button>
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
    const API_URL = "https://quiet-stream-64429.herokuapp.com";
    const girl_search = reactive({
      buttonstate: false,
      buttonstates: false,
      img_url: "",
      type: "default",
      searching: "検索",
      img_urls: [{
        "url": "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg",
        "alt": "altだよ"
      }, {
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SqPTzj0qk7nQI8NXHMOILGHLvSJrytRXw&usqp=CAU",
        "alt": "altです"
      }, {
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5kqcK1GKxeqVnWimYAZC8tlVTc77qU8-fhkonDEAes7XGjeKwt4jq5B1OVU&s",
        "alt": "altなう"
      }],
      data_size: 3,
      show_num: -1,
    });


    // axios.<method> will now provide autocomplete and parameter typings
    const instance = {
      baseURL: API_URL,
      timeout: 0,
      headers: { "Content-type": "text/json" },
      // `withCredentials` indicates whether or not cross-site Access-Control requests
      // should be made using credentials
      withCredentials: false, // default
    };

    async function request_imgs() {
      girl_search.buttonstate = true;
      girl_search.searching = "検索中．．．";
      if (girl_search.show_num == girl_search.data_size - 1) {
        //apiを使った処理(データを受け取り，一つ目を表示)
        await axios
          .get("/url", instance)
          .then(function (response) {
            // handle success(axiosの処理が成功した場合に処理させたいことを記述)
            console.log(response.data.data)
            girl_search.img_urls = response.data.data;
            girl_search.buttonstate = false;
            girl_search.searching = "検索";
            girl_search.type = "api";
            girl_search.show_num = 0;
            girl_search.data_size = girl_search.img_urls.length
            console.log(girl_search)
          })
          .catch(function (error) {
            // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
            console.log(error);
            girl_search.buttonstate = false;
            girl_search.searching = "検索";
            girl_search.type = "default";
            girl_search.show_num = -1;
          });
      }
      if (girl_search.type == "default") {
        //apiを使った処理(データを受け取り，一つ目を表示)
        await axios
          .get("/url", instance)
          .then(function (response) {
            // handle success(axiosの処理が成功した場合に処理させたいことを記述)
            console.log(response.data.data)
            girl_search.img_urls = response.data.data;
            girl_search.buttonstate = false;
            girl_search.searching = "検索";
            girl_search.type = "api";
            girl_search.show_num = 0;
            girl_search.data_size = girl_search.img_urls.length
            console.log(girl_search)
          })
          .catch(function (error) {
            // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
            console.log(error);
            girl_search.buttonstate = false;
            girl_search.searching = "検索";
            girl_search.type = "default";
            girl_search.show_num = -1;
          });
      }
      else if (girl_search.type == "api") {
        //apiを使わずに画像のみを切り替える．表示する番号を変える．girl_serch.show_num
        await new Promise(resolve => setTimeout(resolve, 5000)) //ms
        girl_search.show_num++;
        girl_search.buttonstate = false;
        girl_search.searching = "検索";

      }

    }
    return {
      // response_img,
      girl_search,
      // change_imgs,
      // show_img,
      request_imgs,//本番で使いたいやつ(post)
    };
  },
});
</script>

<style>
</style>