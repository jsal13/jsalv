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
        :title="'Applied Math'"
        :skills="skillsMath"
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
  // Experience is 1 - 5, scaled to 100.
  itemType: string;
  item: string;
  experience: number;
}

const skillsData: SkillsAttribute[] = [
  { itemType: 'data', item: 'Python & Pandas', experience: 5 },
  { itemType: 'data', item: 'PostgreSQL', experience: 5 },
  { itemType: 'data', item: 'BI Tools (Looker)', experience: 5 },
  { itemType: 'data', item: 'Data Engineering', experience: 4 },
  { itemType: 'data', item: 'Data Visualization', experience: 3 },
  { itemType: 'data', item: 'R', experience: 2 },
];

const skillsMath: SkillsAttribute[] = [
  { itemType: 'data', item: 'Statistics', experience: 5 },
  { itemType: 'data', item: 'Linear Algebra', experience: 5 },
  { itemType: 'data', item: 'Data Modeling', experience: 5 },
];

const skillsDevops: SkillsAttribute[] = [
  { itemType: 'devops', item: 'Docker', experience: 5 },
  { itemType: 'devops', item: 'CI/CD (Jenkins, Circle)', experience: 4 },
  { itemType: 'devops', item: 'AWS (Solutions Architect)', experience: 3 },
  { itemType: 'devops', item: 'GCP (Cloud Engineer)', experience: 2 },
];

const skillsWebDev: SkillsAttribute[] = [
  { itemType: 'webdev', item: 'HTML & CSS', experience: 5 },
  { itemType: 'webdev', item: 'JavaScript', experience: 4 },
  { itemType: 'webdev', item: 'vue.js', experience: 4 },
  { itemType: 'webdev', item: 'Typescript', experience: 3 },
];

const skillsGameMaking: SkillsAttribute[] = [
  { itemType: 'games', item: 'C#', experience: 3 },
  { itemType: 'games', item: 'Unity', experience: 2 },
  { itemType: 'games', item: 'Level Design', experience: 2 },
];

@Component({ components: { HomeSkillsProgressSection } })
export default class HomeSkills extends Vue {
  skillsData = skillsData;

  skillsMath = skillsMath;

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
