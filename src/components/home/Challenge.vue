<script>

export default {
  props: {
    icon: String,
    title: String,
    link: Number,
    left: Boolean,
    active: Boolean,
    current: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div id="challenge" :class="{positionLeft: left, positionRight: !left}">
    <span :class="{current: current}" id="symbol"><img @click="console.log(link)" :class="{disabled: !active}" alt="" :src="icon"></span>
    <div id="title" :class="{disabled: !active, current: current}">
      <div>{{ title }}</div>
    </div>
  </div>
</template>

<style scoped lang="sass">
#challenge
  display: flex

  &.positionRight
    flex-direction: row-reverse

#symbol
  border: 1px solid #82008c
  //box-shadow: 0 0 3px 1px rgba(130, 0, 140, 0.8)
  border-radius: 50%
  width: var(--widthContent)
  height: var(--heightContent)
  display: block

  &.current
    box-shadow: 0 0 15px 12px gold

#title
  margin: 0 1em
  padding: 0 1em
  border-radius: 100%
  border: 1px solid black

  &.disabled
    color: #555555
    border-color: #555555

  &.current
    font-weight: bold

  div
    position: relative
    top: 50%
    transform: translateY(-50%)
    height: max-content


img
  height: 2em
  position: relative
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: max-content

  &.disabled
    filter: invert(70%) sepia(95%) saturate(1%) hue-rotate(24deg) brightness(88%) contrast(99%)
</style>