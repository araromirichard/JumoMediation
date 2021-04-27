<template>
  <v-footer app dark padless absolute>
    <v-card class="flex" flat tile color="#444b74">
      <v-card-action class="d-flex justify-md-center">
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-card-action>
      <v-divider></v-divider>
      <v-card-title>
        <span class="caption px-8"
          >Get connected with us on social networks!</span
        >

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="16px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-1 white--text text-center blue-grey darken-3">
        {{ new Date().getFullYear() }} —
        <span class="caption">website design by</span>
        <strong class="caption font-weight-thin"> Krobotechnologies Ltd</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    links: [
      "Home",
      "About",
      "Services",
      "Fees",
      "Transactional Details",
      "Contact",
    ],
  }),
};
</script>