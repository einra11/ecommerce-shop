<template>
<v-app light>
  <v-layout justify-center column>
  <!-- spa lower toolbar -->

<v-flex xs5>
    <v-layout fluid column>
           <v-parallax
            :src="getImgUrl('slider3.jpg')"
            height="400"
            >
            <v-layout
           align-center justify-start row fill-height
            >
              <div class="subheading mb-3 text-xs-center"><h1 class="display-4 ml-3">We got you covered !</h1></div>
            </v-layout>
           </v-parallax>
        </v-layout>
      </v-flex>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <span class="display-4">Your Local Store</span>
          <v-spacer></v-spacer>
          <span class="display-1">Is at your service....</span>
          <v-divider class="my-3"></v-divider>
          <span class="subheading">Is able to provide home services so that we can take care of you anytime anywhere.</span>
          <v-spacer></v-spacer>
          <v-btn
            class="mx-0"
            color="primary"
            large
          >
            See more
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout align-center column>
        <v-card class="ml-2 mb-3">
          <v-layout justify-center row>
           <v-flex>
          <v-img
            :src="getImgUrl('about2.jpg')"
            width="300"
            class="ml-3 mt-4"
          >
          </v-img>
          </v-flex>
          <v-flex class="mb-2">
              <v-img :src="getImgUrl('map.png')"
          height="300" contain></v-img>
                <v-card-title primary-title class="ml-1">
                  <div class="headline"><h2>Need home service?</h2></div>
                </v-card-title>
                <div class="ma-2"><span>Our service is available to serve you and help you with your needs.</span></div>
                <v-card-actions>
                  <v-btn to="/home-service" class="ml-2" light>Arrange session</v-btn>
                </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>

      </v-layout>
    </v-container> 
<v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
  <v-jumbotron>
    <v-container fill-height>
       <v-card class="elevation-2 ml-5">
          <v-layout justify-center row>
           <v-flex>
          <v-img
            src="https://images.vexels.com/media/users/3/144170/isolated/preview/219840730d3ce3fd29bba2dfcb5914a1-character-doctor-woman-by-vexels.png"
            width="80"
            class="ml-3 mt-4"
          >
          </v-img>
          </v-flex>
          <v-flex class="mb-2">
                <v-card-title primary-title class="ml-1">
                  <div class="headline"><h2>We serve only...</h2></div>
                  <div class="mt-3"><span>The best product for you to make yourself look more stunning.</span></div>
                </v-card-title>
                <v-card-actions>
                  <v-btn class="ml-2" light>Contact us</v-btn>
                </v-card-actions>
            </v-flex>
              </v-layout>
        </v-card>
        <v-layout align-center>
        <v-flex>
          <div class="ml-5">
          <span class="display-4">Shop <v-btn to="/products" large fab><v-icon large>shopping_cart</v-icon></v-btn></span>
          <v-divider class="my-3"></v-divider>
          <span class="subheading">Is able to provide home services so that we can take care of you anytime anywhere.</span>
          <v-spacer></v-spacer>
          <v-btn
            class="mx-0"
            color="primary"
            large
          >
            See more
          </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container> 
  </v-jumbotron>
</v-parallax>
</v-layout>
</v-app>
</template>
<script>
export default {
  methods: {
    getImgUrl(img) {
      return require("./assets/" + img);
    }
  }
};
</script>

