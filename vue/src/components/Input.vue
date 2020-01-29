<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :id="id" v-on:input="$emit('input', $event.target.value)" :type="type ? type : 'text'" v-bind="$attrs" v-on="getListeners" />
    <!-- `v-on="$listeners"` will broke with v-model -->
  </div>
</template>

<script>
export default {
  name: 'Input',
  inheritAttrs: false,
  props: {
    id: String,
    label: String,
    type: String
  },

  computed: {
    getListeners() {
      // eslint-disable-next-line no-unused-vars
      const { input, ...others } = this.$listeners;
      return { ...others };
    }
  }
};
</script>

<style scoped></style>
