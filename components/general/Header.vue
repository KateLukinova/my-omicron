<template>
  <header class="header">
    <div class="header-content">
      <UIButton primary>Content</UIButton>
      <UIThemeToggle />
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@use "../../assets/scss/common" as *;

.header {
  padding: 1rem;
  background: $bg-primary;
  border-bottom: 1px solid $border-primary;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
