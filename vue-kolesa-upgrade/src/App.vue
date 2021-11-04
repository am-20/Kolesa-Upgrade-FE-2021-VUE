<template>
  <div id="app">
    <div class="wrapper">
      <!-- header -->
      <header class="header">
        <logo></logo>
        <input-form></input-form>
        <user :user-info="userInfo" @fetchUser="updateUserInfo"> </user>
      </header>
      <main class="main">
        <navigation></navigation>
        <router-view></router-view>
      </main>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Logo from "./layouts/components/Logo.vue";
import Navigation from "./layouts/components/Navigation.vue";
import InputForm from "./layouts/components/Input.vue";
import User from "./layouts/components/User.vue";
import MyFooter from "./layouts/components/Footer.vue";

export default {
  components: {
    Logo,
    Navigation,
    InputForm,
    User,
    MyFooter,
  },
  name: "App",
  data() {
    return {
      score: 3945,
    };
  },
  methods: {
    setScore(price) {
      this.closeModal();
      if (price > this.score) {
        alert("У вас не хватает баллов");
      } else {
        this.score -= price;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./assets/css/style.scss";
</style>
