<template>
  <ul class="todo-list">
    <li
      :class="{ completed: obj.Completed }"
      v-for="(obj, index) in list"
      :key="obj.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="obj.Completed" />
        <label>{{ obj.name }}</label>
        <button class="destroy" @click="deleteTask(obj.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    /**
     * Delete task by id emit
     */
    deleteTask(taskId) {
      this.$emit("deleteTaskEmit", taskId);
    },
  },
};
</script>
