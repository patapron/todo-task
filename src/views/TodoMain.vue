<template>
  <ul class="todo-list">
    <li
      :class="{ completed: obj.completed, editing: isEditing(obj) }"
      v-for="(obj, index) in list"
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
        @blur="cancelEdit()"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      editing: null,
      backupName: String,
    };
  },
  methods: {
    isEditing(task) {
      return this.editing !== null && task === this.editing;
    },
    cancelEdit() {
      console.log("cancel");
      if (this.editing) {
        this.editing.name = this.backupName;
      }
      this.backupName = '';
      this.editing = null;
    },
    updateName() {
      console.log("update");
      this.$emit("changeTaskEmit", this.editing);
      this.backupName = '';
      this.editing = null;
    },
    editTask(task) {
      console.log("edittask");
      this.backupName = task.name;
      this.editing = task;
    },
    /**
     * Delete task by id emit
     */
    deleteTask(taskId) {
      console.log("delete task");
      this.$emit("deleteTaskEmit", taskId);
    },
  },
};
</script>
