/* eslint-disable prettier/prettier */
import { createLocalVue, shallowMount } from "@vue/test-utils";
// import store from "@/store/index.js";
import App from "../../App.vue";
import Vuex, { mapGetters } from "vuex";

// import store from "@/store/index.js";
const localVue = createLocalVue();
localVue.use(Vuex);

describe("app", () => {
  let getters;
  let wrapper: any;
  //   const getSelected = jest.spyOn(wrapper.vm, "getSelected");
  //   const getCompleted = jest.spyOn(wrapper.vm, "getCompleted");
  //   const getAll = jest.spyOn(wrapper.vm, "getAll");
  //   const getTasks = jest.spyOn(wrapper.vm, "getTasks");

  beforeEach(() => {
    wrapper = shallowMount(App, {
      store: new Vuex.Store({
        actions: {
          getTodos: () =>
            jest.fn().mockImplementation(() => {
              return [];
            }),
        },
        getters: {
          getSelected: () =>
            jest.fn().mockImplementation(() => {
              return [];
            }),
          getCompleted: () =>
            jest.fn().mockImplementation(() => {
              return [];
            }),
          getAll: () => [],
          getTasks: () =>
            jest.fn().mockImplementation(() => {
              return [];
            }),
        },
      }),
      localVue,
    });
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
