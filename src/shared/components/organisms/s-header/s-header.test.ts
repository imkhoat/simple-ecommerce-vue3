import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import SHeader from "./s-header.vue";

test("Mount header component", async () => {
  expect(SHeader).toBeTruthy();

  const wrapper = mount(SHeader, {
    props: {
      round: true,
    },
  });

  expect(wrapper.classes("s-header")).toBe(true);
});
