<template>
  <div class="w-full fixed flex justify-end items-center h-16 pr-6">
    <button class="px-4 py-2">
      Gmail
    </button>
    <button class="px-4 py-2">
      Images
    </button>
    <button class="mx-2 menu"></button>
    <button class="mx-2 avatar rounded-full"></button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  height: 30px;
  width: 30px;
  background-image: url(//ssl.gstatic.com/gb/images/i1_1967ca6a.png);
  background-size: 528px 68px;
  background-position: -132px -38px;
  opacity: 0.55;
}

.avatar {
  height: 32px;
  width: 32px;
  background-image: url(https://lh3.googleusercontent.com/-bbHV5L2C8-0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdPebLzJsyt4NkfZu1uV5VZZsztaA.CMID/s32-c/photo.jpg);
}
</style>
