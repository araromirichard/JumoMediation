<template>
  <nav>
    <v-toolbar dark flat color="#444b74">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          rounded
          caption
          small
          class="font-weight-light"
          :to="{ name: 'Home' }"
        >
          Home
        </v-btn>

        <v-btn
          text
          rounded
          caption
          small
          class="font-weight-light"
          :to="{ name: 'About' }"
        >
          About
        </v-btn>

        <v-btn
          text
          rounded
          caption
          small
          class="font-weight-light"
          :to="{ name: 'Services' }"
        >
          Service
        </v-btn>

        <v-btn
          text
          rounded
          caption
          small
          class="font-weight-light"
          :to="{ name: 'Fees' }"
        >
          Fee
        </v-btn>

        <v-btn
          text
          rounded
          caption
          small
          class="font-weight-light"
          :to="{ name: 'TransactionalDetails' }"
        >
          Transactional Details
        </v-btn>

        <v-btn
          text
          rounded
          caption
          small
          class="font-weight-light"
          :to="{ name: 'Contact' }"
        >
          Contact
        </v-btn>
        <v-menu app open-on-hover bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
              class="font-weight-light"
              small
            >
              More
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.lTitle"
              router
              :to="item.url"
            >
              <v-list-item-title class="font-weight-light">{{
                item.lTitle
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      items: [
        { lTitle: "Partnership", url: "partnership" },
        { lTitle: "Publications", url: "publications" },
        { lTitle: "Mediation Laws", url: "mediation-laws" },
      ],
    };
  },
};
</script>