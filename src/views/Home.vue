<template>
  <div class="home">
    <v-container>
      <home-text />
    </v-container>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import HomeText from '@/components/HomeText.vue';

@Component({ components: { HomeText } })
export default class Home extends Vue {

}
</script>
