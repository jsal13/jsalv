<template>
  <div class="home-skills">
    <v-container>
      <v-row>
        <v-col class="col-10 offset-1">
          <h2 class="mb-1">
            A Tiny Self-Assessment.
          </h2>

          <p class="mb-5">
            Legend:
            <span :style="{color: skillColors['data']}">Data</span>,
            <span :style="{color: skillColors['devops']}">Devops</span>,
            <span :style="{color: skillColors['misc-programming']}">Misc Programming</span>.
          </p>

          <v-container>
            <v-row>
              <v-col>
                <div class="skills-section d-flex flex-row flex-wrap">
                  <home-skills-progress-section
                    :title="'Good At:'"
                    :skills="skillsGood"
                  />
                  <home-skills-progress-section
                    :title="'Okay At:'"
                    :skills="skillsOkay"
                  />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeSkillsProgressSection from '@/components/HomeSkillsProgressSection.vue';

interface SkillsAttribute {
  // Experience is 1 - 5, scaled to 100.
  itemType: string;
  item: string;
}

const skillColors: {[itemType: string]: string} = {
  data: '#2196f3',
  code: '#00e676',
  devops: '#8561c5',
  'misc-programming': '#009688',
};

const skillsGood: SkillsAttribute[] = [
  { itemType: 'data', item: 'Python & Pandas' },
  { itemType: 'data', item: 'Stats + Linear Algebra' },
  { itemType: 'data', item: 'Data Modeling + Viz' },
  { itemType: 'data', item: 'SQL, Data Engineering, DB Architecture' },
  { itemType: 'data', item: 'BI Tools (Looker)' },
  { itemType: 'devops', item: 'Docker' },
  { itemType: 'devops', item: 'CI/CD (Jenkins, Circle)' },
  { itemType: 'misc-programming', item: 'HTML, CSS, JS (+ Vuejs)' },
];

const skillsOkay: SkillsAttribute[] = [
  { itemType: 'data', item: 'R' },
  { itemType: 'devops', item: 'AWS (Solutions Architect), GCP (Cloud Engineer)' },
  { itemType: 'misc-programming', item: 'Typescript' },
  { itemType: 'misc-programming', item: 'C#' },
  { itemType: 'misc-programming', item: 'Unity Engine' },
];

@Component({ components: { HomeSkillsProgressSection } })
export default class HomeSkills extends Vue {
  skillsGood = skillsGood;

  skillsOkay = skillsOkay;

  skillColors = skillColors;
}
</script>
<style>
.skills-section {
  gap: 2rem;
}
</style>
