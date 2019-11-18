<template>
  <a
    v-bind:href="queryUrl"
    class="click-enable bg-background-secondary border border-background-primary rounded text-text-secondary px-4 py-2 hover:border-text-secondary hover:shadow-md mr-2"
  >
    Google Search
  </a>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    queryUrl: function() {
      return this.query.trim().length > 0
        ? `https://google.com/search?q=${this.query.replace(/ +/g, '+')}`
        : '#';
    },
  },
};
</script>
