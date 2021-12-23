<template>
  <div class="page history">
    <h1>History</h1>
    <div class="box event">
      <Event
        v-for="event in events"
        :key="`${event.item.id}|${event.at}`"
        :event="event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Event } from '@/components';

@Options({
  components: { Event },
})
export default class History extends Vue {
  get events(): Event[] {
    switch (this.$route.params.mode) {
      case 'add': return this.$store.getters.additions;
      case 'del': return this.$store.getters.deletions;
      default: return this.$store.state.history;
    }
  }
}
</script>
