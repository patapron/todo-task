<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="New task, press Enter to save"
      autofocus
      @keydown.enter="createTask"
      v-model="task"
    />
  </header>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      task: "",
    };
  },
  methods: {
    /**
     * create new task emit and erro message
     */
    createTask() {
      if (this.task.trim().length > 0) {
        this.$emit("createTaskEmit", this.task);
        this.task = "";
      } else {
        alert("Name field cannot be empty");
      }
    },
  },
  computed: {
    /**
     * check box functions
     */
    isAll: {
      set(checked) {
        this.list.forEach((obj) => (obj.completed = checked));
      },
      get() {
        return (
          this.list.length !== 0 && this.list.every((obj) => obj.completed === true)
        );
      },
    },
  },
};
</script>
