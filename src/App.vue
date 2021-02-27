<template>
  <v-app>
    <v-app-bar
      app
      color="rgba(0,0,0,0)"
      flat
      dark
      hide-on-scroll
    >
      <v-flex class="d-flex">
        <v-btn
          icon
          large
          color="pink lighten-3"
          @click="switchLightDarkMode"
        >
          <v-icon>
            {{ $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
          </v-icon>
        </v-btn>

        <router-link to="/">
          <v-btn
            icon
            large
            color="primary"
          >
            <v-icon>
              mdi-home
            </v-icon>
          </v-btn>
        </router-link>

        <v-btn
          icon
          large
          color="primary"
          href="https://www.github.com/jsal13/"
          target="_blank"
        >
          <v-icon>
            mdi-github
          </v-icon>
        </v-btn>
      </v-flex>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  switchLightDarkMode() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }
}
</script>

<style scoped>
a:hover {
    text-decoration: none !important;
}
</style>
