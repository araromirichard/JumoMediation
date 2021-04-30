<template>
  <nav>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click.stop="sideNav = !sideNav"
    ></v-app-bar-nav-icon>
    <v-navigation-drawer
      app
      absolute
      v-model="sideNav"
      color="#444b74"
      class="hidden-md-and-up"
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.url"
          :to="link.url"
          rounded
          link
        >
          <v-list-item-content>
            <v-list-item-title
              btn
              class="white--text"
              v-text="link.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      links: [
        { text: "Home", url: "/" },
        { text: "About", url: "/about" },
        { text: "Service", url: "/services" },
        { text: "Fee", url: "/fees" },
        { text: "Transactional Details", url: "/transactional-details" },
        { text: "Contact", url: "/contact" },
      ],
    };
  },
};
</script>

<style>
</style>