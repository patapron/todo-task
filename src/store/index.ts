import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    idCounter: 0,
  },
  getters: {
    getTask: (state) => (value?: any) => {
      let result: any = state.todos || [];
      if (state.todos.length) {
        if (value && value !== "all") {
          let checkValue = value === "yes" ? true : false;
          result = state.todos.filter(
            (element: any) => element.completed === checkValue
          );
        } else {
        }
      }
      return result;
    },

    getAll: (state) => state.todos,
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    counterIncrement(state) {
      state.idCounter++;
    },
  },
  actions: {
    getTodos: (state: any) => {
      const response: any = [
        { id: 100, name: "having dinner", completed: true },
        { id: 201, name: "sleep", completed: false },
        { id: 103, name: "Beat beans", completed: true },
      ];
      state.commit("setTodos", response);
    },
    addTodo({ commit, state }, todo) {
      let tempTodo: any = [...state.todos];
      todo.id = state.idCounter;
      commit("counterIncrement");
      tempTodo.push(todo);
      commit("setTodos", tempTodo);
    },

    changeTodo({ commit, state }, todo) {
      let tempTodos: any = [...state.todos];
      tempTodos.forEach((element: any) => {
        if (element.id === todo.id) {
          element.name = todo.name;
          element.completed = todo.completed;
          return;
        }
      });
      commit("setTodos", tempTodos);
    },

    deleteTodo({ commit, state }, todoId) {
      let tempTodos: any = state.todos.filter((element: any) => {
        return element.id !== todoId;
      });
      commit("setTodos", tempTodos);
    },

    deleteCompleted({ commit, state }) {
      let tempTodos = state.todos.filter((element: any) => !element.completed);
      commit("setTodos", tempTodos);
    },
  },
  modules: {},
});
