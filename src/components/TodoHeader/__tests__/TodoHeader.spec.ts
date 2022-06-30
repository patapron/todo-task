/* eslint-disable prettier/prettier */
import TodoHeader from "@/components/TodoHeader/TodoHeader.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoHeader", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(TodoHeader, {
      mocks: {
        $t: () => "Test text",
        $can: () => true,
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("createTask", () => {
    wrapper.vm.createTask();
    expect(wrapper.emitted("createTaskEmit")).toBeFalsy();
    wrapper.vm.taskName = "test";
    wrapper.vm.createTask();
    expect(wrapper.emitted("createTaskEmit")).toBeTruthy();
  });
});
