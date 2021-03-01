<template>
  <div class="home-skills-progress-section mr-4">
    <h2 class="mb-4">
      {{ title }}
    </h2>
    <p
      v-for="(row, idx) in skills"
      :key="`skill-${idx}`"
    >
      <span :style="{color: skillColors[row.itemType]}">{{ row.item }}</span>
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

const skillColors: {[itemType: string]: string} = {
  data: '#2196f3',
  devops: '#8561c5',
  'misc-programming': '#009688',
};

@Component
export default class HomeSkillsProgressSection extends Vue {
  @Prop() skills!: SkillsAttribute

  @Prop() title!: string

  skillColors = skillColors
}
</script>

<style scoped>
.home-skills-progress-section {
  font-size: 0.8rem !important;
  width: 250px;
}

</style>
