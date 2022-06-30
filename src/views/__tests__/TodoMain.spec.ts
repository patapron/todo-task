import TodoMain from "../TodoMain.vue";
import { shallowMount } from "@vue/test-utils";

describe("TodoMain", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(TodoMain, {
      propsData: {
        list: [],
      },
      mocks: {
        $t: () => "Test text",
        $can: () => true,
      },
    });
  });

  test("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
