<template>
<v-app light>
  <v-layout justify-center column>
  <!-- spa lower toolbar -->
      <v-layout 
          justify-center row fill-height
          class="amber darken-1"
        >
        <v-card width="2500" color="blue-grey darken-2" class="white--text ml-5">
          <v-flex>
        <v-img
          src="https://images.vexels.com/media/users/3/144170/isolated/preview/219840730d3ce3fd29bba2dfcb5914a1-character-doctor-woman-by-vexels.png"
          width="100"
          class="ml-2"
        >
        </v-img>
        </v-flex>
              <v-card-title primary-title>
                <div class="headline"><h1>We serve..</h1></div>
                <div class="mt-3">To provide and to sell quality beauty products that will bring out the best in you!.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn light>Learn more</v-btn>
              </v-card-actions>
            </v-card>
      <v-container
        fluid
        grid-list-lg
      >
      <v-flex>
        <v-img
          src="https://png2.kisspng.com/sh/5b858b9fd890ce11af73ea8067a8754d/L0KzQYm3UcI6N5l8j5H0aYP2gLBuTfNieqV0h9C2cHj8g7rqifFvNZV3eelybnewc7L5lP9wdl5yed5uLXTyc8X2kr13bZR5hAQ2NXG5drTrhsQ0QGo4SaI3OUW2R4iCWMQyPWI8SqkBNkazQoS4V75xdpg=/kisspng-cartoon-physician-drawing-cartoon-male-doctor-vector-5a6fcdf4389310.9537798415172766602317.png"
          width="300"
        >
        </v-img>
        </v-flex>
      </v-container>
      <v-container
        fluid
        grid-list-lg
      >
       <v-card width="800" color="blue-grey darken-2" class="white--text elevation-5">
          <v-layout justify-center row>
          <v-flex>
        <v-img
          src="https://images.vexels.com/media/users/3/144170/isolated/preview/219840730d3ce3fd29bba2dfcb5914a1-character-doctor-woman-by-vexels.png"
          width="200"
          class="ma-4"
        >
        </v-img>
        </v-flex>
        <v-flex>
              <v-card-title primary-title>
                <div class="headline"><h1>Do you need help?</h1></div>
                 <div class="mt-5">We are always here to listen from any of your question. To provide better service
                   that you deserve!
                 </div>
              </v-card-title>
              <v-card-actions>
                <v-btn  light>Contact us</v-btn>
              </v-card-actions>
              </v-flex> 
              </v-layout>
            </v-card>
      </v-container>
    </v-layout>
<v-jumbotron class="elevation-3">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <span class="display-3">Your Local Store</span>
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
                  <div class="headline"><h2>Need home service?</h2></div>
                  <div class="mt-3"><span>Our service is available to serve you and help you with your needs.</span></div>
                </v-card-title>
                <v-card-actions>
                  <v-btn class="ml-2" light>Arrange session</v-btn>
                </v-card-actions>
            </v-flex>
              </v-layout>
        </v-card>
    </v-container> 
  </v-jumbotron>
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
          <span class="display-4">Shop <v-btn large fab><v-icon large>shopping_cart</v-icon></v-btn></span>
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
