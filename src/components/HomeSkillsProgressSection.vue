<template>
  <div class="home-skills-progress-section mr-4">
    <h3>{{ title }}</h3>
    <p
      v-for="(row, idx) in skills"
      :key="`skill-${idx}`"
    >
      {{ row.item }}
      <v-progress-linear
        color="blue accent-2"
        rounded
        width="100px"
        height="3"
        :value="25 * (row.experience) - 25"
      />
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface SkillsAttribute {
  itemType: string;
  item: string;
  experience: number;
}

@Component
export default class HomeSkillsProgressSection extends Vue {
  @Prop() skills!: SkillsAttribute

  @Prop() title!: string
}
</script>

<style scoped>
.home-skills-progress-section {
  font-size: 0.8rem !important;
  width: 200px;
}

</style>
