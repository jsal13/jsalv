<template>
  <div class="home-text">
    <v-container>
      <home-apps />
    </v-container>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import HomeApps from '@/components/HomeApps.vue';

@Component({ components: { HomeApps } })
export default class Apps extends Vue {}
</script>
