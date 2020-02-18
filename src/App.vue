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
// import store from '@/store/store';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState(['theme']),
  },
  created() {
    this.setTheme(localStorage.getItem('theme') || 'theme-light');
  },
  methods: {
    ...mapActions(['setTheme']),
    toggleTheme() {
      const theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
      localStorage.setItem('theme', theme);
      this.setTheme(theme);
    },
  },
};
</script>

<style src="@/assets/main.css" />
