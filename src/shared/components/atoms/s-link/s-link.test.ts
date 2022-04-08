import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import SLink from "./s-link.vue";

test("Mount link component", async () => {
  expect(SLink).toBeTruthy();

  const wrapper = mount(SLink, {
    props: {
      round: true,
    },
  });

  expect(wrapper.classes("s-link")).toBe(true);
});
