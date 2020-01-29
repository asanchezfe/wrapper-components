<template>
  <div class="parent">
    <div class="title">{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    title: String
  }
};
</script>

<style scoped>
.title {
  background-color: #639fcb;
  color: #fff;
  padding: 0.5em;
  text-transform: uppercase;
  font-weight: bold;
}

.parent {
  border: 1px solid #639fcb;
}

.parent div:last-of-type {
  padding: 1em;
}
</style>
