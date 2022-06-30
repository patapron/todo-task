<template>
  <section class="todoapp">
    <TodoHeader :list="getAll" @createTaskEmit="createTaskFn"></TodoHeader>
    <router-view
      v-if="getAll.length > 0"
      :list="getTasks"
      :selected="getSelected"
      @deleteTaskEmit="deleteTaskFn"
    />
    <TodoFooter
      v-if="getAll.length > 0"
      :list="getTasks"
      @changeSelectedEmit="changeSelectedFn"
      @deleteCompletedTasksEmit="deleteCompletedTasksFn"
      @changeTaskEmit="changeTaskFn"
    ></TodoFooter>
  </section>
</template>

<script>
import "./styles/index.css";
import router from "./router";

import TodoHeader from "@/components/TodoHeader";

import TodoFooter from "@/components/TodoFooter";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TodoHeader,
    TodoFooter,
  },
  created() {
    this.getTodos();
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "getTodos",
      "addTodo",
      "deleteTodo",
      "deleteCompleted",
      "changeSelected",
      "changeTodo",
    ]),
    /**
     * change route function
     */
    changeSelectedFn(value) {
      this.changeSelected(value);
      router.push({
        path: value,
      });
    },
    changeTaskFn(task) {
      this.changeTodo(task);
    },
    /**
     * create new task function
     */
    createTaskFn(taskName) {
      let newTodo = { id: null, name: taskName, completed: false };
      this.addTodo(newTodo);
    },
    /**
     * delete all completed task
     */

    deleteCompletedTasksFn() {
      this.deleteCompleted();
    },
    /**
     * delete task by id function
     */
    deleteTaskFn(taskId) {
      this.deleteTodo(taskId);
    },
  },
  computed: {
    ...mapGetters(["getTasks", "getAll", "getSelected"]),
  },
};
</script>
