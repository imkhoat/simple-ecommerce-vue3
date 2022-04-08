import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import STextbox from "./s-textbox.vue";

test("Mount textbox component", async () => {
  expect(STextbox).toBeTruthy();

  const wrapper = mount(STextbox, {
    props: {
      round: true,
    },
  });

  expect(wrapper.classes("s-textbox")).toBe(true);
});
