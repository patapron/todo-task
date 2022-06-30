<template>
  <ul class="todo-list">
    <li
      :class="{ completed: obj.completed, editing: isEditing(obj) }"
      v-for="obj in list"
      :key="obj.id"
    >
      <div class="view">
        <input
          :disable="editing"
          class="toggle"
          type="checkbox"
          v-model="obj.completed"
        />
        <label
          v-if="!editing || (editing && !isEditing(obj))"
          :disable="editing"
          @dblclick.stop="editTask(obj)"
          >{{ obj.name }}</label
        >
        <button class="destroy" @click="deleteTask(obj.id)"></button>
      </div>
      <input
        class="edit"
        type="text"
        v-model="obj.name"
        v-on:keyup.enter="updateName()"
        focused:from="isEditing(obj)"
        @blur="updateName()"
        @keydown.esc="cancelEdit()"
      />
    </li>
  </ul>
</template>
<script lang="ts">
import "./TodoMain.css";
import { Task } from "@/typings/types";
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    list: {
      type: [] as PropType<Task[] | Function>,
    },
  },
  data() {
    return {
      // editing: Task as {},
      editing: null as Task | null,
      backupName: "",
    };
  },
  methods: {
    /**
     * Check if this task arr editing
     */
    isEditing: function (task: any): any {
      return this.editing !== null && task === this.editing;
    },
    /**
     * Reset editing task name
     */
    cancelEdit() {
      if (this.editing) {
        this.editing.name = this.backupName;
      }
      this.backupName = "";
      this.editing = null;
    },
    /**
     * Update task name emiter
     */
    updateName() {
      if(!this.editing?.name){
        this.$emit("deleteTaskEmit", this.editing?.id);
      }else{
        this.$emit("changeTaskEmit", this.editing);
      }
      this.backupName = "";
      this.editing = null;
    },
    /**
     * Set edit object and old copy value
     */
    editTask(task: Task) {
      this.backupName = task.name;
      this.editing = task;
    },
    /**
     * Delete task by id emit
     */
    deleteTask(taskId: number) {
      this.$emit("deleteTaskEmit", taskId);
    },
  },
});
</script>
