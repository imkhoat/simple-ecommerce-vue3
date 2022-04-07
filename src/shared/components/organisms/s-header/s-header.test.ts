import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import SButton from "./s-button.vue";

test("Mount button component", async () => {
  expect(SButton).toBeTruthy();

  const wrapper = mount(SButton, {
    props: {
      round: true,
    },
  });

  expect(wrapper.classes("s-button")).toBe(true);
});
