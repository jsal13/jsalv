<template>
  <div class="home-apps">
    <h2>Apps</h2>
    <v-container>
      <home-apps-card
        :image="require('@/assets/images/apps/sneakbike_readme_app.png')"
        :description="descriptionREADME"
        :title="'Sneakbike README App'"
      />
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeAppsCard from '@/components/HomeAppsCard.vue';

const descriptionREADME = `An app which allows the user to input controls, objectives, and hints for SNES, NES, Genesis, etc., games.  
We used this for Sneakbike, the retro mystery-game racing charity.`;

@Component({ components: { HomeAppsCard } })
export default class HomeApps extends Vue {
  descriptionREADME = descriptionREADME
}
</script>
