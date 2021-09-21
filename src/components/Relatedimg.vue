<template>
  <div class="relatedimg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4 align-self-end front_img" style="'background-image':url(https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg)">
           
        </div>

        <div class="col-4 align-self-left">
         <!-- <h1>こちらは関連画像を検索することのできるページです．</h1> --><h1>#美女</h1>
         <p> 厳選ベスト５０</p>
        </div>
        <div class="col-4 align-self-end">
          
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
          <input v-model="related_search.query" placeholder="edit me" />
          <p>query is: {{ related_search.query }}</p>
        </div>
        <div class="container">
          <div class="img-list">
            <div 
              class="img-wrap"
              v-for="n in related_search.data_len" :key="n"
            >
            <div class="col-4" :style="{'background-image': 'url('+related_search.img_urls[n]+')','height':'293px','width':'293px','background-size':'cover'}"></div>
            <!-- <img
              alt="Vue logo"
              class="img"
              :src="c"
            /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/runtime-core";
import axios from "axios";
export default defineComponent({
  name: "related_img",
  setup() {
    const API_URL = "https://hack-z-2021-9-prettygirl.azurewebsites.net";
    const num = ref(0);
    const imgs = reactive({
      0: "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg",
      1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SqPTzj0qk7nQI8NXHMOILGHLvSJrytRXw&usqp=CAU",
    });
    const related_search = reactive({
      buttonstate: false,
      img_url: "",
      type: "default",
      searching: "検索",
      img_urls: [
        "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SqPTzj0qk7nQI8NXHMOILGHLvSJrytRXw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5kqcK1GKxeqVnWimYAZC8tlVTc77qU8-fhkonDEAes7XGjeKwt4jq5B1OVU&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsejxbMF_4AZd2JxbLFNUFBw2_hPR5_K6eTXpUnX1RpH1Z27ajOdbrFXcnAQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0V2VpQsArc2dUWjBU47fy-sKorhFdEt_I4YiTmHvaEHLs0DvqIH23wWYe0P0&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauzWzHPngmvwdEJSXR4YTddyh3YrBpj4JStQJUrHgpQOGmmeICjo4qQaSnig&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36yTCvRO2dTANUwYUoFsiv49EH481YyDU5b6CzAU-PszULJOnT_XVqG-_D0c&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkdYN_HavsKCo9UQolVxFaqehh8RGMttAdoDCKuE_ooK5wf14qhTLl-KT8A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETbROBmSKKeVFq5N_7dCmcDlDdXU5zIxk-E47nskQnAIanVLMjhuDiDMicg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpwAvadQkvK12RBqQLyp1ZNn14UJAZxozwwh6agjytZwFQPCJUycSLthfghU&s",
      ],
      data_len: 9,
      query: "",
    });
    // axios.<method> will now provide autocomplete and parameter typings
    const instance = {
      baseURL: API_URL,
      timeout: 0,
      headers: { "Content-type": "text/json" },
      // `withCredentials` indicates whether or not cross-site Access-Control requests
      // should be made using credentials
      withCredentials: false, // default
      // `data` is the data to be sent as the request body
      // Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
      // When no `transformRequest` is set, must be of one of the following types:
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - Browser only: FormData, File, Blob
      // - Node only: Stream, Buffer
      data: {
        firstName: "Fred",
      },
      // // `onUploadProgress` allows handling of progress events for uploads
      // // browser only
      // onUploadProgress: function (progressEvent) {
      //   // Do whatever you want with the native progress event
      // },

      // // `onDownloadProgress` allows handling of progress events for downloads
      // // browser only
      // onDownloadProgress: function (progressEvent) {
      //   // Do whatever you want with the native progress event
      // },
    };

    async function response_imgs() {
      related_search.buttonstate = true;
      related_search.searching = "検索中．．．";
      await axios
        .post("/url", instance)
        .then(function (response) {
          // handle success(axiosの処理が成功した場合に処理させたいことを記述)
          related_search.img_url = response.data;
          related_search.buttonstate = false;
          related_search.searching = "検索";
          related_search.data_len = response.data.length();
          for (var i = 0; i < related_search.data_len; i++) {
            related_search.img_urls[i] = response.data[i];
          }
        })
        .catch(function (error) {
          // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
          console.log(error);
        });
      if (related_search.type == "default") {
        related_search.type = "api";
      }
    }
    return {
      num,
      imgs,
      response_imgs,
      related_search,
    };
  },
});
</script>

<style>
.img-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.img-wrap {
  width: 100%;
}

 .img {
   width: 100%;
   object-fit: cover;
 }

.front_img{
  
  border-radius: 50%;
      width: 250px;
      height: 250px;
      background-image:url("https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg")
      /* object-fit: cover;円で表示している領域全体に画像を表示する */
      /* border: 9px solid #00cc00;枠線追加 */
}
.col-4 h1 {
  padding-top: 50px;
  padding-right:100px;
}
.col-4 p {
  
  padding-right:100px;
}
</style>