/* eslint-disable prettier/prettier */
import TodoFooter from "@/components/TodoFooter.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoFooter", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(TodoFooter, {
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
