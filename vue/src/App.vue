<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <FormGroup :title="'Form group!'">
      Native
      <input v-model="native" placeholder="edit me!" />
      Value: {{ native }}
    </FormGroup>

    <hr />
    <!-- Custom input wrapper -->
    <h2>Simple example</h2>

    <Input v-model="name" :required="true" />

    Value: {{ name }}

    <hr />
    <!-- Custom input with native required browser navigation -->
    <h2>With native validation...</h2>
    Content
    <form ref="form">
      <Input v-model="surname" :required="true" />
      <button type="button" @click="handle">Validate</button>
    </form>
  </div>
</template>

<script>
import Input from './components/Input.vue';
import FormGroup from './components/FormGroup.vue';

export default {
  name: 'app',
  components: {
    Input,
    FormGroup
  },
  data() {
    return {
      native: '',
      name: '',
      surname: 'Sanchez'
    };
  },
  methods: {
    handle() {
      // We're using HTML5 APIs
      // eslint-disable-next-line no-console
      console.log(this.$refs.form.checkValidity(), this.$refs.form.reportValidity());
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
