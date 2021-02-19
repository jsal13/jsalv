<template>
  <div class="home-skills">
    <p>
      Here's a tiny self-assessment and a reminder to myself what I can improve.
    </p>

    <table>
      <tr
        v-for="(row, idx) in skills"
        :key="`skill-${idx}`"
      >
        <td class="pr-3 py-1">
          <v-progress-circular
            :value="row.value"
            :color="progressBarColor(row.value)"
            rotate="270"
          />
        </td>
        <td><span :style="`color: ${itemTypeColor(row.itemType)}`">{{ row.item }}</span></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const colorScale: { [val: number]: string } = {
  30: '#ff5722',
  35: '#f5640b',
  40: '#e97000',
  45: '#dd7a00',
  50: '#d08300',
  55: '#c38b00',
  60: '#b59200',
  65: '#a79800',
  70: '#999d00',
  75: '#8ba200',
  80: '#7da61c',
  85: '#6ea92f',
  90: '#5eac40',
  95: '#4caf50',
};

// maybe do this in other categories: data, programming, etc.
const skills = [
  { itemType: 'coding', item: 'Python', value: 95 },
  { itemType: 'coding', item: 'PostgreSQL', value: 90 },
  { itemType: 'coding', item: 'JavaScript', value: 75 },
  { itemType: 'coding', item: 'R', value: 40 },
  { itemType: 'coding', item: 'C#', value: 30 },

  { itemType: 'programming-misc', item: 'Clean Code (It\'s important!)', value: 90 },
  { itemType: 'programming-misc', item: 'Documentation', value: 50 },

  { itemType: 'data-and-stats', item: 'Data Analytics', value: 90 },
  { itemType: 'data-and-stats', item: 'Data Engineering', value: 85 },
  { itemType: 'data-and-stats', item: 'BI Tool Management (Looker)', value: 85 },
  { itemType: 'data-and-stats', item: 'Descriptive Statistics', value: 85 },
  { itemType: 'data-and-stats', item: 'Visualization', value: 60 },

  { itemType: 'software-and-tools', item: 'Docker', value: 85 },
  { itemType: 'software-and-tools', item: 'vue.js', value: 85 },
  { itemType: 'software-and-tools', item: 'General CI/CD Infra (Jenkins, Circle, etc.)', value: 80 },
  { itemType: 'software-and-tools', item: 'Unity', value: 30 },
];

@Component
export default class HomeSkills extends Vue {
  skills = skills;

  colorScale = colorScale;

  progressBarColor(val: number) {
    return this.colorScale[val];
  }

  itemTypeColor(val: string) {
    let valColor = '';

    switch (val) {
      case 'coding':
        valColor = 'blue';
        break;
      case 'programming-misc':
        valColor = 'green';
        break;
      case 'data-and-stats':
        valColor = 'pink';
        break;
      case 'software-and-tools':
        valColor = 'purple';
        break;
      default:
        break;
    }

    return valColor;
  }
}
</script>
<style>

</style>
