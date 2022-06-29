<template>
  <footer class="footer">
    <span class="todo-count"
      ><strong>{{ count }}</strong><span v-if="count == 1"> item left</span><span v-else> items left</span></span
    >
    <ul class="filters" @click="fn">
      <li>
        <a
          :class="{ selected: isSel === 'all' }"
          href="javascript:;"
          @click="isSel = 'all'"
          >All</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'no' }"
          href="javascript:;"
          @click="isSel = 'no'"
          >Active</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'yes' }"
          href="javascript:;"
          @click="isSel = 'yes'"
          >Completed</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="deleteCompletedTasks">Clear completed</button>
  </footer>
</template>

<script>
export default {
  props: ["list"],
  computed: {
    count() {
      return this.list.length;
    },
  },
  data() {
    return {
      isSel: "all",
    };
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
    fn() {
      this.$emit("changeType", this.isSel);
    },
  },
};
</script>
