<template>
  <div class="relatedimg">
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-4 front_img"
          style="
            'background-image':url(https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg) ;
          "
        ></div>

        <div class="col-4 align-self-left">
          <h1>#{{ related_search.query }}</h1>
          <p>厳選ベスト9</p>
        </div>
        <div class="col-4 align-self-end"></div>
        <div class="col-4 align-self-end"></div>

        <div class="col-4 botan">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="response_imgs(related_search.query, 3)"
            :disabled="related_search.buttonstate"
          >{{related_search.searching}}</button>
        </div>
        <div class="col-4 botan">
          <input
            v-model="related_search.query"
            @keyup.enter="response_imgs(related_search.query, 3)"
            placeholder="edit me"
            :disabled="related_search.buttonstate"
          />
        </div>
        <div class="container">
          <div class="img-list">
            <div class="img-wrap" v-for="n in related_search.pic_num" :key="n">
              <div
                class="col-4"
                :style="{
                  backgroundImage: 'url(' + related_search.img_urls[n] + ')',
                  height: '293px',
                  width: '293px',
                  'background-size': 'cover',
                }"
              ></div>
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
      img_alt_data: [
        {
          url: "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg",
          alt: "altだよ",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SqPTzj0qk7nQI8NXHMOILGHLvSJrytRXw&usqp=CAU",
          alt: "altだよ",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5kqcK1GKxeqVnWimYAZC8tlVTc77qU8-fhkonDEAes7XGjeKwt4jq5B1OVU&s",
          alt: "altだよ",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsejxbMF_4AZd2JxbLFNUFBw2_hPR5_K6eTXpUnX1RpH1Z27ajOdbrFXcnAQ&s",
          alt: "altだよ",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0V2VpQsArc2dUWjBU47fy-sKorhFdEt_I4YiTmHvaEHLs0DvqIH23wWYe0P0&s",
          alt: "altだよ",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauzWzHPngmvwdEJSXR4YTddyh3YrBpj4JStQJUrHgpQOGmmeICjo4qQaSnig&s",
          alt: "altだよ",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36yTCvRO2dTANUwYUoFsiv49EH481YyDU5b6CzAU-PszULJOnT_XVqG-_D0c&s",
          alt: "altだよ",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkdYN_HavsKCo9UQolVxFaqehh8RGMttAdoDCKuE_ooK5wf14qhTLl-KT8A&s",
          alt: "altだよ",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETbROBmSKKeVFq5N_7dCmcDlDdXU5zIxk-E47nskQnAIanVLMjhuDiDMicg&s",
          alt: "altだよ",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpwAvadQkvK12RBqQLyp1ZNn14UJAZxozwwh6agjytZwFQPCJUycSLthfghU&s",
          alt: "altだよ",
        },
      ],
      data_len: 0, //取得したデータの長さ
      query: "美女",
      img_urls: [""],
      alts: [""],
      pic_num: 0, //表示する画像の量
    });

    async function response_imgs(query: string, num: number) {
      related_search.buttonstate = true;
      related_search.searching = "検索中．．．";
      related_search.pic_num = 0;
      related_search.img_urls = [""]
      related_search.alts = [""]
      while (related_search.img_urls.length < 9) {
        console.log("start axios");
        await axios({
          method: "post",
          url: "https://quiet-stream-64429.herokuapp.com/url",
          data: {
            query: query,
            num: num,
          },
        })
          .then(function (response) {
            // handle success(axiosの処理が成功した場合に処理させたいことを記述)
            related_search.img_alt_data = response.data.data;

            related_search.data_len = related_search.img_alt_data.length;
            for (var i = 0; i < related_search.data_len; i++) {
              related_search.img_urls.push(
                related_search.img_alt_data[i]["url"]
              );
              related_search.alts.push(related_search.img_alt_data[i]["alt"]);
            }
            console.log(related_search.img_alt_data);
            related_search.pic_num += related_search.data_len;
          })
          .catch(function (error) {
            // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
            console.log(error);
          });
        // if (related_search.type == "default") {
        //   related_search.type = "api";
        // }
        if (related_search.pic_num > 10) {
          related_search.pic_num = 10;
        }
      }
      related_search.buttonstate = false;
      related_search.searching = "検索";
      related_search.type="default";
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
.row {
  padding-top: 130px;
}
.row img {
  
}
.img-list {
  display: flex;
  /* grid-template-columns: repeat(3, 1fr); */
  flex-wrap: wrap;
  /* gap: 20px; */
  width: 900px;
  margin: 0 auto;
}

.img-wrap {
  /* width: 100%; */
  width: 293px;
  /* padding-bottom:30px; */
}

.img {
  /* width: 100%; */
  object-fit: cover;
}

.front_img {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  background-image: url("https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/thumbnail_image_path/21342/27642ae5002a8b23758c83760774ec.jpg");
  background-position: center;
  /* object-fit: cover;円で表示している領域全体に画像を表示する */
  /* border: 9px solid #00cc00;枠線追加 */
  margin-left: 165px;
}
.col-4 h1 {
  padding-top: 50px;
  padding-right: 100px;
}
.col-4 p {
  padding-right: 100px;
}
.botan {
  padding-bottom: 80px;
}
.col-4 {
  padding-left: 100px;
}
</style>