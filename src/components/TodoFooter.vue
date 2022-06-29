<template>
  <footer class="footer">
    <span class="todo-count"
      ><strong>{{ count }}</strong
      ><span v-if="count == 1"> item left</span
      ><span v-else> items left</span></span
    >
    <ul class="filters">
      <li>
        <!-- <a href="all" :class="{ selected: selected == 'all' }">All</a>
         -->
        <a href="javascript:;"
          :class="{ selected: selected == 'all' }"
          @click="changeSelected('all')"
          >All</a
        >
      </li>
      <li>
        <!-- <a href="active" :class="{ selected: selected == 'no' }"
          >Active</a
        > -->
        <a href="javascript:;"
          :class="{ selected: selected == 'active' }"
          @click="changeSelected('active')"
          >Active</a
        >
      </li>
      <li>
        <!-- <a href="completed" :class="{ selected: selected == 'yes' }">Completed</a> -->
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

<!-- <li>
        <a
          :class="{ selected: selected === 'all' }"
          href="javascript:;"
          @click="selected = 'all'"
          >All</a
        >
      </li>
      <li>
        <a
          :class="{ selected: selected === 'no' }"
          href="javascript:;"
          @click="selected = 'no'"
          >Active</a
        >
      </li>
      <li>
        <a
          :class="{ selected: selected === 'yes' }"
          href="javascript:;"
          @click="selected = 'yes'"
          >Completed</a
        >
      </li> -->

<script>
export default {
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
