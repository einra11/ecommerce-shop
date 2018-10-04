<template>
<v-app>
   <v-layout justify-center class="ma-5">
        <v-layout fluid column>
            <v-toolbar >
              <v-title><span class="display-2">Welcome to our product page!</span></v-title>
            </v-toolbar>
           <v-carousel hide-controls hide-delimiters>
              <v-carousel-item
                v-for="(item,i) in products"
                :key="i"
                :src="getImgUrl(item.src)"
                reverse-transition="fade"
                transition="fade"
              ></v-carousel-item>
            </v-carousel>       
           <v-container class="pa-5 elevation-5">
        <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src="getImgUrl('slider3.jpg')"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top Seller</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="orange">Explore</v-btn>
           <v-spacer></v-spacer>
           <v-btn flat color="orange">Share</v-btn>
            <v-spacer></v-spacer>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>  
          <v-layout row wrap>
            <v-flex
             v-for="product in products"
             :key="product.id"
             v-bind="{[`xs${product.flex}`]:true}"
            >
              <v-img :src="getImgUrl(product.src)" height="500"></v-img>
            </v-flex>
          </v-layout>
          </v-container>
        </v-layout>
  </v-layout>
</v-app>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    }
  },
  computed: {
    products() {
      return this.$store.getters.loadedproducts;
    }
  }
};
</script>
<style lang="stylus">
#example-custom-transition {
  .fade {
    &-enter-active, &-leave-active, &-leave-to {
      transition: 0.3s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-enter, &-leave, &-leave-to {
      opacity: 0;
    }
  }
}
</style>