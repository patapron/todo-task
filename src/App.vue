<template>
  <section class="todoapp">
    <TodoHeader :list="list" @createTaskEmit="createTaskFn"></TodoHeader>
    <TodoMain
      v-if="list.length > 0"
      :list="showArr"
      @deleteTaskEmit="deleteTaskFn"
    ></TodoMain>
    <TodoFooter
      v-if="list.length > 0"
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

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: [
        { id: 100, name: "having dinner", Completed: true },
        { id: 201, name: "sleep", Completed: false },
        { id: 103, name: "Beat beans", Completed: true },
      ],

      // list: JSON.parse(localStorage.getItem("todoList")) || [],

      getSel: "all",
    };
  },
  watch: {
    /**
     * task list serialize
     */
    list: {
      deep: true,
      handler() {
        localStorage.setItem("todoList", JSON.stringify(this.list));
      },
    },
  },
  methods: {
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
      let id =
        this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1;
      this.list.push({
        id: id,
        name: taskName,
        Completed: false,
      });
    },
    /**
     * delete all completed task
     */
    deleteCompletedTasksFn() {
      this.list = this.list.filter((obj) => obj.Completed == false);
    },
    /**
     * delete task by id function
     */
    deleteTaskFn(taskId) {
      let index = this.list.findIndex((obj) => obj.id === taskId);
      this.list.splice(index, 1);
    },
  },
  computed: {
    /**
     * filter task array by route
     */
    showArr() {
      if (this.getSel === "yes") {
        return this.list.filter((obj) => obj.Completed === true);
      } else if (this.getSel === "no") {
        return this.list.filter((obj) => obj.Completed === false);
      } else {
        console.log("lista completa");
        return this.list;
      }
    },
  },
};
</script>
