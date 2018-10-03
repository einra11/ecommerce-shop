import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import Products from "../components/Shop-related/Products";
import Services from "../components/Shop-related/Home-service";
import Sign_up from "../components/User/Sign-up";
import Sign_in from "../components/User/Sign-in";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/products",
      name: "Products",
      component: Products
    },
    {
      path: "/home-service",
      name: "Services",
      component: Services
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: Sign_up
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: Sign_in
    }
  ],
  mode: "history"
});
