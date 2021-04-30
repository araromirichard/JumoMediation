<template>
  <v-footer app dark padless absolute height="auto">
    <v-card class="flex" fl tile color="#444b74">
      <v-card-actions class="d-flex justify-md-center">
        <v-btn
          v-for="fLink in fLinks"
          :key="fLink"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ fLink }}
        </v-btn>
      </v-card-actions>
      
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
    fLinks: [
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