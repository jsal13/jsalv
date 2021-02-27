<template>
  <div class="home-text">
    <v-container>
      <v-container class="mb-5">
        <v-row>
          <v-col>
            <h1 class="text-h1 text-right">
              Hello.<br> I'm <span class="primary--text">James</span>.
            </h1>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <div class="hook-line">
          <img
            alt="Hello there!"
            src="@/assets/images/jsal_standing.png"
            height="64px"
            width="64px"
            class="mb-1"
          >
          <p>
            I studied <a
              href="https://en.wikipedia.org/wiki/Algebraic_topology"
              target="_blank"
            >math</a> for a while, and now I work with a bunch of data trying to learn new things and solve hard problems.
            Sometimes I'm successful.
          </p>
          <p>
            I've got a <a
              href="https://blog.jsalv.com"
              target="_blank"
            >blog</a> where I do some math and programming things.  I run a retro game racing charity called <a
              href="https://twitch.tv/sneakbike"
              target="_blank"
            > Sneakbike</a> with the help of good pals.
          </p>
        </div>
      </v-container>
      <hr>
      <home-apps />
      <hr>
      <home-skills />
    </v-container>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import HomeSkills from '@/components/HomeSkills.vue';
import HomeApps from '@/components/HomeApps.vue';

@Component({ components: { HomeSkills, HomeApps } })
export default class Home extends Vue {}
</script>

<style scoped>
.hook-line > img, hook-line > p {
  float: left;
  align-items: baseline;
}

</style>
