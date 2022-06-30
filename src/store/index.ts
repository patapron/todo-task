import { Task } from "@/typings/types";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    idCounter: 0,
    selected: "all",
  },
  getters: {
    getTasks: (state) => {
      let result: any = state.todos || [];
      if (state.todos.length) {
        if (state.selected !== "all") {
          let checkValue = state.selected == "completed" ? true : false;
          result = state.todos.filter(
            (element: any) => element.completed === checkValue
          );
        } else {
        }
      }
      return result;
    },
    getActive: (state) => {
      return state.todos.length > 0
        ? state.todos.filter((e: any) => !e.completed)
        : [];
    },
    getCompleted: (state) => {
      return state.todos.length > 0
        ? state.todos.filter((e: any) => e.completed)
        : [];
    },
    getAll: (state) => state.todos,
    getSelected: (state) => state.selected,
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    counterIncrement(state) {
      state.idCounter++;
    },
    setSelected(state, payload) {
      state.selected = payload;
    },
  },
  actions: {
    changeToCompleted: ({ commit, state }) => {
      let tempTodos: any = state.todos.map((element: any) => {
        element.completed = true;
        return element;
      });
      commit("setTodos", tempTodos);
    },
    getTodos: (state: any) => {
      const response: any = [
        { id: 100, name: "having dinner", completed: true },
        { id: 201, name: "sleep", completed: false },
        { id: 103, name: "Beat beans", completed: true },
      ];
      state.commit("setTodos", response);
    },
    addTodo({ commit, state }, todo) {
      let tempTodo: any = JSON.parse(JSON.stringify(state.todos));
      todo.id = state.idCounter;
      commit("counterIncrement");
      tempTodo.push(todo);
      commit("setTodos", tempTodo);
    },

    changeTodo({ commit, state }, todo) {
      let tempTodos: any = state.todos.map((element: any) => {
        if (element.id === todo.id) {
          element.name = todo.name;
          element.completed = todo.completed;
        }
        return element;
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

    changeSelected({ commit }, value) {
      commit("setSelected", value);
    },
  },
  modules: {},
});
