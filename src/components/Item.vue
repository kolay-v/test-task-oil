<template>
  <div class="component item">
    <button v-if="type === 'right'" @click="$store.dispatch('delItem', { item })" >-</button>
    <pre>{{ item }}</pre>
    <button v-if="type === 'left'" @click="$store.dispatch('addItem', { item })" >+</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    item: Object,
    type: String,
  },
})
export default class HelloWorld extends Vue {
  item!: Item

  type!: ItemType
}
</script>
