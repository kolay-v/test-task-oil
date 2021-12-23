<template>
  <div class="component event">
    <pre>{{ event }}</pre>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    event: Object,
    type: String,
  },
})
export default class HelloWorld extends Vue {
  event!: Item

  type!: EventType
}
</script>
