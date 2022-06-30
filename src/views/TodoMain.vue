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
  name: "TodoMain",
  props: {
    list: [],
  },
  data() {
    return {
      editing: any,
      backupName: '',
    };
  },
  methods: {
    /**
     * Check if this task arr editing
     */
    isEditing:function(task) {
      return this.editing !== null && task === this.editing;
    },
    /**
     * Reset editing task name
     */
    cancelEdit() {
      console.log("cancel");
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
      this.$emit("changeTaskEmit", this.editing);
      this.backupName = "";
      this.editing = null;
    },
    /**
     * Set edit object and old copy value
     */
    editTask(task) {
      this.backupName = task.name;
      this.editing = task;
    },
    /**
     * Delete task by id emit
     */
    deleteTask(taskId) {
      this.$emit("deleteTaskEmit", taskId);
    },
  },
};
</script>
