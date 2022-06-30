/* eslint-disable prettier/prettier */
import store from "../index";

import { createLocalVue, shallowMount } from "@vue/test-utils";
import App from "../../App.vue";
import Vuex, { mapGetters } from "vuex";



describe("TestStore", () => {

  beforeEach(() => {
    store.commit("setTodos", []);
    store.state.idCounter = 0;
  });
  it('"counterIncrement" increments "state.idCounter" by 1', () => {
    expect(store.state.idCounter).toBe(0);
    store.commit("counterIncrement");
    expect(store.state.idCounter).toBe(1);
  });

  it("addTodo", async () => {
    store.dispatch("addTodo", { id: null, name: "test", completed: false });
    expect(store.state.todos).toEqual([
      { id: 0, name: "test", completed: false },
    ]);
  });

  it("deleteTodo", async () => {
    store.dispatch("addTodo", { id: null, name: "test", completed: false });
    store.dispatch("deleteTodo", 0);
    expect(store.state.todos.length).toBe(0);
  });

  it("changeTodo", async () => {
    store.dispatch("addTodo", { id: null, name: "test", completed: false });
    store.dispatch("changeTodo", { id: 0, name: "test2", completed: true });

    expect(store.state.todos[0]).toEqual({
      id: 0,
      name: "test2",
      completed: true,
    });
  });
});

