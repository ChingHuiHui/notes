<template>
  <a :href="link" target="_blank">{{ title }}</a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '/'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>