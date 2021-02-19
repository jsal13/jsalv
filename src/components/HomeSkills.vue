<template>
  <div class="home-skills">
    <h2 class="mb-4">
      A Tiny Self-Assessment: What am I good at?
    </h2>

    <div class="skills-section d-flex flex-row flex-wrap">
      <home-skills-progress-section
        :title="'Data'"
        :skills="skillsData"
      />
      <home-skills-progress-section
        :title="'Devops'"
        :skills="skillsDevops"
      />
      <home-skills-progress-section
        :title="'Webdev'"
        :skills="skillsWebDev"
      />
      <home-skills-progress-section
        :title="'Game Making (Just Started!)'"
        :skills="skillsGameMaking"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeSkillsProgressSection from '@/components/HomeSkillsProgressSection.vue';

interface SkillsAttribute {
  itemType: string;
  item: string;
  experience: string;
}

const skillsData: SkillsAttribute[] = [
  { itemType: 'data', item: 'Python & Pandas', experience: 'very high' },
  { itemType: 'data', item: 'PostgreSQL', experience: 'very high' },
  { itemType: 'data', item: 'Statistics', experience: 'very high' },
  { itemType: 'data', item: 'Statistical Modeling', experience: 'very high' },
  { itemType: 'data', item: 'Linear Algebra', experience: 'very high' },
  { itemType: 'data', item: 'BI Tool Management (Looker)', experience: 'very high' },
  { itemType: 'data', item: 'Data Engineering', experience: 'high' },
  { itemType: 'data', item: 'Visualization', experience: 'average' },
  { itemType: 'data', item: 'R', experience: 'below average' },
];

const skillsDevops: SkillsAttribute[] = [
  { itemType: 'devops', item: 'Docker', experience: 'very high' },
  { itemType: 'devops', item: 'General CI/CD Infra (Jenkins, Circle, etc.)', experience: 'high' },
  { itemType: 'devops', item: 'AWS (Solutions Architect)', experience: 'average' },
  { itemType: 'devops', item: 'GCP (Cloud Engineer)', experience: 'below average' },
];

const skillsWebDev: SkillsAttribute[] = [
  { itemType: 'webdev', item: 'HTML & CSS', experience: 'very high' },
  { itemType: 'webdev', item: 'JavaScript', experience: 'high' },
  { itemType: 'webdev', item: 'vue.js', experience: 'high' },
  { itemType: 'webdev', item: 'Typescript', experience: 'average' },
];

const skillsGameMaking: SkillsAttribute[] = [
  { itemType: 'games', item: 'C#', experience: 'average' },
  { itemType: 'games', item: 'Unity', experience: 'below average' },
];

@Component({ components: { HomeSkillsProgressSection } })
export default class HomeSkills extends Vue {
  skillsData = skillsData;

  skillsDevops = skillsDevops;

  skillsWebDev = skillsWebDev;

  skillsGameMaking = skillsGameMaking;
}
</script>
<style>
.skills-section {
  gap: 2rem;
}
</style>
