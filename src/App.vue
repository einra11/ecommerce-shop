<template>
  <v-app>
      <v-toolbar
      light
      clipped-left
    >
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"><h4 class="display-2">Thai Beauty Products</h4></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
      <main>
      <router-view></router-view>
    </main>
    <v-footer absolute>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      variant: "variant",
      menuItems: [
        {
          icon: "shopping_cart",
          title: "Products",
          link: "/products"
        },
        { icon: "person", title: "Service", link: "/home-service" },
        { icon: "face", title: "Sign up", link: "/sign-up" },
        { icon: "lock_open", title: "Sign in", link: "/sign-in" }
      ]
    };
  }
};
</script>
