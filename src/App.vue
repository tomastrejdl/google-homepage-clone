<template>
  <div
    id="app"
    class="text-sm bg-background-primary text-text-primary transitin-container"
    :class="theme"
  >
    <Navbar v-bind:theme="theme" @toggleTheme="toggleTheme"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    theme: 'theme-light',
  }),
  created() {
    this.theme = localStorage.getItem('theme') || 'theme-light';
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
      localStorage.setItem('theme', this.theme);
    },
  },
};
</script>

<style src="@/assets/main.css" />
