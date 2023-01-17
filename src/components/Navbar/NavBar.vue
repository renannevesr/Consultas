<template>
  <header class="header-container">
    <h2>Tuca do degrade</h2>
    <div class="header-container__nav">
      <router-link to="/">Home</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
