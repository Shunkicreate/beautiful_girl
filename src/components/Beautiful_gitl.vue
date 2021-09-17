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
              alt="Vue logo"
              class="img-fluid d-block mx-auto"
              
              :src="girl_search.img_url"
            />
            <a :href=girl_search.img_url target="_blank">画像のリンクはこちら</a>
          </div>
        </div>
        <div class="col-4">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="response_img()"
            :disabled="girl_search.buttonstate"
          >
            {{ girl_search.searching }}
          </button>
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
    const API_URL = "https://hack-z-2021-9-prettygirl.azurewebsites.net";
    const buttonstate = ref(false);
    const img_url = ref("");
    const type = ref("default");
    const girl_search = reactive({
      buttonstate: false,
      img_url: "",
      type: "default",
      searching: "検索",
    });

    // axios.<method> will now provide autocomplete and parameter typings
    const instance = {
      baseURL: API_URL,
      timeout: 100000,
      headers: { "Content-type": "text/json" },
      // `withCredentials` indicates whether or not cross-site Access-Control requests
      // should be made using credentials
      withCredentials: false, // default
    };

    async function response_img() {
      girl_search.buttonstate = true;
      girl_search.searching = "検索中．．．";
      await axios
        .get("/url", instance)
        .then(function (response) {
          // handle success(axiosの処理が成功した場合に処理させたいことを記述)
          girl_search.img_url = response.data;
          girl_search.buttonstate = false;
          girl_search.searching = "検索";
        })
        .catch(function (error) {
          // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
          console.log(error);
        });
      if (girl_search.type == "default") {
        girl_search.type = "api";
      }
    }
    return {
      response_img,
      girl_search,
    };
  },
});
</script>

<style>
</style>