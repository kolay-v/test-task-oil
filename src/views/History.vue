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
import Event from '@/components/Event.vue'; // @ is an alias to /src

@Options({
  components: {
    Event,
  },
  computed: {
    events() {
      switch (this.$route.params.mode) {
        case 'add': return this.$store.getters.additions;
        case 'del': return this.$store.getters.deletions;
        default: return this.$store.state.history;
      }
    },
  },
})
export default class History extends Vue {}
</script>
