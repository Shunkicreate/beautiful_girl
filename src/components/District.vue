<template>
  <div class="bootstrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto col-md-12">
          <h1>日本全国美女図鑑</h1>
          <h2 v-if="district_search.query">{{ district_search.query }}編</h2>
        </div>
        <div v-for="key in keys" :key="key" class="col-3">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="response_imgs(key)"
            :disabled="district_search.buttonstate"
          >{{ key }}</button>
        </div>
        <div
          v-for="(img_url,index) in district_search.urls"
          :key="img_url"
          class="col-4"
          :style="{ 'background-image': 'url(' + district_search.urls[index] + ')', 'height': '293px', 'width': '293px', 'background-size': 'cover' }"
        ><div><a :href="district_search.tweets[index]"></a></div></div>

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
    const API_URL = "https://quiet-stream-64429.herokuapp.com";
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
      pic_datas: [{
        "tweet": "tweet",
        "url": "url"
      }],
      tweets: [""],
      urls: [""],

    });
    const districts = reactive({
      "北海道": 0,
      "東北": 1,
      "関東": 2,
      "中部": 3,
      "近畿": 4,
      "中国": 5,
      "四国": 6,
      "九州": 7,
    });
    const district_lists = ["北海道", "東北", "関東", "中部", "近畿", "中国", "四国", "九州"]

    function serch_num(areas: string) {
      for (var i = 0; i < district_lists.length; i++) {
        if (areas == district_lists[i]) {
          return i;
        }
      }
      return 0
    }
    const keys = Object.keys(districts)
    const data = reactive({
      query: district_search.query,
      num: district_search.num,
    });
    async function response_imgs(query: string) {
      district_search.buttonstate = true;
      district_search.searching = "検索中．．．";
      console.log("start axios")
      await axios({
        method: 'post',
        url: 'https://cookpad-mercy.azurewebsites.net/',
        data: {
          place: serch_num(query),
        }
      })
        .then(function (response) {
          // handle success(axiosの処理が成功した場合に処理させたいことを記述)
          district_search.pic_datas = response.data.data;
          console.log(district_search.pic_datas)
          for (var i = 0; i < district_search.pic_datas.length; i++) {
            //district_search.tweets.splice[0,1]
            district_search.tweets[i]=district_search.pic_datas[i]['tweet']
            district_search.urls[i]=district_search.pic_datas[i]['url']
          }
          console.log(district_search.tweets)
          district_search.buttonstate=false;
          district_search.searching="検索";
          district_search.query=query
        })
        .catch(function (error) {
          // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
          console.log(error);
        });


      district_search.buttonstate = false;
      district_search.searching = "検索";
    }
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
        .get("/url")
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


    return {
      response_img,
      district_search,
      change_imgs,
      show_img,
      districts,
      response_imgs,
      keys,
      district_lists,
      serch_num,

    };
  },
});
</script>

<style>
<<<<<<< HEAD

=======
img {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
>>>>>>> eeea10319ef7fd2d4d3747e001042da6636112a6
</style>