<template>
  <div class="bootstrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto col-md-12">
          <h1>日本全国美女図鑑</h1>
          <h2 v-if="district_search.query">{{ district_search.query }}編</h2>
        </div>
        <div v-for="district in districts" :key="district" class="col-3">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="district_img(district)"
            :disabled="district_search.buttonstate"
          >{{ district }}</button>
        </div>
        <div
          v-for="(img_url,i) in district_search.img_urls"
          :key="img_url"
          class="col-4"
          :style="{ 'background-image': 'url(' + district_search.img_urls[i] + ')', 'height': '293px', 'width': '293px', 'background-size': 'cover' }"
        ></div>
        <div class="col-12">表示された画像はウェブ上からランダムに取得しているため，画像があなたの思う美女でない可能性がございます．予めご了承ください．</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, reactive } from "@vue/runtime-core";
import axios from "axios";
export default defineComponent({
  name: "district",
  setup() {
    const API_URL = "https://hack-z-2021-9-prettygirl.azurewebsites.net";
    const district_search = reactive({
      buttonstate: false,
      buttonstates: false,
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
      ],
      data_size: 3,
      show_num: -1,
      query: "",
      num: 9,
    });
    const districts = [
      "北海道",
      "東北",
      "関東",
      "中部",
      "近畿",
      "中国",
      "四国",
      "九州",
    ];
    const data = reactive({
      query: district_search.query,
      num: district_search.num,
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

    function change_imgs() {
      if (district_search.type == "default") {
        district_search.show_num += 1;
        response_img();
      } else if (district_search.type == "api") {
        show_img();
        if (district_search.show_num == 2) {
          district_search.show_num = -1;
          district_search.type = "default";
        }
      }
    }
    async function show_img() {
      district_search.buttonstates = true;
      district_search.searching = "検索中．．．";
      await new Promise((resolve) => setTimeout(resolve, 3000)); //ms
      district_search.show_num += 1;
      district_search.buttonstates = false;
      district_search.searching = "検索";
    }

    async function response_img() {
      district_search.buttonstate = true;
      district_search.searching = "検索中．．．";
      await axios
        .get("/url", instance)
        .then(function (response) {
          // handle success(axiosの処理が成功した場合に処理させたいことを記述)
          district_search.img_url = response.data;
          district_search.buttonstate = false;
          district_search.searching = "検索";
        })
        .catch(function (error) {
          // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
          console.log(error);
        });
      if (district_search.type == "default") {
        district_search.type = "api";
      }
    }

    async function response_imgs() {
      district_search.buttonstate = true;
      district_search.searching = "検索中．．．";
      await axios
        .get("/url", instance)
        .then(function (response) {
          // handle success(axiosの処理が成功した場合に処理させたいことを記述)
          district_search.img_urls = response.data.datas;
          district_search.buttonstate = false;
          district_search.searching = "検索";
        })
        .catch(function (error) {
          // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
          console.log(error);
        });
      if (district_search.type == "default") {
        district_search.type = "api";
      }
    }
    async function district_img(district: string) {
      console.log(district);

      district_search.buttonstate = true;
      district_search.searching = "検索中．．．";
      data.query = district;
      data.num = 9;
      if (district_search.type == "default") {
        //apiを使った処理(データを受け取り，一つ目を表示)
        // await axios
        //   .post("/url", data, instance)
        //   .then(function (response) {
        //     // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        //     district_search.img_urls = response.data.datas;
        //     district_search.buttonstate = false;
        //     district_search.searching = "検索";
        //     district_search.type = "api";
        //     district_search.show_num = 0;
        //   })
        //   .catch(function (error) {
        //     // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        //     console.log(error);
        //   });
        await new Promise((resolve) => setTimeout(resolve, 5000)); //ms
        district_search.show_num++;
        district_search.searching = "検索";
        district_search.buttonstate = false;
      } else if (district_search.type == "api") {
        //apiを使わずに画像のみを切り替える．表示する番号を変える．girl_serch.show_num
        await new Promise((resolve) => setTimeout(resolve, 5000)); //ms
        district_search.show_num++;
        district_search.searching = "検索";
        district_search.buttonstate = false;
        if (district_search.show_num == 2) {
          district_search.type = "default";
        }
      }
    }
    return {
      response_img,
      district_search,
      change_imgs,
      show_img,
      districts,
      district_img,
    };
  },
});
</script>

<style>
img {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;}
</style>