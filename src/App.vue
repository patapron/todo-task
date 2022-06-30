<template>
  <section class="todoapp">
    <TodoHeader
      :list="getAll"
      @createTaskEmit="createTaskFn"
      @changeToCompletedEmit="changeToCompletedFn"
    ></TodoHeader>
    <router-view
      v-if="getAll.length > 0"
      :list="getTasks"
      @deleteTaskEmit="deleteTaskFn"
      @changeTaskEmit="changeTaskFn"
    />
    <TodoFooter
      v-if="getAll.length > 0"
      :list="getActive"
      :listCompleted="getCompleted"
      :selected="getSelected"
      @changeSelectedEmit="changeSelectedFn"
      @deleteCompletedTasksEmit="deleteCompletedTasksFn"
    ></TodoFooter>
  </section>
</template>

<script lang="ts">
import "./styles/index.css";
import router from "./router";

import TodoHeader from "@/components/TodoHeader/TodoHeader.vue";

import TodoFooter from "@/components/TodoFooter/TodoFooter.vue";

import { mapActions, mapGetters } from "vuex";

import { Task } from "@/typings/types";
import Vue, { PropType } from "vue";
import { RawLocation } from "vue-router";

export default Vue.extend({
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
      "changeToCompleted",
    ]),
    /**
     * change route function
     */
    changeSelectedFn(value: String) {
      this.changeSelected(value);
      router.push({
        path: value,
      } as RawLocation);
    },
    changeTaskFn(task: Task) {
      this.changeTodo(task);
    },
    /**
     * create new task function
     */
    createTaskFn(taskName: String) {
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
    deleteTaskFn(taskId: number) {
      this.deleteTodo(taskId);
    },

    changeToCompletedFn() {
      this.changeToCompleted();
    },
  },
  computed: {
    ...mapGetters(["getTasks", "getAll", "getSelected", "getActive","getCompleted"]),
  },
});
</script>
