<template>
  <div
    class="container"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
  width: 90%;
  margin: 0 auto;
}
</style>
