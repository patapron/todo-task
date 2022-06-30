/* eslint-disable prettier/prettier */
import TodoHeader from "@/components/TodoHeader.vue";
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
});
