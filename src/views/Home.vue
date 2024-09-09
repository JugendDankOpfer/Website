<script>
import Challenge from "@/components/home/Challenge.vue";
import {useChallengeStore} from "@/stores/challenges.js";

const challengeStore = useChallengeStore()

export default {
  name: "Home",
  components: {Challenge: Challenge},
  data() {
    return {
      challenges: challengeStore.challenges
    }
  }
}
</script>

<template>
  <div id="container">
    <template v-for="(challenge, i) in challenges">
      <Challenge :left="i%2===0" :title="challenge.title" :icon="challenge.icon" :active="challenge.active"
                 :current="challenge.current" :link="i"/>
      <div v-if="i < challenges.length - 1" class="lineContainer">
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="sass">
.iconLock
  filter: invert(70%) sepia(95%) saturate(1%) hue-rotate(24deg) brightness(88%) contrast(99%)


.lineContainer
  height: var(--heightBetweenContent)
  width: var(--widthBetweenContent)
  position: relative
  left: calc(var(--widthContent) / 2)
  $borderColor: green

  & > *
    margin: 0
    padding: 0
    border: 0 none
    height: 50%
    width: 50%
    position: relative

  &:nth-child(4n + 2) > div:first-child
    border-bottom: 2px solid $borderColor
    border-radius: 0 0 0 100%
    top: 1px

  &:nth-child(4n + 2) > div:last-child
    border-top: 2px solid $borderColor
    border-radius: 0 100% 0 0
    left: 50%
    top: -1px

  &:nth-child(4n + 4) > div:first-child
    border-bottom: 2px solid $borderColor
    border-radius: 0 0 100% 0
    left: 50%
    top: 1px

  &:nth-child(4n + 4) > div:last-child
    border-top: 2px solid $borderColor
    border-radius: 100% 0 0 0
    top: -1px

</style>

<style scoped>

#container {
  height: 100%;
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  --heightBetweenContent: 5em;
  --widthBetweenContent: calc(100% - var(--widthContent));
  --heightContent: 3em;
  --widthContent: 3.5em
}

</style>