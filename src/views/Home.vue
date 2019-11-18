<template>
  <div
    class="min-h-screen flex flex-col items-center max-w-xl mx-auto pt-48 px-4"
  >
    <img src="@/assets/logo.jpeg" class="mb-6 w-1/2" />
    <Searchbox v-on:query="query = $event"></Searchbox>
    <div class="flex justify-center m-8">
      <GoogleSearchButton v-bind:query="query"></GoogleSearchButton>
      <FeelingLuckyButton></FeelingLuckyButton>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    query: '',
  }),
};
</script>
