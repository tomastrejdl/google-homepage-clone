<template>
  <a
    v-bind:href="queryUrl"
    class="click-enable bg-google-gray-light border border-google-gray-light rounded text-gray-800 px-4 py-2 hover:border-gray-400 hover:shadow-md mr-2"
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
      return `https://google.com/search?q=${this.query.replace(/ +/g, '+')}`;
    },
  },
};
</script>
