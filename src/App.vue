<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>
    |
    <router-link :to="{ name: 'history' }">History</router-link>
    |
    <router-link :to="{ name: 'history', params: { mode: 'add' } }">Additions History</router-link>
    |
    <router-link :to="{ name: 'history', params: { mode: 'del' } }">Deletions History</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Home extends Vue {
  created(): void {
    this.$store.dispatch('fetchItems');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  display: flex;
}

pre {
  white-space: break-spaces;
}
</style>
