import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue.darken3,
                secondary: colors.red.lighten4,
                error: colors.red.lighten1,
                accent: colors.indigo.base,
                warning: colors.amber.lighten3,
                success: colors.teal.darken1
            },
        },
    },
})