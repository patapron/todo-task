<template>
  <header class="header">
    <h1>todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      @click="changeToCompleted"
    />
    <label for="toggle-all"></label>
    <input
      :class="{ error: error }"
      class="new-todo"
      placeholder="New task, press Enter to save"
      autofocus
      @keydown.enter="createTask()"
      v-model="taskName"
      @keyup="checkEmpty"
    />
  </header>
</template>

<script lang="ts">
import "./TodoHeader.css";
import { Task } from "@/typings/types";
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    list: {
      type: Array,
      default: () => [] as Task[],
    },
  },
  data() {
    return {
      taskName: "",
      error: false,
    };
  },
  methods: {
    checkEmpty() {
      this.error = this.taskName.trim().length == 0;
    },

    /**
     * create new task emit and erro message
     */
    createTask() {
      if (this.taskName.trim().length > 0) {
        this.$emit("createTaskEmit", this.taskName);
        setTimeout(() => {
          this.taskName = "";
          this.error = false;
        }, 100);
      }
    },
    changeToCompleted() {
      this.$emit("changeToCompletedEmit", this.taskName);
    },
  },
});
</script>
