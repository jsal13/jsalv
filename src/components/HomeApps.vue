<template>
  <div class="home-apps">
    <h2 class="mb-2">
      Apps
    </h2>
    <v-container>
      <v-row>
        <home-apps-card
          :image="require('@/assets/images/apps/sneakbike_readme_app.png')"
          :description="descriptionREADME"
          :title="'Sneakbike README App'"
          :link="'/app/readme-gen'"

          class="mx-4"
        />
        <home-apps-card
          :image="require('@/assets/images/apps/sneakbike_readme_app.png')"
          :description="descriptionSBRaceDataTool"
          :title="'Sneakbike Race Data Tool'"
          :link="'/app/race-data-tool'"
          class="mx-4"
        />
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeAppsCard from '@/components/HomeAppsCard.vue';

const descriptionREADME = `An app which allows the user to input controls, objectives, and hints for SNES, NES, Genesis, etc., games.  
We use this for Sneakbike, the retro mystery-game racing charity.`;

const descriptionSBRaceDataTool = 'A tool we use in Sneakbike to simplify updating a few different fields with the same data.';

@Component({ components: { HomeAppsCard } })
export default class HomeApps extends Vue {
  descriptionREADME = descriptionREADME

  descriptionSBRaceDataTool = descriptionSBRaceDataTool
}
</script>
