<template>
  <div class="page home">
    <div class="box left">
      <input type="text" v-model="term" />
      <Item
        v-for="item in left"
        :key="item.id"
        :item="item"
        type="left"
      />
    </div>
    <div class="box right">
      <Item
        v-for="item in $store.state.right"
        :key="item.id"
        :item="item"
        type="right"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Item } from '@/components';

@Options({
  components: { Item },
})
export default class Home extends Vue {
  term = '';

  get left(): Item[] {
    return this.term
      ? this.$store.getters.search(this.term)
      : this.$store.state.left;
  }
}
</script>
