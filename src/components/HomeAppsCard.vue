<template>
  <div class="home-apps-card">
    <div
      class="card"
      style="width: 250px;"
    >
      <router-link to="/app/readme-gen">
        <img
          :src="image"
          class="card-img-top"
          :alt="title"
          width="200"
        >
      </router-link>
      <div class="card-body">
        <h5 class="card-title">
          <router-link to="/app/readme-gen">
            {{ title }}
          </router-link>
        </h5>
        <p class="card-text">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeAppsCard extends Vue {
  @Prop() image!: string;

  @Prop() description!: string;

  @Prop() alt!: string;

  @Prop() title!: string;
}
</script>

<style scoped>
.card-text {
  font-size: 0.75rem;
}

img {

  border: 1px solid #2196f3;
}

</style>
