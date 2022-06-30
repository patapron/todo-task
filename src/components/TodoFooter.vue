<template>
  <footer class="footer">
    <span class="todo-count"
      ><strong>{{ count }}</strong
      ><span v-if="count == 1"> item left</span
      ><span v-else> items left</span></span
    >
    <ul class="filters">
      <li>
        <a href="javascript:;"
          :class="{ selected: selected == 'all' }"
          @click="changeSelected('all')"
          >All</a
        >
      </li>
      <li>
        <a href="javascript:;"
          :class="{ selected: selected == 'active' }"
          @click="changeSelected('active')"
          >Active</a
        >
      </li>
      <li>
        <a href="javascript:;"
          :class="{ selected: selected == 'completed' }"
          @click="changeSelected('completed')"
          >Completed</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="deleteCompletedTasks">
      Clear completed
    </button>
  </footer>
</template>

<script>
export default class TodoFooter extends Vue {
  props: ["list", "selected"],
  computed: {
    count() {
      return this.list ? this.list.length : 0;
    },
  },
  data() {
    return {};
  },
  methods: {
    /**
     * delete completed task emit
     */
    deleteCompletedTasks() {
      this.$emit("deleteCompletedTasksEmit");
    },
    /**
     * Chante route emit
     */
    changeSelected(value) {
      this.$emit("changeSelectedEmit", value);
    },
  },
};
</script>
