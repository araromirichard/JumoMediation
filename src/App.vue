<template>
  <v-app color="grey lighten-4">
    <v-app-bar app flat dark color="#444b74">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="sideNav = !sideNav"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer app v-model="sideNav" class="grey">
        <p>Test</p>
      </v-navigation-drawer>
      <Logo class="hidden-sm-and-down" />
      <v-spacer></v-spacer>
      <Navbar />
      <v-spacer></v-spacer>
      <Local-lang />
    </v-app-bar>
    <v-main>
      <v-container>
        <Router-view></Router-view>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
// import components

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logo from "./components/Logo.vue";
import LocalLang from "./components/LocalLang.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Logo,
    LocalLang,
  },
  data: () => ({
    sideNav: false,
  }),
};
</script>
