import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

interface State {
  left: Item[]
  right: Item[]
  history: Event[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    left: [],
    right: [],
    history: [],
  },

  getters: {
    additions: (state) => state.history.filter(({ type }) => type === 'add'),

    deletions: (state) => state.history.filter(({ type }) => type === 'del'),

    search: (state) => (term: string) => {
      const results: CountedItem[] = state.left.map((item: Item) => {
        const searchString: string = [item.answer, ...item.clues].join(' ');
        const matches = [...searchString.matchAll(new RegExp(`${term}`, 'gi'))];
        return { count: matches.length, item };
      })
        .filter(({ count }) => count)
        .sort((a, b) => b.count - a.count);

      return results.map(({ item }) => item);
    },
  },

  mutations: {
    STORE_ITEMS(state, items: Item[]) {
      state.left = items;
    },

    ADD_ITEM(state, id: number) {
      const index = state.left.findIndex((item: Item) => item.id === id);
      const [item] = state.left.splice(index, 1);
      state.right.push(item);
    },

    DEL_ITEM(state, id: number) {
      const index = state.right.findIndex((item: Item) => item.id === id);
      const [item] = state.right.splice(index, 1);
      state.left.push(item);
    },

    PUSH_HISTORY(state, event: Event) {
      state.history.push(event);
    },
  },

  actions: {
    async fetchItems({ commit }) {
      const response = await fetch('https://crossword.teacherlight.ru:3443/oil');
      commit('STORE_ITEMS', await response.json());
    },

    async addItem({ commit }, { item }) {
      commit('ADD_ITEM', item.id);
      commit('PUSH_HISTORY', { type: 'add', at: new Date(), item });
    },

    async delItem({ commit }, { item }) {
      commit('DEL_ITEM', item.id);
      commit('PUSH_HISTORY', { type: 'del', at: new Date(), item });
    },
  },
});
