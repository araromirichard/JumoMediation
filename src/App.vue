<template>
  <v-app color="grey lighten-4">
    <v-app-bar app flat dark color="#444b74">
      <Logo class="hidden-sm-and-down" />
      <SideNav/>
      <v-spacer></v-spacer>
      <Navbar />
      <v-spacer></v-spacer>
      <Local-lang />
    </v-app-bar>
    <v-main pa-0>
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
import SideNav from "./components/SideNav";
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
    SideNav
  },
  data () {
    return {
   
  }
  },


  mounted() {
    console.log ({vuetify:this.$vuetify});
  }
}
</script>
