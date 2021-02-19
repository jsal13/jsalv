<template>
  <div class="home-skills-progress-section mr-4">
    <h3>{{ title }}</h3>
    <table>
      <tr
        v-for="(row, idx) in skills"
        :key="`skill-${idx}`"
      >
        <td class="pr-3 py-1">
          <v-progress-circular
            :value="progressBarValue(row.experience)"
            :color="progressBarColor(row.experience)"
            rotate="270"
          />
        </td>
        <td>{{ row.item }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface SkillsAttribute {
  itemType: string;
  item: string;
  experience: string;
}

interface ProgressBarAttribute {
  color: string;
  value: number;
}

const progressBarLookup: Record<string, ProgressBarAttribute> = {
  'very high': { color: '#0091EA', value: 95 },
  high: { color: '#00B0FF', value: 75 },
  average: { color: '#FF6E40', value: 55 },
  'below average': { color: '#FF9E80', value: 35 },
  none: { color: '#ffffff', value: 0 },
};

@Component
export default class HomeSkillsProgressSection extends Vue {
  @Prop() skills!: SkillsAttribute

  @Prop() title!: string

  progressBarLookup = progressBarLookup;

  progressBarColor(experience: string) {
    return this.progressBarLookup[experience].color;
  }

  progressBarValue(experience: string) {
    return this.progressBarLookup[experience].value;
  }
}
</script>

<style scoped>
.home-skills-progress-section {
  font-size: 0.8rem !important;
}

</style>
