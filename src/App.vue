<template>
  <section class="todoapp">
    <TodoHeader :list="getAll" @createTaskEmit="createTaskFn"></TodoHeader>
    <TodoMain
      v-if="getAll.length > 0"
      :list="showArr"
      @deleteTaskEmit="deleteTaskFn"
    ></TodoMain>
    <TodoFooter
      v-if="getAll.length > 0"
      :list="showArr"
      @changeType="typeFn"
      @deleteCompletedTasksEmit="deleteCompletedTasksFn"
    ></TodoFooter>
  </section>
</template>

<script>
import "./styles/index.css";

import TodoHeader from "@/components/TodoHeader";
import TodoMain from "@/components/TodoMain";
import TodoFooter from "@/components/TodoFooter";

import { mapActions, mapGetters } from "vuex";
// import store from '../store/store';
// import * as type from '../store/mutationTypes/types';

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  created() {
    console.log("created");
    this.getTodos();
  },
  data() {
    return {
      getSel: "all",
    };
  },
  methods: {
    ...mapActions(["getTodos", "addTodo", "deleteTodo","deleteCompleted"]),
    /**
     * change route function
     */
    typeFn(str) {
      this.getSel = str;
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
      console.log("deletecompleted")
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
    ...mapGetters(["getTask", "getAll"]),
    /**
     * filter task array by route
     */
    showArr() {
      let result = this.getTask(this.getSel);
      console.log("lista: ", result);
      return result;
    },
  },
};
</script>
