<template>
  <a
    target="_blank"
    v-bind:href="site"
    @click="nextSite()"
    class="click-enable bg-background-secondary border border-background-secondary rounded text-text-secondary px-4 py-2 hover:border-text-secondary hover:shadow-md ml-2"
  >
    I'm Feeling Lucky
  </a>
</template>

<script>
import sites from '@/assets/useless-sites.json';

export default {
  data: () => ({
    site: '',
  }),
  methods: {
    nextSite: function() {
      this.site = sites.sites[Math.floor(Math.random() * sites.sites.length)];
    },
  },
};
</script>
