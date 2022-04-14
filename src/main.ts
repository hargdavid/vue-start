import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import type { IDataElement } from "./types/IDataElement";

interface IState {
  count: number;
  data: IDataElement[];
  loading: boolean;
}

const store = createStore({
  state: (): IState => {
    return {
      count: 2,
      data: [],
      loading: true,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addUser(state: IState, user: IDataElement) {
      state.loading = true;
      state.data = [...state.data, user];
      setTimeout(() => {
        state.loading = false;
      }, 500);
    },
    removeUse(state: IState, user: IDataElement) {
      state.loading = true;
      state.data = state.data.filter((el) => el.id !== user.id);
      setTimeout(() => {
        state.loading = false;
      }, 500);
    },
  },
  actions: {
    async getData() {
      this.state.loading = true;
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);

        this.state.data = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.state.loading = false;
      }
    },
  },
});

const app = createApp(App, { store });

console.log(store.state);

app.use(router);
app.use(store);
app.mount("#app");
